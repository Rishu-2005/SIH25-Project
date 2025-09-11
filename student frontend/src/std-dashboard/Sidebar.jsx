import styles from "./Sidebar.module.css";
import DashboardIcon from "../assets/dashboard.svg?react";
import NotificationsIcon from "../assets/notifications.svg?react";
import ChatIcon from "../assets/chat.svg?react";
import MaterialsIcon from "../assets/materials.svg?react";
import LogoIcon from "../assets/logo.svg?react";
import TimeTableIcon from "../assets/timetable.svg?react";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logo}>
        <LogoIcon className={styles.logoIcon} />
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <button className={`${styles.navItem} ${styles.active}`}>
          <DashboardIcon className={styles.icon} /> Dashboard
        </button>
        <button className={styles.navItem}>
          <TimeTableIcon className={styles.icon} /> Time Table
        </button>
        <button className={styles.navItem}>
          <NotificationsIcon className={styles.icon} /> Notifications
        </button>
        <button className={styles.navItem}>
          <ChatIcon className={styles.icon} /> Chat
        </button>
        <button className={styles.navItem}>
          <MaterialsIcon className={styles.icon} /> Materials
        </button>
      </nav>

      {/* User info */}
      <div className={styles.userCard}>
        <div className={styles.avatar}></div>
        <div>
          <div className={styles.userName}>Rishabh Gupta</div>
          <div className={styles.userRole}>Student</div>
        </div>
      </div>
    </aside>
  );
}
