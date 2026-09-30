import React from "react";

function QualityScore({
  score = 0,
  status = "Good"
}) {
  let scoreClass = "quality-good";

  if (score < 50) {
    scoreClass = "quality-poor";
  } else if (score < 75) {
    scoreClass = "quality-average";
  }

  return (
    <div className="quality-score-card">
      <div className="quality-score-header">
        <h3>Feed Quality Score</h3>

        <span className={`quality-status ${scoreClass}`}>
          {status}
        </span>
      </div>

      <div className="quality-score-body">
        <div className={`score-circle ${scoreClass}`}>
          <span className="score-number">
            {score}
          </span>

          <span className="score-label">
            /100
          </span>
        </div>

        <div className="quality-description">
          <p>
            Overall quality assessment based on
            nutrient composition and feed condition.
          </p>
        </div>
      </div>
    </div>
  );
}

export default QualityScore;