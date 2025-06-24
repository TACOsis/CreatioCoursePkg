namespace Terrasoft.Configuration
{

	using System;

	#region Class: EmailHashDTO

	public class EmailHashDTO
	{

		#region Properties: Public 

		/// <summary>
		/// Email send date.
		/// </summary>
		public DateTime SendDate { get; set; }

		/// <summary>
		/// Email subject.
		/// </summary>
		public string Subject { get; set; }

		/// <summary>
		/// Email body.
		/// </summary>
		public string Body { get; set; }

		/// <summary>
		/// Email send date timezone.
		/// </summary>
		public TimeZoneInfo TimeZone { get; set; }

		#endregion

	}

	#endregion

}

