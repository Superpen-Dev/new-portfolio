import React, { useState, useEffect } from "react";
import "./DarkMode.css";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle the mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to the body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="dark-mode-container">
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? "Light Mode 🌞" : "Dark Mode 🌙"}
      </button>
    </div>
  );
};

export default DarkMode;
