namespace Terrasoft.Configuration {

	#region Class: FileSizeConverter
	
	public static class FileSizeConverter {

		#region Methods: Public

		/// <summary>
		/// Convert size in Mb to size in bytes.
		/// </summary>
		/// <param name="sizeInMb"></param>
		/// <returns></returns>
		public static decimal MbToBytes(int sizeInMb) => (decimal)sizeInMb * 1024 * 1024;

		#endregion

	}

	#endregion

}

