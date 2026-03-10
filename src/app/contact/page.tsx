// src/app/contact/page.tsx  ← Server Component, esporta i metadata
import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Hai un progetto in mente? Contattami per lavori freelance. Ti rispondo entro 24 ore.",
  openGraph: {
    title: "Contatti | Matteo Fredi",
    description: "Hai un progetto in mente? Contattami per lavori freelance. Ti rispondo entro 24 ore.",
    url: "https://matteofredi.it/contact",
    type: "website",
  },
};

export default function Page() {
  return <ContactForm />;
}