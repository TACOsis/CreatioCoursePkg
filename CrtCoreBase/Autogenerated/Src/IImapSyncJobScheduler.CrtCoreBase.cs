namespace Terrasoft.Mail
{
	using System.Collections.Generic;
	using Terrasoft.Core;

	#region Interface: IImapSyncJobScheduler

	/// <summary>
	/// Provides methods for IMAP synchronization job interaction.
	/// </summary>
	public interface IImapSyncJobScheduler
	{

		#region Methods: Public

		/// <summary>
		/// Checking IMAP synchronization job existing.
		/// </summary>
		/// <param name="userConnection"><see cref="UserConnection"/> instance.</param>
		/// <param name="parameters">Parameters for IMAP synchronization job.</param>
		/// <returns>True, if IMAP synchronization job exist, oterwise false.</returns>
		bool DoesSyncJobExist(UserConnection userConnection, IDictionary<string, object> parameters = null);

		/// <summary>
		/// Remove IMAP synchronization job.
		/// </summary>
		/// <param name="userConnection"><see cref="UserConnection"/> instance.</param>
		/// <param name="parameters">Parameters for IMAP synchronization job.</param>
		void RemoveSyncJob(UserConnection userConnection, IDictionary<string, object> parameters = null);

		/// <summary>
		/// Craete IMAP synchronization job.
		/// </summary>
		/// <param name="userConnection"><see cref="UserConnection"/> instance.</param>
		/// <param name="periodInMinutes">IMAP synchronization job period executing.</param>
		/// <param name="parameters">Parameters for IMAP synchronization job.</param>
		void CreateSyncJob(UserConnection userConnection, int periodInMinutes,
			IDictionary<string, object> parameters = null);

		#endregion

	}

	#endregion

}
