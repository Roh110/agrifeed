import React, { useState } from "react";

function FeedUpload({ onAnalyze }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = () => {
    if (!file) {
      alert("Please select a feed sample first.");
      return;
    }

    if (onAnalyze) {
      onAnalyze(file);
    }
  };

  return (
    <div className="feed-upload-card">
      <div className="upload-header">
        <h2>Feed Analysis</h2>

        <p>
          Upload a feed or silage sample image for AI analysis.
        </p>
      </div>

      <div className="upload-area">
        <div className="upload-icon">
          🌾
        </div>

        <h3>Upload Feed Sample</h3>

        <p>
          Select an image of your feed or silage sample
        </p>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />

        {file && (
          <p className="selected-file">
            Selected: {file.name}
          </p>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          className="analyze-button"
        >
          Analyze Feed
        </button>
      </div>
    </div>
  );
}

export default FeedUpload;