namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Core;

	#region Interface: IEmailHashComposer

	/// <summary>
	/// Provides api for email message hashes calcualtion.
	/// </summary>
	public interface IEmailHashComposer
	{

		#region Methods: Public

		/// <summary>
		///  Returns hashes collection calculated by email parameters.
		/// </summary>
		/// <param name="userConnection"><see cref="UserConnection"/> instance.</param>
		/// <param name="email">Email parameters.</param>
		/// <returns>Email hashes collection.</returns>
		IEnumerable<string> GetHashes(UserConnection userConnection, EmailHashDTO email);

		/// <summary>
		///  Returns default hash calculated by email parameters.
		/// </summary>
		/// <param name="userConnection"><see cref="UserConnection"/> instance.</param>
		/// <param name="email">Email parameters.</param>
		/// <returns>Email hash.</returns>
		string GetDefaultHash(UserConnection userConnection, EmailHashDTO email);

		#endregion

	}

	#endregion

}

