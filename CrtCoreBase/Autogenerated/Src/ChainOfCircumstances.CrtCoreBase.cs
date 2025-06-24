namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;

	#region Class: ChainOfCircumstances

	/// <summary>
	/// A special wrapper over the linked list, allowing you to perform actions with conditions (circumstances)
	/// that can be flexibly configured. Very similar to the classic design pattern "chain of resposibility", 
	/// but without creating classes for each handler.
	/// </summary>
	/// <typeparam name="TResult">Type of result.</typeparam>
	public sealed class ChainOfCircumstances<TResult>
	{

		#region Class: Private

		/// <summary>
		/// Representation of a circumstance which contains post- and pre- conditions,
		/// a sourcing object, and a function to process it.
		/// </summary>
		private class Circumstance
		{
			#region Fields: Private

			private readonly Predicate<object> _preCondition;
			private readonly object _source;
			private readonly Delegate _function;
			private readonly Predicate<TResult> _postCondition;

			#endregion

			#region Constructors: Public

			/// <summary>
			/// Initializes a new instance of a <see cref="Circumstance"/>. 
			/// </summary>
			/// <param name="source">The source.</param>
			/// <param name="function">The function to process the source.</param>
			public Circumstance(object source, Delegate function) {
				_source = source;
				_function = function;
				_preCondition = s => true;
				_postCondition = s => true;
			}

			/// <summary>
			/// Initializes a new instance of a <see cref="Circumstance"/>. 
			/// </summary>
			/// <param name="preCondition">Precondition that the source have to pass.</param>
			/// <param name="source">The source.</param>
			/// <param name="function">The function to process the source.</param>
			public Circumstance(Predicate<object> preCondition, object source, Delegate function)
				: this(source, function) {
				_preCondition = preCondition;
			}

			/// <summary>
			/// Initializes a new instance of a <see cref="Circumstance"/>. 
			/// </summary>
			/// <param name="source">The source.</param>
			/// <param name="function">The function to process the source.</param>
			/// <param name="postCondition">Postcondition that the result have to pass.</param>
			public Circumstance(object source, Delegate function, Predicate<TResult> postCondition)
				: this(source, function) {
				_postCondition = postCondition;
			}

			/// <summary>
			/// Initializes a new instance of a <see cref="Circumstance"/>. 
			/// </summary>
			/// <param name="preCondition">Precondition that the source have to pass.</param>
			/// <param name="source">The source.</param>
			/// <param name="function">The function to process the source.</param>
			/// <param name="postCondition">Postcondition that the result have to pass.</param>
			public Circumstance(Predicate<object> preCondition, object source, Delegate function,
				Predicate<TResult> postCondition)
				: this(source, function) {
				_preCondition = preCondition;
				_postCondition = postCondition;
			}

			#endregion

			#region Methods: Private

			/// <summary>
			/// Invokes the processing function considering whether 
			/// it is parameterless (for sourceless circumstances) or not.
			/// </summary>
			/// <returns>Invokation result.</returns>
			private object ProcessSource() {
				return _function.Method.GetParameters().Count() == 1
					? _function.DynamicInvoke(_source)
					: _function.DynamicInvoke();
			}

			#endregion

			#region Methods: Public

			/// <summary>
			/// Processes the source and gets the result.
			/// </summary>
			/// <returns>Result.</returns>
			public TResult GetResult() {
				if (!_preCondition(_source)) {
					throw new PreConditionFailedException();
				}
				var value = ProcessSource();
				var result = (TResult)value;
				if (!_postCondition(result)) {
					throw new PostConditionFailedException();
				}
				return result;
			}

			#endregion

			#region Exceptions

			/// <summary>
			/// Exception that determines whether any of conditions is failed.
			/// </summary>
			public abstract class ConditionFailedException : Exception { }

			/// <summary>
			/// Exception that determines whether precondition is failed.
			/// </summary>
			private class PreConditionFailedException : ConditionFailedException { }

			/// <summary>
			/// Exception that determines whether postcondition is failed.
			/// </summary>
			private class PostConditionFailedException : ConditionFailedException { }

			#endregion

		}

		#endregion

		#region Fields: Private

		/// <summary>
		/// The chain of circumstances.
		/// </summary>
		private readonly LinkedList<Circumstance> _circumstances = new LinkedList<Circumstance>();

		/// <summary>
		/// Container for thrown exceptions during the execution.
		/// </summary>
		private readonly List<Exception> _thrownExceptions = new List<Exception>();

		#endregion

		#region Properties: Public

		/// <summary>
		/// Thrown exceptions.
		/// </summary>
		public AggregateException ThrownExceptions {
			get {
				return new AggregateException(_thrownExceptions);
			}
		}

		#endregion

		#region Methods: Private

		/// <summary>
		/// Adds a <paramref name="circumstance"/> to the top of the list.
		/// </summary>
		/// <param name="circumstance">Circumstance.</param>
		private void AddFirst(Circumstance circumstance) {
			_circumstances.AddFirst(circumstance);
		}

		/// <summary>
		/// Adds a <paramref name="circumstance"/> to the end of the list.
		/// </summary>
		/// <param name="circumstance">Circumstance.</param>
		private void AddLast(Circumstance circumstance) {
			_circumstances.AddLast(circumstance);
		}

		#endregion

		#region Methods: Public

		#region AddFirst overloads

		#region Sourceless

		/// <summary>
		/// Adds a circumstance to the top of the list.
		/// </summary>
		/// <param name="function">The function to obtain the result.</param>
		/// <returns>Current chain.</returns>
		public ChainOfCircumstances<TResult> AddFirst(Func<TResult> function) {
			AddFirst(new Circumstance(default(TResult), function));
			return this;
		}

		/// <summary>
		/// Adds a circumstance to the top of the list.
		/// </summary>
		/// <param name="function">The function to obtain the result.</param>
		/// <param name="postCondition">Postcondition that the result have to pass.</param>
		/// <returns>Current chain.</returns>
		public ChainOfCircumstances<TResult> AddFirst(Func<TResult> function,
			Predicate<TResult> postCondition) {
			AddFirst(new Circumstance(default(TResult), function, postCondition));
			return this;
		}

		#endregion

		/// <summary>
		/// Adds a circumstance to the top of the list.
		/// </summary>
		/// <typeparam name="TSource">Type of source.</typeparam>
		/// <param name="source">The source.</param>
		/// <param name="function">The function to process the source.</param>
		/// <returns>Current chain.</returns>
		public ChainOfCircumstances<TResult> AddFirst<TSource>(TSource source, Func<TSource, TResult> function) {
			AddFirst(new Circumstance(source, function));
			return this;
		}

		/// <summary>
		/// Adds a circumstance to the top of the list.
		/// </summary>
		/// <typeparam name="TSource">Type of source.</typeparam>
		/// <param name="source">The source.</param>
		/// <param name="function">The function to process the source.</param>
		/// <param name="postCondition">Postcondition that the result have to pass.</param>
		/// <returns>Current chain.</returns>
		public ChainOfCircumstances<TResult> AddFirst<TSource>(
			TSource source, Func<TSource, TResult> function,
			Predicate<TResult> postCondition) {
			AddFirst(new Circumstance(source, function, postCondition));
			return this;
		}

		/// <summary>
		/// Adds a circumstance to the top of the list.
		/// </summary>
		/// <typeparam name="TSource">Type of source.</typeparam>
		/// <param name="preCondition">Precondition that the source have to pass.</param>
		/// <param name="source">The source.</param>
		/// <param name="function">The function to process the source.</param>
		/// <returns>Current chain.</returns>
		public ChainOfCircumstances<TResult> AddFirst<TSource>(
			Predicate<object> preCondition,
			TSource source, Func<TSource, TResult> function) {
			AddFirst(new Circumstance(preCondition, source, function));
			return this;
		}

		/// <summary>
		/// Adds a circumstance to the top of the list.
		/// </summary>
		/// <typeparam name="TSource">Type of source.</typeparam>
		/// <param name="preCondition">Precondition that the source have to pass.</param>
		/// <param name="source">The source.</param>
		/// <param name="function">The function to process the source.</param>
		/// <param name="postCondition">Postcondition that the result have to pass.</param>
		/// <returns>Current chain.</returns>
		public ChainOfCircumstances<TResult> AddFirst<TSource>(
			Predicate<object> preCondition,
			TSource source, Func<TSource, TResult> function,
			Predicate<TResult> postCondition) {
			AddFirst(new Circumstance(preCondition, source, function, postCondition));
			return this;
		}

		#endregion

		#region AddLast overloads

		#region Sourceless

		/// <summary>
		/// Adds a circumstance to the top of the list.
		/// </summary>
		/// <param name="function">The function to obtain the result.</param>
		/// <returns>Current chain.</returns>
		public ChainOfCircumstances<TResult> AddLast(Func<TResult> function) {
			AddLast(new Circumstance(default(TResult), function));
			return this;
		}

		/// <summary>
		/// Adds a circumstance to the end of the list.
		/// </summary>
		/// <param name="function">The function to obtain the result.</param>
		/// <param name="postCondition">Postcondition that the result have to pass.</param>
		/// <returns>Current chain.</returns>
		public ChainOfCircumstances<TResult> AddLast(Func<TResult> function,
			Predicate<TResult> postCondition) {
			AddLast(new Circumstance(default(TResult), function, postCondition));
			return this;
		}

		#endregion

		/// <summary>
		/// Adds a circumstance to the end of the list.
		/// </summary>
		/// <typeparam name="TSource">Type of source.</typeparam>
		/// <param name="source">The source.</param>
		/// <param name="function">The function to process the source.</param>
		/// <returns>Current chain.</returns>
		public ChainOfCircumstances<TResult> AddLast<TSource>(TSource source, Func<TSource, TResult> function) {
			AddLast(new Circumstance(source, function));
			return this;
		}

		/// <summary>
		/// Adds a circumstance to the end of the list.
		/// </summary>
		/// <typeparam name="TSource">Type of source.</typeparam>
		/// <param name="source">The source.</param>
		/// <param name="function">The function to process the source.</param>
		/// <param name="postCondition">Postcondition that the result have to pass.</param>
		/// <returns>Current chain.</returns>
		public ChainOfCircumstances<TResult> AddLast<TSource>(
			TSource source, Func<TSource, TResult> function,
			Predicate<TResult> postCondition) {
			AddLast(new Circumstance(source, function, postCondition));
			return this;
		}

		/// <summary>
		/// Adds a circumstance to the end of the list.
		/// </summary>
		/// <typeparam name="TSource">Type of source.</typeparam>
		/// <param name="preCondition">Precondition that the source have to pass.</param>
		/// <param name="source">The source.</param>
		/// <param name="function">The function to process the source.</param>
		/// <returns>Current chain.</returns>
		public ChainOfCircumstances<TResult> AddLast<TSource>(
			Predicate<object> preCondition,
			TSource source, Func<TSource, TResult> function) {
			AddLast(new Circumstance(preCondition, source, function));
			return this;
		}

		/// <summary>
		/// Adds a circumstance to the end of the list.
		/// </summary>
		/// <typeparam name="TSource">Type of source.</typeparam>
		/// <param name="preCondition">Precondition that the source have to pass.</param>
		/// <param name="source">The source.</param>
		/// <param name="function">The function to process the source.</param>
		/// <param name="postCondition">Postcondition that the result have to pass.</param>
		/// <returns>Current chain.</returns>
		public ChainOfCircumstances<TResult> AddLast<TSource>(
			Predicate<object> preCondition,
			TSource source, Func<TSource, TResult> function,
			Predicate<TResult> postCondition) {
			AddLast(new Circumstance(preCondition, source, function, postCondition));
			return this;
		}

		#endregion

		/// <summary>
		/// Executes current chain of circumstances.
		/// </summary>
		/// <returns>Chain result.</returns>
		public TResult Execute() {
			if (_thrownExceptions.Any()) {
				_thrownExceptions.Clear();
			}
			LinkedListNode<Circumstance> current = _circumstances.First;
			while (current != null) {
				Circumstance circumstance = current.Value;
				try {
					#pragma warning disable S1751
					return circumstance.GetResult();
					#pragma warning restore S1751
				} catch (Exception e) {
					bool isConditionFailed = e is Circumstance.ConditionFailedException;
					if (!isConditionFailed) {
						_thrownExceptions.Add(e.InnerException);
					}
					current = current.Next;
				}
			}
			return default(TResult);
		}

		#endregion

		#region Operators: Public

		/// <summary>
		/// Concatenates two chains into a new one.
		/// </summary>
		/// <param name="first">First chain.</param>
		/// <param name="second">Second chain.</param>
		/// <returns>Concatenated.</returns>
		public static ChainOfCircumstances<TResult> operator +(
			ChainOfCircumstances<TResult> first,
			ChainOfCircumstances<TResult> second) {
			var result = new ChainOfCircumstances<TResult>();
			foreach (var circumstance in first._circumstances) {
				result.AddLast(circumstance);
			}
			foreach (var circumstance in second._circumstances) {
				result.AddLast(circumstance);
			}
			return result;
		}

		#endregion

	}

	#endregion

}
