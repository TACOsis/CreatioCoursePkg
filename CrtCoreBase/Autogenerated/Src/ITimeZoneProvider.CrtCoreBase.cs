namespace Terrasoft.Configuration
{
	using System;
	using Core.Entities;

	/// <summary>
	/// Provides time zone by given source.
	/// </summary>
	/// <typeparam name="TEntity">Time zone source.</typeparam>
	public interface ITimeZoneProvider<TEntity>
		where TEntity : Entity
	{
		/// <summary>
		/// Gets time zone.
		/// </summary>
		/// <returns>Time zone.</returns>
		TimeZoneInfo GetTimeZone();
	}
}
