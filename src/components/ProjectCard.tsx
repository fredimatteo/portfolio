"use client"

import {Project} from "@/app/projects";


interface ProjectCardProps {
  project: Project;
}

function goToProject(project: Project) {
  if (!project) {
    return;
  }

  if (project.demoUrl && project.demoUrl !== "") {
    window.open(project.demoUrl);
    return;
  }

  if (project.githubUrl && project.githubUrl !== "") {
    window.open(project.githubUrl);
    return;
  }
}

export default function ProjectCard({project}: ProjectCardProps) {
  return (
    <article
      className="group bg-base-100 border border-base-300 rounded-2xl p-6 md:p-7 flex flex-col gap-5
      hover:border-accent/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
      onClick={() => goToProject(project)}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-xs text-muted">{project.year}</span>
          <h3 className="font-display font-bold text-xl text-ink mt-0.5 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="font-body text-sm text-muted leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs px-2.5 py-1 bg-base-300 rounded-full text-ink border border-secondary"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
