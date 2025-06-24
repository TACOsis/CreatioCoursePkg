namespace Terrasoft.Configuration
{
	using System;

	#region Interface: IEntityFileCopier

	/// <summary>
	/// Represents contract for copying entity files with specific options.
	/// </summary>
	public interface IEntityFileCopier
	{

		#region Methods: Public

		/// <summary>
		/// Copy all files from one entity to another.
		/// </summary>
		/// <param name="sourceMasterSchemaName">Schema name of source master entity.</param>
		/// <param name="sourceMasterRecordId">Source master record uniqueidentifier.</param>
		/// <param name="targetMasterRecordId">Target master record uniqueidentifier.</param>
		void CopyAll(string sourceMasterSchemaName, Guid sourceMasterRecordId, Guid targetMasterRecordId);

		#endregion

	}

	#endregion

}
