import styles from "./NotificationsPanel.module.css";

export default function NotificationsPanel() {
  return (
    <section className={styles.card} aria-labelledby="notifications-title">
      <h3 id="notifications-title" className={styles.title}>Notifications</h3>

      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.text}>
            <span className={styles.highlight}>Assignment</span> for Artificial Intelligence is due tomorrow.
          </div>
          <div className={styles.time}>2h ago</div>
        </li>

        <li className={styles.item}>
          <div className={styles.text}>
            <span className={styles.highlight}>New material</span> uploaded for Renewable Energy.
          </div>
          <div className={styles.time}>5h ago</div>
        </li>

        <li className={styles.item}>
          <div className={styles.text}>
            <span className={styles.highlight}>Reminder:</span> Renewable Energy quiz at 9 PM.
          </div>
          <div className={styles.time}>1d ago</div>
        </li>
      </ul>

      <button className={styles.viewAll}>View All</button>
    </section>
  );
}
