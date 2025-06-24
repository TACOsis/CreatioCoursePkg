namespace Terrasoft.Configuration
{
	using Terrasoft.Core;
	using Terrasoft.Core.Factories;
	using Terrasoft.Web.Common;

	#region Class: MLangContentFactory

	/// <summary>
	/// Represents a factory for selecting kit for multilanguage content.
	/// </summary>
	public class MLangContentFactory
	{
		#region Contsts: Private

		private const string DefaultIteratorTagName = "Default";

		#endregion

		#region Properties: Protected

		/// <summary>
		/// User connection.
		/// </summary>
		protected UserConnection UserConnection {
			get;
		}

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes new instance of <see cref="MLangContentFactory"/>
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		public MLangContentFactory(UserConnection userConnection) {
			UserConnection = userConnection;
		}

		#endregion

		#region Methods: Private

		private ILanguageIterator GetDefaultIterator(string schemaName) {
			var schemaNameArgument = new ConstructorArgument("schemaName", schemaName);
			ILanguageIterator defaultIterator =
				ClassFactory.Get<ILanguageIterator>(DefaultIteratorTagName, schemaNameArgument);
			return defaultIterator;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Initializes and returns kit by iterator name (<paramref name="iteratorTagName"/>)
		/// and storage name (<paramref name="storeTagName"/>).
		/// </summary>
		/// <param name="iteratorTagName">Tag for getting language iterator.</param>
		/// <param name="storeTagName">Tag for getting content store.</param>
		/// <returns>Kit for working with multilanguage content.</returns>
		/// <remarks>(<paramref name="iteratorTagName"/>) has to be named, like schema (Case, Contact, etc.)</remarks>
		public virtual IContentKit GetContentKit(string iteratorTagName, string storeTagName) {
			var userConnectionArgument = new ConstructorArgument("userConnection", UserConnection);
			ClassFactory.TryGet(iteratorTagName, out ILanguageIterator languageIterator,
				userConnectionArgument);
			languageIterator = languageIterator ?? GetDefaultIterator(iteratorTagName);
			IContentStore contentStore = ClassFactory.Get<IContentStore>(storeTagName,
				userConnectionArgument);
			IContentKit contentKit = ClassFactory.Get<IContentKit>(
				new ConstructorArgument("contentStore", contentStore),
				new ConstructorArgument("languageIterator", languageIterator));
			return contentKit;
		}

		#endregion

	}

	#endregion

}
