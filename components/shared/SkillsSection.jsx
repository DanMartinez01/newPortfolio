import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiNpm,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { useEffect, useState } from "react";

const SkillsSection = () => {
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

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "text-blue-500" },
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "text-black dark:text-white",
        },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
        { name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: SiGit, color: "text-orange-600" },
        { name: "GitHub", icon: SiGithub, color: "text-black dark:text-white" },
        { name: "npm", icon: SiNpm, color: "text-red-500" },
        { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" },
        { name: "Netlify", icon: SiNetlify, color: "text-green-500" },
      ],
    },
  ];

  if (!mounted) return null;

  return (
    <section
      className={`py-16 transition-colors duration-300 ${
        currentTheme === "dark" ? "bg-secondary-dark" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-3xl font-bold mb-4 ${
              currentTheme === "dark" ? "text-text-primary" : "text-gray-800"
            }`}
          >
            Skills & Technologies
          </h2>
          <p
            className={`max-w-2xl mx-auto ${
              currentTheme === "dark" ? "text-text-secondary" : "text-gray-600"
            }`}
          >
            I work with a variety of technologies to create modern, scalable web
            applications. Here are the tools and technologies I use most
            frequently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className={`rounded-lg shadow-lg p-6 border transition-colors duration-300 ${
                currentTheme === "dark"
                  ? "bg-gray-800/40 backdrop-blur-xl border-gray-700/50 shadow-2xl"
                  : "bg-white border-gray-200"
              }`}
            >
              <h3
                className={`text-xl font-semibold mb-6 text-center ${
                  currentTheme === "dark"
                    ? "text-text-primary"
                    : "text-gray-800"
                }`}
              >
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    className={`flex flex-col items-center p-4 rounded-lg transition-colors duration-200 ${
                      currentTheme === "dark"
                        ? "hover:bg-gray-700/30"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <skill.icon className={`text-3xl mb-2 ${skill.color}`} />
                    <span
                      className={`text-sm font-medium text-center ${
                        currentTheme === "dark"
                          ? "text-text-secondary"
                          : "text-gray-700"
                      }`}
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Responsive Design",
              "RESTful APIs",
              "Authentication",
              "E-commerce",
              "UI/UX Design",
              "Agile Development",
              "Problem Solving",
              "Team Collaboration",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  currentTheme === "dark"
                    ? "bg-white/10 backdrop-blur-sm border border-white/20 text-white"
                    : "bg-gray-200/80 backdrop-blur-sm border border-gray-300/50 text-gray-800"
                }`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
