import styles from "./RecentMessages.module.css";

export default function RecentMessages() {
  return (
    <section className={styles.card} aria-labelledby="messages-title">
      <h3 id="messages-title" className={styles.title}>Recent Messages</h3>

      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.avatar}></div>
          <div className={styles.content}>
            <div className={styles.topRow}>
              <span className={styles.name}>Dr. Sharma</span>
              <span className={styles.time}>10:30 AM</span>
            </div>
            <div className={styles.message}>
              Don’t forget to check the updated notes.
            </div>
          </div>
        </li>

        <li className={styles.item}>
          <div className={styles.avatar}></div>
          <div className={styles.content}>
            <div className={styles.topRow}>
              <span className={styles.name}>Class Rep</span>
              <span className={styles.time}>Yesterday</span>
            </div>
            <div className={styles.message}>
              Reminder: submit assignments by tomorrow.
            </div>
          </div>
        </li>

        <li className={styles.item}>
          <div className={styles.avatar}></div>
          <div className={styles.content}>
            <div className={styles.topRow}>
              <span className={styles.name}>Prof. Mehta</span>
              <span className={styles.time}>2d ago</span>
            </div>
            <div className={styles.message}>
              Lab schedule has been updated on the portal.
            </div>
          </div>
        </li>
      </ul>

      <button className={styles.viewAll}>View All</button>
    </section>
  );
}
