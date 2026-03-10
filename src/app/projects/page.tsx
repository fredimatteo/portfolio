import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import {Project, projects} from "@/app/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Progetti",
  description: "Una raccolta dei miei progetti freelance e personali: SaaS, API, frontend e molto altro.",
  openGraph: {
    title: "Progetti | Matteo Fredi",
    description: "Una raccolta dei miei progetti freelance e personali: SaaS, API, frontend e molto altro.",
    url: "https://matteofredi.it/projects",
    type: "website",
  },
};


export default function ProjectsPage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-3">
            I miei lavori
          </p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-ink mb-4">
            Progetti
          </h1>
          <p className="font-body text-lg text-muted max-w-xl leading-relaxed">
            Una raccolta di cose che ho costruito — lavori per clienti, esperimenti
            personali e strumenti open-source.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
