#if NETSTANDARD
namespace System.Web
{

	public class HttpException : System.Runtime.InteropServices.ExternalException
	{
		public HttpException(int httpCode, string message)
				: base(message, httpCode) {
		}
	}

}
#endif
