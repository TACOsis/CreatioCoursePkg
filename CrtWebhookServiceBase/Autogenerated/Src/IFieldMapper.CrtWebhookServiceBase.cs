namespace Terrasoft.Configuration
{
	using System.Collections.Generic;

	#region Class: IFieldMapper

	/// <summary>
	/// Provides logic of mapping of webhook fields.
	/// </summary>
	public interface IFieldMapper
	{

		/// <summary>
		/// Maps the fields.
		/// </summary>
		/// <param name="webhookFields">The webhook fields.</param>
		/// <param name="mappedFields">The mapped fields.</param>
		void MapFields(IEnumerable<string> webhookFields, List<WebhookColumnMap> mappedFields);

	}

	#endregion

}

