import React from "react";
import AlertCard from "../components/AlertCard";

function Alerts() {
  const alerts = [
    {
      id: 1,
      title: "High Moisture Detected",
      message:
        "A recent sample has a moisture value that may require further inspection.",
      type: "warning",
      date: "Today"
    },
    {
      id: 2,
      title: "Feed Analysis Completed",
      message:
        "The latest maize silage sample analysis has been completed.",
      type: "success",
      date: "Yesterday"
    },
    {
      id: 3,
      title: "Sample Requires Review",
      message:
        "Review the recorded nutrient values before using them for feeding decisions.",
      type: "info",
      date: "2 days ago"
    },
    {
      id: 4,
      title: "Potential Quality Concern",
      message:
        "Inspect the feed for spoilage and consider confirmatory testing if necessary.",
      type: "danger",
      date: "3 days ago"
    }
  ];

  return (
    <div className="alerts-page">
      <div className="page-header">
        <div>
          <h1>Alerts & Notifications</h1>
          <p>
            Monitor feed quality notifications and items requiring attention.
          </p>
        </div>
      </div>

      <div className="alerts-summary">
        <div className="alert-summary-card">
          <span>Total Alerts</span>
          <h2>{alerts.length}</h2>
        </div>

        <div className="alert-summary-card">
          <span>Warnings</span>
          <h2>
            {alerts.filter((item) => item.type === "warning").length}
          </h2>
        </div>

        <div className="alert-summary-card">
          <span>Completed</span>
          <h2>
            {alerts.filter((item) => item.type === "success").length}
          </h2>
        </div>
      </div>

      <section className="alerts-list">
        {alerts.map((alert) => (
          <AlertCard
            key={alert.id}
            title={alert.title}
            message={alert.message}
            type={alert.type}
            date={alert.date}
          />
        ))}
      </section>
    </div>
  );
}

export default Alerts;