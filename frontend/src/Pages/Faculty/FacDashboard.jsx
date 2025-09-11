import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import QuickActions from "./QuickActions";
import Schedule from "./Schedule";
import Messages from "./Messages";
import Notifications from "./Notifications";
import "./FactDashboard.css";

export function FacDashboard() {
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
}
