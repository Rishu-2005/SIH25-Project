import "./LiveLecturePage.css";

import liveIcon from "../assets/live.svg";
import dashIcon from "../assets/top-dash.svg";
import timetableIcon from "../assets/timetable.svg";
import notifIcon from "../assets/notifications.svg";
import chatIcon from "../assets/chat.svg";
import materialsIcon from "../assets/materials.svg";
import avatarIcon from "../assets/avatar.svg";
import logoIcon from "../assets/logo.svg";

import muteIcon from "../assets/mute.svg";       // replace with right icon when provided
import unmuteIcon from "../assets/unmute.svg";
import raiseHandIcon from "../assets/hand.svg";
import openChatIcon from "../assets/chat.svg";
import shareScreenIcon from "../assets/screenshare.svg"; 
import leaveIcon from "../assets/leave.svg"; 

export default function LiveLecturePage() {
  return (
    <div className="livelecture">
      
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <img src={logoIcon} alt="RAISE" />
        </div>
        <nav>
          <ul>
  <li className="active"><img src={liveIcon} alt="Live" /> Live Lecture</li>
  <li><img src={dashIcon} alt="Dashboard" /> Dashboard</li>
  <li><img src={timetableIcon} alt="Timetable" /> Timetable</li>
  <li><img src={notifIcon} alt="Notifications" /> Notifications</li>
  <li><img src={chatIcon} alt="Chat" /> Chat</li>
  <li><img src={materialsIcon} alt="Materials" /> Materials</li>

</ul>
        </nav>
        <div className="profile">
          <img
            src={avatarIcon}
            alt="User"
          />
          <div>
            <p className="name">Rishabh Gupta</p>
            <span className="role">Student</span>
          </div>
        </div>
      </aside>

      {/* Main Lecture Section */}
      <main className="lecture-main">
        
        {/* Header */}
        <header className="lecture-header">
          <h3>Artificial Intelligence</h3>
          <div>
            <button className="outline-btn">Share Link</button>
            <button className="outline-btn">Report Issue</button>
          </div>
        </header>

        {/* Placeholder instead of image */}
        <div className="lecture-video waiting">
          <div className="waiting-text">
            ⏳ Wait for the class to start…
          </div>
        </div>

        {/* Controls */}
        <div className="lecture-controls">
  <button><img src={muteIcon} alt="" /> Mute</button>
  <button><img src={unmuteIcon} alt="" /> Unmute</button>
  <button className="raise-hand"><img src={raiseHandIcon} alt="" /> Raise Hand</button>
  <button><img src={openChatIcon} alt="" /> Open Chat</button>
  <button><img src={shareScreenIcon} alt="" /> Share Screen</button>
  <button className="leave"><img src={leaveIcon} alt="" /> Leave</button>
</div>
      </main>

      {/* Chat + Resources */}
      <aside className="chat-section">
        <div className="chat-tabs">
          <button className="active">Chat</button>
          <button>Notes</button>
        </div>

        <div className="chat-messages">
          <div className="message"><strong>Yashasv Gupta:</strong> Could you explain the difference between supervised and unsupervised learning again?</div>
          <div className="message"><strong>Shivam Singh:</strong> The example with neural networks really helped, thanks!</div>
          <div className="message"><strong>Pranay Kumar:</strong> Is the homework due before next class or end of week?</div>
          <div className="message"><strong>Ayush Singh:</strong> This is very helpful 🙌</div>
        </div>

        {/* Chat Input */}
        <div className="chat-input">
          <input type="text" placeholder="Type your message..." />
          <button className="send-btn">Send</button>
        </div>

        {/* Resources */}
        <div className="resources">
          <div className="resource">
            <div>
              Lecture Slides – Week 4
              <span className="size">PDF · 100KB</span>
            </div>
            <button className="download">Download</button>
          </div>
          <div className="resource">
            <div>
              Reading List
              <span className="size">Links · 6 items</span>
            </div>
            <button className="open">Open</button>
          </div>
          <div className="resource">
            <div>
              Assignment Brief
              <span className="size">DOC · 120KB</span>
            </div>
            <button className="download">Download</button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="footer">
          <span>Recording enabled</span>
          {/* <span>Local time 10:42</span> */}
        </div>
      </aside>
    </div>
  );
}