import skills from "@/data/skills";
import styles from "@/styles/skills.module.css";

export default function Skills() {
  return (
    <section className={styles.skills}>
      <h2>Skills</h2>

      <div className={styles.grid}>
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className={styles.card}>
            <h3>{category}</h3>
            <ul>
              {list.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}