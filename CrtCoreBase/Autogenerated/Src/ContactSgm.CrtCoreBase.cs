namespace Terrasoft.Configuration
{

	#region Class: ContactSgm

	/// <summary> 
	/// Class, provides contact "Surname", "Given name", "Middle name" fields.
	/// </summary>
	public class ContactSgm
	{
		#region Constructors: Public

		public ContactSgm() {
			_surname = _givenName = _middleName = string.Empty;
		}

		#endregion

		#region Properties: Public

		/// <summary>
		/// "Last name" field.
		/// </summary>
		private string _surname;
		public string Surname {
			get {
				return _surname;
			}
			set {
				_surname = string.IsNullOrEmpty(value) ? string.Empty : value.Trim();
			}
		}

		/// <summary>
		/// "First name" field.
		/// </summary>
		private string _givenName;
		public string GivenName {
			get {
				return _givenName;
			}
			set {
				_givenName = string.IsNullOrEmpty(value) ? string.Empty : value.Trim();
			}
		}

		/// <summary>
		/// "Middle name" field.
		/// </summary>
		private string _middleName;
		public string MiddleName {
			get {
				return _middleName;
			}
			set {
				_middleName = string.IsNullOrEmpty(value) ? string.Empty : value.Trim();
			}
		}

		#endregion
	}

	#endregion
}

