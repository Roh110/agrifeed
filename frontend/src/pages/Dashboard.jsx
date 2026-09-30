import React from "react";
import DashboardCard from "../components/DashboardCard";
import NutrientCard from "../components/NutrientCard";
import QualityScore from "../components/QualityScore";
import NutrientChart from "../components/NutrientChart";
import AlertCard from "../components/AlertCard";

function Dashboard() {
  const nutrientData = [
    {
      name: "Protein",
      value: 18
    },
    {
      name: "Fiber",
      value: 25
    },
    {
      name: "Fat",
      value: 5
    },
    {
      name: "Ash",
      value: 8
    }
  ];

  return (
    <div className="dashboard-page">

      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>

          <p>
            Welcome back! Here's an overview of your
            feed analysis.
          </p>
        </div>

        <button className="primary-button">
          + New Analysis
        </button>
      </div>


      {/* Dashboard Statistics */}
      <div className="dashboard-stats">

        <DashboardCard
          title="Feed Samples"
          value="128"
          subtitle="Analyzed this month"
          icon="🌾"
          trend="+12%"
        />

        <DashboardCard
          title="Average Quality"
          value="84/100"
          subtitle="Overall feed quality"
          icon="⭐"
          trend="+8%"
        />

        <DashboardCard
          title="Total Farms"
          value="24"
          subtitle="Active farms"
          icon="🏡"
          trend="+4%"
        />

        <DashboardCard
          title="Alerts"
          value="6"
          subtitle="Need attention"
          icon="🔔"
          trend="-15%"
          trendType="positive"
        />

      </div>


      {/* Nutrient Overview */}
      <section className="dashboard-section">

        <div className="section-header">
          <div>
            <h2>Nutrient Overview</h2>

            <p>
              Latest analyzed feed composition
            </p>
          </div>
        </div>

        <div className="nutrient-grid">

          <NutrientCard
            name="Moisture"
            value="31.5"
            unit="%"
            icon="💧"
            status="Normal"
          />

          <NutrientCard
            name="Crude Protein"
            value="18.2"
            unit="%"
            icon="🥛"
            status="Good"
          />

          <NutrientCard
            name="Fiber"
            value="24.6"
            unit="%"
            icon="🌿"
            status="Normal"
          />

          <NutrientCard
            name="Fat"
            value="4.8"
            unit="%"
            icon="🧈"
            status="Normal"
          />

        </div>

      </section>


      {/* Analysis Section */}
      <div className="dashboard-analysis">

        <NutrientChart
          data={nutrientData}
        />

        <QualityScore
          score={86}
          status="Excellent"
        />

      </div>


      {/* Alerts */}
      <section className="dashboard-section">

        <div className="section-header">
          <div>
            <h2>Recent Alerts</h2>

            <p>
              Feed quality notifications
            </p>
          </div>
        </div>

        <div className="alerts-list">

          <AlertCard
            title="High Moisture Detected"
            message="One recent feed sample has moisture above the recommended level."
            type="warning"
            date="Today"
          />

          <AlertCard
            title="Analysis Completed"
            message="Your latest maize silage sample has been successfully analyzed."
            type="success"
            date="Yesterday"
          />

        </div>

      </section>

    </div>
  );
}

export default Dashboard;