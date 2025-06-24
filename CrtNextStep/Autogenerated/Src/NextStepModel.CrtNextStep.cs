namespace Terrasoft.Configuration.NextSteps
{
	using System;
	using Terrasoft.Common;

	#region Class: NextStepModel

	/// <summary>
	/// Next step model.
	/// </summary>
	public class NextStepModel: IEquatable<NextStepModel>
	{
		/// <summary>
		/// Unique next step identifier.
		/// </summary>
		public Guid Id { get; set; }

		/// <summary>
		/// Next step process element identifier. Elements created by the process usually have this identifier.
		/// </summary>
		public Guid ProcessElementId { get; set; }

		/// <summary>
		/// Next step caption.
		/// </summary>
		public string Caption { get; set; }

		/// <summary>
		/// Is next step owner role flag.
		/// </summary>
		public bool IsOwnerRole { get; set; }

		/// <summary>
		/// Next step owner name.
		/// </summary>
		public string OwnerName { get; set; }

		/// <summary>
		/// Next step owner photo identifier.
		/// </summary>
		public Guid OwnerPhotoId { get; set; }

		/// <summary>
		/// Next step owner identifier.
		/// </summary>
		public Guid OwnerId { get; set; }

		/// <summary>
		/// Master entity identifier.
		/// </summary>
		public Guid MasterEntityId { get; set; }

		/// <summary>
		/// Master entity name.
		/// </summary>
		public string MasterEntityName { get; set; }

		/// <summary>
		/// Source entity name.
		/// </summary>
		public string EntityName { get; set; }

		/// <summary>
		/// Whether the next step is required.
		/// </summary>
		public bool IsRequired { get; set; }

		/// <summary>
		/// Next step date.
		/// </summary>
		public DateTime Date { get; set; }

		/// <summary>
		/// Additional information for custom data.
		/// </summary>
		public string AdditionalInfo { get; set; }

		/// <summary>
		/// Indicates whether the current object is equal to another object of the same type.
		/// </summary>
		/// <param name="other"><see cref="NextStepModel"/> instance.</param>
		/// <returns>True, when object are equals, otherwise false.</returns>
		public bool Equals(NextStepModel other) {
			var isEmpty = ProcessElementId.IsEmpty() && other.ProcessElementId.IsEmpty();
			return isEmpty
				? Id == other.Id
				: ProcessElementId == other.ProcessElementId;
		}
	}

	#endregion

}

