import experience from "@/data/experience";
import styles from "@/styles/experience.module.css";

export default function Experience() {
  return (
    <section className={styles.experience}>
      <h2>Experience</h2>

      {experience.map((role) => (
        <div key={role.title} className={styles.role}>
          <h3>
            {role.title}{" "}
            <span className={styles.company}>@ {role.company}</span>
          </h3>

          <p className={styles.duration}>{role.duration}</p>

          <ul>
            {role.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}