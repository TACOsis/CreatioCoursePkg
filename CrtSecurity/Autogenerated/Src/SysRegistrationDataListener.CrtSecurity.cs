namespace Terrasoft.Configuration
{
	using System;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Entities.Events;
	using Terrasoft.Web.Common;
	using Terrasoft.Web.Http.Abstractions;
	using RegHelper = Terrasoft.Configuration.RegistrationHelper.RegistrationHelper;

	#region Class: SysRegistrationDataListener

	/// <summary>
	/// Listener for SysRegistrationData entity events.
	/// </summary>
	/// <seealso cref="Terrasoft.Core.Entities.Events.BaseEntityEventListener" />
	[EntityEventListener(SchemaName = "SysRegistrationData")]
	public class SysRegistrationDataListener : BaseEntityEventListener
	{

		#region Methods: Private

		private void SendRecoveryPasswordEmail(UserConnection userConnection,
				RecoveryPasswordInfo recoveryPasswordInfo, string userName) {
			string subject;
			string body;
			if (userConnection.GetIsFeatureEnabled("MultilanguageRegistrationEmail")) {
				Entity template = RegHelper.GetTemplateByUserCulture(userConnection,
					HttpContext.Current.Request.UserLanguages,
					RegHelper.GetRecoveryPasswordEmailTemplateId(userConnection));
				subject = template.GetTypedColumnValue<string>("Subject");
				body = template.GetTypedColumnValue<string>("Body")
					.Replace("#UserName#", userName)
					.Replace("#LinkExpiration#", GlobalAppSettings.LinkExpiryPeriod.ToString())
					.Replace("#RecoveryLinkUrl#", recoveryPasswordInfo.PasswordChangeUrl);
			}
			else {
				subject = new LocalizableString("Terrasoft.Core", "RecoveryPasswordMailSubject");
				body = string.Format(new LocalizableString("Terrasoft.Core", "RecoveryPasswordMailBody"),
					recoveryPasswordInfo.PasswordChangeUrl);
			}
			RegHelper.SendRecoveryPasswordLink(userConnection, recoveryPasswordInfo?.EmailAddress, subject, body);
		}

		private (string, string) GetEmailAndUserName(UserConnection userConnection, Guid sysAdminUnitId) {
			var entitySchema = userConnection.EntitySchemaManager.GetInstanceByName("SysAdminUnit");
			Entity entity = entitySchema.CreateEntity(userConnection);
			entity.UseAdminRights = false;
			var primaryColumnName = entitySchema.GetPrimaryColumnName();
			var primaryColumn = entitySchema.Columns.GetByName(primaryColumnName);
			EntitySchemaColumn[] columnsToFetch = {
				entitySchema.Columns.GetByName("Email"),
				entitySchema.Columns.GetByName("Name")
			};
			if (entity.FetchFromDB(primaryColumn, sysAdminUnitId, columnsToFetch)) {
				var email = entity.GetTypedColumnValue<string>("Email");
				var name = entity.GetTypedColumnValue<string>("Name");
				if (email.IsNullOrWhiteSpace() && name.IsEmailAddress()) {
					email = name;
				}
				return (email, name);
			}
			return (string.Empty, string.Empty);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Handles entity Inserted event.
		/// </summary>
		/// <param name="sender">Event sender.</param>
		/// <param name="e">The <see cref="T:Terrasoft.Core.Entities.EntityAfterEventArgs" /> instance containing the
		/// event data.</param>
		public override void OnInserted(object sender, EntityAfterEventArgs e) {
			base.OnInserted(sender, e);
			var entity = (Entity)sender;
			UserConnection userConnection = entity.UserConnection;
			int linkType = entity.GetTypedColumnValue<int>("LinkType");
			if (linkType != (int)LinkType.PasswordRecovery) {
				return;
			}
			Guid sysAdminUnitId = entity.GetTypedColumnValue<Guid>("SysAdminUnitId");
			(string email, string name) = GetEmailAndUserName(userConnection, sysAdminUnitId);
			Guid linkId = entity.GetTypedColumnValue<Guid>("LinkId");
			string returnPage = (string)userConnection.RequestData["ReturnPage"];
			string baseApplicationUrl = WebUtilities.GetParentApplicationUrl(HttpContext.Current.Request);
			string passwordChangeUrl = LoginUtilities.GetPasswordChangeUrl(baseApplicationUrl, linkId, returnPage, true);
			var recoveryPasswordInfo = new RecoveryPasswordInfo {
				EmailAddress = email,
				PasswordChangeUrl = passwordChangeUrl
			};
			SendRecoveryPasswordEmail(userConnection, recoveryPasswordInfo, name);
		}

		#endregion

	}

	#endregion

}

