namespace Terrasoft.Configuration
{
	using System;
	
	#region Class: ICustomFieldMapper

	/// <summary>
	/// Provides logic of mapping custom webhook fields.
	/// </summary>
	public interface ICustomFieldMapper : IFieldMapper
	{
		/// <summary>
		/// Gets the webhook source.
		/// </summary>
		string WebhookSource { get; }

		/// <summary>
		/// Gets the entity name.
		/// </summary>
		string EntityName { get; }
	}
	
	#endregion

}

