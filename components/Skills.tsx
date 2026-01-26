import skills from "@/data/skills";
import styles from "@/styles/skills.module.css";
import Image from "next/image";

export default function Skills() {
  return (
    <section className={styles.skills}>
      <div className="flex">
        <div className="w-1/3">
          <h2>Technical Arsenal</h2>
        </div>
        <div className="w-1/3"></div>
        <div className="w-2/3 text-right" style={{ alignContent: "flex-end" }}>
          <p>A curated set of technologies I use to build scalable, high-performance applications.</p>
        </div>
      </div>

      <hr />

      <div className={styles.grid}>
        {Object.entries(skills).map(([category, { image, list }]) => (
          <div key={category} className={styles.card}>

            <div className={styles.imageCard}>
              <Image
                src={image}
                alt={category}
                className={styles.skillImage}
                width={32}
                height={32}
              />
            </div>
            <h3>{category}</h3>

            <div className={styles.progressBar}>
              <div
                style={{
                  width: '80%',
                  backgroundColor: '#556a8d',
                  borderRadius: '1rem',
                  border: '1rem'
                }}
              />
            </div>

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