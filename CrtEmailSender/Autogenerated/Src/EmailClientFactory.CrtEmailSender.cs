namespace Terrasoft.Mail.Sender 
{
	using Terrasoft.Configuration;
	using Terrasoft.Core;
	using Terrasoft.Core.Factories;
	using DTO = EmailContract.DTO;

	#region Class: EmailClientFactory

	/// <summary>
	/// Email client factory implementation.
	/// </summary>
	[DefaultBinding(typeof(IEmailClientFactory))]
	public class EmailClientFactory : IEmailClientFactory {

		#region Fileds: Private

		protected readonly UserConnection UserConnection;

		#endregion

		#region Constructors: Public

		/// <summary>.ctor.</summary>
		/// <param name="userConnection">An instance of the user connection.</param>
		public EmailClientFactory(UserConnection userConnection) {
			UserConnection = userConnection;
		}

		#endregion

		#region Methods: Private

		/// <summary>
		/// Get <see cref="ISmtpClient"/> instance implementation.
		/// </summary>
		/// <param name="credentials"><see cref="DTO.Credentials"/> credentials.</param>
		/// <returns><see cref="ISmtpClient"/> instance implementation.</returns>
		private ISmtpClient GetSmtpClient(object credentials = null) {
			var userConnectionArg = new ConstructorArgument("userConnection", UserConnection);
			if (credentials == null) {
				return ClassFactory.Get<ISmtpClient>(userConnectionArg);
			}
			var credentialsArg = GetCredentialsConstructorArgument(credentials);
			return ClassFactory.Get<ISmtpClient>(userConnectionArg, credentialsArg);
		}

		/// <summary>
		/// Create <see cref="ConstructorArgument"/> from credentials.
		/// </summary>
		/// <param name="credentials">Credentials object.</param>
		/// <returns><see cref="ConstructorArgument"/> instnace.</returns>
		private ConstructorArgument GetCredentialsConstructorArgument(object credentials) {
			if(credentials is DTO.Credentials) {
				var mailCredentials = ConvertToMailCredentials(credentials as DTO.Credentials);
				return new ConstructorArgument("mailCredentials", mailCredentials);
			}
			return new ConstructorArgument("credentials", credentials as Credentials);
		}

		/// <summary>
		/// Convert <see cref="DTO.Credentials"/> to <see cref="MailCredentials"/> instance.
		/// </summary>
		/// <param name="credentials"><see cref="DTO.Credentials"/> instance.</param>
		/// <returns><see cref="MailCredentials"/> credentials.</returns>
		private MailCredentials ConvertToMailCredentials(DTO.Credentials credentials) {
			return new MailCredentials {
				Host = credentials.ServiceUrl,
				Port = credentials.Port,
				UserName = credentials.UserName,
				UserPassword = credentials.Password,
				UseSsl = credentials.UseSsl,
				UseOAuth = credentials.UseOAuth,
				SenderEmailAddress = credentials.SenderEmailAddress
			};
		}

		#endregion

		#region Methdos: Protected

		/// <summary>Returns certain <see cref="IEmailClient"/> class instance.</summary>
		/// <returns>Certain <see cref="IEmailClient"/> class instance.</returns>
		protected IEmailClient GetCertainEmailClient() {
			if (!UserConnection.GetIsFeatureEnabled("OldEmailIntegration")
					&& !UserConnection.GetIsFeatureEnabled("OldEmailSend")) {
				return ClassFactory.Get<IEmailClient>(new ConstructorArgument("userConnection", UserConnection));
			}
			return null;
		}

		/// <summary>Returns certain <see cref="IEmailClient"/> class instance.</summary>
 	 	/// <param name="credentials">An instance of the user credentials.</param>
 	 	/// <returns>Certain <see cref="IEmailClient"/> class instance.</returns>
 	 	protected IEmailClient GetCertainEmailClient(Credentials credentials) {
			if (!UserConnection.GetIsFeatureEnabled("OldEmailIntegration")
					&& !UserConnection.GetIsFeatureEnabled("OldEmailSend")) {
				return ClassFactory.Get<IEmailClient>(
					new ConstructorArgument("userConnection", UserConnection),
					new ConstructorArgument("credentials", credentials)
				);
			}
			return null;
		}

		/// <summary>Returns certain <see cref="IEmailClient"/> class instance.</summary>
		/// <param name="credentials">An instance of <see cref="DTO.Credentials"/> user credentials.</param>
		/// <returns>Certain <see cref="IEmailClient"/> class instance.</returns>
		protected IEmailClient GetCertainEmailClient(DTO.Credentials credentials) {
			if (!UserConnection.GetIsFeatureEnabled("OldEmailIntegration")
					&& !UserConnection.GetIsFeatureEnabled("OldEmailSend")) {
				return ClassFactory.Get<IEmailClient>(
					new ConstructorArgument("userConnection", UserConnection),
					new ConstructorArgument("emailCredentials", credentials)
				);
			}
			return null;
		}

		#endregion

		#region Methdos: Public

		/// <summary>
		/// Returns an email client object that implements interface <see cref="IEmailClient"/>
		/// at the specified postal address of the sender.</summary>
		/// <param name="senderEmailAddress">Sender e-mail address.</param>
		/// <returns>Instance <see cref="IEmailClient"/>.</returns>
		public virtual IEmailClient CreateEmailClient(string senderEmailAddress) {
			return GetCertainEmailClient() ?? GetSmtpClient();
		}

		/// <summary>
		/// Returns email client type for specified email.</summary>
		/// <param name="senderEmailAddress">Sender email.</param>
		/// <param name="ignoreRights">Flag that indicates whether to ignore rights.</param>
		/// <returns><see cref="IEmailClient"/> instance.</returns>
		public virtual IEmailClient CreateEmailClient(string senderEmailAddress, bool ignoreRights) {
			return CreateEmailClient(senderEmailAddress);
		}

		/// <summary>
		/// Returns an email client object that implements interface <see cref="IEmailClient"/>
		/// according to specified connection parameters.</summary>
		/// <param name="credentials">Connection credentials.</param>
		/// <returns>Instance of <see cref="IEmailClient"/>.</returns>
		public virtual IEmailClient CreateEmailClient(Credentials credentials) {
			return GetCertainEmailClient(credentials) ?? GetSmtpClient(credentials);
		}

		/// <summary>
		/// Returns an email client object that implements interface <see cref="IEmailClient"/>
		/// according to specified connection parameters.</summary>
		/// <param name="credentials">Connection credentials.</param>
		/// <returns>Instance of <see cref="IEmailClient"/>.</returns>
		public virtual IEmailClient CreateEmailClient(DTO.Credentials credentials) {
			return GetCertainEmailClient(credentials) ?? GetSmtpClient(credentials);
		}

		#endregion

	}

	#endregion

}
