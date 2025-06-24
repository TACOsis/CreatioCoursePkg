namespace Terrasoft.Configuration.Utils
{
	using System;
	using System.Linq;
	using System.Collections.Generic;
	using System.Text.RegularExpressions;
	using System.Data.SqlClient;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Common;
	using Terrasoft.Core.DB;
	using Terrasoft.Web.Http.Abstractions;
	using global::Common.Logging;
	using Terrasoft.Core.Factories;

	#region Class: MacrosInfo

	/// <summary>
	/// Class for storage macro.
	/// </summary>
	public class MacrosInfo
	{

		#region Properties: Public

		/// <summary>
		/// Gets or sets identifier of the current instance.
		/// </summary>
		public Guid Id {
			get;
			set;
		}

		/// <summary>
		/// Gets or sets identifier of the parent macros of current instance.
		/// </summary>
		public Guid ParentId {
			get;
			set;
		}

		/// <summary>
		/// Gets or sets name of the current instance.
		/// </summary>
		public String Name {
			get;
			set;
		}

		/// <summary>
		/// Gets or sets code of the current instance.
		/// </summary>
		public String Code {
			get;
			set;
		}

		/// <summary>
		/// Gets or sets alias of the current instance.
		/// </summary>
		public String Alias {
			get;
			set;
		}

		/// <summary>
		/// Gets or sets text representation of the data path of the current instance.
		/// </summary>
		public String ColumnPath {
			get;
			set;
		}

		/// <summary>
		/// Gets or sets "IsGlobal" property of the current instance.
		/// </summary>
		public bool IsGlobal {
			get;
			set;
		}

		/// <summary>
		/// Gets or sets text representation of the macros.
		/// </summary>
		public string MacrosText {
			get;
			set;
		}

		/// <summary>
		/// Indicates whether to apply culture to the macros.
		/// </summary>
		public bool ApplyCulture { get; set; }

		/// <summary>
		/// Returns or sets the culture code.
		/// </summary>
		public string CultureCode { get; set; }

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Creates new instance of the <see cref "MacrosInfo"/>.
		/// </summary>
		public MacrosInfo() {
		}

		/// <summary>
		/// Creates new instance of the <see cref "MacrosInfo"/>.
		/// </summary>
		/// <param name="source">Instance of the <see cref "MacrosInfo"/>.</param>
		public MacrosInfo(MacrosInfo source) {
			Id = source.Id;
			ParentId = source.ParentId;
			Name = source.Name;
			Code = source.Code;
			Alias = source.Alias;
			ColumnPath = source.ColumnPath;
			IsGlobal = source.IsGlobal;
			MacrosText = source.MacrosText;
		}

		#endregion

	}

	#endregion

	#region Class: MacrosHelperV2

	/// <summary>
	/// Class implement processing macros.
	/// </summary>
	public class MacrosHelperV2
	{

		#region Constants: Private

		private const string MacrosHighlightsTemplate = "<span class=\"unhandled-macro\" style=\"background-color:#fff94f;\">[#{0}#]</span>";

		#endregion

		#region Constants: Protected

		/// <summary>
		/// Template for replace macroses.
		/// </summary>
		protected const string MacrosTemplate = "[#{0}#]";

		/// <summary>
		/// Template for replace macroses in tags.
		/// </summary>
		protected const string MacrosInTagTemplate = @"(?<=<[^>]+?)\[#{0}#\](?=[^<]+?>)";

		#endregion

		#region Fields: Private

		/// <summary>
		/// Email template macros identifier for "Current user".
		/// </summary>
		private readonly Guid _currentUserMacrosId = new Guid("3C5A2014-F46B-1410-2288-1C6F65E24DB2");
		private readonly Guid _ownerMacrosId = new Guid("1D151866-0C45-413E-B288-9654F44113AE");

		private readonly MacrosLoggerHelper _logger = new MacrosLoggerHelper("MacrosHelperV2");

		#endregion

		#region Properties: Protected

		private readonly string _macrosSecureTextRegExp = @"\[#([^\]]*)#\]";
		protected virtual string MacrosSecureTextRegExp {
			get {
				return _macrosSecureTextRegExp;
			}
		}

		private Dictionary<Guid, IMacrosWorker> _macrosWorkerCollection;
		protected Dictionary<Guid, IMacrosWorker> MacrosWorkerCollection {
			get {
				if (_macrosWorkerCollection == null) {
					_macrosWorkerCollection = new Dictionary<Guid, IMacrosWorker>();
					var workspaceTypeProvider = ClassFactory.Get<IWorkspaceTypeProvider>();
					IEnumerable<Type> types = workspaceTypeProvider.GetTypes();
					foreach (var type in types) {
						var attributes = type.GetCustomAttributes(typeof(MacrosWorkerAttribute), true);
						if (!attributes.Any()) {
							continue;
						}
						var macrosWorker = (IMacrosWorker)Activator.CreateInstance(type);
						macrosWorker.UserConnection = UserConnection;
						macrosWorker.TrySetPropertyValue("UseAdminRights", UseAdminRights);
						if (UserConnection.GetIsFeatureEnabled("UseMacrosAdditionalParameters")) {
							macrosWorker.TrySetPropertyValue("WorkerAdditionalProperties",
								PropertiesConverter.Convert(AdditionalProperties));
						}
						var rootMacrosId = ((MacrosWorkerAttribute)attributes[0]).RootMacrosId;
						_macrosWorkerCollection.Add(rootMacrosId, macrosWorker);
					}
				}
				return _macrosWorkerCollection;
			}
		}

		#endregion

		#region Properties: Public

		public bool UseAdminRights {
			get;
			set;
		} = true;

		/// <summary>
		/// Stores additional properties for <see cref="MacrosHelperV2"/>
		/// </summary>
		protected MacrosExtendedProperties AdditionalProperties {
			get;
			set;
		}

		[Obsolete("Property is deprecated, use instead UserConnection.")]
		public UserConnection userConnection {
			get {
				return UserConnection;
			}
			set {
				UserConnection = value;
			}
		}

		private UserConnection _userConnection;
		public UserConnection UserConnection {
			get {
				if (_userConnection == null) {
					_userConnection = HttpContext.Current.Session["UserConnection"] as UserConnection;
				}
				if (_userConnection == null) {
					throw new InvalidOperationException("UserConnection is not initialized");
				}
				return _userConnection;
			}
			set {
				_userConnection = value;
			}
		}

		/// <summary>
		/// Instances of <see cref="MacrosWorkerPropertiesConverter"/>
		/// </summary>
		private IMacrosWorkerPropertiesConverter<MacrosExtendedProperties, MacrosWorkerExtendedProperties> _propertiesConverter;
		public IMacrosWorkerPropertiesConverter<MacrosExtendedProperties, MacrosWorkerExtendedProperties> PropertiesConverter {
			get => _propertiesConverter ?? (_propertiesConverter = new MacrosWorkerPropertiesConverter(UserConnection));
			set => _propertiesConverter = value;
		}

		#endregion

		#region Methods: Private

		/// <summary>
		/// Returns the DOM markup to highlight value.
		/// </summary>
		/// <param name="value">Text that needs to be highlighted.</param>
		/// <returns>DOM markup.</returns>
		private string GetHighlights(string value) {
			string highlight = string.Format(MacrosHighlightsTemplate, value);
			return highlight;
		}

		private void UpdateColumnPathForOwnerMacroses(IEnumerable<MacrosInfo> macrosCollection, string entitySchemaName) {
			if (string.IsNullOrEmpty(entitySchemaName)) {
				entitySchemaName = "Contact";
			}
			EntitySchema entitySchema = UserConnection.EntitySchemaManager.FindInstanceByName(entitySchemaName);
			if (entitySchema != null && entitySchema.OwnerColumn != null) {
				foreach (MacrosInfo macros in macrosCollection.Where(x => x.ParentId == _ownerMacrosId)) {
					macros.ColumnPath = string.Format("{0}.{1}", entitySchema.OwnerColumn.Name, macros.ColumnPath);
				}
			}
		}

		/// <summary>
		/// Replace unhandled macroses.
		/// </summary>
		/// <param name="template">Template text.</param>
		/// <returns>Template text with replaced unhandled macroses.</returns>
		private string GetHighlightedTemplate(string templateText) {
			var macrosesInfo = GetMacrosCollection(templateText);
			templateText = ReplaceMacrosesInTags(templateText, macrosesInfo);
			return ReplaceMacros(templateText, macrosesInfo);
		}

		/// <summary>
		/// Delete macros from tags.
		/// </summary>
		/// <param name="template">Template text.</param>
		/// <param name="macrosInfo"><see cref="MacrosInfo"/> lis instances.</param>
		/// <returns>Template text without macroses in tags.</returns>
		private string ReplaceMacrosesInTags(string template, List<MacrosInfo> macrosInfo) {
			string result = template;
			foreach (MacrosInfo item in macrosInfo) {
				string macrosInTagPattern = string.Format(MacrosInTagTemplate, item.Alias);
				result = Regex.Replace(result, macrosInTagPattern, string.Empty);
			}
			return result;
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Highlights macroses in template text.
		/// </summary>
		/// <param name="template">Template text.</param>
		/// <param name="macrosInfo">Macroses list.</param>
		/// <returns>Template text with highlights.</returns>
		protected virtual string ReplaceMacros(string template, List<MacrosInfo> macrosInfo) {
			string result = template;
			foreach (MacrosInfo item in macrosInfo) {
				string macrosDisplayValue = string.Format(MacrosTemplate, item.Alias);
				string highlights = GetHighlights(item.Alias);
				result = result.Replace(macrosDisplayValue, highlights);
			}
			return result;
		}

		protected virtual List<string> GetMacrosCollectionFromSourceText(string sourceText) {
			var resultCollection = new List<string>();
			var matches = Regex.Matches(sourceText, MacrosSecureTextRegExp);
			foreach (Match match in matches) {
				var macrosItem = match.Groups[1].Value;
				resultCollection.Add(macrosItem);
			}
			return resultCollection;
		}

		/// <summary>
		/// Replaces macroses in template text by their values.
		/// </summary>
		/// <param name="template">Template text.</param>
		/// <param name="macrosValues">Macros values.</param>
		/// <returns>Template text contains macros values.</returns>
		protected virtual string ReplaceMacros(string template, Dictionary<string, string> macrosValues) {
			string result = template;
			foreach (KeyValuePair<string, string> item in macrosValues) {
				string value = GetMacrosValue(item);
				string macrosDisplayValue = string.Format(MacrosTemplate, item.Key);
				result = result.Replace(macrosDisplayValue, value);
			}
			return result;
		}

		/// <summary>
		/// Returns macros value based on its existence.
		/// </summary>
		/// <param name="macros"></param>
		/// <returns>Macros value.</returns>
		protected virtual string GetMacrosValue(KeyValuePair<string, string> macros) {
			return macros.Value == string.Empty ? string.Format(MacrosTemplate, macros.Key) : macros.Value;
		}

		/// <summary>
		/// Returns macros collection from db.
		/// </summary>
		/// <param name="useLocalization">The parameter that determines whether to use the localized data.</param>
		/// <returns></returns>
		protected List<MacrosInfo> GetMacrosCollectionFromDB(bool useLocalization = true) {
			var macrosSchema = UserConnection.EntitySchemaManager.GetInstanceByName("EmailTemplateMacros");
			var macrosESQ = new EntitySchemaQuery(macrosSchema);
			macrosESQ.AddColumn("Id");
			macrosESQ.AddColumn("Name");
			macrosESQ.AddColumn("Parent.Id");
			macrosESQ.AddColumn("ColumnPath");
			macrosESQ.AddColumn("Code");
			macrosESQ.UseLocalization = useLocalization;
			var list = macrosESQ.GetEntityCollection(UserConnection);
			var macrosInfoCollection = list.Select(CreateMacrosInfo).ToList<MacrosInfo>();
			initDbMacrosInfo(macrosInfoCollection);
			return macrosInfoCollection;
		}

		protected virtual void initDbMacrosInfo(List<MacrosInfo> macrosInfoCollection) {
			foreach (var macrosInfo in macrosInfoCollection) {
				macrosInfo.Alias = macrosInfo.ParentId.IsNotEmpty()
					? GetMacrosAlias(macrosInfo, macrosInfoCollection)
					: string.Empty;
			}
		}

		protected virtual string GetMacrosAlias(MacrosInfo macrosInfo, List<MacrosInfo> macrosCollection) {
			var parentMacros = macrosCollection.FirstOrDefault(n => n.Id == macrosInfo.ParentId);
			if (parentMacros != null) {
				var parentMacrosFullPath = GetMacrosAlias(parentMacros, macrosCollection);
				return String.Join(".", parentMacrosFullPath, macrosInfo.Name);
			} else {
				return macrosInfo.Name;
			}
		}

		protected virtual MacrosInfo CreateMacrosInfo(Entity entity) {
			MacrosInfo macrosInfo = new MacrosInfo();
			macrosInfo.Id = entity.GetTypedColumnValue<Guid>("Id1");
			macrosInfo.ParentId = entity.GetTypedColumnValue<Guid>("Parent_Id");
			macrosInfo.Name = entity.GetTypedColumnValue<string>("Name");
			macrosInfo.Code = entity.GetTypedColumnValue<string>("Code");
			macrosInfo.ColumnPath = entity.GetTypedColumnValue<string>("ColumnPath");
			return macrosInfo;
		}

		protected virtual MacrosInfo CreateMacrosInfo(String macros) {
			MacrosInfo macrosInfo = new MacrosInfo();
			macrosInfo.Name = macros;
			macrosInfo.Alias = macros;
			macrosInfo.Code = macros;
			macrosInfo.ColumnPath = macros;
			return macrosInfo;
		}

		protected List<MacrosInfo> GetMacrosCollectionFromText(string text) {
			var macroces = GetMacrosCollectionFromSourceText(text);
			return macroces.Select(CreateMacrosInfo).ToList<MacrosInfo>();
		}

		[Obsolete("7.13.3 | For improve the performance use " +
			"Guid GetMacrosRoot(MacrosInfo macrosInfo, IEnumerable<MacrosInfo> macrosCollection)")]
		protected Guid GetMacrosRoot(MacrosInfo macrosInfo, List<MacrosInfo> macrosCollection) {
			return GetMacrosRoot(macrosInfo, macrosCollection as IEnumerable<MacrosInfo>);
		}

		protected Guid GetMacrosRoot(MacrosInfo macrosInfo, IEnumerable<MacrosInfo> macrosCollection) {
			if (macrosInfo.Id.IsEmpty()) {
				return Guid.Empty;
			}
			var rootMacroses = MacrosWorkerCollection.Keys;
			if (rootMacroses.Contains(macrosInfo.Id)) {
				return macrosInfo.Id;
			}
			if (rootMacroses.Contains(macrosInfo.ParentId)) {
				return macrosInfo.ParentId;
			}
			MacrosInfo parentMacros = null;
			if (macrosInfo.ParentId.IsNotEmpty()) {
				parentMacros = macrosCollection.FirstOrDefault(x=>x.Id == macrosInfo.ParentId);
			}
			if (parentMacros == null) {
				return Guid.Empty;
			}
			return GetMacrosRoot(parentMacros, macrosCollection);
		}

		[Obsolete("7.13.3 | For improve the performance use " +
			"Dictionary<Guid, List<MacrosInfo>> GroupMacrosByWorkers(IEnumerable<MacrosInfo> macrosCollection)")]
		protected Dictionary<Guid, List<MacrosInfo>> GroupMacrosesByWorkers(List<MacrosInfo> macrosCollection) {
			return GroupMacrosByWorkers(macrosCollection as IEnumerable<MacrosInfo>);
		}

		protected Dictionary<Guid, List<MacrosInfo>> GroupMacrosByWorkers(IEnumerable<MacrosInfo> macrosCollection) {
			Dictionary<Guid, List<MacrosInfo>> result = new Dictionary<Guid, List<MacrosInfo>>();
			foreach (var macros in macrosCollection) {
				Guid rootMacrosId = GetMacrosRoot(macros, macrosCollection);
				if (result.ContainsKey(rootMacrosId)) {
					var workerCollection = result[rootMacrosId];
					workerCollection.Add(macros);
				} else {
					result.Add(rootMacrosId, new List<MacrosInfo>() { macros });
				}
			}
			return result;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns macros from text.
		/// </summary>
		/// <param name="text">Text.</param>
		/// <returns>Macros collection.</returns>
		public virtual List<MacrosInfo> GetMacrosCollection(string text) {
			var result = new List<MacrosInfo>();
			var dbMacrosCollection = GetMacrosCollectionFromDB();
			var dbNotLocalizedMacrosCollection = GetMacrosCollectionFromDB(false);
			dbMacrosCollection.AddRange(dbNotLocalizedMacrosCollection);
			var textMacrosCollection = GetMacrosCollectionFromText(text);
			textMacrosCollection = textMacrosCollection.GroupBy(x => x.Alias).Select(x => x.First()).ToList();
			foreach (var textMacro in textMacrosCollection) {
				var dbMacro = dbMacrosCollection.FirstOrDefault(m => m.Alias == textMacro.Alias);
				if (dbMacro != null) {
					result.Add(dbMacro);
					continue;
				}
				result.Add(textMacro);
			}
			_logger.Log("Found macroses:");
			foreach (var macrosInfo in result) {
				_logger.Log("Alias: {0} MacrosTest: {1}", macrosInfo.Alias, macrosInfo.MacrosText);
			}
			return result;
		}

		/// <summary>
		/// Returns macros with values.
		/// </summary>
		/// <param name="macrosCollection">Collection of macros.</param>
		/// <param name="arguments">Arguments.</param>
		/// <returns></returns>
		[Obsolete("7.13.3 | For improve the performance use " +
			"Dictionary<string, string> GetMacrosValues(IEnumerable<MacrosInfo> macrosCollection, " +
			"Dictionary<Guid, Object> arguments)")]
		public virtual Dictionary<string, string> GetMacrosValues(List<MacrosInfo> macrosCollection,
			Dictionary<Guid, Object> arguments) {
			return GetMacrosValues(macrosCollection as IEnumerable<MacrosInfo>, arguments);
		}

		/// <summary>
		/// Returns macros with values.
		/// </summary>
		/// <param name="macrosCollection">Collection of macros.</param>
		/// <param name="arguments">Arguments.</param>
		/// <returns></returns>
		public virtual Dictionary<string, string> GetMacrosValues(IEnumerable<MacrosInfo> macrosCollection,
				Dictionary<Guid, Object> arguments) {
			var groupedMacrosesByWorkers = GroupMacrosByWorkers(macrosCollection);
			Dictionary<string, string> result = new Dictionary<string, string>();
			foreach (var macroses in groupedMacrosesByWorkers) {
				IMacrosWorker worker = null;
				if (MacrosWorkerCollection.ContainsKey(macroses.Key)) {
					worker = MacrosWorkerCollection[macroses.Key];
				} else {
					worker = new BaseEntityMacrosWorker {
						UserConnection = UserConnection,
						UseAdminRights = UseAdminRights,
						WorkerAdditionalProperties = PropertiesConverter.Convert(AdditionalProperties)
					};
				}
				_logger.Log("Found MacrosWorker: {0}", worker.GetType().AssemblyQualifiedName);
				Dictionary<string, string> workerResult;
				if (arguments != null && arguments.ContainsKey(macroses.Key)) {
					workerResult = worker.Proceed(macroses.Value, arguments[macroses.Key]);
				} else {
					workerResult = worker.Proceed(macroses.Value);
				}
				if (workerResult != null) {
					result.AddRange<string, string>(workerResult);
					_logger.Log("Worker result:");
					foreach (KeyValuePair<string, string> record in workerResult) {
						_logger.Log("Macros text: {0} Macros result: {1}", record.Key, record.Value);
					}
				}
			}
			return result;
		}

		/// <summary>
		/// Returns objects macros with values.
		/// </summary>
		/// <param name="macrosCollection">Collection of macros.</param>
		/// <param name="arguments">Arguments.</param>
		/// <returns></returns>
		[Obsolete("7.13.3 | For improve the performance use Dictionary<object, Dictionary<string, string>> " +
			"GetMacrosValuesCollection(IEnumerable < MacrosInfo > macrosCollection, " +
			"Dictionary < Guid, Object > arguments)")]
		public virtual Dictionary<object, Dictionary<string, string>> GetMacrosValuesCollection(
			List<MacrosInfo> macrosCollection, Dictionary<Guid, Object> arguments) {
			return GetMacrosValuesCollection(macrosCollection as IEnumerable<MacrosInfo>, arguments);
		}

		/// <summary>
		/// Returns objects macros with values.
		/// </summary>
		/// <param name="macrosCollection">Collection of macros.</param>
		/// <param name="arguments">Arguments.</param>
		/// <returns></returns>
		public virtual Dictionary<object, Dictionary<string, string>> GetMacrosValuesCollection(
				IEnumerable<MacrosInfo> macrosCollection, Dictionary<Guid, Object> arguments) {
			var groupedMacrosesByWorkers = GroupMacrosByWorkers(macrosCollection);
			var result = new Dictionary<object, Dictionary<string, string>>();
			foreach (var macroses in groupedMacrosesByWorkers) {
				IMacrosWorker worker = null;
				if (MacrosWorkerCollection.ContainsKey(macroses.Key)) {
					worker = MacrosWorkerCollection[macroses.Key];
				} else {
					worker = new BaseEntityMacrosWorker {
						UserConnection = UserConnection,
						UseAdminRights = UseAdminRights,
						WorkerAdditionalProperties = PropertiesConverter.Convert(AdditionalProperties)
					};
				}
				Dictionary<object, Dictionary<string, string>> workerResults = null;
				if (arguments != null && arguments.ContainsKey(macroses.Key)) {
					var arg = arguments[macroses.Key];
					workerResults = worker.ProcceedCollection(macroses.Value, arg);
				} else {
					workerResults = worker.ProcceedCollection(macroses.Value);
				}
				if (workerResults != null) {
					foreach (var workerResult in workerResults) {
						var workerResultKey = workerResult.Key;
						if (result.ContainsKey(workerResultKey)) {
							var resultObject = result[workerResultKey];
							foreach (var macrosWithValue in workerResult.Value) {
								if (!resultObject.ContainsKey(macrosWithValue.Key)) {
									resultObject.Add(macrosWithValue.Key, macrosWithValue.Value);
								}
							}
						} else {
							result.Add(workerResult.Key, workerResult.Value);
						}
					}
				}
			}
			return result;
		}

		/// <summary>
		/// Returns arguments for macros values
		/// </summary>
		/// <param name="entityName">Entity name which used to get arguments.</param>
		/// <param name="recordId">Record which used to get arguments.</param>
		/// <param name="macrosInfos">Macros storage.</param>
		/// <returns>Arguments.</returns>
		public virtual Dictionary<Guid, object> GetMacrosArguments(string entityName, Guid recordId,
				List<MacrosInfo> macrosInfos) {
			Dictionary<Guid, object> arguments = macrosInfos.Select(x => x.ParentId)
				.Distinct()
				.Where(x => x != _currentUserMacrosId)
				.ToDictionary(x => x, x => (object)new KeyValuePair<string, Guid>(entityName, recordId));
			if (IsCurrentUserMacrosExists(macrosInfos)) {
				arguments.Add(_currentUserMacrosId, new KeyValuePair<string, Guid>("Contact", _userConnection.CurrentUser.ContactId));
			}
			return arguments;
		}

		/// <summary>
		/// Checks is CurrentUser macros exists.
		/// </summary>
		/// <param name="macrosInfo">Macros storage.</param>
		/// <returns>Result.</returns>
		public virtual bool IsCurrentUserMacrosExists(List<MacrosInfo> macrosInfos) {
			return macrosInfos.Any(macrosInfo => macrosInfo.Id != Guid.Empty
				&& macrosInfo.ParentId == _currentUserMacrosId);
		}

		/// <summary>
		/// Returns text of template where macroses replaced by their values.
		/// </summary>
		/// <param name="textTemplate">Text of template with macroses.</param>
		/// <param name="requestedEntityName">Entity name which used to get macros values.</param>
		/// <param name="requestedEntityId">Entity identifier which used to get macros values.</param>
		/// <returns>Text of template.</returns>
		public string GetPlainTextTemplate(string textTemplate, string requestedEntityName, Guid requestedEntityId) {
			var macrosInfo = GetMacrosCollection(textTemplate);
			UpdateColumnPathForOwnerMacroses(macrosInfo, requestedEntityName);
			var arguments = GetMacrosArguments(requestedEntityName, requestedEntityId, macrosInfo);
			var macrosValues = GetMacrosValues(macrosInfo as IEnumerable<MacrosInfo>, arguments);
			var plainTextTemplate = macrosValues.Count > 0 ? ReplaceMacros(textTemplate, macrosValues) : textTemplate;
			return plainTextTemplate;
		}

		/// <summary>
		/// Returns text of template where macroses replaced by their values.
		/// Macros highlighted if there are no matching value.
		/// </summary>
		/// <param name="textTemplate">Text of template with macroses.</param>
		/// <param name="requestedEntityName">Entity name which used to get macros values.</param>
		/// <param name="requestedEntityId">Entity identifier which used to get macros values.</param>
		/// <returns>Text of template.</returns>
		public string GetTextTemplate(string textTemplate, string requestedEntityName, Guid requestedEntityId) {
			var plainTextTemplate = GetPlainTextTemplate(textTemplate, requestedEntityName, requestedEntityId);
			return GetHighlightedTemplate(plainTextTemplate);
		}

		/// <summary>
		/// Returns macros collection that are found in source text.
		/// </summary>
		/// <param name="text">Source text.</param>
		/// <returns>Macros collection.</returns>
		public virtual IEnumerable<MacrosInfo> ExtractMacrosCollectionFromText(string text) {
			var allMacrosCollection = GetMacrosCollectionFromText(text);
			return allMacrosCollection
				.GroupBy(x => x.Alias)
				.Select(x => x.First());
		}

		#endregion

	}

	#endregion

	#region Class: MacrosLoggerHelper

	public class MacrosLoggerHelper
	{

		#region Fields Private

		private readonly ILog _logger;

		#endregion

		#region Constructors: Public

		public MacrosLoggerHelper(ILog logger) {
			_logger = logger;
		}

		public MacrosLoggerHelper(string className) {
			_logger = LogManager.GetLogger(className);
		}

		public MacrosLoggerHelper(Type loggerType) {
			_logger = LogManager.GetLogger(loggerType);
		}

		#endregion

		#region Properties: Public

		public ILog Logger {
			get {
				return _logger;
			}
		}

		#endregion

		#region Methods: Public

		public void Log(string message) {
			_logger.Info(message);
		}

		public void Log(string template, params object[] args) {
			Log(string.Format(template, args));
		}

		public void Log(MacrosInfo macrosInfo) {
			Log("Alias: {0} MacrosTest: {1}", macrosInfo.Alias, macrosInfo.MacrosText);
		}

		#endregion
	}

	#endregion

	#region Class: MacrosWorkerAttribute

	[AttributeUsage(AttributeTargets.Class, AllowMultiple = false)]
	public sealed class MacrosWorkerAttribute : Attribute
	{

		#region Constructors: Public

		public MacrosWorkerAttribute(string rootMacrosId) {
			_rootMacrosId = new Guid(rootMacrosId);
		}

		#endregion

		#region Properties: Public

		private readonly Guid _rootMacrosId;
		public Guid RootMacrosId {
			get {
				return _rootMacrosId;
			}
		}

		#endregion

	}

	#endregion

	#region Interface: IMacrosWorker

	public interface IMacrosWorker
	{
		UserConnection UserConnection {
			get;
			set;
		}

		Dictionary<string, string> Proceed(IEnumerable<MacrosInfo> macrosInfoCollection);

		Dictionary<string, string> Proceed(IEnumerable<MacrosInfo> macrosInfoCollection, Object arguments);

		Dictionary<object, Dictionary<string, string>> ProcceedCollection(IEnumerable<MacrosInfo> macrosInfoCollection);

		Dictionary<object, Dictionary<string, string>> ProcceedCollection(IEnumerable<MacrosInfo> macrosInfoCollection,
			Object arguments);
	}

	#endregion

	#region Class: BaseEntityMacrosWorker

	public class BaseEntityMacrosWorker : IMacrosWorker
	{

		#region Class: ProceedMacrosCollectionArguments

		/// <summary>
		/// Describes model for macros collection arguments to be proceeded by worker.
		/// </summary>
		protected class ProceedMacrosCollectionArguments
		{

			#region Properties: Public

			/// <summary>
			/// Name of column to join sub select.
			/// </summary>
			public string JoinColumnName { get; set; }

			/// <summary>
			/// Sub select query.
			/// </summary>
			public Select SubSelect { get; set; }

			#endregion

		}

		#endregion

		#region Constants: Public

		public const string BaseEntitySchemaName = "Contact";

		#endregion

		#region Fields: Private

		private readonly MacrosLoggerHelper _logger = new MacrosLoggerHelper("MacrosHelperV2");

		#endregion

		#region Properties: Protected

		protected MacrosLoggerHelper LogHelper {
			get => _logger;
		}

		protected virtual string EntitySchemaName { get; set; }

		#endregion

		#region Properties: Public

		/// <summary>
		/// User connection.
		/// </summary>
		public UserConnection UserConnection { get; set; }

		/// <summary>Determines whether to take into account rights to insert, update, delete and select data.
		/// </summary>
		/// <remarks>Default value is true.</remarks>
		public bool UseAdminRights { get; set; } = true;

		/// <summary>
		/// Stores additional properties for <see cref="MacrosWorkerExtendedProperties"/>
		/// </summary>
		public MacrosWorkerExtendedProperties WorkerAdditionalProperties { get; set; }

		/// <summary>
		/// Instance of <see cref="Utils.MacrosValueFormatter"/> for current MacrosWorker.>
		/// </summary>
		private MacrosValueFormatter _macrosValueFormatter;
		public virtual MacrosValueFormatter MacrosValueFormatter {
			get => _macrosValueFormatter ??
				(_macrosValueFormatter = new MacrosValueFormatter(UserConnection));
			set => _macrosValueFormatter = value;
		}

		#endregion

		#region Methods: Private

		private Dictionary<string, string> GetColumnsQueryDecoupling(IEnumerable<MacrosInfo> macrosInfoCollection,
				EntitySchemaQuery entitySchemaQuery) {
			entitySchemaQuery.PrimaryQueryColumn.IsAlwaysSelect = true;
			var columnsQueryDecoupling = new Dictionary<string, string>();
			var queryMacroses = macrosInfoCollection.Where(n => !string.IsNullOrEmpty(n.ColumnPath));
			foreach (var macrosInfo in queryMacroses) {
				var columnPath = macrosInfo.ColumnPath;
				if (columnsQueryDecoupling.ContainsKey(columnPath)) {
					continue;
				}
				var findColumnPath = entitySchemaQuery.RootSchema.FindSchemaColumnByPath(columnPath);
				if (findColumnPath != null) {
					var addedColumn = entitySchemaQuery.AddColumn(columnPath);
					string addedColumnName = addedColumn.Name;
					var alias = addedColumn.IsLookup
						? string.Concat(addedColumnName, findColumnPath.ReferenceSchema.GetPrimaryDisplayColumnName())
						: addedColumnName;
					columnsQueryDecoupling.Add(columnPath, alias);
				}
			}
			return columnsQueryDecoupling;
		}

		private bool IsNeedChangeMacrosCulture() {
			return WorkerAdditionalProperties != null && WorkerAdditionalProperties.SysCultureId != Guid.Empty &&
				UserConnection.GetIsFeatureEnabled("UseMacrosAdditionalParameters");
		}

		private bool TryReadProceedArguments(object arguments, out Guid entityId) {
			entityId = Guid.Empty;
			if (arguments is Guid) {
				entityId = (Guid)arguments;
			}
			if (entityId.IsEmpty() && arguments is string) {
				Guid.TryParse((string)arguments, out entityId);
			}
			if (arguments is KeyValuePair<string, Guid> entityPassedArguments) {
				EntitySchemaName = entityPassedArguments.Key;
				entityId = entityPassedArguments.Value;
			}
			if (entityId.IsEmpty()) {
				_logger.Log("EntityId is empty");
				return false;
			}
			if (string.IsNullOrWhiteSpace(EntitySchemaName)) {
				EntitySchemaName = BaseEntitySchemaName;
			}
			return true;
		}

		private ProceedMacrosCollectionArguments ReadProceedCollectionArguments(object arguments) {
			string JoinColumnName = "Id";
			Select select = null;
			var argumentValue = (Dictionary<string, object>)arguments;
			if (argumentValue.ContainsKey("SubSelect")) {
				select = (Select)argumentValue["SubSelect"];
			}
			if (argumentValue.ContainsKey("JoinColumnName")) {
				JoinColumnName = (string)argumentValue["JoinColumnName"];
			}
			if (argumentValue.ContainsKey("SchemaName")) {
				EntitySchemaName = (string)argumentValue["SchemaName"];
			}
			if (string.IsNullOrWhiteSpace(EntitySchemaName)) {
				EntitySchemaName = BaseEntitySchemaName;
			}
			return new ProceedMacrosCollectionArguments {
				JoinColumnName = JoinColumnName,
				SubSelect = select
			};
		}

		private EntitySchema TryGetEntitySchema() {
			EntitySchema schema = null;
			var exceptionMessage = string.Empty;
			try {
				schema = UserConnection.EntitySchemaManager.GetInstanceByName(EntitySchemaName);
			} catch (Exception ex) {
				exceptionMessage = ex.Message;
				_logger.Log("Item was not found. {0}", exceptionMessage);
			}
			return schema;
		}

		private EntityCollection TryGetEntityCollection(EntitySchemaQuery esq) {
			try {
				return esq.GetEntityCollection(UserConnection);
			} catch (SqlException e) {
				string sqlText = esq.GetSelectQuery(UserConnection).GetSqlText();
				_logger.Logger.ErrorFormat("{0}\nSqlText: {1}", e.Message, sqlText);
				throw e;
			}
		}

		private EntitySchemaQuery GetEntitySchemaQueryToProceed(EntitySchema schema,
				IEnumerable<MacrosInfo> macrosInfoCollection, out Dictionary<string, string> columnsQueryDecoupling) {
			var esq = new EntitySchemaQuery(schema) {
				UseAdminRights = UseAdminRights
			};
			if (IsNeedChangeMacrosCulture()) {
				esq.SetLocalizationCultureId(WorkerAdditionalProperties.SysCultureId);
			}
			columnsQueryDecoupling = GetColumnsQueryDecoupling(macrosInfoCollection, esq);
			return esq;
		}

		private EntitySchemaQuery GetEntitySchemaQueryToProceedCollection(EntitySchema schema,
				IEnumerable<MacrosInfo> macrosCollection, ProceedMacrosCollectionArguments macrosCollectionArguments,
				out Dictionary<string, string> columnsQueryDecoupling) {
			var esq = new EntitySchemaQuery(schema) {
				UseAdminRights = UseAdminRights
			};
			columnsQueryDecoupling = GetColumnsQueryDecoupling(macrosCollection, esq);
			ApplySubSelectAsCondition(esq, macrosCollectionArguments);
			return esq;
		}

		private void ApplySubSelectAsCondition(EntitySchemaQuery esq, ProceedMacrosCollectionArguments arguments) {
			Select esqSelect = esq.GetSelectQuery(UserConnection);
			if (esqSelect.HasCondition) {
				esqSelect.And(esqSelect.SourceExpression.Alias, arguments.JoinColumnName).In(arguments.SubSelect);
			} else {
				esqSelect.Where(esqSelect.SourceExpression.Alias, arguments.JoinColumnName).In(arguments.SubSelect);
			}
		}

		private Dictionary<string, EntityColumnValue> ReadEntityMacrosValues(Entity entity,
				IEnumerable<MacrosInfo> macrosInfoCollection, Dictionary<string, string> columnsQueryDecoupling) {
			var result = new Dictionary<string, EntityColumnValue>();
			var queryMacroses = macrosInfoCollection.Where(n => !string.IsNullOrWhiteSpace(n.ColumnPath));
			_logger.Log("Query macroses count - {0}", queryMacroses.Count());
			foreach (var macrosInfo in queryMacroses) {
				_logger.Log(macrosInfo);
				if (!CheckMacrosInfoParams(macrosInfo, columnsQueryDecoupling, ref result)) {
					continue;
				}
				var value = GetMacrosColumnValue(macrosInfo, entity, columnsQueryDecoupling[macrosInfo.ColumnPath]);
				result.Add(macrosInfo.Alias, value);
			}
			return result;
		}

		private bool CheckMacrosInfoParams(MacrosInfo macrosInfo, Dictionary<string, string> columnsQueryDecoupling,
				ref Dictionary<string, EntityColumnValue> result) {
			var columnPath = macrosInfo.ColumnPath;
			if (!columnsQueryDecoupling.ContainsKey(columnPath) || result.ContainsKey(macrosInfo.Alias)) {
				return false;
			}
			return true;
		}

		private EntityColumnValue GetMacrosColumnValue(MacrosInfo macrosInfo, Entity entity, string queryColumnName) {
			var columnValue = entity.FindEntityColumnValue(queryColumnName);
			_logger.Log("Macros {0} has value {1}", macrosInfo.Alias, columnValue.Value);
			return columnValue;
		}

		#endregion

		#region Protected

		/// <summary>
		/// Retrives object macros values from database.
		/// </summary>
		/// <param name="macrosInfoCollection">Collection of macros.</param>
		/// <param name="arguments">Arguments.</param>
		/// <returns>Collection of type <see cref="Dictionary{MacrosAlias, MacrosValue}"/>.</returns>
		protected Dictionary<string, EntityColumnValue> InternalProceed(IEnumerable<MacrosInfo> macrosInfoCollection,
				object arguments) {
			if (!TryReadProceedArguments(arguments, out Guid entityId)) {
				return null;
			}
			var schema = TryGetEntitySchema();
			if (schema == null) {
				_logger.Log($"Schema {EntitySchemaName} was not found.");
				return null;
			}
			var columnsQueryDecoupling = new Dictionary<string, string>();
			var esq = GetEntitySchemaQueryToProceed(schema, macrosInfoCollection, out columnsQueryDecoupling);
			var entity = esq.GetEntity(UserConnection, entityId);
			if (entity == null) {
				_logger.Log("Macros source entity is not found");
				return new Dictionary<string, EntityColumnValue>();
			}
			return ReadEntityMacrosValues(entity, macrosInfoCollection, columnsQueryDecoupling);
		}

		/// <summary>
		/// Retrives batch object macros values from database.
		/// </summary>
		/// <param name="macrosInfoCollection">Collection of macros.</param>
		/// <param name="arguments">Arguments.</param>
		/// <returns>Collection of type <see cref="Dictionary{EntityId, Dictionary{MacrosAlias, MacrosValue}}"/>.</returns>
		protected Dictionary<object, Dictionary<string, EntityColumnValue>> InternalProceedCollection(
				IEnumerable<MacrosInfo> macrosInfoCollection, object arguments) {
			var proceedArguments = ReadProceedCollectionArguments(arguments);
			var schema = TryGetEntitySchema();
			if (schema == null) {
				_logger.Log($"Schema {EntitySchemaName} was not found.");
				return null;
			}
			var columnsQueryDecoupling = new Dictionary<string, string>();
			var esq = GetEntitySchemaQueryToProceedCollection(schema, macrosInfoCollection, proceedArguments,
				out columnsQueryDecoupling);
			var result = new Dictionary<object, Dictionary<string, EntityColumnValue>>();
			EntityCollection entityCollection = TryGetEntityCollection(esq);
			if (entityCollection.Count() == 0) {
				_logger.Log("Entity collection is empty");
				return result;
			}
			_logger.Log("Query macroses count - {0}", macrosInfoCollection.Count());
			foreach (var entity in entityCollection) {
				_logger.Log("Macros entity - {0}", entity.SchemaName);
				var entityMacrosValues = ReadEntityMacrosValues(entity, macrosInfoCollection, columnsQueryDecoupling);
				result.Add(entity.GetTypedColumnValue<object>(schema.PrimaryColumn.Name), entityMacrosValues);
			}
			return result;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Empty implementation for method without proceed arguments.
		/// </summary>
		/// <param name="macrosInfoCollection">Collection of macros.</param>
		/// <returns>Collection of type <see cref="Dictionary{MacrosAlias, MacrosValue}"/>.</returns>
		public Dictionary<string, string> Proceed(IEnumerable<MacrosInfo> macrosInfoCollection) {
			return null;
		}

		/// <summary>
		/// Retrieves macros values from database.
		/// </summary>
		/// <param name="macrosInfoCollection">Collection of macros.</param>
		/// <param name="arguments">Arguments.</param>
		/// <returns>Collection of type <see cref="Dictionary{MacrosAlias, MacrosValue}"/>.</returns>
		public Dictionary<string, string> Proceed(IEnumerable<MacrosInfo> macrosInfoCollection, object arguments) {
			var result = InternalProceed(macrosInfoCollection, arguments);
			if (result == null) {
				return null;
			}
			var macrosInfo = macrosInfoCollection?.FirstOrDefault();
			var cultureCode = macrosInfo?.CultureCode ?? string.Empty;
			var applyCulture = macrosInfo?.ApplyCulture ?? false;
			return result?.ToDictionary(
				x => x.Key,
				y => applyCulture ? MacrosValueFormatter.GetFormattedStringValue(y.Value, cultureCode) 
					: MacrosValueFormatter.GetStringValue(y.Value));
		}

		/// <summary>
		/// Empty implementation for method without proceed arguments.
		/// </summary>
		/// <param name="macrosInfoCollection">Collection of macros.</param>
		/// <returns>Collection of type <see cref="Dictionary{EntityId, Dictionary{MacrosAlias, MacrosValue}}"/>.</returns>
		public Dictionary<object, Dictionary<string, string>> ProcceedCollection(
				IEnumerable<MacrosInfo> macrosInfoCollection) {
			return null;
		}

		/// <summary>
		/// Retrieves batch macros values from database.
		/// </summary>
		/// <param name="macrosInfoCollection">Collection of macros.</param>
		/// <param name="arguments">Arguments.</param>
		/// <returns>Collection of type <see cref="Dictionary{EntityId, Dictionary{MacrosAlias, MacrosValue}}"/>.</returns>
		public Dictionary<object, Dictionary<string, string>> ProcceedCollection(
				IEnumerable<MacrosInfo> macrosInfoCollection, object arguments) {
			var result = InternalProceedCollection(macrosInfoCollection, arguments);
			if (result == null) {
				return null;
			}
			var macrosInfo = macrosInfoCollection?.FirstOrDefault();
			var cultureCode = macrosInfo?.CultureCode ?? string.Empty;
			var applyCulture = macrosInfo?.ApplyCulture ?? false;
			return result?.ToDictionary(
				x => x.Key,
				y => y.Value.ToDictionary(
					m => m.Key,
					n => applyCulture ? MacrosValueFormatter.GetFormattedStringValue(n.Value, cultureCode) 
						: MacrosValueFormatter.GetStringValue(n.Value)));
		}

		#endregion

	}

	#endregion

	#region Class: RecipientNameMacrosWorker

	[MacrosWorker("{17666e83-fec1-4bcb-ae5c-a1a3f73fa4b3}")]
	public class RecipientNameMacrosWorker : IMacrosWorker
	{
		#region Constants: Private

		private const string FullNameAlias = "Contact.Full name";

		private const string FirstNameAlias = "Contact.First name";

		#endregion

		#region Properties: Public

		/// <summary>
		/// <see cref="UserConnection"/> instance.
		/// </summary>
		public UserConnection UserConnection { get; set; }

		/// <summary>
		/// Use entity rights flag.
		/// </summary>
		/// <remarks>Default value is true.</remarks>
		public bool UseAdminRights { get; set; } = false;

		/// <summary>
		/// Stores additional properties for <see cref="MacrosWorkerExtendedProperties"/>
		/// </summary>
		public MacrosWorkerExtendedProperties WorkerAdditionalProperties { get; set; }

		#endregion

		#region Methods: Private

		private object GetCurrentUserMacrosArgument() {
			return new KeyValuePair<string, Guid>("Contact", UserConnection.CurrentUser.ContactId);
		}

		private BaseEntityMacrosWorker GetWorker() {
			return new BaseEntityMacrosWorker {
				UserConnection = UserConnection,
				UseAdminRights = false,
				WorkerAdditionalProperties = WorkerAdditionalProperties
			};
		}
		private IEnumerable<MacrosInfo> GetMacrosInfos() {
			return new List<MacrosInfo> {
				new MacrosInfo {
					ColumnPath = "Name",
					Alias = FullNameAlias
				},
				new MacrosInfo {
					ColumnPath = "GivenName",
					Alias = FirstNameAlias
				}
			};
		}

		private string GetMacrosValue(Dictionary<string, string> rawValues) {
			if (rawValues.IsEmpty() || !rawValues.Any(kvp => kvp.Value.IsNotNullOrEmpty())) {
				return string.Empty;
			}
			return (rawValues.TryGetValue(FirstNameAlias, out var firstName) && firstName.IsNotNullOrEmpty())
				? firstName
				: rawValues[FullNameAlias];
		}


		#endregion

		#region Methods: Public

		/// <inheritdoc cref="IMacrosWorker.Proceed(IEnumerable{MacrosInfo})"/>
		public Dictionary<string, string> Proceed(IEnumerable<MacrosInfo> macrosInfoCollection) {
			return Proceed(macrosInfoCollection, GetCurrentUserMacrosArgument());
		}

		/// <inheritdoc cref="IMacrosWorker.Proceed(IEnumerable{MacrosInfo}, object)"/>
		public Dictionary<string, string> Proceed(IEnumerable<MacrosInfo> macrosInfoCollection, object arguments) {
			var macrosInfo = GetMacrosInfos();
			var worker = GetWorker();
			var result = worker.Proceed(macrosInfo, arguments);
			var value = GetMacrosValue(result);
			return macrosInfoCollection.ToDictionary(
				x => x.Alias,
				y => value);
		}

		/// <inheritdoc cref="IMacrosWorker.ProcceedCollection(IEnumerable{MacrosInfo})"/>
		public Dictionary<object, Dictionary<string, string>> ProcceedCollection(
				IEnumerable<MacrosInfo> macrosInfoCollection) {
			return null;
		}

		/// <inheritdoc cref="IMacrosWorker.ProcceedCollection(IEnumerable{MacrosInfo}, object)"/>
		public Dictionary<object, Dictionary<string, string>> ProcceedCollection(
				IEnumerable<MacrosInfo> macrosInfoCollection, object arguments) {
			return null;
		}

		#endregion
	}

	#endregion

	#region Class: RecipientEntityMacrosWorker

	[MacrosWorker("{EBB220F0-F36B-1410-3088-1C6F65E24DB2}")]
	public class RecipientEntityMacrosWorker : BaseEntityMacrosWorker
	{
	}

	#endregion

	#region Class: OwnerEntityMacrosWorker

	[MacrosWorker("{1D151866-0C45-413E-B288-9654F44113AE}")]
	public class OwnerEntityMacrosWorker : BaseEntityMacrosWorker
	{
	}

	#endregion

	#region Class: CurrentUserEntityMacrosWorker

	[MacrosWorker("{3C5A2014-F46B-1410-2288-1C6F65E24DB2}")]
	public class CurrentUserEntityMacrosWorker : BaseEntityMacrosWorker
	{


	}

	#endregion

	#region Class: AccountCommunicationEntityMacrosWorker

	[MacrosWorker("{BB521FC2-F36B-1410-2C88-1C6F65E24DB2}")]
	public class AccountCommunicationEntityMacrosWorker : BaseEntityMacrosWorker
	{
		protected override string EntitySchemaName {
			get {
				return "AccountCommunication";
			}
		}
	}

	#endregion

}

