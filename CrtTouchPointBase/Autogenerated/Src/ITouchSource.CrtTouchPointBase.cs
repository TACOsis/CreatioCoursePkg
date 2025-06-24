namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Collections.Specialized;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Configuration.GeneratedWebFormService;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using HttpUtility = System.Web.HttpUtility;

	#region Interface: ITouchSource

	/// <summary>
	/// Describes instance that can define source and channel by ref and utm params.
	/// </summary>
	public interface ITouchSource
	{

		#region Properties: Public

		/// <summary>
		/// Collection of href parameters to analyze.
		/// </summary>
		NameValueCollection BpmHrefParameters { get; }

		#endregion

		#region Methods: Public

		/// <summary>
		/// Defines channel and source by parameters specified.
		/// </summary>
		/// <param name="parameters"><see cref="Dictionary{string, string}"/> of parameters available.</param>
		/// <returns>Tuple of result channel and source values.</returns>
		(Guid Medium, Guid Source) ComputeMediumAndSource(Dictionary<string, string> parameters);

		/// <summary>
		/// Defines channel and source by form data specified.
		/// </summary>
		/// <param name="formData">Form data instance.</param>
		/// <returns>Tuple of result channel and source values.</returns>
		(Guid Medium, Guid Source) ComputeMediumAndSource(FormData formData);

		#endregion

	}

	#endregion
	
}
