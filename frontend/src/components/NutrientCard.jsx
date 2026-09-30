import React from "react";

function NutrientCard({
  name,
  value,
  unit,
  icon,
  status = "Normal"
}) {
  return (
    <div className="nutrient-card">
      <div className="nutrient-card-header">
        <div className="nutrient-icon">
          {icon}
        </div>

        <span className={`nutrient-status ${status.toLowerCase()}`}>
          {status}
        </span>
      </div>

      <div className="nutrient-card-body">
        <p className="nutrient-name">
          {name}
        </p>

        <h2 className="nutrient-value">
          {value} {unit}
        </h2>
      </div>
    </div>
  );
}

export default NutrientCard;