namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;

	public static class ExceptionExtensions
	{
		private static IEnumerable<Exception> DescendantsAndSelf(this Exception exception) {
			do {
				yield return exception;
				exception = exception.InnerException;
			} while (!(exception is null));
		}

		public static string GetAllMessages(this Exception exception) {
			var exceptions = exception.DescendantsAndSelf();
			var messages = exceptions.Select((e, i) => $"{i + 1}: {e.Message}");
			return string.Join(Environment.NewLine, messages);
		}
	}

} 
