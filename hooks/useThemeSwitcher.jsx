import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      // Check if user has a saved preference
      const savedTheme = localStorage.theme;
      if (savedTheme) {
        return savedTheme;
      }
      // Default to dark mode if no preference is saved
      return "dark";
    }
    return "dark"; // Default for SSR
  });

  const activeTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(activeTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, activeTheme]);

  return [activeTheme, setTheme];
};

export default useThemeSwitcher;
