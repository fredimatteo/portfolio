export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Prenotino",
    description:
      "Sistema di gestione prenotazioni full stack per realtà sportive — gestisce i campi, pagamenti e disponibilità in tempo reale.",
    longDescription:
      "Backend Python/FastAPI con PostgreSQL e frontend React con accesso basato su ruoli.",
    technologies: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "TailwindCSS", "Stripe"],
    featured: true,
    year: 2025,
  },
  {
    id: 2,
    title: "LinkMeTo",
    description:
      "Aggregatore di link personale in stile Linktree, con temi personalizzabili, analytics sui click e un'interfaccia admin semplicissima.",
    longDescription:
      "Clone di Linktree con funzionalità extra: analytics per link, temi colore personalizzati ed editor drag-and-drop in React.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Supabase"],
    demoUrl: "https://linkmeto.it",
    featured: true,
    year: 2026,
  },
  {
    id: 3,
    title: "A.P.S Resana — Sito Web",
    description:
      "Sito professionale per un cliente locale — pulito, veloce e ottimizzato SEO, con CMS personalizzato per aggiornare i contenuti.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Netlify"],
    featured: false,
    year: 2026,
  }
];

export const featuredProjects = projects.filter((p) => p.featured);
