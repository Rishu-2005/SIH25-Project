import React from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Schedule from "./components/Schedule";
import QuickActions from "./components/QuickActions";
import Messages from "./components/Messages";
import Notifications from "./components/Notifications";
import Footer from "./components/Footer";   // import footer

const App = () => {
  return (
    <div className="app-container">
      {/* Layout wrapper */}
      <div className="app">
        <Sidebar />

        <div className="main-content">
          <Header />

          <div className="page-content">
            <div className="left-panel">
              <Schedule />
              <QuickActions />
            </div>

            <div className="right-panel">
              <Messages />
              <Notifications />
            </div>
          </div>
        </div>
      </div>

      {/* Footer OUTSIDE the app */}
      <Footer />
    </div>
  );
};

export default App;
