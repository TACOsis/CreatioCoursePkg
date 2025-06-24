namespace Terrasoft.Configuration
{
	using System;
	using CalendarsTimeUnit = Calendars.TimeUnit;

	#region Enum: CaseTermStates
	
	/// <summary>
	/// Case term interval completeness states.
	/// </summary>
	[Flags]
	[Serializable]
	public enum CaseTermStates
	{
		None = 0,
		ContainsResponse = 1,
		ContainsResolve = 2
	}

	#endregion

	#region Class: CaseTermInterval

	/// <summary>
	/// A class-container for case term interval
	/// </summary>
	public class CaseTermInterval : ITermInterval<CaseTermStates>
	{
		#region Properties: Public

		/// <summary>
		/// Resolve time interval
		/// </summary>
		public TimeTerm ResolveTerm {
			get;
			set;
		}

		/// <summary>
		/// Response time interval
		/// </summary>
		public TimeTerm ResponseTerm {
			get;
			set;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Gets content mask value.
		/// </summary>
		/// <returns>Mask value.</returns>
		public CaseTermStates GetMask() {
			var result = CaseTermStates.None;
			if (ResponseTerm != null && ResponseTerm.Type != default(CalendarsTimeUnit) && ResponseTerm.Value > 0) {
				result |= CaseTermStates.ContainsResponse;
			}
			if (ResolveTerm != null && ResolveTerm.Type != default(CalendarsTimeUnit) && ResolveTerm.Value > 0) {
				result |= CaseTermStates.ContainsResolve;
			}
			return result;
		}

		#endregion

	}

	#endregion
	
}
