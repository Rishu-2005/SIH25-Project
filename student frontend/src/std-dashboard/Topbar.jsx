import styles from "./Topbar.module.css";
import DashboardIcon from "../assets/top-dash.svg?react";
import BellIcon from "../assets/notifications.svg?react";

export default function Topbar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <DashboardIcon className={styles.icon} />
        <h1 className={styles.title}>Dashboard</h1>
      </div>

      <button className={styles.bellBtn}>
        <BellIcon className={styles.icon} />
      </button>
    </header>
  );
}
