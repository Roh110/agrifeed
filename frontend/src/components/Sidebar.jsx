
import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ScanSearch,
  History,
  Lightbulb,
  Bell,
  Sprout,
  Settings,
  LogOut,
  ShieldCheck,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
    end: true,
  },
  {
    name: "Feed Analysis",
    path: "/feed-analysis",
    icon: ScanSearch,
  },
  {
    name: "History",
    path: "/history",
    icon: History,
  },
  {
    name: "Recommendations",
    path: "/recommendations",
    icon: Lightbulb,
  },
  {
    name: "Alerts",
    path: "/alerts",
    icon: Bell,
  },
  {
    name: "Farm Management",
    path: "/farm-management",
    icon: Sprout,
  },
  {
    name: "Admin Dashboard",
    path: "/admin",
    icon: ShieldCheck,
  },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-heading">
        <span className="sidebar-section-label">WORKSPACE</span>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <Icon size={19} strokeWidth={1.8} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-help">
          <div className="help-icon">
            <Sprout size={20} />
          </div>

          <div>
            <strong>AgriSmart AI</strong>
            <p>Smart feed management</p>
          </div>
        </div>

        <NavLink to="/login" className="sidebar-link logout-link">
          <LogOut size={19} />
          <span>Login / Logout</span>
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;