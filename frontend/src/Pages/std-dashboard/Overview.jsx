import styles from "./Overview.module.css";

export default function Overview() {
  return (
    <section className={styles.card} aria-labelledby="overview-title">
      <h3 id="overview-title" className={styles.title}>Overview</h3>

      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.label}>Upcoming Classes</div>
          <div className={styles.value}>4</div>
        </div>
        <div className={styles.item}>
          <div className={styles.label}>Unread Messages</div>
          <div className={styles.value}>7</div>
        </div>
        <div className={styles.item}>
          <div className={styles.label}>Assignments Due</div>
          <div className={styles.value}>3</div>
        </div>
        <div className={styles.item}>
          <div className={styles.label}>Recent Notifications</div>
          <div className={styles.value}>2</div>
        </div>
      </div>
    </section>
  );
}
