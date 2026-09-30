import React from "react";

function RecommendationCard({
  recommendation
}) {
  if (!recommendation) {
    return (
      <div className="recommendation-card">
        <p>No recommendation available.</p>
      </div>
    );
  }

  return (
    <div className="recommendation-card">
      <div className="recommendation-header">
        <div className="recommendation-icon">
          💡
        </div>

        <div>
          <h2>Ration Recommendation</h2>

          <p>
            AI-based feeding recommendation
          </p>
        </div>
      </div>

      <div className="recommendation-body">
        <div className="recommendation-item">
          <span>Recommended Feed</span>

          <strong>
            {recommendation.feedType}
          </strong>
        </div>

        <div className="recommendation-item">
          <span>Daily Quantity</span>

          <strong>
            {recommendation.quantity} kg
          </strong>
        </div>

        <div className="recommendation-item">
          <span>Protein Target</span>

          <strong>
            {recommendation.proteinTarget}%
          </strong>
        </div>

        <div className="recommendation-item">
          <span>Energy Target</span>

          <strong>
            {recommendation.energyTarget} kcal
          </strong>
        </div>
      </div>

      <div className="recommendation-note">
        <h3>Recommendation</h3>

        <p>
          {recommendation.note}
        </p>
      </div>
    </div>
  );
}

export default RecommendationCard;