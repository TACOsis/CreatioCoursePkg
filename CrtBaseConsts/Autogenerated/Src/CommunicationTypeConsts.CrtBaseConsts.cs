namespace Terrasoft.Configuration
{
	using System.Collections.Generic;

	public static class CommunicationTypeConsts
	{
		// Communication type - LinkedIn
		public const string LinkedInId = "ea0f3b0a-bacf-e011-92c3-00155d04c01d";

		// Communication type - Twitter
		public const string TwitterId = "e7139487-bad3-e011-92c3-00155d04c01d";

		// Communication type - Facebook
		public const string FacebookId = "2795dd03-bacf-e011-92c3-00155d04c01d";

		// Communication type - Google
		public const string GoogleId = "efe5d7a2-5f38-e111-851e-00155d04c01d";

		// Communication type - E-mail
		public const string EmailId = "ee1c85c3-cfcb-df11-9b2a-001d60e938c6";

		// Communication type - Skype
		public const string SkypeId = "09e4bda6-cfcb-df11-9b2a-001d60e938c6";

		// Communication type - Home 
		public const string HomePhoneId = "0da6a26b-d7bc-df11-b00f-001d60e938c6";

		// Communication type - Mobile
		public const string MobilePhoneId = "d4a2dc80-30ca-df11-9b2a-001d60e938c6";

		// Communication type - Work
		public const string WorkPhoneId = "3dddb3cc-53ee-49c4-a71f-e9e257f59e49";

		// Communication type - Web
		public const string WebId = "6a8ba927-67cc-df11-9b2a-001d60e938c6";

		// Communication type - Main
		public const string MainPhoneId = "6a3fb10c-67cc-df11-9b2a-001d60e938c6";

		// Communication type - Additional
		public const string AdditionalPhoneId = "2b387201-67cc-df11-9b2a-001d60e938c6";

		// Communication type - Other phone
		public const string OtherPhoneId = "21c0d693-9a52-43fa-b7f1-c6d8b53975d4";

		// Communication type - Fax
		public const string FaxId = "9a7ab41b-67cc-df11-9b2a-001d60e938c6";

		// Communication type - Extension
		public const string ExtensionId = "e9d91e45-8d92-4e38-95a0-ef8aa28c9e7a";

		// Communication type - Phone (Communication entity)
		public const string CommunicationPhoneId = "e037f25a-d7bc-df11-b00f-001d60e938c6";

		// Communication type - Sms (Communication entity)
		public const string CommunicationSmsId = "a09511b4-13f0-e011-a86b-00155d04c01d";

        // Communication type - Social network (Communication entity)
        public const string CommunicationSocialNetworkId = "ba75f995-aebe-e011-bc15-00155d04c01b";

        // List of the communication phones type (Communication entity)
        public static readonly List<string> CommunicationPhoneTypeIds = new List<string> {
			CommunicationPhoneId,
			CommunicationSmsId
		};
	}

}
