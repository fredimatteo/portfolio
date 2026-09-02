import Link from "next/link";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import {featuredProjects} from "@/app/projects";

export default function FeaturedProjects() {
  return (
    <section className="py-20 md:py-28 bg-base-200/50">
      <Container>
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink">
              Progetti in evidenza
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-muted hover:text-accent transition-colors group"
          >
            Tutti i progetti
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
