namespace Terrasoft.Configuration
    {
        using System;
        using System.Collections.Generic;
    
        #region Interface: IPushNotificationProvider
    
        /// <summary>
        /// Interface of push notification providers.
        /// </summary>
        public interface IPushNotificationProvider
        {
            void Send(PushNotificationData data);
        }
    
        #endregion
    
        #region Class: PushNotificationData
    
        /// <summary>
        /// Represents push notification data.
        /// </summary>
        public class PushNotificationData
        {
            [Obsolete("Deprecated since 8.0.3. Use SysAdminUnitId instead")]
            public string Token {
                get;
                set;
            }
    
            public Guid? SysAdminUnitId {
                get;
                set;
            }
    
            public string Title {
                get;
                set;
            }
    
            public string Message {
                get;
                set;
            }
    
            public Dictionary<string, string> AdditionalData {
                get;
                set;
            }
        }
    
        #endregion
    
    }
