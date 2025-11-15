import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaGitSquare } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiChakraui,
} from "react-icons/si";
import techStack from "./techStack.json";
import dynamic from "next/dynamic";

function ProjectsTech() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  // const SceneBolt = dynamic(() => import("../SceneBolt"), {
  //   ssr: false,
  // });

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

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Intersection threshold
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  if (!mounted) return null;

  return (
    <div ref={containerRef} className="w-full mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h3
          className={`text-2xl md:text-3xl font-bold mb-4 ${
            currentTheme === "dark" ? "text-text-primary" : "text-gray-800"
          }`}
        >
          Tech Stack
        </h3>
        <p
          className={`max-w-2xl mx-auto ${
            currentTheme === "dark" ? "text-text-secondary" : "text-gray-600"
          }`}
        >
          Technologies I use to bring ideas to life
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 ${
              currentTheme === "dark"
                ? "bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 shadow-2xl"
                : "bg-white border border-gray-200"
            }`}
          >
            <div className="text-center">
              <div className="flex justify-center mb-3">
                {tech.icon === "FaReact" && (
                  <FaReact className="text-3xl text-blue-500" />
                )}
                {tech.icon === "IoLogoJavascript" && (
                  <IoLogoJavascript className="text-3xl text-yellow-400" />
                )}
                {tech.icon === "SiTypescript" && (
                  <SiTypescript className="text-3xl text-blue-600" />
                )}
                {tech.icon === "SiTailwindcss" && (
                  <SiTailwindcss className="text-3xl text-cyan-500" />
                )}
                {tech.icon === "FaGitSquare" && (
                  <FaGitSquare className="text-3xl text-orange-600" />
                )}
                {tech.icon === "SiNextdotjs" && (
                  <SiNextdotjs
                    className={`text-3xl ${
                      currentTheme === "dark" ? "text-white" : "text-black"
                    }`}
                  />
                )}
                {tech.icon === "SiChakraui" && (
                  <SiChakraui className="text-3xl text-teal-400" />
                )}
                {tech.icon === "FaReactNative" && (
                  <FaReact className="text-3xl text-blue-400" />
                )}
              </div>
              <h4
                className={`font-semibold text-sm ${
                  currentTheme === "dark"
                    ? "text-text-secondary"
                    : "text-gray-700"
                }`}
              >
                {tech.name}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>

      {/* {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <SceneBolt />
        </motion.div>
      )} */}
    </div>
  );
}

export default ProjectsTech;
