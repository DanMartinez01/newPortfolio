import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import { useEffect, useState } from "react";

const CallToAction = () => {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get current theme from document
    const htmlClasses = document.documentElement.classList;
    if (htmlClasses.contains("light")) {
      setCurrentTheme("light");
    } else if (htmlClasses.contains("dark")) {
      setCurrentTheme("dark");
    } else {
      // Default to dark if no class is set
      document.documentElement.classList.add("dark");
      setCurrentTheme("dark");
    }
  }, []);

  // Listen for theme changes
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
          } else if (htmlClasses.contains("dark")) {
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
      className={`py-16 transition-all duration-300 relative overflow-hidden rounded-3xl ${
        currentTheme === "dark"
          ? "bg-white/5 backdrop-blur-xl border border-white/10"
          : "bg-gray-100/50 backdrop-blur-lg border border-gray-200/30"
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              currentTheme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Ready to Start Your Next Project?
          </h2>
          <p
            className={`text-xl mb-8 max-w-2xl mx-auto ${
              currentTheme === "dark" ? "text-gray-200" : "text-gray-600"
            }`}
          >
            I'm always excited to work on new and challenging projects. Let's
            discuss how we can bring your ideas to life!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className={`inline-flex items-center px-8 py-3 font-semibold rounded-lg shadow-lg transition-all duration-200 ${
                  currentTheme === "dark"
                    ? "bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30"
                    : "bg-gray-200/80 backdrop-blur-sm border border-gray-300/50 text-gray-800 hover:bg-gray-300/80"
                }`}
              >
                <FiMail className="mr-2" />
                Get In Touch
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className={`inline-flex items-center px-8 py-3 font-semibold rounded-lg transition-all duration-200 ${
                  currentTheme === "dark"
                    ? "border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                    : "border-2 border-gray-300/50 text-gray-800 hover:bg-gray-200/50 hover:border-gray-400/70"
                }`}
              >
                View My Work
              </Link>
            </motion.div>
          </div>

          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com/DanMartinez01"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`transition-colors duration-200 ${
                currentTheme === "dark"
                  ? "text-white hover:text-gray-300"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              <FiGithub className="text-2xl" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/danielaluciamartinez/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`transition-colors duration-200 ${
                currentTheme === "dark"
                  ? "text-white hover:text-gray-300"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              <FiLinkedin className="text-2xl" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
