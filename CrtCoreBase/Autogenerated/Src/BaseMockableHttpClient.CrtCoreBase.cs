 namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Net;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;

	#region Class: BaseMockableHttpClient

	/// <summary>
	/// Basically, just a regular Http client which may be mocked
	/// with the help of <see cref="MockableServiceUrl"/>.
	/// </summary>
	public abstract class BaseMockableHttpClient<TRequest, TResponse>
	{

		#region Fields: Private

		private readonly UserConnection _userConnection;
		private readonly Dictionary<(string, string), Func<TRequest, TResponse>> _callbacks;

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="BaseMockableHttpClient"/> class.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		protected BaseMockableHttpClient(UserConnection userConnection) {
			_userConnection = userConnection;
			_callbacks = new Dictionary<(string, string), Func<TRequest, TResponse>>();
		}

		#endregion

		#region Methods: Private

		private static string PrependSlash(string url) {
			return url.StartsWith("/") ? url : "/" + url;
		}

		private bool TryFindResponseInDatabase(TRequest request, string method, string resource,
				out TResponse response) {
			var select = (Select)new Select(_userConnection).Cols("ResponseCode", "ResponseBody", "ExecCount")
				.From("MockableServiceUrl")
				.Where("HttpMethod").IsEqual(Column.Parameter(method))
				.And("Url").IsEqual(Column.Parameter(resource));
			select = AddRequestBodyPatternCondition(request, select) as Select;
			bool hasMockResponse = select.ExecuteSingleRecord(reader => new {
				Code = reader.GetColumnValue<int>("ResponseCode"),
				Body = reader.GetColumnValue<string>("ResponseBody"),
				ExecCount = reader.GetColumnValue<int>("ExecCount")
			}, out var mockResponse);
			if (!hasMockResponse) {
				response = default;
				return false;
			}
			UpdateExecCountMock(mockResponse.ExecCount, request, method, resource);
			response = CreateResponse((HttpStatusCode)mockResponse.Code,
				((HttpStatusCode)mockResponse.Code).ToString(), mockResponse.Body, "application/json",
				mockResponse.Code >= 400 ? "Mocked error" : string.Empty);
			return true;
		}

		private void UpdateExecCountMock(int currentExecCount, TRequest request, string httpMethod,
				string resource) {
			Update update = new Update(_userConnection, "MockableServiceUrl")
				.Set("ExecCount", Column.Parameter(currentExecCount + 1))
				.Where("HttpMethod").IsEqual(Column.Parameter(httpMethod))
				.And("Url").IsEqual(Column.Parameter(resource))
				as Update;
			update = AddRequestBodyPatternCondition(request, update) as Update;
			update.Execute();
		}

		private bool TryFindResponseInDictionary(TRequest request, string httpMethod, string resource,
				out TResponse response) {
			if (_callbacks.TryGetValue((httpMethod, resource), out var mockExecute)) {
				response = mockExecute(request);
				return response != null;
			}
			response = default;
			return false;
		}

		protected bool TryMockResponse(TRequest request, string httpMethod, string resource, out TResponse response) {
			resource = PrependSlash(resource);
			if (TryFindResponseInDictionary(request, httpMethod, resource, out response)) {
				return true;
			}
			if (TryFindResponseInDatabase(request, httpMethod, resource, out response)) {
				return true;
			}
			return false;
		}

		#endregion

		#region Methods: Protected

		protected abstract string GetRequestBody(TRequest request);

		protected abstract TResponse CreateResponse(HttpStatusCode statusCode, string statusDescription,
			string content, string contentType, string errorMessage);

		protected virtual Query AddRequestBodyPatternCondition(TRequest request, Query query) {
			string body = GetRequestBody(request);
			if (body.IsNotNullOrEmpty()) {
				var requestBodyPatternLengthFunc = new LengthQueryFunction(Column.SourceColumn("RequestBodyPattern"));
				var requestBodyAntiPatternLengthFunc = new LengthQueryFunction(Column.SourceColumn("RequestBodyAntiPattern"));
				var patternColumn = Column.SourceColumn("RequestBodyPattern");
				var antiPatternColumn = Column.SourceColumn("RequestBodyAntiPattern");
				QueryColumnExpression bodyParam = Column.Parameter(body.Truncate(4000));
				return query
					.And().OpenBlock(
						requestBodyPatternLengthFunc).IsEqual(Column.Const(0)).And(requestBodyAntiPatternLengthFunc).IsEqual(Column.Const(0))
						.Or(requestBodyAntiPatternLengthFunc).IsEqual(Column.Const(0)).And(bodyParam).IsLike(patternColumn)
						.Or(requestBodyPatternLengthFunc).IsEqual(Column.Const(0)).And(bodyParam).Not().IsLike(antiPatternColumn)
						.Or(bodyParam).IsLike(patternColumn).And(bodyParam).Not().IsLike(antiPatternColumn)
					.CloseBlock();
			}
			return query;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Register custom mock service method.
		/// </summary>
		/// <param name="httpMethod">Http method.</param>
		/// <param name="resource">Service url.</param>
		/// <param name="execute">
		/// Function, that should be executed instead of real service request.
		/// <br/>
		/// If this function returns <c>null</c>, than real request would be performed.
		/// </param>
		public void Register(string httpMethod, string resource, Func<TRequest, TResponse> execute) {
			_callbacks[(httpMethod, resource)] = execute;
		}

		#endregion

	}

	#endregion

}

