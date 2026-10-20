/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);

const THEMES = ["light", "dark"];
const ACCENTS = ["purple", "blue", "green", "pink", "orange"];
const STORAGE_THEME = "portfolio-theme";
const STORAGE_ACCENT = "portfolio-accent";

function getInitialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_THEME);
    if (THEMES.includes(saved)) return saved;
  } catch {
    // Storage may be unavailable; fall back to the system preference.
  }
  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function getInitialAccent() {
  try {
    const saved = localStorage.getItem(STORAGE_ACCENT);
    if (ACCENTS.includes(saved)) return saved;
  } catch {
    // Storage may be unavailable; use the default accent.
  }
  return "purple";
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme);
  const [accent, setAccentState] = useState(getInitialAccent);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.dataset.accent = accent;
    root.style.colorScheme = theme;

    try {
      localStorage.setItem(STORAGE_THEME, theme);
      localStorage.setItem(STORAGE_ACCENT, accent);
    } catch {
      // Theme still works for the current session if storage is unavailable.
    }
  }, [theme, accent]);

  const setTheme = useCallback((nextTheme) => {
    if (THEMES.includes(nextTheme)) setThemeState(nextTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((current) => current === "dark" ? "light" : "dark");
  }, []);

  const setAccent = useCallback((nextAccent) => {
    if (ACCENTS.includes(nextAccent)) setAccentState(nextAccent);
  }, []);

  const value = useMemo(() => ({
    theme, accent, setTheme, toggleTheme, setAccent, availableAccents: ACCENTS
  }), [theme, accent, setTheme, toggleTheme, setAccent]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}
