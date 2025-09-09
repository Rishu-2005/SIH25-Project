import { useNavigate } from "react-router-dom";
import styles from "./TodaysSchedule.module.css";

export default function TodaysSchedule() {
  const navigate = useNavigate();

  return (
    <section className={styles.card} aria-labelledby="schedule-title">
      <h3 id="schedule-title" className={styles.title}>
        Today’s Schedule
      </h3>

      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.info}>
            <div className={styles.subject}>Artificial Intelligence</div>
            <div className={styles.time}>9:00 AM – 10:00 AM</div>
          </div>
          <div className={styles.controls}>
            <button className={styles.btnOutline}>Details</button>
            <button
              className={styles.btnPrimary}
              onClick={() => navigate("/live-lecture")}
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}