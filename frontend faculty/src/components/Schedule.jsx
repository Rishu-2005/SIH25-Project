import React from "react";
import "./Schedule.css";

const Schedule = () => {
  const lectures = [
    {
      subject: "Machine Learning",
      time: "8:00 - 8:50",
      actions: ["Details", "Go Live"],
    },
    {
      subject: "Machine Learning",
      time: "8:50 - 9:40",
      actions: ["Details"],
    },
    {
      subject: "Frontend Development",
      time: "9:45 - 10:35",
      actions: ["Details"],
    },
    {
      subject: "Theory of Computation",
      time: "10:35 - 11:25",
      actions: ["Details"],
    },
  ];

  return (
    <div className="card schedule">
      <h3>Today’s Schedule</h3>
      <div className="schedule-list">
        {lectures.map((lecture, index) => (
          <div key={index} className="schedule-item">
            <div className="lecture-info">
              <span className="subject">{lecture.subject}</span>
              <span className="time">{lecture.time}</span>
            </div>
            <div className="actions">
              {lecture.actions.includes("Details") && (
                <button className="btn-outline">Details</button>
              )}
              {lecture.actions.includes("Go Live") && (
                <button className="btn">Go Live</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
