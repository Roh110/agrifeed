import React from "react";
import DashboardCard from "../components/DashboardCard";
import AlertCard from "../components/AlertCard";

function AdminDashboard() {
  const recentUsers = [
    {
      id: 1,
      name: "Ravi Kumar",
      email: "ravi@example.com",
      farm: "Green Valley Farm",
      status: "Active"
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@example.com",
      farm: "Sunrise Dairy",
      status: "Active"
    },
    {
      id: 3,
      name: "Arun Reddy",
      email: "arun@example.com",
      farm: "Harvest Fields",
      status: "Pending"
    }
  ];

  return (
    <div className="admin-dashboard">
      <div className="page-header">
        <div>
          <h1>Admin Dashboard</h1>

          <p>
            Overview of platform activity and farm registrations.
          </p>
        </div>
      </div>

      <div className="dashboard-stats">
        <DashboardCard
          title="Registered Users"
          value="156"
          subtitle="Demo platform total"
          icon="👥"
        />

        <DashboardCard
          title="Registered Farms"
          value="84"
          subtitle="Demo farm count"
          icon="🏡"
        />

        <DashboardCard
          title="Analyses Completed"
          value="1,248"
          subtitle="Illustrative statistics"
          icon="🧪"
        />

        <DashboardCard
          title="Pending Reviews"
          value="12"
          subtitle="Demo review queue"
          icon="📋"
        />
      </div>

      <section className="admin-section">
        <h2>Recent Registrations</h2>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Farm</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {recentUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.farm}</td>
                  <td>
                    <span
                      className={
                        user.status === "Active"
                          ? "history-status"
                          : "pending-status"
                      }
                    >
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="admin-section">
        <h2>System Notifications</h2>

        <div className="alerts-list">
          <AlertCard
            title="Backend Integration Pending"
            message="Connect the frontend to the API before using real user and farm records."
            type="info"
            date="Development"
          />

          <AlertCard
            title="AI Model Validation Required"
            message="Validate nutrient predictions against laboratory-tested feed samples before production use."
            type="warning"
            date="Development"
          />
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;