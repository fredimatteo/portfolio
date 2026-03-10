import { useState, useEffect } from "react";

type Theme = "portfolio" | "portfolio-dark";

const STORAGE_KEY = "portfolio-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "portfolio"; // ← fix SSR

  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === "portfolio" || stored === "portfolio-dark") return stored;
  } catch {
    // localStorage non disponibile
  }

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "portfolio-dark";
  }
  return "portfolio";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("portfolio"); // default statico per SSR

  useEffect(() => {
    // Viene eseguito solo nel browser
    setTheme(getInitialTheme());
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "portfolio" ? "portfolio-dark" : "portfolio"));

  const isDark = theme === "portfolio-dark";

  return { theme, isDark, toggleTheme };
}