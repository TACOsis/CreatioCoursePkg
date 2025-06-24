namespace Terrasoft.Configuration.ML
{
	using System;

	public class MLUploadingData
	{

		#region Constructors: Public

		public MLUploadingData(string data) {
			Data = data;
		}

		public MLUploadingData(string data, Guid fileId, string fileName, int chunkNumber,
				string encodingAlgorithm = "base64") {
			Data = data;
			FileId = fileId;
			FileName = fileName;
			ChunkNumber = chunkNumber;
			EncodingAlgorithm = encodingAlgorithm;
		}

		#endregion

		#region Properties: Public

		public string Data { get; set; }
		public Guid? FileId { get; set; }
		public string FileName { get; set; }
		public int? ChunkNumber { get; set; }
		public string EncodingAlgorithm { get; set; }

		#endregion

	}
} 
