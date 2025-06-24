 namespace Terrasoft.AppFeatures
{
	using System;
	using System.Collections.Concurrent;
	using System.Collections.Generic;
	using System.Linq;
	using System.Linq.Expressions;
	using System.Reflection;

	#region Class: ObjectQueryUtils

	internal static class ObjectQueryUtils
	{

		#region Class: ExpressionsCache

		private static class ExpressionsCache<T>
		{

			#region Fields: Private

			private static readonly ConcurrentDictionary<string, Expression<Func<T, object>>> _propertyAccessCache =
				new ConcurrentDictionary<string, Expression<Func<T, object>>>();
			private static readonly ConcurrentDictionary<string, Func<CompareColumnWithValueFilter, Func<T, bool>>> _comparerFactoryCache =
				new ConcurrentDictionary<string, Func<CompareColumnWithValueFilter, Func<T, bool>>>();

			#endregion

			#region Methods: Public

			public static Expression<Func<T, object>> GetPropertyExpression(string propertyName) {
				return _propertyAccessCache.GetOrAdd(propertyName, prop => {
					ParameterExpression parameter = Expression.Parameter(typeof(T));
					MemberExpression property = Expression.Property(parameter, prop);
					UnaryExpression propAsObject = Expression.Convert(property, typeof(object));
					return Expression.Lambda<Func<T, object>>(propAsObject, parameter);
				});
			}

			public static Func<T, bool> BuildSimpleFilterPredicate(string propertyName, CompareColumnWithValueFilter filter) {
				var comparerFactory = _comparerFactoryCache.GetOrAdd(propertyName, ValueFactory);
				return comparerFactory?.Invoke(filter);
			}

			#endregion

			#region Methods: Private

			private static Func<CompareColumnWithValueFilter, Func<T, bool>> ValueFactory(string propertyName) {
				PropertyInfo propertyInfo = typeof(T).GetProperty(propertyName);
				if (propertyInfo == null) {
					return null;
				}
				MethodInfo checkMethod = typeof(CompareColumnWithValueFilter)
					.GetMethod(nameof(CompareColumnWithValueFilter.GetIsValueMatched),
						BindingFlags.Public | BindingFlags.Instance);
				MethodInfo typedCheckMethod = checkMethod.MakeGenericMethod(propertyInfo.PropertyType);
				return filter => obj => {
					object value = propertyInfo.GetValue(obj);
					return (bool)typedCheckMethod.Invoke(filter, new[] { value });
				};
			}

			#endregion

		}

		#endregion

		#region Methods: Internal

		internal static IEnumerable<T> FilterBy<T>(this IEnumerable<T> source, string propertyName,
				CompareColumnWithValueFilter filterInfo) {
			var predicate = ExpressionsCache<T>.BuildSimpleFilterPredicate(propertyName, filterInfo);
			return predicate != null ? source.Where(predicate) : source;
		}

		#endregion

		#region Methods: Public

		public static IOrderedQueryable<T> OrderBy<T>(this IQueryable<T> source, string propertyName) =>
			source.OrderBy(ExpressionsCache<T>.GetPropertyExpression(propertyName));

		public static IOrderedQueryable<T> ThenBy<T>(this IOrderedQueryable<T> source, string propertyName) =>
			source.ThenBy(ExpressionsCache<T>.GetPropertyExpression(propertyName));

		public static IOrderedQueryable<T> OrderByDescending<T>(this IQueryable<T> source, string propertyName) =>
			source.OrderByDescending(ExpressionsCache<T>.GetPropertyExpression(propertyName));

		public static IOrderedQueryable<T> ThenByDescending<T>(this IOrderedQueryable<T> source, string propertyName) =>
			source.ThenByDescending(ExpressionsCache<T>.GetPropertyExpression(propertyName));

		#endregion

	}

	#endregion

}

