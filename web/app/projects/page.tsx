import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";
import styles from "@/styles/project.module.css";

export default function ProjectsPage() {
  return (
    <main className={styles.main}>
      <h1>Projects</h1>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}