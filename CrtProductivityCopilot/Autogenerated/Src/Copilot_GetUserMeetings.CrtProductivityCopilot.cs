namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: Copilot_GetUserMeetingsMethodsWrapper

	/// <exclude/>
	public class Copilot_GetUserMeetingsMethodsWrapper : ProcessModel
	{

		public Copilot_GetUserMeetingsMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("SetDaysOfWeekExecute", SetDaysOfWeekExecute);
		}

		#region Methods: Private

		private bool SetDaysOfWeekExecute(ProcessExecutingContext context) {
			DateTime startTimestamp = Get<DateTime>("SearchStartDate");
			DateTime endTimestamp = Get<DateTime>("SearchEndDate");
			
			List<string> formattedDates = new List<string>();
			
			// Iterate through the dates from start to end
			for (DateTime date = startTimestamp; date <= endTimestamp; date = date.AddDays(1))
			{
			    string formattedDate = date.ToString("dd MMM yyyy dddd, "); // Format: "04 Oct 2024 Friday,"
			    formattedDates.Add(formattedDate);
			}
			
			// Join the list of formatted dates into a single string
			string concatenatedDates = string.Join(" ", formattedDates);
			
			// Store the concatenated string into the "DaysOfWeek" variable
			Set<string>("DaysOfWeek", concatenatedDates);
			
			return true;
		}

		#endregion

	}

	#endregion

}

