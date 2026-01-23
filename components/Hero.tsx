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
          href="/resume.pdf"
          target="_blank"
          className={styles.primary}
        >
          View Resume
        </a>

        <a
          href="https://github.com/your-github-username"
          target="_blank"
          className={styles.secondary}
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          className={styles.secondary}
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}