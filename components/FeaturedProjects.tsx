"use client"
import styles from "@/styles/featured-projects.module.css";
import projects from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, ExternalLink, Github, ArrowRight } from "lucide-react";
// import Link from "next/link";

export default function ProjectCard() {
    return (
        <section id="projects" className={styles.featured}>
            <motion.div
                className="flex"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}>
                <div className="w-1/3">
                    <h1>Selected Works</h1>
                </div>
                <div className="w-1/3"></div>
                <div className="w-2/3 text-right" style={{ alignContent: "flex-end" }}>
                    {/* <h6><Link href="/projects" style={{ textDecoration: "none", color: "#556a8d" }}>━━━━━ View All Projects</Link></h6> */}
                    <h6>━━━━━ Featured Projects</h6>
                </div>
            </motion.div>

            <div className={styles.grid}>
                {projects.filter(project => project.isFeatured).map((project, index) => (
                    <motion.div
                        key={project._id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.5 }}
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
                ))}
            </div>

        </section>
    );
}