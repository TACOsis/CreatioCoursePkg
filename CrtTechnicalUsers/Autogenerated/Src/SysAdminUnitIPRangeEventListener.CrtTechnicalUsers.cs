namespace Terrasoft.Configuration
{
	using Creatio.FeatureToggling;
	using System;
	using System.Text.RegularExpressions;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Entities.Events;

	#region Class: SysAdminUnitIPRangeEventListener

	[EntityEventListener(SchemaName = "SysAdminUnitIPRange")]
	public class SysAdminUnitIPRangeEventListener : BaseEntityEventListener
	{

		#region Constants: Private

		private const string IPV4Pattern = "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\."
			+ "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\."
			+ "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\."
			+ "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$";
		private const string IPV6Pattern = "((^|:)([0-9a-fA-F]{0,4})){1,8}$";

		#endregion

		#region Methods: Private

		private bool IsIPValid(string ip, string pattern) {
			return !string.IsNullOrWhiteSpace(ip) && Regex.IsMatch(ip, pattern);
		}

		private string GetExceptionMessage(UserConnection userConnection, string messageCode, params string[] values) {
			var resourceStorage = userConnection.ResourceStorage;
			var formatString = new LocalizableString(resourceStorage, "SysAdminUnitIPRangeEventListener",
				$"LocalizableStrings.{messageCode}.Value");
			return string.Format(formatString, values);
		}

		#endregion

		#region Methods: Public

		public override void OnSaving(object sender, EntityBeforeEventArgs e) {
			base.OnSaving(sender, e);
			if (Features.GetIsDisabled("EnableTechnicalUser")) {
				return;
			}
			var ipRange = (Entity)sender;
			var userConnection = ipRange.UserConnection;
			var beginIp = ipRange.GetTypedColumnValue<string>("BeginIP");
			var endIp = ipRange.GetTypedColumnValue<string>("EndIP");
			bool isBeginIpV4 = IsIPValid(beginIp, IPV4Pattern);
			bool isBeginIpV6 = IsIPValid(beginIp, IPV6Pattern);
			bool isEndIpV4 = IsIPValid(endIp, IPV4Pattern);
			bool isEndIpV6 = IsIPValid(endIp, IPV6Pattern);
			bool isBeginIpValid = isBeginIpV4 || isBeginIpV6;
			bool isEndIpValid = isEndIpV4 || isEndIpV6;
			if (!isBeginIpValid) {
				if (!isEndIpValid) {
					throw new FormatException(GetExceptionMessage(userConnection, "NotMatchIPsStructureMessage", beginIp, endIp));
				}
				throw new FormatException(GetExceptionMessage(userConnection, "NotMatchIPStructureMessage", beginIp));
			} else {
				if (isBeginIpV4 && !isEndIpV4) {
					throw new FormatException(GetExceptionMessage(userConnection, "NotMatchIPv4StructureMessage", endIp));
				}
				if (isBeginIpV6 && !isEndIpV6) {
					throw new FormatException(GetExceptionMessage(userConnection, "NotMatchIPv6StructureMessage", endIp));
				}
			}
		}

		#endregion

	}

	#endregion

}
