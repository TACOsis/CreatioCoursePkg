namespace Terrasoft.Configuration
{
	using System.Collections.Generic;
	using System.Text.RegularExpressions;

	#region Class: EmailUtils

	/// <summary>
	/// Contains utility methods for work with Email.
	/// </summary>
	public static class EmailUtils {

		#region Methods: Public

		/// <summary>
		/// Returns list of emails, selected from <paramref name="rawString"/>.
		/// </summary>
		/// <param name="rawString">Email address containing string.</param>
		/// <returns>List of email addresses.</returns>
		public static List<string> ParseEmailAddress(string rawString) {
			var emails = new List<string>();
			Regex regex = new Regex(@"(?<email>\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)");
			var matches = regex.Matches(rawString);
			foreach (Match match in matches) {
				if (!emails.Contains(match.Value)) {
					emails.Add(match.Value);
				}
			}
			return emails;
		}

		#endregion

	}

	#endregion

}
 
