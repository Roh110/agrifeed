import React, { useState } from "react";
import FeedUpload from "../components/FeedUpload";
import LoadingSpinner from "../components/LoadingSpinner";

function FeedAnalysis() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleAnalyze = (file) => {
    setSelectedFile(file);
    setIsAnalyzing(true);

    // Temporary simulation.
    // Later this will call the FastAPI backend.
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="feed-analysis-page">

      <div className="page-header">
        <div>
          <h1>Feed Analysis</h1>

          <p>
            Upload a feed or silage sample for AI-powered
            quality analysis.
          </p>
        </div>
      </div>

      {!isAnalyzing && (
        <FeedUpload
          onAnalyze={handleAnalyze}
        />
      )}

      {isAnalyzing && (
        <LoadingSpinner
          message="Analyzing your feed sample..."
        />
      )}

      {selectedFile && !isAnalyzing && (
        <div className="analysis-complete">
          <h3>Analysis completed</h3>

          <p>
            Sample:
            {" "}
            {selectedFile.name}
          </p>
        </div>
      )}

    </div>
  );
}

export default FeedAnalysis;