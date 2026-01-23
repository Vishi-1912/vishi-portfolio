import styles from "@/styles/project.module.css";

type Project = {
  title: string;
  status: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={styles.card}>
      <h3>{project.title}</h3>
      <span className={styles.status}>{project.status}</span>

      <p className={styles.description}>{project.description}</p>

      <ul className={styles.tech}>
        {project.tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className={styles.links}>
        {project.github && (
          <a href={project.github} target="_blank">
            GitHub
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank">
            Live
          </a>
        )}
      </div>
    </div>
  );
}