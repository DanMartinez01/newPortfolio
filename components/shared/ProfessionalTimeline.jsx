import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaUsers,
  FaLaptopCode,
} from "react-icons/fa";

const ProfessionalTimeline = () => {
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

  const timeline = [
    {
      year: "2011-2020",
      title: "ESL Teacher",
      company: "Secondary Schools and Universities",
      description:
        "Teaching English as a Second Language, developing communication and teaching skills",
      icon: FaGraduationCap,
      color: "text-purple-500",
    },
    {
      year: "2021-2023",
      title: "Freelance Developer",
      company: "Self-employed",
      description:
        "Started building websites and learning web development independently",
      icon: FaLaptopCode,
      color: "text-blue-500",
    },
    {
      year: "2021-2024",
      title: "Community Member",
      company: "Programadores Argentina",
      description:
        "Active member of the developer community, networking and continuous learning",
      icon: FaUsers,
      color: "text-green-500",
    },
    {
      year: "2024-Present",
      title: "Frontend Developer",
      company: "Robin",
      description:
        "Building modern web applications with React, Next.js, and TypeScript",
      icon: FaBriefcase,
      color: "text-orange-500",
    },
  ];

  if (!mounted) return null;

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2
          className={`text-3xl md:text-4xl font-bold mb-4 ${
            currentTheme === "dark" ? "text-text-primary" : "text-gray-800"
          }`}
        >
          Professional Journey
        </h2>
        <p
          className={`max-w-2xl mx-auto ${
            currentTheme === "dark" ? "text-text-secondary" : "text-gray-600"
          }`}
        >
          From teaching to tech - my path to becoming a developer
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div
          className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 ${
            currentTheme === "dark" ? "bg-white/20" : "bg-gray-300"
          }`}
        />

        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Icon */}
            <div
              className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center z-10 ${
                currentTheme === "dark"
                  ? "bg-gray-800 border-2 border-white/20"
                  : "bg-white border-2 border-gray-300"
              }`}
            >
              <item.icon className={`text-2xl ${item.color}`} />
            </div>

            {/* Content */}
            <div
              className={`ml-28 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-xl ${
                  currentTheme === "dark"
                    ? "bg-gray-800/40 backdrop-blur-xl border border-gray-700/50"
                    : "bg-white border border-gray-200 shadow-lg"
                }`}
              >
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${
                    currentTheme === "dark"
                      ? "bg-white/10 text-text-secondary"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {item.year}
                </span>
                <h3
                  className={`text-xl font-bold mb-1 ${
                    currentTheme === "dark"
                      ? "text-text-primary"
                      : "text-gray-800"
                  }`}
                >
                  {item.title}
                </h3>
                <p className={`font-semibold mb-2 ${item.color}`}>
                  {item.company}
                </p>
                <p
                  className={`text-sm ${
                    currentTheme === "dark"
                      ? "text-text-secondary"
                      : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalTimeline;
