namespace Terrasoft.Configuration
{
	using System;
	using System.Runtime.Serialization;
	using CalendarTimeUnit = Terrasoft.Configuration.Calendars.TimeUnit;

	#region Class: TimeTerm

	/// <summary>
	/// Class container for the time interval
	/// </summary>
	[Serializable]
	[DataContract]
	public class TimeTerm
	{
		#region Fields: Public

		[DataMember(Name = "type")]
		public CalendarTimeUnit Type {
			get;
			set;
		}

		[DataMember(Name = "value")]
		public int Value {
			get;
			set;
		}


		public Guid CalendarId {
			get;
			set;
		}

		public TimeTerm NativeTimeTerm {
			get;
			set;
		}

		#endregion
	}

	#endregion

	#region Interface: ITermInterval

	/// <summary>
	/// Interface of term interval class.
	/// </summary>
	public interface ITermInterval<T>
	{
		/// <summary>
		/// Method that returns term flags.
		/// </summary>
		/// <returns>Term flags.</returns>
		T GetMask();
	}
	#endregion

}
