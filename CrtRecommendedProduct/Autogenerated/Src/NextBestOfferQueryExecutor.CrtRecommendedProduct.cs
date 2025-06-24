namespace Terrasoft.Configuration.CrtRecommendedProduct
{
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;

	#region Class: NextBestOfferQueryExecutor

	[DefaultBinding(typeof(IEntityQueryExecutor), Name = "NextBestOfferQueryExecutor")]
	public class NextBestOfferQueryExecutor : IEntityQueryExecutor
	{

		#region Fields: Private

		private readonly UserConnection _userConnection;

		private INextBestOfferDataProvider DataProvider =>
			ClassFactory.Get<INextBestOfferDataProvider>(new ConstructorArgument("userConnection", _userConnection));

		#endregion

		#region Constructors: Public

		public NextBestOfferQueryExecutor(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Methods: Public

		public EntityCollection GetEntityCollection(EntitySchemaQuery esq) {
			return DataProvider.GetNextBestOfferCollection(esq);
		}

		#endregion

	}

	#endregion

}
