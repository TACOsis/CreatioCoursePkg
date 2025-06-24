namespace Terrasoft.Configuration
{
	using System;
	using Terrasoft.Core;
	using SystemSettings = Terrasoft.Core.Configuration.SysSettings;

	/// <summary>
	/// Class, that provides language support mailbox, that set in system setting.
	/// </summary>
	public class DefaultLanguageRule : BaseLanguageRule
	{
		#region Constants: Private

		private const string DefaultMessageLanguageCode = "DefaultMessageLanguage";

		#endregion


		#region Constructors: Public

		/// <summary>
		/// Creates instance of <see cref="DefaultLanguageRule"/>.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		public DefaultLanguageRule(UserConnection userConnection)
			:base(userConnection) {}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Obtains language identifier from support mailbox, that set in system setting.
		/// </summary>
		/// <inheritdoc />
		public override Guid GetLanguageId(Guid entityRecordId) {
			Guid defaultLanguageMessageId = SystemSettings.GetValue(UserConnection, DefaultMessageLanguageCode,
				default(Guid));
			return defaultLanguageMessageId;
		}

		#endregion

	}
}
