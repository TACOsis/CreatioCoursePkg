namespace Terrasoft.Configuration
{
	using System;
	using Terrasoft.Common;

	#region Class: IncorrectConfigurationException

	/// <summary>
	/// The exception that is thrown when required system setting or lookup field is missing or invalid.
	/// </summary>
	public class IncorrectConfigurationException : Exception
	{

		#region Enum: DefectType

		/// <summary>
		/// Detailed Incorrectness type.
		/// </summary>
		public enum DefectType
		{
			Missing,
			Invalid
		}

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="IncorrectConfigurationException"/>,
		/// for invalid system setting.
		/// </summary>
		/// <param name="sysSettingCode">System setting code.</param>
		/// <param name="sysSettingValue">Current system setting value.</param>
		/// <param name="details">Optional error message details.</param>
		public IncorrectConfigurationException(string sysSettingCode, string sysSettingValue, string details)
			: base(FormatMessage(sysSettingCode, sysSettingValue, DefectType.Invalid, details)) {
			SysSettingCode = sysSettingCode;
			Type = DefectType.Invalid;
		}

		/// <summary>
		/// Initializes a new instance of the <see cref="IncorrectConfigurationException"/>,
		/// for invalid system setting.
		/// </summary>
		/// <param name="sysSettingCode">System setting code.</param>
		/// <param name="sysSettingValue">Current system setting value.</param>
		public IncorrectConfigurationException(string sysSettingCode, string sysSettingValue)
			: this(sysSettingCode, sysSettingValue, "") { }

		/// <summary>
		/// Initializes a new instance of the <see cref="IncorrectConfigurationException"/>,
		/// for missing system setting.
		/// </summary>
		/// <param name="sysSettingCode">System setting code.</param>
		public IncorrectConfigurationException(string sysSettingCode)
			: base(FormatMessage(sysSettingCode, "", DefectType.Missing)) {
			SysSettingCode = sysSettingCode;
			Type = DefectType.Missing;
		}

		#endregion

		#region Properties: Public

		/// <summary>
		/// Gets the system setting code.
		/// </summary>
		public string SysSettingCode { get; }

		/// <summary>
		/// Gets the incorrectness type.
		/// </summary>
		public DefectType Type { get; }

		#endregion

		#region Methods: Private

		private static string FormatMessage(string sysSettingCode, string sysSettingValue, DefectType defectType,
			string details = "") {
			string message = string.Format("Configuration problem. Check '{0}' system setting it appears to be '{1}'.",
				sysSettingCode, defectType);
			if (defectType == DefectType.Invalid) {
				message += string.Format("Current value: '{0}'.", sysSettingValue);
			}
			if (details.IsNotNullOrWhiteSpace()) {
				message += "Details: " + details;
			}
			return message;
		}

		#endregion

	}

	#endregion

}

