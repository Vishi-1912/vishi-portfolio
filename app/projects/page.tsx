import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main>
      <h1>Projects</h1>

      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </main>
  );
}