import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <header className="header">
      <div className="logo-and-nav">
        <div className="brand">Superpen-Dev</div>
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#technologies">TECHNOLOGIES</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
        <div className="menu-icon" onClick={toggleSidebar}>
          {isSidebarOpen ? "✖" : "☰"}
        </div>
      </div>

      {/* Overlay for closing the sidebar */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}

      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul className="sidebar-links">
          <li><a href="#services" onClick={closeSidebar}>SERVICES</a></li>
          <li><a href="#technologies" onClick={closeSidebar}>TECHNOLOGIES</a></li>
          <li><a href="#portfolio" onClick={closeSidebar}>PORTFOLIO</a></li>
          <li><a href="#contact" onClick={closeSidebar}>CONTACT</a></li>
        </ul>
      </aside>
    </header>
  );
};

export default Header;
