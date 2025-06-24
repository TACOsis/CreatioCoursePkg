namespace Terrasoft.Configuration.SsoSettings
{
	using System;
	using System.Collections.Generic;
	using System.Data;
	using System.Linq;
	using System.Security.Cryptography.X509Certificates;
	using global::Common.Logging;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;

	#region Class: SsoOpenIdProviderQueryExecutor

	[DefaultBinding(typeof(IEntityQueryExecutor), Name = "SamlIdpCertificateViewQueryExecutor")]
	internal class SamlIdpCertificateViewQueryExecutor : IEntityQueryExecutor 
	{
		#region Fields: Private

		private readonly UserConnection _userConnection;

		private readonly ILog _log = LogManager.GetLogger("SamlIdpCertificates");

		#endregion

		#region Constructors: Public

		public SamlIdpCertificateViewQueryExecutor(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Methods: Private

		private Guid GetFilterValue(EntitySchemaQuery esq, string filterPath, FilterComparisonType comparisonType) {
			var esqfilter = esq.Filters.FirstOrDefault(f => {
				var filter = f as EntitySchemaQueryFilter;
				return filter != null && filter.ComparisonType == comparisonType &&
					filter.LeftExpression.Path == filterPath;
			}) as EntitySchemaQueryFilter;
			if (esqfilter != null) {
				var value = esqfilter.RightExpressions.First().ParameterValue;
				if (value is Guid) {
					return (Guid)value;
				}
				return Guid.Parse((string)value);
			}
			return Guid.Empty;
		}

		private Select TryAddIdFilter(EntitySchemaQuery esq, string filterPath, Select select, string columnPath,
				FilterComparisonType comparisonType = FilterComparisonType.Equal) {
			var filterValue = GetFilterValue(esq, filterPath, comparisonType);
			if (filterValue.IsEmpty()) {
				return select;
			}
			return comparisonType == FilterComparisonType.Equal
				? select.And(columnPath).IsEqual(Column.Parameter(filterValue)) as Select
				: select.And(columnPath).IsNotEqual(Column.Parameter(filterValue)) as Select;
		}

		private Dictionary<Guid, X509Certificate2> GetIdpCertificates(EntitySchemaQuery esq) {
			var result = new Dictionary<Guid, X509Certificate2>();
			Select select = new Select(_userConnection)
				.Column("Data")
				.Column("Id")
			.From("SamlIdpCertificate")
			.Where("Data").Not().IsNull() as Select;
			select = TryAddIdFilter(esq, "[SsoSamlProvider:Id:SsoSamlSettings].Id", select, "SsoSamlSettingsId");
			select = TryAddIdFilter(esq, "SsoSamlSettingsId", select, "SsoSamlSettingsId");
			select = TryAddIdFilter(esq, "Id", select, "Id");
			select = TryAddIdFilter(esq, "Id", select, "Id", FilterComparisonType.NotEqual);
			using (DBExecutor dbExecutor = _userConnection.EnsureDBConnection()) {
				using (IDataReader dataReader = select.ExecuteReader(dbExecutor)) {
					while (dataReader.Read()) {
						var certificateId = dataReader.GetColumnValue<Guid>("Id");
						using (var stream = dataReader.GetStreamValue("Data")) {
							result[certificateId]  = new X509Certificate2(stream.ReadToEnd());
						}
					}
				}
			}
			return result;
		}
		
		#endregion

		#region Methods: Public
		public EntityCollection GetEntityCollection(EntitySchemaQuery esq) {
			_userConnection.DBSecurityEngine.CheckCanExecuteOperation("CanManageSso");
			var resultCollection = new EntityCollection(_userConnection, "SamlIdpCertificateView");
			var _virtualEntitySchema = _userConnection.EntitySchemaManager.GetInstanceByName("SamlIdpCertificateView");
			var certificates = GetIdpCertificates(esq);
			foreach (var idpCert in certificates) {
				try {
					Entity entity = _virtualEntitySchema.CreateEntity(_userConnection);
					entity.SetDefColumnValues();
					entity.SetColumnValue("Id", idpCert.Key);
					entity.SetColumnValue("Name", idpCert.Value.Subject);
					entity.SetColumnValue("Thumbprint", idpCert.Value.Thumbprint);
					entity.SetColumnValue("NotAfter", idpCert.Value.NotAfter);
					entity.SetColumnValue("NotBefore", idpCert.Value.NotBefore);
					entity.StoringState = StoringObjectState.NotChanged;
					resultCollection.Add(entity);
				} catch (Exception e){
					_log?.Error($"Error reading idp certificate {idpCert.Key}", e);
				}
			}
			return resultCollection;
		}

		#endregion

	}

	#endregion

}


