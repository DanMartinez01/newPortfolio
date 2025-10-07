import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import ProjectSingle from "./ProjectSingle";
import { projectsData } from "../../data/projectsData";
// import ProjectsFilter from "./ProjectsFilter";
import ProjectsTech from "./ProjectsTech";
function ProjectsGrid() {
  const [searchProject, setSearchProject] = useState();
  const [selectProject, setSelectProject] = useState();
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

  const selectProjectsByCategory = projectsData.filter((item) => {
    let category =
      item.category.charAt(0).toUpperCase() + item.category.slice(1);
    return category.includes(selectProject);
  });

  if (!mounted) return null;

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <ProjectsTech />
      <div className="text-center">
        <p
          className={`font-general-medium text-2xl sm:text-4xl mb-1 ${
            currentTheme === "dark" ? "text-text-primary" : "text-ternary-dark"
          }`}
        >
          Projects portfolio
        </p>
      </div>
      <div className="mt-10 sm:mt-16"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
        {selectProject
          ? selectProjectsByCategory.map((project, index) => {
              return <ProjectSingle key={index} {...project} />;
            })
          : projectsData.map((project, index) => (
              <ProjectSingle key={index} {...project} />
            ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;
