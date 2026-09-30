import React from "react";

function AlertCard({
  title,
  message,
  type = "warning",
  date
}) {
  return (
    <div className={`alert-card alert-${type}`}>
      <div className="alert-icon">
        {type === "danger" && "🚨"}
        {type === "warning" && "⚠️"}
        {type === "success" && "✅"}
        {type === "info" && "ℹ️"}
      </div>

      <div className="alert-content">
        <h3>{title}</h3>

        <p>{message}</p>

        {date && (
          <span className="alert-date">
            {date}
          </span>
        )}
      </div>
    </div>
  );
}

export default AlertCard;