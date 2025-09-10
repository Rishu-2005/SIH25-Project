import React from "react";
import BellIcon from "../assets/bell.svg?react";
import "./Notifications.css";

const Notifications = () => {
  const notifications = [
    "New assignment uploaded for Machine Learning.",
    "Schedule updated: Theory of Computation postponed.",
    "Reminder: Upload lecture notes for Frontend Development.",
  ];

  return (
    <div className="notifications">
      <h3>Notifications</h3>
      <ul>
        {notifications.map((note, idx) => (
          <li key={idx} className="notification-item">
            <div className="bell-circle">
              <BellIcon className="bell-icon" />
            </div>
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
