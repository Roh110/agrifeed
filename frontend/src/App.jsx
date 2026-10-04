
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import FeedAnalysis from "./pages/FeedAnalysis";
import Results from "./pages/Results";
import History from "./pages/History";
import Recommendations from "./pages/Recommendations";
import Alerts from "./pages/Alerts";
import FarmManagement from "./pages/FarmManagement";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";

function MainLayout() {
  return (
    <div className="app-shell">
      <Navbar />

      <div className="app-body">
        <Sidebar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="feed-analysis" element={<FeedAnalysis />} />
          <Route path="results" element={<Results />} />
          <Route path="history" element={<History />} />
          <Route path="recommendations" element={<Recommendations />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="farm-management" element={<FarmManagement />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;