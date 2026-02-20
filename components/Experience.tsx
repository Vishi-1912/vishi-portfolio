"use client"
import experience from "@/data/experience";
import styles from "@/styles/experience.module.css";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className={styles.experience}>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >Professional Path</motion.h1>

      {experience.map((exp, index) => (
        <motion.div
          key={exp._id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`${styles.row} ${index % 2 === 0 ? styles.reverse : ""}`}
        >
          {/* Image side */}
          <div className={styles.imageWrapper}>
            {exp.companyLogo ? (
              <img
                src={exp.companyLogo}
                alt={exp.companyName}
                className={styles.image}
              />
            ) : (
              <div className={styles.placeholder}>No Image</div>
            )}
          </div>

          {/* Content side */}
          <div className={styles.content}>
            <span className={styles.duration}>
              {exp.startDate &&
                new Date(exp.startDate).toLocaleString("en-US", {
                  month: "short",
                  year: "numeric",
                })}{" "}
              –{" "}
              {exp.endDate
                ? new Date(exp.endDate).toLocaleString("en-US", {
                  month: "short",
                  year: "numeric",
                })
                : "Present"}
            </span>

            <h3>
              {exp.jobTitle}
              <span className={styles.company}> @ {exp.companyName}</span>
            </h3>

            <p className={styles.description}>{exp.roleDescription}</p>

            {exp.location && (
              <p className={styles.location}>{exp.location}</p>
            )}
          </div>
        </motion.div>
      ))}


    </section>
  );
}