 namespace Terrasoft.Configuration.CrtRecommendedProduct
{
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;

	#region Interface: INextBestOfferDataProvider

	public interface INextBestOfferDataProvider {
		EntityCollection GetNextBestOfferCollection(EntitySchemaQuery esq);
	}

	#endregion

	#region Class: NextBestOfferDataProvider

	[DefaultBinding(typeof(INextBestOfferDataProvider), Name="NextBestOfferDataProvider")]
	public partial class NextBestOfferDataProvider : INextBestOfferDataProvider
	{
		#region Fields: Private

		private readonly UserConnection _userConnection;

		private bool _hasScoreColumn = false;

		#endregion

		#region Constructors: Public

		public NextBestOfferDataProvider(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Methods: Private

		private static void MapColumnToSchema(EntitySchemaQueryColumn column) {
			switch (column.Path) {
				case "Name": column.Path = "Product.Name"; column.Name = "Name"; break;
				case "ProductPicture": column.Path = "Product.Picture"; column.Name = "ProductPicture"; break;
				case "ShortDescription": column.Path = "Product.ShortDescription"; column.Name = "ShortDescription"; break;
				case "Type": column.Path = "Product.Type"; column.Name = "Type"; break;
			}
		}

		private static void AddColumnToQuery(EntitySchemaQueryColumn column, EntitySchemaQuery esq) {
			MapColumnToSchema(column);
			EntitySchemaQueryColumn schemaColumn = esq.AddColumn(column.Path);
			schemaColumn.Name = column.Name;
			schemaColumn.Caption = column.Caption;
			schemaColumn.OrderDirection = column.OrderDirection;
			schemaColumn.OrderPosition = column.OrderPosition;
		}

		private EntitySchemaQuery GetRecommendedProductEsq(EntitySchemaQuery esq) {
			EntitySchemaQuery recommendedProductEsq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "RecommendedProduct") {
				UseAdminRights = true
			};
			GetEsqColumns(esq, recommendedProductEsq).ForEach(column => AddColumnToQuery(column, recommendedProductEsq));
			EntitySchemaQueryFilterCollection filters = esq.Filters.Clone(recommendedProductEsq);
			EntitySchemaQueryColumn primaryQueryColumn = recommendedProductEsq
				.Columns.Find(x => x.Path == recommendedProductEsq.PrimaryQueryColumn.Path);
			primaryQueryColumn.IsAlwaysSelect = true;
			filters.ForEach(recommendedProductEsq.Filters.Add);
			recommendedProductEsq.RowCount = esq.RowCount;
			return recommendedProductEsq;
		}

		private static IEnumerable<EntitySchemaQueryColumn> GetEsqColumns(EntitySchemaQuery esq, EntitySchemaQuery recommendedProductEsq) {
			return esq.Columns.Where(
				column => column != null &&
				column.Path != null && column.Name != esq.PrimaryQueryColumn?.Name
			);
		}

		private EntityCollection CreateEntityCollection(EntitySchemaQuery esq) {
			EntityCollection entityCollection = esq.GetEntityCollection(_userConnection);
			var collection = new EntityCollection(_userConnection, "NextBestOffer");
			entityCollection.ForEach(entity => {
				AddEntityToCollection(entity, collection);
			});
			return collection;
		}

		#endregion

		#region Methods: Protected

		protected virtual void AddEntityToCollection(Entity entity, EntityCollection collection) {
			if (_hasScoreColumn) {
				var score = entity.GetTypedColumnValue<double>("Score");
				entity.SetColumnValue("Score", score * 100);
			}
			collection.Add(entity);
		}

		#endregion

		#region Methods: Public

		public EntityCollection GetNextBestOfferCollection(EntitySchemaQuery esq) {
			EntitySchemaQuery recommendedProductEsq = GetRecommendedProductEsq(esq);
			_hasScoreColumn = esq.Columns.Any(x => x.Path == "Score");
			return CreateEntityCollection(recommendedProductEsq);
		}

		#endregion

	}

	#endregion
}
