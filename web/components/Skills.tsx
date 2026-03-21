"use client"
import skills from "@/data/skills";
import styles from "@/styles/skills.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className={styles.skills}>
      <motion.div
        className="flex"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="w-1/3">
          <h2>Technical Arsenal</h2>
        </div>
        <div className="w-1/3"></div>
        <div className="w-2/3 text-right" style={{ alignContent: "flex-end" }}>
          <p>A curated set of technologies I use to build scalable, high-performance applications.</p>
        </div>
      </motion.div>

      <hr />

      <div className={styles.grid}>
        {Object.entries(skills).map(([category, { image, list }], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className={styles.card}>

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
          </motion.div>
        ))}
      </div>
    </section>
  );
}