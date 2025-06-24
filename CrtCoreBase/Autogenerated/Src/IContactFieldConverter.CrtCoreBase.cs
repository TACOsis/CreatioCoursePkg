namespace Terrasoft.Configuration {
	
	#region Interface: IContactFieldConverter

	/// <summary>
	/// Contact "Full name" field converter.
	/// </summary>
	public interface IContactFieldConverter
	{

		#region Properties: Public

		/// <summary>
		/// Contact "Full name" separator characters array.
		/// </summary>
		char[] Separator {
			get;
			set;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// For "Full name" string returns <see cref="ContactSgm"/> instance.
		/// </summary>
		/// <param name="name">"Full name" string.</param>
		/// <returns><see cref="ContactSgm"/> instance.</returns>
		ContactSgm GetContactSgm(string name);

		/// <summary>
		/// For <see cref="ContactSgm"/> instance returns "Full name" string.
		/// </summary>
		/// <param name="sgm"><see cref="ContactSgm"/> instance.</param>
		/// <returns>"Full name" string.</returns>
		string GetContactName(ContactSgm sgm);
		
		#endregion
	}

	#endregion

}
