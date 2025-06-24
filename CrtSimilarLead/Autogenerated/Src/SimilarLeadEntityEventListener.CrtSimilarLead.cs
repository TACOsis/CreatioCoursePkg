 namespace Terrasoft.Configuration
{
	using System.Collections.Generic;
	using Terrasoft.Common;
	using Terrasoft.Common.Json;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Entities.Events;

	#region Class: SimilarLeadEntityEventListener

	/// <summary>
	/// Listener for <see cref="SimilarLead"/> entity events.
	/// </summary>
	/// <seealso cref="BaseEntityEventListener" />
	[EntityEventListener(SchemaName = "SimilarLead")]
	public class SimilarLeadEntityEventListener : BaseEntityEventListener
	{

		#region Methods: Private

		#endregion

		#region Methods: Public

		/// <summary>
		/// Handles <see cref="SimilarLead"/> entity <see cref="OnInserting"/> event.
		/// </summary>
		/// <param name="sender">Event sender.</param>
		/// <param name="e">The <see cref="T:Terrasoft.Core.Entities.EntityBeforeEventArgs" /> instance containing the
		/// event data.</param>
		public override void OnInserting(object sender, EntityBeforeEventArgs e) {
			base.OnInserting(sender, e);
		}

		#endregion

	}

	#endregion

}


