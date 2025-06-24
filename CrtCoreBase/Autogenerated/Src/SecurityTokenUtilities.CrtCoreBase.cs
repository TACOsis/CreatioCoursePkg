namespace Terrasoft.Configuration
{
	using System;
	using System.Data;
	using global::Common.Logging;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Common;

	#region Class: SecurityTokenUtilities

	public class SecurityTokenUtilities
	{

		#region Constants: Protected
		
		/// <summary>
		/// Max rows that can be deleted by single query.
		/// </summary>
		protected const int MaxDeleteRowCount = 100;

		/// <summary>
		/// Default days count until token expires.
		/// </summary>
		protected const int DefaultTokenExpireDaysCount = 30;

		#endregion

		#region Constructors: Public

		public SecurityTokenUtilities(UserConnection userConnection) {
			UserConnection = userConnection;
		}

		#endregion

		#region Properties: Protected

		protected UserConnection UserConnection { 
			get;
			set;
		}

		private ILog _log;
		protected ILog Log {
			get {
				return _log ?? (_log = LogManager.GetLogger("SecurityToken"));
			}
		}

		#endregion

		#region Methods: Private

		/// <summary>
		/// Get query for deleting expired tokens.
		/// </summary>
		/// <returns>Delete query instance.</returns>
		private Delete GetDeleteExpiredTokensQuery() {
			Delete query = new Delete(UserConnection)
				.From("SecurityToken")
				.Where("ExpireDate")
				.IsLess(Column.Parameter(DateTime.UtcNow)) as Delete;
			query.RowCount = MaxDeleteRowCount;
			return query;
		}
		
		#endregion

		#region Methods: Protected

		/// <summary>
		/// Generate new token key.
		/// </summary>
		/// <returns>String token key.</returns>
		protected virtual string GenerateTokenKey() {
			return Guid.NewGuid().ToString("N");
		}

		/// <summary>
		/// Get query for token insertion.
		/// </summary>
		/// <param name="key">Token key.</param>
		/// <param name="data">Token binary data.</param>
		/// <param name="expireDate">Token expiration date.</param>
		/// <returns>Insert query instance.</returns>
		protected virtual Insert GetTokenInsertQuery(string key, byte[] data, DateTime expireDate) {
			var insert = new Insert(UserConnection)
				.Into("SecurityToken")
				.Set("Token", Column.Parameter(key))
				.Set("Data", Column.Parameter(data))
				.Set("ExpireDate", Column.Parameter(expireDate));
			return insert;
		}

		/// <summary>
		/// Get query for token selection.
		/// </summary>
		/// <param name="key">Token key to select.</param>
		/// <returns>Select query instance.</returns>
		protected virtual Select GetTokenSelectQuery(string key) {
			var select = new Select(UserConnection)
				.Top(1)
				.Column("Data")
				.From("SecurityToken")
				.Where("Token").IsEqual(Column.Parameter(key)) as Select;
			return select;
		}

		#endregion

		#region Methods: Public

		public virtual string CreateToken(byte[] data) {
			DateTime expireDate = DateTime.UtcNow.AddDays(DefaultTokenExpireDaysCount);
			return CreateToken(expireDate, data);
		}

		/// <summary>
		/// Generate and save new token with binary data and expiration date.
		/// </summary>
		/// <param name="expireDate">Token expiration date.</param>
		/// <param name="data">Token binary data</param>
		/// <returns>String token key.</returns>
		public virtual string CreateToken(DateTime expireDate, byte[] data) {
			string key = GenerateTokenKey();
			var insert = GetTokenInsertQuery(key, data, expireDate);
			Log.Info(insert.Execute() == 0
				? $"Security token by key {key} was not added."
				: $"Security token by key {key} was added with expire date {expireDate}.");
			return key;
		}

		/// <summary>
		/// Get saved token binary data.
		/// </summary>
		/// <param name="token">Token key.</param>
		/// <param name="data">Fetched token data.</param>
		/// <returns>True if token was found otherwise false.</returns>
		public virtual bool TryGetTokenData(string token, out byte[] data) {
			var select = GetTokenSelectQuery(token);
			using (var dbExecutor = UserConnection.EnsureDBConnection()) {
				using (IDataReader dr = select.ExecuteReader(dbExecutor)) {
					if (dr.Read()) {
						data = dr.GetColumnValue<byte[]>("Data");
						return true;
					}
				}
			}
			data = null;
			return false;
		}

		/// <summary>
		/// Delete expired tokens by portions.
		/// </summary>
		/// <returns>Deleted rows count.</returns>
		public int DeleteExpiredTokens() {
			var deleteQuery = GetDeleteExpiredTokensQuery();
			int totalDeletedRowsCount = 0;
			int actualDeletedRowsCount;
			do {
				actualDeletedRowsCount = deleteQuery.Execute();
				totalDeletedRowsCount += actualDeletedRowsCount;
			} while (actualDeletedRowsCount > 0);
			return totalDeletedRowsCount;
		}

	#endregion

	}

	#endregion
}
