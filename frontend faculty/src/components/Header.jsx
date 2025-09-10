import React from "react";
import "./Header.css";
import BellIcon from "../assets/bell.svg?react";

const Header = () => {
  return (
    <header className="header">
      <h2>Dashboard</h2>
      <div className="header-actions">
        <button className="bell-btn">
          <BellIcon className="icon" />
          <span className="badge">5</span>
        </button>
        <button className="new-lecture">+ New Lecture</button>
      </div>
    </header>
  );
};

export default Header;
