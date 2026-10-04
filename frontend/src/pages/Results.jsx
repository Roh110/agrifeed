import React from "react";
import ScanResult from "../components/ScanResult";
import RecommendationCard from "../components/RecommendationCard";
import NutrientChart from "../components/NutrientChart";

function Results() {

  const result = {
    qualityScore: 86,
    moisture: 31.5,
    protein: 18.2,
    fiber: 24.6,
    fat: 4.8,
    ash: 7.2,
    energy: 2650,
    qualityStatus: "Excellent",
    mycotoxinRisk: "Low risk detected"
  };

  const recommendation = {
    feedType: "Maize Silage",
    quantity: 18,
    proteinTarget: 16,
    energyTarget: 2800,
    note:
      "Maintain adequate fiber and consider adding a protein-rich feed source to balance the ration."
  };

  const nutrientData = [
    {
      name: "Protein",
      value: result.protein
    },
    {
      name: "Fiber",
      value: result.fiber
    },
    {
      name: "Fat",
      value: result.fat
    },
    {
      name: "Ash",
      value: result.ash
    }
  ];

  return (
    <div className="results-page">

      <div className="page-header">
        <div>
          <h1>Analysis Results</h1>

          <p>
            Detailed results from your latest feed analysis.
          </p>
        </div>

        <button className="primary-button">
          Download Report
        </button>
      </div>

      <div className="results-main">

        <ScanResult
          result={result}
        />

        <NutrientChart
          data={nutrientData}
        />

        <RecommendationCard
          recommendation={recommendation}
        />

      </div>

    </div>
  );
}

export default Results;