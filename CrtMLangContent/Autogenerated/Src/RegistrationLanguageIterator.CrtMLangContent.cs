namespace Terrasoft.Configuration.SSP
{

	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;

	#region Class: RegistrationLanguageIterator

	/// <summary>
	/// Iterator for listing by languages.
	/// </summary>
	public class RegistrationLanguageIterator : ILanguageIterator
	{

		#region Properties: Public

		/// <summary>
		/// User connection.
		/// </summary>
		public UserConnection UserConnection { get; }

		private ILanguageRule _defaultLanguageRule;
		/// <summary>
		/// Default language rule.
		/// </summary>
		public ILanguageRule DefaultLanguageRule =>
			_defaultLanguageRule ?? (_defaultLanguageRule = new DefaultLanguageRule(UserConnection));

		/// <summary>
		/// List of culture codes.
		/// </summary>
		public IEnumerable<string> UserCultures { get; }

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes new instance of <see cref="RegistrationLanguageIterator"/>. 
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="cultures">User culture list.</param>
		public RegistrationLanguageIterator(UserConnection userConnection, IEnumerable<string> cultures) {
			UserConnection = userConnection;
			UserCultures = cultures ?? new List<string>();
		}

		/// <summary>
		/// Initializes new instance of <see cref="EmailTemplateUserTaskLanguageIterator"/>. 
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="cultures">User culture list.</param>
		/// <param name="defaultLanguageRule">Default culture rule.</param>
		public RegistrationLanguageIterator(UserConnection userConnection, IEnumerable<string> cultures,
				ILanguageRule defaultLanguageRule) : this(userConnection, cultures) {
			_defaultLanguageRule = defaultLanguageRule;
		}

		#endregion

		#region Methods: Private

		private Select GetLangSelect(IEnumerable<string> culturesCode) {
			var select = new Select(UserConnection)
				.Column("Id")
				.Column("Code")
				.From("SysLanguage")
				.Where("Code").In(Column.Parameters(culturesCode)) as Select;
			return select;
		}

		private List<Guid> GetLanguageIdByCode(IEnumerable<string> culturesCode) {
			var userLangInfo = new List<(Guid id, string code)>();
			if (culturesCode.Any()) { 
				var select = GetLangSelect(culturesCode);
				using (DBExecutor dbExecutor = UserConnection.EnsureDBConnection()) {
					using (var reader = select.ExecuteReader(dbExecutor)) {
						while (reader.Read()) {
							userLangInfo.Add((reader.GetColumnValue<Guid>("Id"), reader.GetColumnValue<string>("Code")));
						}
					}
				}
			}
			return GetLangListOrdered(culturesCode, userLangInfo);
		}

		private List<Guid> GetLangListOrdered(IEnumerable<string> culturesCode,
				IReadOnlyCollection<(Guid id, string code)> userLangInfo) {
			var languages = new List<Guid>();
			foreach (var code in culturesCode) {
				if (userLangInfo.Any(tuple => tuple.code == code)) {
					languages.Add(userLangInfo.First(tuple => tuple.code == code).id);
				}
			}
			return languages.Distinct().ToList();
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Gets languages for user browser culture.
		/// </summary>
		/// <param name="recordId">Record identifier.</param>
		/// <returns>Enumerator of languages.</returns>
		public IEnumerable<Guid> GetLanguages(Guid recordId) {
			var userLanguages = GetLanguageIdByCode(UserCultures);
			userLanguages.Add(DefaultLanguageRule.GetLanguageId(recordId));
			return userLanguages;
		}

		#endregion
	}

	#endregion
}
