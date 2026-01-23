import styles from "@/styles/hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Backend-Focused <br /> Full Stack Engineer
      </h1>

      <p className={styles.subtitle}>
        Node.js • NestJS • MERN Stack <br />
        Building scalable APIs & data-driven applications
      </p>

      <div className={styles.actions}>
        <a
          href="/Vishi_Tyagi_Full_Stack_Developer.pdf"
          target="_blank"
          className={styles.primary}
        >
          View Resume
        </a>

        <a
          href="https://github.com/Vishi-1912"
          target="_blank"
          className={styles.secondary}
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/vishi1912"
          target="_blank"
          className={styles.secondary}
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}