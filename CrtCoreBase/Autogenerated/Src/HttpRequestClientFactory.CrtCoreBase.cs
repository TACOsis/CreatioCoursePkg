namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.Requests;

	public static class HttpRequestClientFactory
	{

		#region Fields: Private

		private static readonly Dictionary<string, Func<IHttpRequestClient>> _namedBindings =
			new Dictionary<string, Func<IHttpRequestClient>>();

		#endregion

		#region Methods: Private

		private static IHttpRequestClient GetNamedInstance(string name) {
			var binding = _namedBindings[name];
			return binding();
		}

		#endregion

		#region Methods: Public

		public static IHttpRequestClient GetInstanceFromDI() {
			return ClassFactory.Get<IHttpRequestClient>();
		}
		
		public static bool TryGetNamedInstance(string name, out IHttpRequestClient instance) {
			instance = null;
			if (!_namedBindings.ContainsKey(name)) {
				return false;
			}
			instance = GetNamedInstance(name);
			return true;
		}

		public static void RegisterNamedInstance(string name, Func<IHttpRequestClient> constructor) {
			_namedBindings[name] = constructor;
		}

		public static void DeleteBinding(string name) {
			_namedBindings.Remove(name);
		}
		
		#endregion

	}
	
} 
