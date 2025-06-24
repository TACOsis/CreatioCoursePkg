namespace Creatio.Copilot
{
	using System;

	internal static class CopilotActionExtensions
	{

		#region Constants: Private

		private const int ShortStringLength = 22;

		#endregion

		#region Methods: Private

		private static string ToShortString(Guid guid) {
			var base64Guid = Convert.ToBase64String(guid.ToByteArray());

			// Replace URL unfriendly characters
			base64Guid = base64Guid.Replace('+', '-').Replace('/', '_');

			// Remove the trailing ==
			return base64Guid.Substring(0, base64Guid.Length - 2);
		}

		private static Guid FromShortString(string str) {
			str = str.Replace('_', '/').Replace('-', '+');
			var byteArray = Convert.FromBase64String(str + "==");
			return new Guid(byteArray);
		}

		private static Guid GetUIdFromToolName(string toolName) {
			var uidShortString = toolName.Substring(toolName.Length - ShortStringLength);
			return FromShortString(uidShortString);
		}

		#endregion

	}
}

