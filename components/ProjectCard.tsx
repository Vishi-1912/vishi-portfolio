"use client"
import styles from "@/styles/project.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, ExternalLink, Github, ArrowRight } from "lucide-react";

type Project = {
  _id: string;
  title: string;
  image: string;
  status: string;
  description: string;
  tech: string;
  github?: string;
  live?: string;
  isFeatured: boolean;
};

export default function ProjectCard({ project, index }: { project: Project, index: number }) {
  return (
      <motion.div
        key={project._id}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        className={styles.card}
      >
        {/* Image Card */}
        <div className={styles.imageCard}>
          <div className={styles.imageOverlay} />

          {project.image ? (
            <Image
              src={project.image}
              alt={project.title || "Project"}
              className={styles.image}
              width={800}
              height={600}
            />
          ) : (
            <div className={styles.imagePlaceholder}>
              <Cpu size={64} />
            </div>
          )}

          {/* Floating Action Buttons */}
          <div className={styles.actions}>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionButton}
              >
                <ExternalLink size={20} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionButton}
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.header}>
            <h3 className={styles.title}>{project.title}</h3>
            <ArrowRight className={styles.arrow} />
          </div>

          {project.tech && (
            <p className={styles.tech}>{project.tech}</p>
          )}

          {project.description && (
            <p className={styles.description}>{project.description}</p>
          )}
        </div>
      </motion.div>
  );
}