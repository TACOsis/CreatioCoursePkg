namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Runtime.Serialization;
	using Terrasoft.Common;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Factories;

	#region Class: MLModelValidationResult

	/// <summary>
	/// Represents ML model validation results.
	/// </summary>
	[DataContract]
	public class MLModelValidationResult
	{

		#region Properties: Public

		/// <summary>
		/// Gets or sets a value indicating whether any ML model components has errors.
		/// </summary>
		/// <value>
		///   <c>true</c> if ML model has errors; otherwise, <c>false</c>.
		/// </value>
		public bool HasErrors { get; set; }

		#endregion

	}

	#endregion

	#region Interface: IMLModelValidator

	/// <summary>
	/// Validates ML model components readiness for training.
	/// </summary>
	public interface IMLModelValidator
	{

		#region Methods: Public

		/// <summary>
		/// Checks the SQL query.
		/// </summary>
		/// <param name="select">The select.</param>
		void CheckSqlQuery(Select select);

		/// <summary>
		/// Checks query columns.
		/// </summary>
		/// <param name="select">The select.</param>
		/// <param name="outputColumnName">The output column name.</param>
		/// <exception cref="ValidateException">Columns count is less than required.</exception>
		void CheckColumns(Select select, string outputColumnName = null);

		/// <summary>
		/// Checks that all model input columns are present in the result query.
		/// </summary>
		/// <param name="select">The select.</param>
		/// <param name="metadata">The metadata.</param>
		/// <exception cref="ValidateException">At least one input column is not present in the result query.
		/// </exception>
		void CheckInputColumns(Select select, ModelSchemaMetadata metadata);

		#endregion

	}

	#endregion

	#region Class: MLModelValidator

	/// <summary>
	/// Validates ML model components readiness for training.
	/// </summary>
	[DefaultBinding(typeof(IMLModelValidator))]
	public class MLModelValidator : IMLModelValidator
	{

		#region Methods: Public

		/// <summary>
		/// Validates the specified ML model components like data query, metadata, additional columns and filter data.
		/// </summary>
		/// <param name="selectQuery">The select query.</param>
		/// <param name="customMetadata">The custom metadata.</param>
		/// <param name="columnUids">The column uids.</param>
		/// <param name="serializedFilterData">The serialized filter data.</param>
		/// <returns></returns>
		/// <exception cref="NotImplementedException"></exception>
		public MLModelValidationResult Validate(string selectQuery, string customMetadata, IList<Guid> columnUids,
				string serializedFilterData) {
			throw new NotImplementedException();
		}

		/// <summary>
		/// Checks the SQL query.
		/// </summary>
		/// <param name="select">The select.</param>
		/// <exception cref="ValidateException">Select query can't be executed.</exception>
		public void CheckSqlQuery(Select select) {
			var experimentalSelect = (Select)select.Clone();
			experimentalSelect.Top(0);
			try {
				experimentalSelect.Execute();
			} catch (Exception ex) {
				string message = $"Sql error: {ex.Message}{Environment.NewLine}" +
					$"for query:{Environment.NewLine}{select.GetSqlText()}";
				throw new ValidateException(message);
			}
		}

		/// <summary>
		/// Checks query columns.
		/// </summary>
		/// <param name="select">The select.</param>
		/// <param name="outputColumnName">The output column name.</param>
		/// <exception cref="ValidateException">Columns count is less than required.</exception>
		/// <exception cref="ValidateException">Some of column aliases are not unique.</exception>
		public void CheckColumns(Select select, string outputColumnName = null) {
			if (select.Columns.Count(x => x.Alias != outputColumnName 
					|| outputColumnName.IsNullOrEmpty()) <= 1) {
				throw new ValidateException(
				$"There's not enough columns for model with query {select.GetSqlText()}{Environment.NewLine}" +
					"Should be at least one column except 'Id' and 'output column'");
			}
			IEnumerable<string> nonUniqueAliases = select.Columns
				.GroupBy(column => column.Alias.ToNullIfEmpty() ?? column.SourceColumnAlias)
				.Where(group => group.Count() > 1)
				.Select(group => group.Key);
			if (nonUniqueAliases.Any()) {
				throw new ValidateException($"Query has non-unique aliases: {string.Join(",", nonUniqueAliases)}");
			}
		}

		/// <summary>
		/// Checks that all model input columns are present in the result query.
		/// </summary>
		/// <param name="select">The select.</param>
		/// <param name="metadata">The metadata.</param>
		/// <exception cref="ValidateException">At least one input column is not present in the result query.
		/// </exception>
		public void CheckInputColumns(Select select, ModelSchemaMetadata metadata) {
			if (metadata.Inputs == null) {
				return;
			}
			List<string> absentInputNames = metadata.Inputs.Select(input => input.Name)
				.Except(select.Columns.Select(column => column.Alias.ToNullIfEmpty() ?? column.SourceColumnAlias))
				.ToList();
			if (absentInputNames.IsNullOrEmpty()) {
				return;
			}
			var messageTemplate =
				select.UserConnection.GetLocalizableString(GetType().Name, "InputsFromMetadataAbsentInDatasetMessage")
					.ToNullIfEmpty() ?? "Some inputs from metadata are absent in the result dataset: {0}";
			var message = string.Format(messageTemplate, string.Join(", ", absentInputNames));
			throw new ValidateException(message);
		}

		#endregion

	}

	#endregion

}

