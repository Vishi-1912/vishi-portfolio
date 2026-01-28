"use client"
import styles from "@/styles/contact.module.css";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "vishirajtyagi@gmail.com",
      href: "mailto:vishirajtyagi@gmail.com",
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "github.com/Vishi-1912",
      href: "https://github.com/Vishi-1912",
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/vishi1912",
      href: "https://linkedin.com/in/vishi1912",
    },
  ];

  return (
    <main className={styles.main}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h1>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        I’m open to backend or full-stack opportunities and discussions around
        Node.js, NestJS, and MERN stack projects. Feel free to reach out!
      </motion.p>

      <div className={styles.grid}>
        {contactInfo.map((info, index) => (
          <motion.a
            key={info.label}
            href={info.href}
            target={info.href.startsWith("http") ? "_blank" : undefined}
            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
          >
            <div className={styles.iconWrapper}>
              {info.icon}
            </div>
            <span className={styles.cardTitle}>{info.label}</span>
            <span className={styles.cardValue}>{info.value}</span>
          </motion.a>
        ))}
      </div>

      {/* <motion.section
        className={styles.formSection}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className={styles.formTitle}>Send a Message</h2>
        <form className={styles.form}>
          <div className={styles.grid}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Name</label>
              <input type="text" className={styles.input} placeholder="Your Name" />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email</label>
              <input type="email" className={styles.input} placeholder="Your Email" />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Subject</label>
            <input type="text" className={styles.input} placeholder="Project Discussion" />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Message</label>
            <textarea className={styles.textarea} placeholder="Tell me about your project..."></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              Send Message <Send size={18} />
            </span>
          </button>
        </form>
      </motion.section> */}
    </main>
  );
}