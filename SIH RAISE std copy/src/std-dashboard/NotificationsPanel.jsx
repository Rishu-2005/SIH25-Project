import styles from "./NotificationsPanel.module.css";

export default function NotificationsPanel() {
  return (
    <section className={styles.card} aria-labelledby="notifications-title">
      <h3 id="notifications-title" className={styles.title}>Notifications</h3>

      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.text}>
            <span className={styles.highlight}>Assignment</span> for Physics is due tomorrow.
          </div>
          <div className={styles.time}>2h ago</div>
        </li>

        <li className={styles.item}>
          <div className={styles.text}>
            <span className={styles.highlight}>New material</span> uploaded for Chemistry.
          </div>
          <div className={styles.time}>5h ago</div>
        </li>

        <li className={styles.item}>
          <div className={styles.text}>
            <span className={styles.highlight}>Reminder:</span> Mathematics quiz at 9 AM.
          </div>
          <div className={styles.time}>1d ago</div>
        </li>
      </ul>

      <button className={styles.viewAll}>View All</button>
    </section>
  );
}
