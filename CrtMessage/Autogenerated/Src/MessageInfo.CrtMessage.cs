using System;
using System.Collections.Generic;
using Terrasoft.Core.Entities;

namespace Terrasoft.Configuration
{

	#region Class: MessageInfo

	public class MessageInfo
	{

		#region Properties: Public

		public string Message {
			set;
			get;
		}

		public Guid CreatedById {
			set;
			get;
		}

		public DateTime CreatedOn {
			set;
			get;
		}

		public Guid ModifiedById {
			set;
			get;
		}

		public DateTime ModifiedOn {
			set;
			get;
		}

		public DateTime MessageHistoryCreatedOn {
			set;
			get;
		}

		public Guid NotifierRecordId {
			set;
			get;
		}

		public bool HasAttachment {
			set;
			get;
		}

		/// <summary>
		/// Dictionary schemaUIds and recordIds of listeners.
		/// </summary>
		public Dictionary<Guid, Guid> ListenersData {
			set;
			get;
		}

		public Guid SchemaUId {
			set;
			get;
		}

		/// <summary>
		/// Entity state.
		/// </summary>
		public EntityChangeType EntityState {
			get;
			set;
		}

		#endregion

	}

	#endregion

}


