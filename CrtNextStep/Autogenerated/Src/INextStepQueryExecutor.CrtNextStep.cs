namespace Terrasoft.Configuration.NextSteps
{
	using System;
	using System.Collections.Generic;

	#region Interface: INextStepQueryExecutor

	/// <summary>
	/// Provides an API for getting a collection of next steps models.
	/// </summary>
	public interface INextStepQueryExecutor
	{

		#region Methods: Public

		/// <summary>
		/// Gets collection of next steps models.
		/// </summary>
		/// <param name="entityName">Entity name.</param>
		/// <param name="entityId">Entity identifier.</param>
		/// <returns>Collection of next steps models.</returns>
		List<NextStepModel> GetNextSteps(string entityName, Guid entityId);

		#endregion

	}

	#endregion

}

