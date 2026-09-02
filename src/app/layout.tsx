import {ThemeProvider} from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/globals.css";
import {Metadata} from "next";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-custom",
});

export const metadata: Metadata = {
  title: {
    default: "Matteo Fredi | Software Developer",
    template: "%s | Matteo Fredi",
  },
  description: "Software Developer specializzato in Python, React e TypeScript. Disponibile per progetti freelance.",
  metadataBase: new URL("https://matteofredi.it"),
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="it" data-theme="portfolio" className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}>
    <body>
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-base-100">
        <Navbar/>
        <main className="flex-1 pt-8 md:pt-12">
          {children}
        </main>
        <Footer/>
      </div>
    </ThemeProvider>
    </body>
    </html>
  );
}