import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi sono",
  description:
    "Sono Matteo Fredi, sviluppatore software full stack freelance con una forte componente backend. Progetto e sviluppo prodotti web, API e soluzioni software con Python, Go e React.",
  openGraph: {
    title: "Chi sono | Matteo Fredi",
    description:
      "Sono Matteo Fredi, sviluppatore software full stack freelance con una forte componente backend. Progetto e sviluppo prodotti web, API e soluzioni software con Python, Go e React.",
    url: "https://matteofredi.it/about",
    type: "website",
  },
};

const skills = {
  Backend: ["Python", "FastAPI", "Django", "Go", "REST API", "gRPC"],
  Frontend: ["React", "Next.js", "TailwindCSS", "TypeScript"],
  Database: ["PostgreSQL", "Redis", "MongoDB"],
  DevOps: ["Docker", "CI/CD", "GitHub Actions", "K8s"],
};

const timeline = [
  {
    year: "2022",
    actual: true,
    role: "Software Developer",
    company: "Codermine",
    desc: "Sviluppo di soluzioni backend in Python e Go, progettazione e implementazione di REST API e integrazione con frontend React. Mi occupo inoltre di pipeline, deployment e aspetti infrastrutturali dei progetti.",
  },
  {
    year: "2021",
    role: "Diploma IFTS",
    company: "SIAM1838",
    desc: "Specializzazione in progettazione e sviluppo di applicazioni informatiche: Python OOP, networking, IoT, machine learning e sistemi di automazione. Percorso di 1000 ore con project work finale e stage aziendale.",
  },
];

export default function AboutPage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-3xl">
          {/* Header */}
          <div className="mb-14">
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-3">
              Chi sono
            </p>

            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-ink mb-4">
              Pillole su di me
            </h1>
          </div>

          {/* Bio */}
          <div className="mb-20">
            <div className="space-y-10">
              {/* Intro */}
              <div className="space-y-4">
                <p className="font-body text-lg text-foreground leading-relaxed">
                  Sono{" "}
                  <span className="font-medium">Matteo Fredi</span>,
                  sviluppatore software full stack con una forte componente
                  backend e oltre 4 anni di esperienza. Progetto e costruisco
                  software pensato per rispondere a esigenze concrete e
                  crescere insieme al prodotto.
                </p>

                <p className="font-body text-base text-muted leading-relaxed">
                  Lavoro soprattutto con{" "}
                  <span className="font-medium text-foreground">Python</span>,
                  ma mi muovo lungo tutto il ciclo di sviluppo: dalla
                  progettazione delle API all'integrazione con il frontend,
                  fino al deployment e alla gestione dell'infrastruttura.
                </p>
              </div>

              {/* Approach */}
              <div className="space-y-4">
                <h2 className="font-body text-sm font-medium uppercase tracking-wider text-foreground">
                  Il mio approccio
                </h2>

                <p className="font-body text-base text-muted leading-relaxed">
                  Mi piace capire a fondo i problemi prima di affrontarli e
                  trovare soluzioni semplici senza essere superficiali. Presto
                  particolare attenzione alla qualità del codice e alla
                  progettazione, cercando di mantenere un equilibrio tra
                  solidità tecnica e necessità concrete del prodotto.
                </p>

                <p className="font-body text-base text-muted leading-relaxed">
                  Lavoro bene in squadra e considero il confronto una parte
                  importante del processo: saper comunicare una scelta tecnica
                  è spesso importante quanto saperla implementare.
                </p>
              </div>

              {/* Background */}
              <div className="space-y-4">
                <h2 className="font-body text-sm font-medium uppercase tracking-wider text-foreground">
                  Da dove sono partito
                </h2>

                <p className="font-body text-base text-muted leading-relaxed">
                  Prima dello sviluppo software ho lavorato per due anni nello{" "}
                  <span className="font-medium text-foreground">
                    specialty coffee
                  </span>
                  . Un percorso apparentemente lontano dall'informatica, ma
                  che mi ha insegnato molto sull'attenzione al dettaglio, sulla
                  responsabilità e sul rapporto con le persone.
                </p>

                <p className="font-body text-base text-muted leading-relaxed">
                  La programmazione è iniziata come una passione e, con il
                  tempo, ho deciso di trasformarla nel mio lavoro. Da allora
                  continuo a studiare, sperimentare e costruire per migliorare
                  il modo in cui sviluppo software e affronto problemi
                  complessi.
                </p>
              </div>

              {/* Personal note */}
              <div className="border-l-2 border-border pl-5">
                <p className="font-body text-base text-muted leading-relaxed">
                  Quando non sto scrivendo codice, è facile trovarmi a parlare
                  di qualcosa con{" "}
                  <span className="font-medium text-foreground">
                    almeno due ruote e un motore
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-20">
            <h2 className="font-display font-bold text-2xl text-ink mb-8">
              Le tecnologie che uso
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
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
                        <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
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
              Il mio percorso
            </h2>

            <div className="relative space-y-8 before:absolute before:left-22 before:top-2 before:bottom-2 before:w-px before:bg-base-300">
              {timeline.map(
                ({ year, role, company, desc, actual }) => (
                  <div key={year} className="flex gap-6 md:gap-8">
                    <span className="font-mono text-xs text-muted w-20 shrink-0 pt-1 text-right">
                      {year} {actual && <>- oggi</>}
                    </span>

                    <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-accent before:ring-4 before:ring-base-100">
                      <p className="font-display font-bold text-base text-ink">
                        {role}
                      </p>

                      <p className="font-mono text-xs text-accent mb-1">
                        {company}
                      </p>

                      <p className="font-body text-sm text-muted leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}