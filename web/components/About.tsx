"use client"
import styles from "@/styles/about.module.css";
import { Database, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className={styles.about}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        {/* Left Section */}
        <div className={styles.aboutLeft}>
          <div className={styles.leftTop}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.aboutTitle1}>About</h1>
              <h1 className={styles.aboutTitle2}>Me</h1>
              <hr />
            </div>
            <div className={styles.aboutImage}>
              <img
                src="Snapchat-859014230-removebg-preview.png"
                alt="About Me"
              />
            </div>
          </div>
          <p className={styles.description}>
            Software Engineer with 3 years of experience in MEAN/MERN stack
            development, specializing in Node.js and NestJS backend systems.
            Experienced in designing scalable REST APIs, managing relational and
            NoSQL databases, and implementing secure authentication flows.
          </p>
        </div>

        {/* Right Section */}
        <div className={styles.aboutRight}>
          <h6><Database style={{ color: "#556a8d" }} size={24} /> System Architecture</h6>
          <p>I specialize in designing robust architectures that handle complex business logic and high-volume data processing. Efficiency is not just a goal; it's the standard.</p>
          <h6><Globe style={{ color: "#556a8d" }} size={24} /> Full Stack Integration</h6>
          <p>With a strong foundation in full-stack development, I ensure seamless integration and optimal performance across the entire technology stack, from database to UI.</p>
        </div>

      </motion.div>
    </section>

  );
}

//  <h2>About Me</h2>

//       <p>
//         Software Engineer with 3 years of experience in MEAN/MERN stack
//         development, specializing in Node.js and NestJS backend systems.
//         Experienced in designing scalable REST APIs, managing relational and
//         NoSQL databases, and implementing secure authentication flows.
//       </p>

//       <p>
//         I enjoy working on backend-heavy problems involving data modeling,
//         performance optimization, and clean system architecture, while being
//         comfortable contributing to frontend features using React and Angular
//         when required.
//       </p>