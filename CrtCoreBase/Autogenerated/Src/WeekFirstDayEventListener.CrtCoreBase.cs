namespace Terrasoft.Configuration
{
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Entities.Events;

	#region Class: WeekFirstDayEventListener

	[EntityEventListener(SchemaName = "WeekFirstDay")]
	public class WeekFirstDayEventListener : BaseEntityEventListener
	{

		#region Methods: Private

		private static bool IsColumnChanged(Entity entity, string columnName) =>
			entity.GetChangedColumnValues().Any(x => x.Name == columnName);

		private static void ThrowExceptionWithMessage(string messageCode, UserConnection userConnection) {
			IResourceStorage resourceStorage = userConnection.ResourceStorage;
			var message = new LocalizableString(resourceStorage, "WeekFirstDayEventListener", 
				$"LocalizableStrings.{messageCode}.Value");
			throw new ValidateException(message);
		}

		private static void ValidateCodeChanged(Entity entity) {
			bool isCodeColumnChanged = IsColumnChanged(entity, "Code");
			if (!isCodeColumnChanged) {
				return;
			}
			UserConnection userConnection = entity.UserConnection;
			ThrowExceptionWithMessage("ChangeErrorMessage", userConnection);
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc />
		public override void OnDeleting(object sender, EntityBeforeEventArgs e) {
			UserConnection userConnection = ((Entity)sender).UserConnection;
			ThrowExceptionWithMessage("DeleteErrorMessage", userConnection);
		}

		/// <inheritdoc />
		public override void OnInserting(object sender, EntityBeforeEventArgs e) {
			UserConnection userConnection = ((Entity)sender).UserConnection;
			ThrowExceptionWithMessage("InsertErrorMessage", userConnection);
		}

		/// <inheritdoc />
		public override void OnUpdating(object sender, EntityBeforeEventArgs e) {
			ValidateCodeChanged((Entity)sender);
			base.OnUpdating(sender, e);
		}

		#endregion

	}

	#endregion

}

