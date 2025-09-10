import React from "react";
import "./QuickActions.css";



const QuickActions = () => {
  return (
    <div className="quick-actions">
      <h3>Quick Actions</h3>
      <ul>
        <li>
          <span>📡 Start Live Lecture</span>
          <button className="live">Go Live</button>
        </li>
        <li>
          <span>📂 Upload Lecture Notes</span>
          <button>Upload</button>
        </li>
      </ul>
    </div>
  );
};

export default QuickActions;
