namespace Terrasoft.Configuration
{

	#region Class: EmailTemplateLanguageHandler

	/// <summary>
	/// An abstract e-mail template language receiver.
	/// </summary>
	/// <remarks>Designed as a chain of responsibility.</remarks>
	/// <typeparam name="TRequest">Type of request.</typeparam>
	/// <typeparam name="TResult">Type of result.</typeparam>
	public abstract class EmailTemplateLanguageHandler<TRequest, TResult>
	{

		#region Properties: Public

		/// <summary>
		/// Successor.
		/// </summary>
		public EmailTemplateLanguageHandler<TRequest, TResult> Successor {
			get;
			set;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Handles request.
		/// </summary>
		/// <param name="request">Request.</param>
		/// <returns>Result.</returns>
		public virtual TResult Handle(TRequest request) {
			return Handle(request, null);
		}

		/// <summary>
		/// Handles request.
		/// </summary>
		/// <param name="request">Request.</param>
		/// <param name="templateLoader">Request.</param>
		/// <returns>Result.</returns>
		public abstract TResult Handle(TRequest request, ITemplateLoader templateLoader);


		#endregion

	}

	#endregion

}
