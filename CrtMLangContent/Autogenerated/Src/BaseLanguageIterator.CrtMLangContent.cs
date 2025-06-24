namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Core;

	#region Class: BaseLanguageIterator

	/// <summary>
	/// Base <see cref="ILanguageIterator"/> implementation.
	/// </summary>
	public abstract class BaseLanguageIterator : ILanguageIterator
	{
		#region Properties: Public

		/// <summary>
		/// User connection.
		/// </summary>
		public UserConnection UserConnection {
			get;
		}

		/// <summary>
		/// Array of language rules.
		/// </summary>
		public ILanguageRule[] LanguageRules {
			get; set;
		}

		#endregion

		#region Constructors: Protected

		/// <summary>
		/// Initializes new instance of <see cref="BaseLanguageIterator"/>.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		protected BaseLanguageIterator(UserConnection userConnection) {
			UserConnection = userConnection;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Gets languages by entity identifier.
		/// </summary>
		/// <param name="recordId">Entity identifier.</param>
		/// <returns>Enumerator of languages.</returns>
		public IEnumerable<Guid> GetLanguages(Guid recordId) {
			foreach (var rule in LanguageRules) {
				yield return rule.GetLanguageId(recordId);
			}
		}

		#endregion

	}

	#endregion

}
