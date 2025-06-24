namespace Terrasoft.Configuration.NextSteps
{
	using System;
	using System.Collections.Generic;

	#region Interface: IProcessNextStepQueryExecutor

	/// <summary>
	/// Provides an API for getting a collection of next steps models and fill them with additional info.
	/// </summary>
	internal interface IProcessNextStepQueryExecutor
	{

		#region Methods: Public

		/// <summary>
		/// Gets collection of next steps models and fill them with additional info.
		/// </summary>
		/// <param name="entityName">Entity name.</param>
		/// <param name="entityId">Entity identifier.</param>
		/// <param name="elementsIds">Process elements identifiers for additional info filling.</param>
		/// <returns>Collection of next steps models.</returns>
		List<NextStepModel> GetNextSteps(string entityName, Guid entityId, List<string> elementsIds);

		#endregion

	}

	#endregion

}

