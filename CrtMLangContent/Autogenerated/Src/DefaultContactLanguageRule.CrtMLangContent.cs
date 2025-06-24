namespace Terrasoft.Configuration
{
	using System;
	using System.Linq;
	using Core;
	using Core.Entities;

	#region Class: DefaultContactLanguageRule

	/// <summary>
	/// Default language rule, that gets language from contact,
	/// related with schema, obtained from <see cref="BaseLanguageIterator"/>.
	/// </summary>
	public class DefaultContactLanguageRule : BaseLanguageRule
	{

		#region Fields: Private

		private readonly string _schemaName;

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Creates instance of <see cref="DefaultContactLanguageRule"/>.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="schemaName">Schema, contains contact.</param>
		public DefaultContactLanguageRule(UserConnection userConnection, string schemaName)
			: base(userConnection) {
			_schemaName = schemaName;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Obtains language identifier from contact, that set in case.
		/// </summary>
		/// <inheritdoc />
		public override Guid GetLanguageId(Guid entityRecordId) {
			EntitySchema entitySchema = UserConnection.EntitySchemaManager.FindInstanceByName(_schemaName);
			if (entitySchema != null) {
				if (entitySchema.Columns.Any(column => column.Name == "Contact")) {
					var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, _schemaName);
					var languageColumnName = esq.AddColumn("Contact.Language.Id").Name;
					Entity entity = esq.GetEntity(UserConnection, entityRecordId);
					Guid languageId = entity?.GetTypedColumnValue<Guid>(languageColumnName) ?? Guid.Empty;
					return languageId;
				}
			}
			return Guid.Empty;
		}

		#endregion

	}

	#endregion

}
