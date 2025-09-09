import styles from "./QuickActions.module.css";
import LiveIcon from "../assets/live.svg?react";
import MaterialsIcon from "../assets/qck-materials.svg?react";
import TimetableIcon from "../assets/qck-timetable.svg?react";

export default function QuickActions() {
  return (
    <section className={styles.card} aria-labelledby="qa-title">
      <h3 id="qa-title" className={styles.title}>Quick Actions</h3>

      <div className={styles.actions}>
        <div className={styles.actionRow}>
          <div className={styles.actionInfo}>
            <LiveIcon className={styles.icon} />
            <span className={styles.actionLabel}>Join Live Lecture</span>
          </div>
          <button className={`${styles.btn} ${styles.primary}`}>Join</button>
        </div>

        <div className={styles.actionRow}>
          <div className={styles.actionInfo}>
            <MaterialsIcon className={styles.icon} />
            <span className={styles.actionLabel}>View Material</span>
          </div>
          <button className={`${styles.btn} ${styles.primary}`}>Open</button>
        </div>

        <div className={styles.actionRow}>
          <div className={styles.actionInfo}>
            <TimetableIcon className={styles.icon} />
            <span className={styles.actionLabel}>Check Timetable</span>
          </div>
          <button className={`${styles.btn} ${styles.primary}`}>View</button>
        </div>
      </div>
    </section>
  );
}
