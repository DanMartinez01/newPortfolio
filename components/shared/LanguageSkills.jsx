import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaLanguage, FaGlobeAmericas } from "react-icons/fa";

const LanguageSkills = () => {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const htmlClasses = document.documentElement.classList;
    if (htmlClasses.contains("light")) {
      setCurrentTheme("light");
    } else {
      setCurrentTheme("dark");
    }
  }, []);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          const htmlClasses = document.documentElement.classList;
          if (htmlClasses.contains("light")) {
            setCurrentTheme("light");
          } else {
            setCurrentTheme("dark");
          }
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  return (
    <section
      className={`py-16 rounded-3xl transition-all duration-300 ${
        currentTheme === "dark"
          ? "bg-white/5 backdrop-blur-xl border border-white/10"
          : "bg-gray-100/50 backdrop-blur-lg border border-gray-200/30"
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <FaLanguage
            className={`text-5xl mx-auto mb-4 ${
              currentTheme === "dark" ? "text-accent-light" : "text-blue-600"
            }`}
          />
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              currentTheme === "dark" ? "text-text-primary" : "text-gray-800"
            }`}
          >
            Language Skills
          </h2>
          <p
            className={`max-w-2xl mx-auto ${
              currentTheme === "dark" ? "text-text-secondary" : "text-gray-600"
            }`}
          >
            Bilingual professional with strong communication skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Spanish */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`p-8 rounded-2xl text-center ${
              currentTheme === "dark"
                ? "bg-gray-800/40 backdrop-blur-xl border border-gray-700/50"
                : "bg-white border border-gray-200 shadow-lg"
            }`}
          >
            <div className="text-6xl mb-4">🇦🇷</div>
            <h3
              className={`text-2xl font-bold mb-2 ${
                currentTheme === "dark" ? "text-text-primary" : "text-gray-800"
              }`}
            >
              Spanish
            </h3>
            <p
              className={`text-lg font-semibold mb-4 ${
                currentTheme === "dark" ? "text-accent-light" : "text-blue-600"
              }`}
            >
              Native
            </p>
            <p
              className={`${
                currentTheme === "dark"
                  ? "text-text-secondary"
                  : "text-gray-600"
              }`}
            >
              Mother tongue - Full professional proficiency in all contexts
            </p>
          </motion.div>

          {/* English */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`p-8 rounded-2xl text-center ${
              currentTheme === "dark"
                ? "bg-gray-800/40 backdrop-blur-xl border border-gray-700/50"
                : "bg-white border border-gray-200 shadow-lg"
            }`}
          >
            <div className="text-6xl mb-4">🇺🇸</div>
            <h3
              className={`text-2xl font-bold mb-2 ${
                currentTheme === "dark" ? "text-text-primary" : "text-gray-800"
              }`}
            >
              English
            </h3>
            <p
              className={`text-lg font-semibold mb-4 ${
                currentTheme === "dark" ? "text-accent-light" : "text-blue-600"
              }`}
            >
              Bilingual
            </p>
            <p
              className={`${
                currentTheme === "dark"
                  ? "text-text-secondary"
                  : "text-gray-600"
              }`}
            >
              Former ESL teacher with excellent written and verbal communication
              skills
            </p>
          </motion.div>
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
              currentTheme === "dark"
                ? "bg-white/10 border border-white/20"
                : "bg-gray-100 border border-gray-200"
            }`}
          >
            <FaGlobeAmericas
              className={`${
                currentTheme === "dark" ? "text-accent-light" : "text-blue-600"
              }`}
            />
            <span
              className={`${
                currentTheme === "dark" ? "text-text-primary" : "text-gray-800"
              }`}
            >
              Ready to work with international teams
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LanguageSkills;
