import styles from "@/styles/about.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <h2>About Me</h2>

      <p>
        Software Engineer with 2+ years of experience in MEAN/MERN stack
        development, specializing in Node.js and NestJS backend systems.
        Experienced in designing scalable REST APIs, managing relational and
        NoSQL databases, and implementing secure authentication flows.
      </p>

      <p>
        I enjoy working on backend-heavy problems involving data modeling,
        performance optimization, and clean system architecture, while being
        comfortable contributing to frontend features using React and Angular
        when required.
      </p>
    </section>
  );
}