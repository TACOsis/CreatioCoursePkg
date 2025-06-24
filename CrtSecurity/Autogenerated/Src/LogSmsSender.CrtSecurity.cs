using Common.Logging;
using Terrasoft.Core.Factories;

namespace Terrasoft.Configuration
{
	using Terrasoft.SmsIntegration;

	#region Class: LogSmsSender

	[DefaultBinding(typeof(ISmsSender), Name = nameof(LogSmsSender))]
	public class LogSmsSender : ISmsSender
	{

		#region Fields: Private

		private readonly ILog _logger = LogManager.GetLogger("SMS");

		#endregion

		#region Fields: Public

		public string Code => nameof(LogSmsSender);
		
		#endregion

		#region Methods: Public

		public void Send(string phoneNumber, string message) {
			_logger.Info($"Sends message: {message} to the {phoneNumber}");
		}

		#endregion

	}

	#endregion

}

