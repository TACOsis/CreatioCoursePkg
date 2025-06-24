namespace Terrasoft.Configuration
{
	using System;
	using Terrasoft.Core;

	#region Class: BaseLanguageRule

	/// <summary>
	/// Base abstract class for <see cref="ILanguageRule"/> implementations.
	/// </summary>
	public abstract class BaseLanguageRule : ILanguageRule
	{
		#region Properties: Public

		/// <summary>
		/// User connection.
		/// </summary>
		public UserConnection UserConnection {
			get;
		}

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Creates instance of <see cref="BaseLanguageRule"/>.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		protected BaseLanguageRule(UserConnection userConnection) {
			UserConnection = userConnection;
		}

		#endregion

		public abstract Guid GetLanguageId(Guid entityRecordId);
	}

	#endregion

}
