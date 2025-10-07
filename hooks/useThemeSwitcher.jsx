import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      // Check if user has a saved preference
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme;
      }
      // Default to dark mode if no preference is saved
      return "dark";
    }
    return "dark"; // Default for SSR
  });

  const activeTheme = theme === "dark" ? "light" : "dark";

  const setThemeAndUpdate = (newTheme) => {
    setTheme(newTheme);

    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(newTheme);
      localStorage.setItem("theme", newTheme);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
    }
  }, [theme]);

  return [activeTheme, setThemeAndUpdate];
};

export default useThemeSwitcher;
