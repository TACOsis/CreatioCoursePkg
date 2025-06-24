namespace Creatio.Copilot
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Creatio.FeatureToggling;
	using global::Common.Logging;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.Store;
	using ItemNotFoundException = Terrasoft.Configuration.ItemNotFoundException;
	
	[DefaultBinding(typeof(ICopilotSessionManager))]
	internal class CopilotSessionManager: ICopilotSessionManager
	{

		#region Constants: Private

		private const string KeyPrefix = "copilotSession_";

		#endregion

		#region Fields: Private
		
		private static readonly Dictionary<Guid, CopilotSession> _sessions = new Dictionary<Guid, CopilotSession>();
		private static readonly ILog _log = LogManager.GetLogger("Copilot");
		private static bool _isStaticSessionCollectionInitialized;
		private readonly UserConnection _userConnection;
		private readonly ICopilotHistoryStorage _copilotHistoryStorage;

		#endregion

		#region Constructors: Public

		public CopilotSessionManager(UserConnection userConnection, ICopilotHistoryStorage copilotHistoryStorage) {
			_userConnection = userConnection;
			_copilotHistoryStorage = copilotHistoryStorage;
		}

		#endregion

		#region Properties: Private

		private static bool IsClusterMode => 
			Features.GetIsEnabled<Terrasoft.Configuration.GenAI.GenAIFeatures.CopilotEngineClusterMode>();

		#endregion

		#region Methods: Private

		private static CopilotSession FindById(Guid copilotSessionId, IDataStore dataStore) {
			string key = KeyPrefix + copilotSessionId;
			if (dataStore[key] is CopilotSession copilotSession) {
				return copilotSession;
			}
			dataStore.Remove(key);
			return null;
		}

		private void UpdateInDataStore(CopilotSession session) {
			string key = KeyPrefix + session.Id;
			_userConnection.SessionData[key] = session;
			_userConnection.ApplicationData[key] = session;
		}

		private void RemoveInDataStore(Guid sessionId) {
			string key = KeyPrefix + sessionId;
			_userConnection.SessionData.Remove(key);
			_userConnection.ApplicationData.Remove(key);
		}

		private Dictionary<Guid, CopilotSession> GetSessions() {
			return IsClusterMode ? GetNonStaticCollection() : GetStaticCollection();
		}


		private Dictionary<Guid, CopilotSession> GetStaticCollection() {
			if (_isStaticSessionCollectionInitialized) {
				return _sessions;
			}
			Dictionary<Guid, CopilotSession> sessions = GetNonStaticCollection();
			_sessions.Clear();
			_sessions.AddRange(sessions);
			_isStaticSessionCollectionInitialized = true;
			return _sessions;
		}

		private Dictionary<Guid, CopilotSession> GetNonStaticCollection() {
			Dictionary<Guid, CopilotSession> sessions = LoadActiveSessionsFromDataStore(_userConnection.SessionData);
			sessions = sessions.IsNotNullOrEmpty()
				? sessions
				: LoadActiveSessionsFromDataStore(_userConnection.ApplicationData);
			return sessions;
		}

		private static Dictionary<Guid, CopilotSession> LoadActiveSessionsFromDataStore(IDataStore store) {
			var sessions = new Dictionary<Guid, CopilotSession>();
			IEnumerable<string> keys = store.Keys.Where(key => key.StartsWith(KeyPrefix));
			foreach (string key in keys) {
				var copilotSession = (CopilotSession)store[key];
				if (copilotSession == null || copilotSession.State == CopilotSessionState.Closed) {
					continue;
				}
				sessions[copilotSession.Id] = copilotSession;
			}
			return sessions;
		}

		private void Update(CopilotSession session) {
			if (session.State == CopilotSessionState.Closed) {
				RemoveInDataStore(session.Id);
			} else {
				UpdateInDataStore(session);
			}
			try {
				_copilotHistoryStorage.SaveSession(session);
			} catch (Exception e) {
				_log.Error($"Can't save session with id {session.Id}", e);
			}
		}

		#endregion

		#region Methods: Public

		public CopilotSession Add(CopilotSession copilotSession) {
			if (!IsClusterMode) {
				Dictionary<Guid, CopilotSession> sessions = GetStaticCollection();
				sessions[copilotSession.Id] = copilotSession;
			}
			UpdateInDataStore(copilotSession);
			return copilotSession;
		}

		public void Update(CopilotSession copilotSession, Guid? requestId) {
			if (requestId.HasValue) {
				copilotSession.Messages.Where(msg => msg.CopilotRequestId.IsNullOrEmpty()).ForEach(msg => {
					msg.CopilotRequestId = requestId;
				});
			}
			Update(copilotSession);
		}

		public CopilotSession FindById(Guid copilotSessionId) {
			CopilotSession copilotSession;
			if (!IsClusterMode) {
				Dictionary<Guid, CopilotSession> sessions = GetSessions();
				if (sessions.TryGetValue(copilotSessionId, out copilotSession)) {
					return copilotSession;
				}
			}
			copilotSession = FindById(copilotSessionId, _userConnection.SessionData) ??
				FindById(copilotSessionId, _userConnection.ApplicationData);
			return copilotSession;
		}

		public CopilotSession GetById(Guid copilotSessionId) {
			CopilotSession copilotSession = FindById(copilotSessionId);
			if (copilotSession == null) {
				throw new ItemNotFoundException(_userConnection, copilotSessionId.ToString(), nameof(CopilotSession));
			}
			return copilotSession;
		}

		public IEnumerable<CopilotSession> GetActiveSessions(Guid userId) {
			Dictionary<Guid, CopilotSession> sessions = GetSessions();
			return sessions.Values
				.Where(session => session != null && session.UserId == userId 
					&& session.State == CopilotSessionState.Active)
				.OrderByDescending(session => session.StartDate);
		}

		public void CloseSession(CopilotSession copilotSession, Guid? requestId) {
			copilotSession.State = CopilotSessionState.Closed;
			copilotSession.EndDate = DateTime.UtcNow;
			Update(copilotSession, requestId);
		}

		#endregion

	}

}

