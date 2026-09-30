import React from "react";

function DashboardCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  trendType = "positive"
}) {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card-top">
        <div className="dashboard-card-icon">
          {icon}
        </div>

        {trend && (
          <span className={`card-trend ${trendType}`}>
            {trend}
          </span>
        )}
      </div>

      <div className="dashboard-card-content">
        <p className="dashboard-card-title">
          {title}
        </p>

        <h2 className="dashboard-card-value">
          {value}
        </h2>

        {subtitle && (
          <p className="dashboard-card-subtitle">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

export default DashboardCard;