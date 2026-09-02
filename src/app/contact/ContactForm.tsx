"use client";

import {useRef, useState} from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import {useThemeContext} from "@/context/ThemeContext";
import Container from "@/components/Container";

type FormState = "idle" | "sending" | "sent" | "error";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY!;
const WEB3FORMS_SITE_KEY = process.env.NEXT_PUBLIC_WEB3_SITE_KEY!;

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({name: "", email: "", message: ""});
  const [captchaToken, setCaptchaToken] = useState<string>("");
  const captchaRef = useRef<HCaptcha>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({...prev, [e.target.name]: e.target.value}));

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setFormState("sending");

    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);
      formData.append("subject", "Nuovo messaggio dal portfolio");
      formData.append("h-captcha-response", captchaToken);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormState("sent");
        setForm({name: "", email: "", message: ""});
        setCaptchaToken("");
        captchaRef.current?.resetCaptcha();
      } else {
        setFormState("error");
        captchaRef.current?.resetCaptcha();
      }
    } catch {
      setFormState("error");
      captchaRef.current?.resetCaptcha();
    }
  };

  const {isDark} = useThemeContext();

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-3">
            Contatti
          </p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-ink mb-4">
            Lavoriamo insieme.
          </h1>
          <p className="font-body text-lg text-muted leading-relaxed mb-12">
            Hai un progetto in mente? Scrivimi un messaggio e ti rispondo entro 24 ore.
          </p>

          {formState === "sent" ? (
            <div className="bg-base-200 border border-base-300 rounded-2xl p-8 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-ink mb-2">
                Messaggio inviato!
              </h3>
              <p className="font-body text-sm text-muted">
                Grazie per avermi scritto. Ti rispondo il prima possibile.
              </p>
            </div>
          ) : formState === "error" ? (
            <div className="bg-base-200 border border-red-200 rounded-2xl p-8 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-ink mb-2">
                Qualcosa è andato storto
              </h3>
              <p className="font-body text-sm text-muted mb-4">
                Non è stato possibile inviare il messaggio. Riprova o scrivimi direttamente.
              </p>
              <button
                onClick={() => setFormState("idle")}
                className="font-mono text-xs text-accent hover:underline"
              >
                Riprova
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-muted uppercase tracking-widest">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Mario Rossi"
                    className="input input-bordered bg-base-100 border-base-300 rounded-xl font-body text-sm focus:border-accent focus:outline-none text-ink"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-muted uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="mario@example.com"
                    className="input input-bordered bg-base-100 border-base-300 rounded-xl font-body text-sm focus:border-accent focus:outline-none text-ink"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-muted uppercase tracking-widest">
                  Messaggio
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Raccontami del tuo progetto..."
                  className="textarea textarea-bordered bg-base-100 border-base-300 rounded-xl font-body text-ink text-sm focus:border-accent focus:outline-none resize-none"
                />
              </div>
              <HCaptcha
                sitekey={WEB3FORMS_SITE_KEY}
                reCaptchaCompat={false}
                onVerify={(token) => setCaptchaToken(token)}
                ref={captchaRef}
                theme={isDark ? "dark" : "light"}
              />
              <button
                onClick={handleSubmit}
                disabled={
                  formState === "sending" ||
                  !form.name ||
                  !form.email ||
                  !form.message ||
                  !captchaToken
                }
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ink text-chalk font-display font-semibold px-8 py-3.5 rounded-full hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {formState === "sending" ? (
                  <>
                    <span className="loading loading-spinner loading-sm"/>
                    Invio in corso...
                  </>
                ) : (
                  <>
                    Invia messaggio
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Alternative contact */}
          <div className="mt-12 pt-10 border-t border-base-300">
            <p className="font-body text-sm text-muted mb-4">
              Preferisci un contatto diretto?
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:matteofredi.developer@gmail.com"
                className="inline-flex items-center gap-2 font-body text-sm font-medium text-ink hover:text-accent transition-colors group"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                matteofredi.developer@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm font-medium text-ink hover:text-accent transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}