"use client";

import { useEffect, useState, useRef } from "react";
import Container from "@/components/Container";
import Link from "next/link";

const terminalLines = [
  "$ find / -name 'questa-pagina' 2>/dev/null",
  "find: nessun risultato trovato",
  "$ ping matteofredi.it",
  "PING matteofredi.it: 64 bytes — ttl=64 time=0.42ms",
  "$ git log --oneline questa-pagina",
  "fatal: ambiguous argument 'questa-pagina'",
  "$ sudo apt install pagina-mancante",
  "E: Impossibile trovare il pacchetto",
  "$ curl https://matteofredi.it/???",
  "404 Not Found",
  "$ npm install pagina-404 --save",
  "npm warn: questo non funzionerà",
  "$ python3 -c \"import pagina; print(pagina)\"",
  "ModuleNotFoundError: No module named 'pagina'",
  "$ ls -la /dev/null",
  "crw-rw-rw- 1 root wheel — /dev/null",
  "$ cat /etc/404.conf",
  "cat: /etc/404.conf: File o directory non esistente",
  "$ whoami",
  "utente_perso",
];

function TerminalWindow() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [cursor, setCursor] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Cursore lampeggiante
  useEffect(() => {
    const t = setInterval(() => setCursor((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  // Scrivi carattere per carattere
  useEffect(() => {
    if (lineIndex >= terminalLines.length) {
      setTimeout(() => {
        setLines([]);
        setLineIndex(0);
        setCharIndex(0);
        setCurrentLine("");
      }, 2000);
      return;
    }

    const line = terminalLines[lineIndex];

    if (charIndex < line.length) {
      const delay = line.startsWith("$") ? 55 : 20;
      const t = setTimeout(() => {
        setCurrentLine((prev) => prev + line[charIndex]);
        setCharIndex((c) => c + 1);
      }, delay);
      return () => clearTimeout(t);
    } else {
      const pause = line.startsWith("$") ? 600 : 300;
      const t = setTimeout(() => {
        setLines((prev) => [...prev.slice(-12), line]);
        setCurrentLine("");
        setCharIndex(0);
        setLineIndex((i) => i + 1);
      }, pause);
      return () => clearTimeout(t);
    }
  }, [lineIndex, charIndex]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines, currentLine]);

  return (
    <div className="rounded-xl overflow-hidden border border-base-300 shadow-2xl font-mono text-xs md:text-sm bg-[#0d0d0b] text-[#a8e6a3] w-full max-w-lg">
      {/* Barra titolo */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a17] border-b border-[#2a2a24]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c940]" />
        <span className="ml-2 text-[#555] text-xs">bash — matteo@portfolio</span>
      </div>
      {/* Output */}
      <div className="p-4 h-52 overflow-hidden flex flex-col justify-end gap-0.5">
        {lines.map((line, i) => (
          <div
            key={i}
            className={line.startsWith("$") ? "text-[#a8e6a3]" : "text-[#666]"}
          >
            {line}
          </div>
        ))}
        <div className="text-[#a8e6a3] flex">
          <span>{currentLine}</span>
          <span
            className={`inline-block w-2 h-4 bg-[#a8e6a3] ml-px transition-opacity ${
              cursor ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default function NotFoundPage() {
  const [glitchTrigger, setGlitchTrigger] = useState(false);

  // Attiva il glitch ogni 3 secondi
  useEffect(() => {
    const t = setInterval(() => {
      setGlitchTrigger(true);
      setTimeout(() => setGlitchTrigger(false), 1500);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="min-h-[90vh] flex items-center py-12">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Testo sinistro */}
          <div className="flex-1 text-center lg:text-left">
            {/* Numero glitch */}
            <div
              className="font-display font-extrabold text-[8rem] md:text-[12rem] leading-none tracking-tighter text-accent select-none"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              404
            </div>

            <h1 className="font-display font-bold text-2xl md:text-3xl text-ink mb-3 -mt-4">
              Pagina non trovata
            </h1>
            <p className="font-body text-muted leading-relaxed mb-2 max-w-sm mx-auto lg:mx-0">
              Hai trovato l'unico URL del mio sito che non esiste.
              Congratulazioni, immagino.
            </p>
            <p className="font-mono text-xs text-muted/60 mb-8">
              errno 404: ENOENT — no such file or directory
            </p>

            {/* Suggerimenti buffi */}
            <div className="bg-base-200 border border-base-300 rounded-xl p-4 mb-8 text-left max-w-sm mx-auto lg:mx-0">
              <p className="font-mono text-xs text-accent mb-2">
                # possibili cause:
              </p>
              <ul className="space-y-1.5">
                {[
                  "Hai digitato l'URL di domenica mattina",
                  "Il link che hai seguito era già rotto",
                  "Questa pagina è in ferie",
                  "Un commit ha eliminato tutto per sbaglio",
                ].map((msg) => (
                  <li key={msg} className="font-mono text-xs text-muted flex gap-2">
                    <span className="text-accent shrink-0">→</span>
                    {msg}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-ink text-chalk font-display font-semibold px-6 py-3 rounded-full hover:bg-accent transition-colors duration-200 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Torna a casa
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-base-300 text-ink font-display font-semibold px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors duration-200 text-sm"
              >
                Guarda i progetti
              </Link>
            </div>
          </div>

          {/* Terminale destro */}
          <div className="hidden md:flex-1 md:flex justify-center lg:justify-end w-full">
            <TerminalWindow />
          </div>

        </div>
      </Container>
    </section>
  );
}
