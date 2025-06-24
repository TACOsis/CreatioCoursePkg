 namespace Terrasoft.Configuration
{
    using System;
    using System.Linq;
    using Terrasoft.Core;
    using Terrasoft.Core.DB;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Entities.Events;

    #region Class: OpportunityContactEventListener

    /// <summary>
    /// Handler for OpportunityContact entity events.
    /// </summary>
    /// <seealso cref="Terrasoft.Core.Entities.Events.BaseEntityEventListener" />
    [EntityEventListener(SchemaName = "OpportunityContact")]
    public class OpportunityContactEventListener : BaseEntityEventListener
    {

        #region Fields: Private

        private UserConnection _userConnection;

        #endregion

        #region Methods: Protected

        protected virtual void UpdateMainContactColumn(Entity entity) {
            bool isMainContact = entity.GetTypedColumnValue<bool>("IsMainContact");
            bool isMainContactColumnChanged = entity.GetChangedColumnValues().Any(col => col.Name == "IsMainContact");
            if (isMainContactColumnChanged && isMainContact) {
                Guid opportunityId = entity.GetTypedColumnValue<Guid>("OpportunityId");
                var update = new Update(_userConnection, entity.Schema.Name)
                        .Set("IsMainContact", Column.Parameter(false))
                    .Where("OpportunityId").IsEqual(Column.Parameter(opportunityId));
                update.Execute();
            }
        }

        #endregion

        #region Methods: Public

        /// <inheritdoc />
        public override void OnSaving(object sender, EntityBeforeEventArgs e) {
            base.OnSaving(sender, e);
            var entity = (Entity)sender;
            _userConnection = entity.UserConnection;
            UpdateMainContactColumn(entity);
        }

        #endregion

    } 

    #endregion

}
