namespace Terrasoft.Configuration 
{
	using System.Collections.Generic;
	using Terrasoft.Core.Entities;

	#region Interface: IRemindingTextFormer

	/// <summary>
	/// Provides interface for reminding text formers.
	/// </summary>
	public interface IRemindingTextFormer
	{
		/// <summary>
		/// Get reminding body text. 
		/// </summary>
		/// <param name="formParameters">Dictionary with forming parameters.</param>
		string GetBody(IDictionary<string, object> formParameters);
		
		/// <summary>
		/// Get reminding title text. 
		/// </summary>
		/// <param name="formParameters">Dictionary with forming parameters.</param>
		string GetTitle(IDictionary<string, object> formParameters);
	}

	#endregion
}
