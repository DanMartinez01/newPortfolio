import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiStrapi,
  SiFirebase,
  SiGit,
  SiChakraui,
  SiFramer,
} from "react-icons/si";
import { FaCertificate } from "react-icons/fa";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// const SceneBolt = dynamic(() => import("../SceneBolt"), {
//   ssr: false,
// });

const TechShowcase = () => {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);
  const [hoveredTech, setHoveredTech] = useState(null);

  useEffect(() => {
    setMounted(true);
    const htmlClasses = document.documentElement.classList;
    if (htmlClasses.contains("light")) {
      setCurrentTheme("light");
    } else if (htmlClasses.contains("dark")) {
      setCurrentTheme("dark");
    } else {
      document.documentElement.classList.add("dark");
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

  const mainTechnologies = [
    {
      name: "React",
      icon: SiReact,
      color: "text-blue-500",
      description: "Building dynamic UIs",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-black dark:text-white",
      description: "Server-side rendering",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "text-blue-600",
      description: "Type-safe development",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "text-yellow-400",
      description: "Core programming",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-cyan-500",
      description: "Utility-first styling",
    },
    {
      name: "Framer Motion",
      icon: SiFramer,
      color: "text-pink-500",
      description: "Smooth animations",
    },
    {
      name: "Chakra UI",
      icon: SiChakraui,
      color: "text-teal-400",
      description: "Component library",
    },
    {
      name: "Strapi",
      icon: SiStrapi,
      color: "text-purple-600",
      description: "Headless CMS",
    },
    {
      name: "Firebase",
      icon: SiFirebase,
      color: "text-orange-500",
      description: "Backend services",
    },
    {
      name: "Git",
      icon: SiGit,
      color: "text-orange-600",
      description: "Version control",
    },
  ];

  const certifications = [
    {
      name: "Typescript Fundamentals",
      issuer: "ui.dev",
      year: "2024",
      icon: SiReact,
      color: "text-blue-500",
    },
    {
      name: "React Query",
      issuer: "ui.dev",
      year: "2024",
      icon: SiTypescript,
      color: "text-blue-600",
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      year: "2021",
      icon: SiJavascript,
      color: "text-yellow-400",
    },
    {
      name: "Introducción a la Programación con C++",
      issuer: "Universidad Tecnológica Nacional",
      year: "2020",
      icon: FaCertificate,
      color: "text-blue-400",
    },
    {
      name: "Introducción a la Programación con JavaScript",
      issuer: "Universidad Tecnológica Nacional",
      year: "2020",
      icon: SiJavascript,
      color: "text-yellow-400",
    },
    {
      name: "React",
      issuer: "Coderhouse",
      year: "2021",
      icon: SiReact,
      color: "text-blue-500",
    },
  ];

  if (!mounted) return null;

  return (
    <section
      id="technologies"
      className={`py-20 relative overflow-hidden transition-all duration-300 rounded-3xl ${
        currentTheme === "dark"
          ? "bg-white/5 backdrop-blur-xl border border-white/10"
          : "bg-gray-100/50 backdrop-blur-lg border border-gray-200/30"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              currentTheme === "dark" ? "text-text-primary" : "text-gray-800"
            }`}
          >
            Tech Stack & Expertise
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              currentTheme === "dark" ? "text-text-secondary" : "text-gray-600"
            }`}
          >
            Crafting modern web experiences with cutting-edge technologies
          </p>
        </motion.div>

        {/* Main Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {mainTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              className={`relative group cursor-pointer rounded-2xl p-4 h-40 w-full flex items-center justify-center transition-all duration-300 ${
                currentTheme === "dark"
                  ? "bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 hover:bg-gray-800/60 hover:border-gray-600/50"
                  : "bg-white border border-gray-200 hover:shadow-xl"
              }`}
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl ${tech.color.replace(
                  "text-",
                  "bg-"
                )}/20`}
              />

              <div className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  <tech.icon
                    className={`text-5xl mb-3 ${tech.color} transition-transform duration-300 group-hover:scale-110`}
                  />
                  <h3
                    className={`font-semibold text-sm mb-2 whitespace-nowrap ${
                      currentTheme === "dark"
                        ? "text-text-primary"
                        : "text-gray-800"
                    }`}
                  >
                    {tech.name}
                  </h3>

                  {/* Description - always visible on mobile, hover on desktop */}
                  <p
                    className={`text-xs md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 ${
                      currentTheme === "dark"
                        ? "text-text-secondary"
                        : "text-gray-500"
                    }`}
                  >
                    {tech.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D Animation */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mb-16"
        >
          <SceneBolt />
        </motion.div> */}

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h3
            className={`text-2xl md:text-3xl font-bold text-center mb-8 ${
              currentTheme === "dark" ? "text-text-primary" : "text-gray-800"
            }`}
          >
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className={`relative group rounded-xl p-6 transition-all duration-300 ${
                  currentTheme === "dark"
                    ? "bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50"
                    : "bg-white border border-gray-200 hover:shadow-lg"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      currentTheme === "dark" ? "bg-white/10" : "bg-gray-100"
                    }`}
                  >
                    <cert.icon className={`text-2xl ${cert.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4
                      className={`font-semibold mb-1 ${
                        currentTheme === "dark"
                          ? "text-text-primary"
                          : "text-gray-800"
                      }`}
                    >
                      {cert.name}
                    </h4>
                    <p
                      className={`text-sm ${
                        currentTheme === "dark"
                          ? "text-text-secondary"
                          : "text-gray-600"
                      }`}
                    >
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechShowcase;
