  namespace Terrasoft.Configuration
{
	using System;
	using System.Globalization;
	using System.Collections.Generic;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;

	#region Class: DcmChatStatusDto

	internal class DcmChatStatusDto {
		public Guid Id { get; set; }
		public Dictionary<string, string> LocalizedNames { get; set; }
	}
	
	#endregion
	
	#region Class: CreateDcmOmniChatStatusesInstallScriptExecutor

	public class CreateDcmOmniChatStatusesInstallScriptExecutor : IInstallScriptExecutor {

		#region Fields: Private
		
		private List<DcmChatStatusDto> _localizedDcmChatStatuses = new List<DcmChatStatusDto> {
			new DcmChatStatusDto {
				Id = new Guid("8e7cc4aa-261b-4f62-9c7b-7d7f1e68c86a"),
				LocalizedNames = new Dictionary<string, string> {
					{"en-US", "Completed by bot"},
					{"ru-RU", "Обработан ботом"}
				}
			},
			new DcmChatStatusDto {
				Id = new Guid("179601AE-58D9-425D-880B-FA4B3AACE644"),
				LocalizedNames = new Dictionary<string, string> {
					{"en-US", "Handed over to agent"},
					{"ru-RU", "Передано агенту"}
				}
			}
		};

		#endregion

		#region Methods: Private

		private void CreateIfNotExists(Entity chatStatusEntity, DcmChatStatusDto chatStatusDto) {
			var condition = new Dictionary<string, object> {
					{ "Id", chatStatusDto.Id }
				};
			if(chatStatusEntity.FetchFromDB(condition)){
				return;
			};
			chatStatusEntity.SetDefColumnValues();
			chatStatusEntity.SetColumnValue("Id", chatStatusDto.Id);
			var chatStatusName = new LocalizableString();
			var ruCulture = new CultureInfo("ru-RU");
			var enCulture = new CultureInfo("en-US");
			chatStatusName.SetCultureValue(ruCulture, chatStatusDto.LocalizedNames["ru-RU"]);
			chatStatusName.SetCultureValue(enCulture, chatStatusDto.LocalizedNames["en-US"]);
			chatStatusEntity.SetColumnValue("Name", chatStatusName);
			chatStatusEntity.Save();
		}

		#endregion
		
		#region Methods: Public
		
		public void Execute(UserConnection userConnection) {
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			foreach(var dcmChatStatus in _localizedDcmChatStatuses){
				Entity chatStatusEntity = entitySchemaManager.GetEntityByName("OmnichannelChatStatus", userConnection);
				CreateIfNotExists(chatStatusEntity, dcmChatStatus);
			}
		}

		#endregion
		
	}

	#endregion
	
}

