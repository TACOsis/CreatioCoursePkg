namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Text;
	using Core.Entities;
	using Terrasoft.Core;
	using Terrasoft.Common;

	#region Class: AnniversaryRemindingTextFormer

	/// <summary>
	/// Provides methods to form "Anniversary" remindings text data. 
	/// </summary>
	public class AnniversaryRemindingTextFormer : IRemindingTextFormer
	{
		#region Fields: Private

		protected readonly UserConnection UserConnection;

		#endregion

		#region Constructors: Public

		public AnniversaryRemindingTextFormer(UserConnection userConnection) {
			UserConnection = userConnection;
		}

		#endregion

		#region Methods: Private

		private string GetAccountAnniversaryTitle() {
			return GetLocalizableString("TitleAccountTemplate");
		}

		private string GetContactAnniversaryTitle() {
			return GetLocalizableString("TitleContactTemplate");
		}

		private string GetContactAnniversaryBody(string date, string name) {
			string dateFormatted = GetAnniversaryDayAndMonth(date);
			var bodyContactTemplate = GetLocalizableString("BodyContactTemplate");
			var result = string.Format(bodyContactTemplate, dateFormatted, name);
			return result;
		}

		private string GetAccountAnniversaryBody(string date, string name) {
			var bodyAccountTemplate = GetLocalizableString("BodyAccountTemplate");
			int years = GetAnniversaryYear(date);
			string contraction = GetContractions(years);
			var result = string.Format(bodyAccountTemplate, date, name, contraction);
			return result;
		}
		
		private string GetLocalizableString(string resourceName) {
			var localizableString = $"LocalizableStrings.{resourceName}.Value";
			string result = new LocalizableString(UserConnection.ResourceStorage,
				GetType().Name, localizableString);
			return result;
		}

		private int GetAnniversaryYear(string date) {
			var currentDate = UserConnection.CurrentUser.GetCurrentDateTime().Date;
			DateTime anniversaryDate = Convert.ToDateTime(date);
			if (anniversaryDate.CompareTo(currentDate) > 0) {
				return 0;
			}
			TimeSpan interval = currentDate.Subtract(anniversaryDate);
			int year = new DateTime(interval.Ticks).Year;
			if (anniversaryDate.DayOfYear == currentDate.DayOfYear) {
				year--;
			}
			return year;
		}

		private string GetAnniversaryDayAndMonth(string value) {
			DateTime anniversaryDate = Convert.ToDateTime(value);
			return anniversaryDate.ToString("MM/dd");
		}

		private string GetContractions(int value) {	
			return value + GetOrdinalEnu(value);
		}

		private string GetOrdinalEnu(int number) {
			if (number <= 0) {
				return string.Empty;
			}
			if (number % 100 == 11 || number % 100 == 12 || number % 100 == 13) {
				return GetLocalizableString("thOrdinal");
			}
			switch (number % 10) {
				case 1:
					return GetLocalizableString("stOrdinal");
				case 2:
					return GetLocalizableString("ndOrdinal");
				case 3:
					return GetLocalizableString("rdOrdinal");
				default:
					return GetLocalizableString("thOrdinal");
			}
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc />
		public string GetBody(IDictionary<string, object> formParameters) {
			formParameters.CheckArgumentNull("formParameters");
			var result = string.Empty;
			var schemaName = (string)formParameters["SchemaName"];
			var date = (string)formParameters["Date"];
			var entityName = (string)formParameters["EntityName"];
			switch (schemaName) {
				case "Account":
					result = GetAccountAnniversaryBody(date, entityName);
					break;
				case "Contact":
					result = GetContactAnniversaryBody(date, entityName);
					break;
			}
			return result;
		}

		/// <inheritdoc />
		public string GetTitle(IDictionary<string, object> formParameters) {
			formParameters.CheckArgumentNull("formParameters");
			var schemaName = (string)formParameters["SchemaName"];
			var result = string.Empty;
			switch (schemaName) {
				case "Account":
					result = GetAccountAnniversaryTitle();
					break;
				case "Contact":
					result = GetContactAnniversaryTitle();
					break;
			}
			return result;
		}

		#endregion
	}

	#endregion
}
