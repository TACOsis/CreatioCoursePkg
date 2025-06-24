namespace Terrasoft.Configuration
{
	using Terrasoft.Core.Factories;


	#region Interface: ITagUtils

	/// <summary>
	/// Provides utility methods for work with tag.
	/// </summary>
	public interface ITagUtils
	{
		/// <summary>
		/// Check is it old structure.
		/// </summary>
		/// <param name="schemaName">The name of schema.</param>
		/// <returns><c>True</c> when schema name is old tag structure, otherwise <c>false</c>.</returns>
		bool IsOldStructure(string schemaName);

	}

	#endregion

	#region Class: TagUtils

	/// <summary>
	/// Implementation of <see cref="ITagUtils"/>.
	/// </summary>
	[DefaultBinding(typeof(ITagUtils), Name = nameof(TagUtils))]
	public class TagUtils : ITagUtils
	{
		#region Constants: Private

		private const string DEFAULT_TAG_SCHEMA_NAME = "Tag";
		private const string DEFAULT_TAG_IN_RECORD_SCHEMA_NAME = "TagInRecord";

		#endregion

		#region Methods: Public

		/// <inheritdoc />
		public bool IsOldStructure(string schemaName) {
			return !(schemaName.Equals(DEFAULT_TAG_SCHEMA_NAME) || schemaName.Equals(DEFAULT_TAG_IN_RECORD_SCHEMA_NAME));
		}

		#endregion
	}

	#endregion
}
