using System;

namespace Terrasoft.Configuration
{
	public static class BaseConsts
	{
		[Obsolete]
		public static readonly Guid TSBpmSolutionUId = new Guid("15B941E8-F36B-1410-928E-001D6026ABEB");

		public static readonly string BusinessProcessTag = "Business Process";

		public static readonly Guid BrowserClientTypeId = new Guid("195785B4-F55A-4E72-ACE3-6480B54C8FA5");

		public static readonly Guid PhoneClientTypeId = new Guid("BE8AB9EE-344E-4A56-8C97-41C84F22BD88");

		public static readonly Guid AllEmployersSysAdminUnitUId = new Guid("A29A3BA5-4B0D-DE11-9A51-005056C00008");

		public static readonly Guid PortalUsersSysAdminUnitUId = new Guid("720B771C-E7A7-4F31-9CFB-52CD21C3739F");

		public static readonly Guid SystemAdministratorsSysAdminUnitId =
			new Guid("83A43EBC-F36B-1410-298D-001E8C82BCAD");

		public static readonly Guid UserSysAdminUnitTypeId = new Guid("472E97C7-6BD7-DF11-9B2A-001D60E938C6");
		public static readonly Guid TechnicalUserSysAdminUnitTypeId = new Guid("0C92991C-A823-4639-8E6F-74C0F65B19F3");
		
		/// <summary>
		/// 'User' admin unit type value.
		/// </summary>
		public static readonly int UserSysAdminUnitTypeValue = 4;

		/// <summary>
		/// Noteworthy event type - birthday.
		/// </summary>
		public static readonly Guid BirthdayId = new Guid("173D56D2-FDCA-DF11-9B2A-001D60E938C6");

		/// <summary>
		/// Unique identifier of the system user (Supervisor).
		/// </summary>
		public static readonly Guid SystemUserId = new Guid("7F3B869F-34F3-4F20-AB4D-7480A5FDF647");
	}
}
