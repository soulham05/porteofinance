import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css"; // Ajouter le style

const Sidebar = ({ menuItems }) => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">PORTEO GROUP Reporting Financier</h2>
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={location.pathname === item.path ? "active" : ""}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;