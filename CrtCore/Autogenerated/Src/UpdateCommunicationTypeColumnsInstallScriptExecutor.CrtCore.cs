namespace Terrasoft.Configuration {
    using System;
    using System.Collections.Generic;
    using System.Globalization;
    using Terrasoft.Common;
    using Terrasoft.Core;
    using Terrasoft.Core.Entities;

    public static class DisplayFormats {
        // Display format - email
        public const string Email = "email";

        // Display format - phone
        public const string Phone = "phone";

        // Display format - web
        public const string Web = "web";

        // Display format - google
        public const string Google = "google";

        // Display format - facebook
        public const string Facebook = "facebook";

        // Display format - linkedin
        public const string LinkedIn = "linkedin";

        // Display format - twitter
        public const string Twitter = "twitter";

        // Display format - skype
        public const string Skype = "skype";

        // Display format - text
        public const string Text = "text";
    }

    public static class CommunicationIcons {
        public static readonly Guid Google = new Guid("87CA5756-0ED6-D7DF-D88B-762169403120");
        public static readonly Guid Twitter = new Guid("ADED099D-6F5E-8FFD-4BCF-BA8C136DD241");
        public static readonly Guid Linkedin = new Guid("51AD776D-68A1-524F-6A41-4F3BEEA7A498");
        public static readonly Guid Facebook = new Guid("C1CC046D-7C6F-335E-7170-D262BE104D9C");
        public static readonly Guid Skype = new Guid("57EA3426-CA41-E0FE-748A-2D9A60A44FFA");
        public static readonly Guid Call = new Guid("AB8784CE-629E-3A48-E1CF-742108D07926");
        public static readonly Guid Mail = new Guid("4E285593-BE85-0610-C2E4-EADAA2ABC5FE");
        public static readonly Guid Web = new Guid("2856E949-D6A6-7EF3-86B6-3FE07229CD38");
        public static readonly Guid SocialNetwork = new Guid("F34675C4-E26A-0D4E-24F5-D8EF9F06218F");
    }

    public class UpdateCommunicationTypeColumnsInstallScriptExecutor : IInstallScriptExecutor {

        private static object GetDisplayFormatById(Guid id) {
            switch (id.ToString()) {
                case Terrasoft.Configuration.CommunicationTypeConsts.GoogleId:
                    return DisplayFormats.Google;
                case Terrasoft.Configuration.CommunicationTypeConsts.FacebookId:
                    return DisplayFormats.Facebook;
                case Terrasoft.Configuration.CommunicationTypeConsts.LinkedInId:
                    return DisplayFormats.LinkedIn;
                case Terrasoft.Configuration.CommunicationTypeConsts.TwitterId:
                    return DisplayFormats.Twitter;
                case Terrasoft.Configuration.CommunicationTypeConsts.WebId:
                    return DisplayFormats.Web;
                case Terrasoft.Configuration.CommunicationTypeConsts.SkypeId:
                    return DisplayFormats.Skype;
                case Terrasoft.Configuration.CommunicationTypeConsts.AdditionalPhoneId:
                case Terrasoft.Configuration.CommunicationTypeConsts.MainPhoneId:
                case Terrasoft.Configuration.CommunicationTypeConsts.FaxId:
                case Terrasoft.Configuration.CommunicationTypeConsts.HomePhoneId:
                case Terrasoft.Configuration.CommunicationTypeConsts.OtherPhoneId:
                case Terrasoft.Configuration.CommunicationTypeConsts.WorkPhoneId:
                case Terrasoft.Configuration.CommunicationTypeConsts.ExtensionId:
                case Terrasoft.Configuration.CommunicationTypeConsts.MobilePhoneId:
                    return DisplayFormats.Phone;
                case Terrasoft.Configuration.CommunicationTypeConsts.EmailId:
                    return DisplayFormats.Email;
                default:
                    return DisplayFormats.Text;
            }
        }

        private static object GetImageLinkById(Guid id) {
            switch (id.ToString()) {
                case Terrasoft.Configuration.CommunicationTypeConsts.CommunicationSocialNetworkId:
                    return CommunicationIcons.SocialNetwork;
                case Terrasoft.Configuration.CommunicationTypeConsts.CommunicationPhoneId:
                    return CommunicationIcons.Call;
                case Terrasoft.Configuration.CommunicationTypeConsts.FacebookId:
                    return CommunicationIcons.Facebook;
                case Terrasoft.Configuration.CommunicationTypeConsts.TwitterId:
                    return CommunicationIcons.Twitter;
                case Terrasoft.Configuration.CommunicationTypeConsts.LinkedInId:
                    return CommunicationIcons.Linkedin;
                case Terrasoft.Configuration.CommunicationTypeConsts.EmailId:
                    return CommunicationIcons.Mail;
                case Terrasoft.Configuration.CommunicationTypeConsts.GoogleId:
                    return CommunicationIcons.Google;
                case Terrasoft.Configuration.CommunicationTypeConsts.SkypeId:
                    return CommunicationIcons.Skype;
                case Terrasoft.Configuration.CommunicationTypeConsts.WebId:
                    return CommunicationIcons.Web;

                default:
                    return null;
            }
        }

        private void _updateCommunicationType(UserConnection userConnection) {
            EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
            Entity commTypeEntity = entitySchemaManager.GetEntityByName("CommunicationType", userConnection);
            var esq = new EntitySchemaQuery(commTypeEntity.Schema);
            EntitySchemaQueryColumn idColumn = esq.AddColumn("Id");
            EntityCollection commTypes = esq.GetEntityCollection(userConnection);
            foreach (Entity commType in commTypes) {
                var conditions = new Dictionary<string, object> {
                    { "Id", commType.GetTypedColumnValue<Guid>(idColumn.Name) }
                };
                commTypeEntity.FetchFromDB(conditions);
                var idValue = commTypeEntity.PrimaryColumnValue;
                commTypeEntity.SetColumnValue("DisplayFormat", GetDisplayFormatById(idValue));
                if (idValue.ToString() == Terrasoft.Configuration.CommunicationTypeConsts.MainPhoneId) {
                    var name = new LocalizableString();
                    var ruCulture = new CultureInfo("ru-RU");
                    var enCulture = new CultureInfo("en-US");
                    name.SetCultureValue(ruCulture, "Телефон");
                    name.SetCultureValue(enCulture, "Phone");
                    commTypeEntity.SetColumnValue("Name", name);
                }
                var imageId = GetImageLinkById(idValue);
                if (imageId != null) {
                    commTypeEntity.SetColumnValue("ImageLinkId", GetImageLinkById(idValue));
                }
                commTypeEntity.Save();
            }
        }

        private void _updateCommunication(UserConnection userConnection) {
            EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
            Entity entity = entitySchemaManager.GetEntityByName("Communication", userConnection);
            var esq = new EntitySchemaQuery(entity.Schema);
            EntitySchemaQueryColumn idColumn = esq.AddColumn("Id");
            EntityCollection collection = esq.GetEntityCollection(userConnection);
            foreach (Entity record in collection) {
                var conditions = new Dictionary<string, object> {
                    { "Id", record.GetTypedColumnValue<Guid>(idColumn.Name) }
                };
                entity.FetchFromDB(conditions);
                var idValue = entity.PrimaryColumnValue;
                var imageId = GetImageLinkById(idValue);
                if (imageId != null) {
                    entity.SetColumnValue("ImageLinkId", GetImageLinkById(idValue));
                }
				if (idValue.ToString() == Terrasoft.Configuration.CommunicationTypeConsts.CommunicationSocialNetworkId) {
                    var name = new LocalizableString();
					var enCulture = new CultureInfo("en-US");
                    var ruCulture = new CultureInfo("ru-RU");
                    name.SetCultureValue(ruCulture, "Социальные сети");
					name.SetCultureValue(enCulture, "Social network");
                    entity.SetColumnValue("Name", name);
                }
				entity.Save();
            }
        }
 
        public void Execute(UserConnection userConnection) {
            this._updateCommunicationType(userConnection);
            this._updateCommunication(userConnection);
        }
    }
}
