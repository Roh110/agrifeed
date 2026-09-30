import React from "react";
import {
  LayoutDashboard,
  FlaskConical,
  History,
  Lightbulb,
  Bell,
  Building2,
  Settings,
  LogOut
} from "lucide-react";

function Sidebar() {
  const menuItems = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard"
    },
    {
      icon: <FlaskConical size={20} />,
      label: "Feed Analysis"
    },
    {
      icon: <History size={20} />,
      label: "History"
    },
    {
      icon: <Lightbulb size={20} />,
      label: "Recommendations"
    },
    {
      icon: <Bell size={20} />,
      label: "Alerts"
    },
    {
      icon: <Building2 size={20} />,
      label: "Farm Management"
    },
    {
      icon: <Settings size={20} />,
      label: "Settings"
    }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Menu</h2>
      </div>

      <div className="sidebar-menu">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <span className="menu-icon">
              {item.icon}
            </span>

            <span className="menu-label">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="sidebar-footer">
        <div className="menu-item logout">
          <LogOut size={20} />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;