import React from "react";

function ScanResult({ result }) {
  if (!result) {
    return (
      <div className="scan-result-empty">
        <p>No analysis result available.</p>
      </div>
    );
  }

  return (
    <div className="scan-result-card">
      <div className="scan-result-header">
        <div>
          <h2>Feed Analysis Result</h2>
          <p>AI-generated nutrient analysis</p>
        </div>

        <div className="result-score">
          <span>Quality Score</span>
          <strong>{result.qualityScore}/100</strong>
        </div>
      </div>

      <div className="result-grid">
        <div className="result-item">
          <span>Moisture</span>
          <strong>{result.moisture}%</strong>
        </div>

        <div className="result-item">
          <span>Crude Protein</span>
          <strong>{result.protein}%</strong>
        </div>

        <div className="result-item">
          <span>Fiber</span>
          <strong>{result.fiber}%</strong>
        </div>

        <div className="result-item">
          <span>Fat</span>
          <strong>{result.fat}%</strong>
        </div>

        <div className="result-item">
          <span>Ash</span>
          <strong>{result.ash}%</strong>
        </div>

        <div className="result-item">
          <span>Energy</span>
          <strong>{result.energy} kcal</strong>
        </div>
      </div>

      <div className="quality-section">
        <h3>Quality Status</h3>

        <span className="quality-badge">
          {result.qualityStatus}
        </span>
      </div>

      <div className="mycotoxin-section">
        <h3>Mycotoxin Risk</h3>

        <p>
          {result.mycotoxinRisk || "No significant risk detected."}
        </p>
      </div>
    </div>
  );
}

export default ScanResult;