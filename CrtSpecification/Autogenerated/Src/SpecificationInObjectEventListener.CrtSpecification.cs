 namespace Terrasoft.Configuration
{
	using System;
	using Creatio.FeatureToggling;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Entities.Events;

	#region Class: SpecificationInObjectEventListener

	[EntityEventListener(SchemaName = "SpecificationInLead")]
	[EntityEventListener(SchemaName = "SpecificationInProduct")]
	public class SpecificationInObjectEventListener : BaseEntityEventListener
	{

		const string StringType = "7aad419a-9e7a-4785-8d13-c7ff1402e13d";
		const string IntegerType = "2212241a-71eb-468b-a3d5-c0f39dfe51c9";
		const string DecimalType = "beb46531-4f29-452c-be18-1ed5f1aa8b80";
		const string DropDownListType = "ecf578a0-4b4d-40e6-909c-39af2a798d32";
		const string BooleanType = "359e0e35-bb39-4f07-9b9f-aec6ad076828";

		#region Fields: Protected

		/// <summary>
		/// <see cref="UserConnection"/> instance.
		/// </summary>
		protected UserConnection UserConnection { get; private set; }

		#endregion

		#region Methods: Private

		private LocalizableString GetLocalizableString(string lczName) {
			return new LocalizableString(UserConnection.Workspace.ResourceStorage,
				"SpecificationInObjectEventListener", $"LocalizableStrings.{lczName}.Value");
		}

		private void UpdateStringValueMethod(Entity entity) {
			// Convert specification value to StringValue
			if (Features.GetIsEnabled("SetSpecificationStringValueWithProcess")) {
				return;
			}
			UserConnection = entity.UserConnection;
			var specificationTypeId = string.Empty;
			var specificationValue = string.Empty;
			var specificationId = entity.GetTypedColumnValue<Guid>("SpecificationId");
			if (specificationId == Guid.Empty) {
				return;
			};

			var esqResult = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "Specification");
			esqResult.AddColumn("Type");
			var specEntity = esqResult.GetEntity(UserConnection, specificationId);
			specificationTypeId = specEntity.GetTypedColumnValue<string>("TypeId");

			// if not string value
			if (specificationTypeId != StringType) {
				entity.SetColumnValue("StringValue", string.Empty);
			};

			switch(specificationTypeId) {
				// string type
				case (StringType):
					entity.SetColumnValue("IntValue", 0);
					entity.SetColumnValue("FloatValue", 0.0);
					entity.SetColumnValue("BooleanValue", false);
					entity.SetColumnValue("ListItemValueId", null);
					return;
				// int type
				case (IntegerType):
					specificationValue = entity.GetTypedColumnValue<string>("IntValue");
					entity.SetColumnValue("FloatValue", 0.0);
					entity.SetColumnValue("BooleanValue", false);
					entity.SetColumnValue("ListItemValueId", null);
					break;
				// float type
				case (DecimalType):
					specificationValue = entity.GetTypedColumnValue<string>("FloatValue");
					entity.SetColumnValue("IntValue", 0);
					entity.SetColumnValue("BooleanValue", false);
					entity.SetColumnValue("ListItemValueId", null);
					break;
				// boolean type
				case (BooleanType):
					if (entity.GetTypedColumnValue<bool>("BooleanValue")) {
						var yesLcz = GetLocalizableString("Yes");
						specificationValue = yesLcz.ToString();
					} else {
						var noLcz = GetLocalizableString("No");
						specificationValue = noLcz.ToString();
					}
					entity.SetColumnValue("FloatValue", 0.0);
					entity.SetColumnValue("IntValue", 0);
					entity.SetColumnValue("ListItemValueId", null);
					break;
				// list item value
				case (DropDownListType):
					entity.SetColumnValue("IntValue", 0);
					entity.SetColumnValue("FloatValue", 0.0);
					entity.SetColumnValue("BooleanValue", false);
					var listItemValueId =  entity.GetTypedColumnValue<Guid>("ListItemValueId");
					if (listItemValueId != Guid.Empty ) {
						var listItemResult = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "SpecificationListItem");
						listItemResult.AddColumn("Name");
						var listItem = listItemResult.GetEntity(UserConnection, listItemValueId);
						specificationValue = listItem.GetTypedColumnValue<string>("Name");
					} 
					break;
				default: return;
			};
			entity.SetColumnValue("StringValue", specificationValue);
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc cref="BaseEntityEventListener.OnInserting"/>
		public override void OnInserting(object sender, EntityBeforeEventArgs e) {
			base.OnInserting(sender, e);
			UpdateStringValueMethod(sender as Entity);
		}

		/// <inheritdoc cref="BaseEntityEventListener.OnSaving"/>
		public override void OnSaving(object sender, EntityBeforeEventArgs e) {
			base.OnSaving(sender, e);
			UpdateStringValueMethod(sender as Entity);
		}

		/// <inheritdoc cref="BaseEntityEventListener.OnUpdating"/>
		public override void OnUpdating(object sender, EntityBeforeEventArgs e) {
			base.OnUpdating(sender, e);
			UpdateStringValueMethod(sender as Entity);
		}

		#endregion

	}

	#endregion

}

