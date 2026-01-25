"use client"
import styles from "@/styles/hero.module.css";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  const resumeLink = "/Vishi_Tyagi_Full_Stack_Developer.pdf";
  const githubLink = "https://github.com/Vishi-1912";
  const linkedinLink = "https://linkedin.com/in/vishi1912";

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Backend-Focused <br /> Full Stack Engineer
      </h1>

      <hr className="border-white/10" />

      <p className={styles.subtitle}>
        Node.js • NestJS • MERN Stack
      </p>

      {/* 👇 Media / Portfolio Area ONLY */}
      <div className={styles.portfolio}>

        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop"
          alt="Architectural workspace"
          className={styles.image}
        />

        {/* Card */}
        <div className={styles.card}>

          <p className={styles.portfolioText}>
            Portfolio
          </p>
          <h2 className={styles.cardTitle}>
            Building Scalable Systems & Robust Architectures
          </h2>
          <p className={styles.cardText}>
            Specialized in server-side development with full-stack capabilities. Transforming complex logic into efficient, maintainable code.
          </p>
          
          <div className={styles.socialIcons}>
            <a
              href={githubLink}
              target="_blank"
              className={styles.socialIcon}
            >
              <Github size={18} />
            </a>

            <a
              href={linkedinLink}
              target="_blank"
              className={styles.socialIcon}
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>

  );
}