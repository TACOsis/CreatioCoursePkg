namespace Terrasoft.Mail 
{

	#region Class: MailCredentials

	public class MailCredentials : Credentials 
	{

		#region Properties: Public

		public string Host { get; set; }
		public int Port { get; set; }
		public bool UseSsl { get; set; }
		public bool UseIdle { get; set; }
		public int Timeout { get; set; }
		public string SenderEmailAddress { get; set; }
		public bool StartTls { get; set; }
		public bool IsAnonymousAuthentication { get; set; }

		#endregion

	}

	#endregion

}
