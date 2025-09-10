import React from "react";
import "./Sidebar.css";

import DashboardIcon from "../assets/dashboard.svg?react";
import TimeTableIcon from "../assets/timetable.svg?react";
import NotificationsIcon from "../assets/notifications.svg?react";
import ChatIcon from "../assets/chat.svg?react";
import MaterialsIcon from "../assets/materials.svg?react";
import LogoIcon from "../assets/logo.svg?react"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <LogoIcon/>
      </div>

      {/* Menu */}
      <nav className="menu">
        <button className="menu-item active">
          <DashboardIcon className="icon" />
          <span>Dashboard</span>
        </button>
        <button className="menu-item">
          <TimeTableIcon className="icon" />
          <span>Time Table</span>
        </button>
        <button className="menu-item">
          <NotificationsIcon className="icon" />
          <span>Notifications</span>
        </button>
        <button className="menu-item">
          <ChatIcon className="icon" />
          <span>Chat</span>
        </button>
        <button className="menu-item">
          <MaterialsIcon className="icon" />
          <span>Materials</span>
        </button>
      </nav>

      {/* User */}
      <div className="user">
        <div className="avatar">U</div>
        <div className="user-info">
          <span className="name">User Name</span>
          <span className="role">Faculty</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
