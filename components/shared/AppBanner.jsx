import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// const SceneTool = dynamic(() => import("../SceneTool"), {
//   ssr: false,
// });

function AppBanner() {
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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col mx-auto justify-center md:justify-around lg:justify-around xl:justify-around items-center sm:flex-row mt-5 md:mt-10 relative"
    >
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-20 w-24 h-24 bg-gradient-to-br from-accent-dark/20 to-accent-light/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -4, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-32 w-32 h-32 bg-gradient-to-br from-accent-light/20 to-accent-bright/20 rounded-full blur-3xl"
        />
      </div>
      <div className="w-full md:w-1/3 text-left">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className={`font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left uppercase ${
            currentTheme === "dark" ? "text-text-primary" : "text-primary-dark"
          }`}
        >
          Hi There! 👋
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className={`font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal ${
            currentTheme === "dark"
              ? "text-text-primary"
              : "text-secondary-dark"
          }`}
        >
          I'm Daniela, Front-End Developer & former ESL teacher
        </motion.p>
        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.3,
          }}
          className={`font-general-medium mt-2 text-base md:text-lg lg:text-xl text-center sm:text-left leading-normal ${
            currentTheme === "dark"
              ? "text-text-secondary"
              : "text-ternary-dark"
          }`}
        >
          Turning ideas into beautiful, functional web applications
        </motion.p> */}
      </div>
      {/* <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="flex flex-col items-center justify-center"
      >
        <SceneTool />
      </motion.div> */}
    </motion.section>
  );
}

export default AppBanner;
