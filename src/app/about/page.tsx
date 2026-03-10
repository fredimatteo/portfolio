import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi sono",
  description: "Sono Matteo Fredi, sviluppatore full stack freelance. Lavoro su prodotti SaaS, API Python e frontend React.",
  openGraph: {
    title: "Chi sono | Matteo Fredi",
    description: "Sono Matteo Fredi, sviluppatore full stack freelance. Lavoro su prodotti SaaS, API Python e frontend React.",
    url: "https://matteofredi.it/about",
    type: "website",
  },
};

const skills = {
  Backend: ["Python", "FastAPI", "Django", "PostgreSQL", "Redis", "Docker"],
  Frontend: ["React", "TypeScript", "TailwindCSS", "Vite", "Next.js"],
  Strumenti: ["Git", "GitHub Actions", "Linux", "Vercel", "Supabase"],
};

const timeline = [
  {
    year: "2022",
    actual: true,
    role: "Software Developer",
    company: "Codermine",
    desc: "Sviluppo backend e microservizi con Python e Go, progettazione di REST API, gestione pipeline dati e integrazione con frontend moderni (React).",
  },
  {
    year: "2021",
    role: "Diploma IFTS",
    company: "SIAM1838",
    desc: "Specializzazione in progettazione e sviluppo di applicazioni informatiche: Python OOP, networking, IoT, machine learning e sistemi di automazione. Percorso di 1000 ore con project work e stage aziendale.",
  },
];

export default function AboutPage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-3">
            Chi sono
          </p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-ink mb-8">
            Sviluppatore di giorno,
            <br />
            <span className="text-accent">builder di notte.</span>
          </h1>

          {/* Bio */}
          <div className="space-y-4 mb-16">
            <p className="font-body text-lg text-muted leading-relaxed">
              Sono Matteo Fredi, sviluppatore full stack,
              con focus sulla qualità del codice, API ben strutturate e interfacce intuitive e facili da usare.
            </p>
            <p className="font-body text-base text-muted leading-relaxed">
              Di giorno lavoro su prodotti SaaS — progetto sistemi, scrivo backend Python
              e costruisco frontend React. Nel tempo libero prendo progetti freelance per
              startup e piccole imprese che cercano uno sviluppatore affidabile, senza i
              costi di un'agenzia.
            </p>
            <p className="font-body text-base text-muted leading-relaxed">
              Mi interessa consegnare prodotti che funzionano, non solo che sembrano belle in
              una demo. Sono a mio agio nell'occuparmi di tutto: dallo schema del database
              all'interfaccia pixel-perfect.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h2 className="font-display font-bold text-2xl text-ink mb-6">
              Competenze e strumenti
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p className="font-mono text-xs text-muted uppercase tracking-widest mb-3">
                    {category}
                  </p>
                  <ul className="space-y-1.5">
                    {items.map((skill) => (
                      <li
                        key={skill}
                        className="font-body text-sm text-ink flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h2 className="font-display font-bold text-2xl text-ink mb-8">
              Esperienza
            </h2>
            <div className="relative space-y-8 before:absolute before:left-[5.5rem] before:top-2 before:bottom-2 before:w-px before:bg-base-300">
              {timeline.map(({ year, role, company, desc, actual }) => (
                <div key={year} className="flex gap-6 md:gap-8">
                  <span className="font-mono text-xs text-muted w-20 shrink-0 pt-1 text-right">
                    {year} {
                    actual && <>- oggi</>
                  }
                  </span>
                  <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-accent before:ring-4 before:ring-base-100">
                    <p className="font-display font-bold text-base text-ink">
                      {role}
                    </p>
                    <p className="font-mono text-xs text-accent mb-1">{company}</p>
                    <p className="font-body text-sm text-muted leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
