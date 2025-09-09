import styles from "./StdDashboard.module.css";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import QuickActions from "./QuickActions";
import Overview from "./Overview";
import TodaysSchedule from "./TodaysSchedule";
import NotificationsPanel from "./NotificationsPanel";
import RecentMessages from "./RecentMessages";
import Footer from "./Footer";

export default function StdDashboard() {
  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className={styles.main}>
        <Topbar/>

        <div className={styles.contentGrid}>
          {/* Left column */}
          <div className={styles.leftCol}>
            <QuickActions />
            <Overview />
          </div>

          {/* Center column */}
          <div className={styles.centerCol}>
            <TodaysSchedule />
          </div>

          {/* Right column */}
          <div className={styles.rightCol}>
            <NotificationsPanel />
            <RecentMessages />
          </div>
          
        </div>

        <Footer/>
      </div>
    </div>
  );
}
