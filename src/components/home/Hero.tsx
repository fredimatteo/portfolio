import Link from "next/link";
import Container from "@/components/Container";

const stack = ["Python", "FastAPI", "GO", "React", "Next.js"];

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-base-100">
      {/* Background grid pattern */}
      <div
        className="
        absolute inset-0 opacity-[0.03]
        bg-[linear-gradient(var(--color-ink)_1px,transparent_1px),linear-gradient(90deg,var(--color-ink)_1px,transparent_1px)]
        bg-size-[60px_60px]
        "
      />

      {/* Accent blob */}
      <div className="absolute top-1/4 right-0 w-72 md:w-96 h-72 md:h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

      <Container className="relative py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1
            className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-ink mb-6 animate-fade-up opacity-0-init animate-delay-100"
            style={{ animationFillMode: "forwards" }}
          >
            Software
            <br />
            <span className="text-accent">developer</span>
            <br />
          </h1>

          {/* CTA buttons */}
          <div
            className="flex flex-wrap gap-3 mb-14 animate-fade-up opacity-0-init animate-delay-300"
            style={{ animationFillMode: "forwards" }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-ink text-chalk font-display font-semibold px-6 py-3 rounded-full hover:bg-accent transition-colors duration-200 text-sm md:text-base"
            >
              Scopri i progetti
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-base-300 text-ink font-display font-semibold px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors duration-200 text-sm md:text-base"
            >
              Contattami
            </Link>
          </div>

          {/* Stack pills */}
          <div
            className="animate-fade-up opacity-0-init animate-delay-400"
            style={{ animationFillMode: "forwards" }}
          >
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-3">
              Stack tecnologico
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1.5 bg-base-300 border border-secondary rounded-full text-ink"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
