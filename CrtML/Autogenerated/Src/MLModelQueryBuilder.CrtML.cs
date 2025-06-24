namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using global::Common.Logging;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Factories;
	using Terrasoft.Nui.ServiceModel.DataContract;
	using EntitySchema = Terrasoft.Core.Entities.EntitySchema;
	using EntitySchemaColumn = Terrasoft.Core.Entities.EntitySchemaColumn;

	#region Interface: IMLModelQueryBuilder

	/// <summary>
	/// Select builder for machine learning queries.
	/// </summary>
	public interface IMLModelQueryBuilder
	{

		#region Methods: Public

		/// <summary>
		/// Builds select for the given columns and filters using initial query C# expression.
		/// </summary>
		/// <param name="rootSchemaUId">Root entity schema of the query.</param>
		/// <param name="queryExpression">The query C# expression.</param>
		/// <param name="columnExpressions">Column paths.</param>
		/// <param name="filterData">Filter data.</param>
		/// <param name="variables">Additional variables for generating query.</param>
		/// <returns>Generated select.</returns>
		Select BuildSelect(Guid rootSchemaUId, string queryExpression, IEnumerable<MLColumnExpression> columnExpressions,
			byte[] filterData = null, Dictionary<string, object> variables = null);

		/// <summary>
		/// Gets the mapping between given column expressions and built by the given inputs <see cref="Select" />
		/// column aliases.
		/// </summary>
		/// <param name="rootSchemaUId">Root entity schema of the query.</param>
		/// <param name="queryExpression">The query C# expression.</param>
		/// <param name="columnExpressions">Column expressions.</param>
		/// <returns>
		/// Mapping dictionary, where key is <see cref="Select" /> column alias, value is given
		/// <see cref="ColumnExpression"/>.
		/// </returns>
		Dictionary<string, ColumnExpression> GetColumnExpressionMapping(Guid rootSchemaUId, 
			string queryExpression, IEnumerable<MLColumnExpression> columnExpressions);

		/// <summary>
		/// Adds the training output expression.
		/// </summary>
		/// <param name="query">The query.</param>
		/// <param name="trainingOutputFilterData">The training output filter data.</param>
		/// <param name="outputColumnAlias">The output column alias.</param>
		/// <returns>Modified select.</returns>
		Select AddTrainingOutputExpression(Select query, byte[] trainingOutputFilterData, string outputColumnAlias);

		#endregion

	}

	#endregion

	#region Class: MLModelQueryBuilder

	/// <summary>
	/// Implementation of select builder for machine learning queries.
	/// </summary>
	/// <seealso cref="Terrasoft.Configuration.ML.IMLModelQueryBuilder" />
	[DefaultBinding(typeof(IMLModelQueryBuilder))]
	public class MLModelQueryBuilder : IMLModelQueryBuilder
	{

		#region Const: Private

		private const string OutputAliasesPrefix = "o_";

		#endregion

		#region Fields: Private

		private readonly UserConnection _userConnection;
		private readonly ILog _log = LogManager.GetLogger("ML");

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="MLModelQueryBuilder"/> class.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		public MLModelQueryBuilder(UserConnection userConnection) => _userConnection = userConnection;

		#endregion

		#region Methods: Private

		private ISelectQueryBuilder ConstructSelectQueryBuilder(Guid rootSchemaUId, string queryExpression,
				IEnumerable<MLColumnExpression> columnExpressions, byte[] filterData,
				Dictionary<string, object> variables) {
			var select = CreateSelect(rootSchemaUId, queryExpression, variables);
			var queryBuilder = ClassFactory.Get<ISelectQueryBuilder>(new ConstructorArgument("select", select));
			queryBuilder
				.AddColumns(columnExpressions)
				.AddFilters(filterData);
			return queryBuilder;
		}

		private Select CreateInitialSelect(Guid entitySchemaUId) {
			var schema = _userConnection.EntitySchemaManager.GetInstanceByUId(entitySchemaUId);
			var alias = schema.Name[0].ToString();
			var select = new Select(_userConnection)
					.Column(alias, schema.GetPrimaryColumnName()).As("Id")
				.From(schema.Name).As(alias);
			return select;
		}

		private Select CreateSelect(Guid rootSchemaUId, string queryExpression, Dictionary<string, object> variables) {
			if (queryExpression.IsNullOrEmpty()) {
				return CreateInitialSelect(rootSchemaUId);
			}
			IQueryInterpreter queryInterpreter = ClassFactory.Get<IQueryInterpreter>();
			variables = variables ?? new Dictionary<string, object>();
			if (!variables.ContainsKey("userConnection")) {
				variables["userConnection"] = _userConnection;
			}
			Select select = queryInterpreter.InterpreteSelectQuery(queryExpression, variables);
			if (select.SourceExpression == null) {
				_log.Warn($"Expression {queryExpression} is incorrect. Generated the new one. Check SourceExpression");
				select = CreateInitialSelect(rootSchemaUId);
			}
			return select;
		}

		private void TransformColumnAliases(Dictionary<string, ColumnExpression> columnExpressionMapping,
				Select select) {
			if (columnExpressionMapping == null) {
				return;
			}
			foreach (var mapping in columnExpressionMapping) {
				var mlColumnExpression = mapping.Value as MLColumnExpression;
				if (mlColumnExpression == null || mlColumnExpression.Alias.IsNullOrEmpty()) {
					continue;
				}
				if (select.Columns.Any(col => col.Alias == mlColumnExpression.Alias)) {
					// Additional query already has column with the given alias. It has higher priority
					continue;
				}
				string replacingAlias = mapping.Key;
				QueryColumnExpression selectColumn = select.Columns.First(e => e.Alias == replacingAlias);
				selectColumn.Alias = mlColumnExpression.Alias;
			}
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Builds select for the given column paths and filters using initial query C# expression.
		/// </summary>
		/// <param name="rootSchemaUId">Root entity schema of the query.</param>
		/// <param name="queryExpression">The query C# expression.</param>
		/// <param name="columnExpressions">Column expressions.</param>
		/// <param name="filterData">Filter data.</param>
		/// <param name="variables">Additional variables for generating query.</param>
		/// <returns>Generated select.</returns>
		public Select BuildSelect(Guid rootSchemaUId, string queryExpression,
				IEnumerable<MLColumnExpression> columnExpressions, byte[] filterData = null,
				Dictionary<string, object> variables = null) {
			var queryBuilder = ConstructSelectQueryBuilder(rootSchemaUId, queryExpression, columnExpressions,
				filterData, variables);
			var select = queryBuilder.Build();
			var columnExpressionMapping = queryBuilder.GetColumnExpressionMapping();
			TransformColumnAliases(columnExpressionMapping, select);
			return select;
		}

		/// <summary>
		/// Gets the mapping between given column expressions and built by the given inputs <see cref="Select" />
		/// column aliases.
		/// </summary>
		/// <param name="rootSchemaUId">Root entity schema of the query.</param>
		/// <param name="queryExpression">The query C# expression.</param>
		/// <param name="columnExpressions">Column expressions.</param>
		/// <returns>
		/// Mapping dictionary, where key is <see cref="Select" /> column alias, value is given
		/// <see cref="ColumnExpression"/>.
		/// </returns>
		public Dictionary<string, ColumnExpression> GetColumnExpressionMapping(Guid rootSchemaUId,
				string queryExpression, IEnumerable<MLColumnExpression> columnExpressions) {
			var queryBuilder = ConstructSelectQueryBuilder(rootSchemaUId, queryExpression, columnExpressions, null,
				null);
			queryBuilder.Build();
			return queryBuilder.GetColumnExpressionMapping();
		}

		/// <summary>
		/// Adds the training output expression.
		/// </summary>
		/// <param name="select">The select query.</param>
		/// <param name="trainingOutputFilterData">The training output filter data.</param>
		/// <param name="outputColumnAlias">The output column alias.</param>
		/// <returns>Modified select.</returns>
		public Select AddTrainingOutputExpression(Select select, byte[] trainingOutputFilterData,
				string outputColumnAlias) {
			UserConnection userConnection = select.UserConnection;
			var subSelect = new Select(userConnection).Cols(true).From("SysOneRecord");
			var queryAssembler = ClassFactory.Get<ISelectQueryBuilder>(new ConstructorArgument("select", select));
			select.IsNull(subSelect, false).As(outputColumnAlias);
			queryAssembler.AddFilters(trainingOutputFilterData, subSelect, OutputAliasesPrefix).Build();
			return select;
		}

		#endregion

	}

	#endregion

}

