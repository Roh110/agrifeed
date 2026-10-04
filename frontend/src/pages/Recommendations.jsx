import React from "react";
import RecommendationCard from "../components/RecommendationCard";

function Recommendations() {
  const recommendations = [
    {
      id: 1,
      feedType: "Maize Silage",
      quantity: 18,
      proteinTarget: 16,
      energyTarget: 2800,
      note: "Maintain adequate fiber and balance the ration with a suitable protein source."
    },
    {
      id: 2,
      feedType: "Green Fodder",
      quantity: 12,
      proteinTarget: 14,
      energyTarget: 2400,
      note: "Combine with suitable dry fodder and monitor the animal's nutritional requirements."
    },
    {
      id: 3,
      feedType: "Wheat Straw",
      quantity: 5,
      proteinTarget: 12,
      energyTarget: 2000,
      note: "Wheat straw is typically low in protein. Consider balancing it with appropriate supplements."
    }
  ];

  return (
    <div className="recommendations-page">
      <div className="page-header">
        <div>
          <h1>Feed Recommendations</h1>
          <p>
            Review suggested feeding plans and nutritional targets.
          </p>
        </div>
      </div>

      <div className="recommendations-grid">
        {recommendations.map((item) => (
          <RecommendationCard
            key={item.id}
            recommendation={item}
          />
        ))}
      </div>

      <div className="recommendation-disclaimer">
        <p>
          These are illustrative recommendations for demonstration.
          Actual feeding quantities and nutrient targets should be
          determined using validated feed analysis and professional
          animal nutrition guidance.
        </p>
      </div>
    </div>
  );
}

export default Recommendations;