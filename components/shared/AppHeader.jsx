import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import HireMeModal from "../HireMeModal";

function AppHeader() {
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
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

  const showHireMeModal = () => {
    setShowModal(true);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleThemeToggle = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    console.log("Switching from", currentTheme, "to", newTheme);

    // Update document classes
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(newTheme);

    // Update local state
    setCurrentTheme(newTheme);

    // Save to localStorage
    localStorage.setItem("theme", newTheme);

    console.log("Document classes after:", root.classList.toString());
  };

  // Don't render until mounted to avoid SSR issues
  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      {/* Header */}
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        {/* Header menu links and small screen hamburger menu */}
        <div className="flex justify-around items-center px-4 sm:px-0">
          <div>
            <Link href="/">
              <h1
                className={`text-2xl font-bold ${
                  currentTheme === "dark"
                    ? "text-text-primary"
                    : "text-primary-dark"
                }`}
              >
                DANI MARTINEZ
              </h1>
            </Link>
          </div>

          {/* Theme switcher small screen */}
          <div
            onClick={handleThemeToggle}
            aria-label="Theme Switcher"
            className={`block sm:hidden ml-0 p-3 shadow-sm rounded-xl cursor-pointer transition-all duration-300 ${
              currentTheme === "dark"
                ? "bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:border-white/40"
                : "bg-gray-200/90 backdrop-blur-sm border border-gray-300/70 hover:bg-gray-300/90 hover:border-gray-400/80"
            }`}
          >
            {currentTheme === "dark" ? (
              <FiMoon className="text-text-primary hover:text-gray-300 text-xl" />
            ) : (
              <FiSun className="text-text-primary hover:text-gray-300 text-xl" />
            )}
          </div>

          {/* Small screen hamburger menu */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="Hamburger Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={`h-7 w-7 fill-current ${
                  currentTheme === "dark"
                    ? "text-text-secondary"
                    : "text-primary-dark"
                }`}
              >
                {showMenu ? (
                  <FiX className="text-3xl" />
                ) : (
                  <FiMenu className="text-3xl" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? "block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none"
              : "hidden"
          }
        >
          <div
            className={`block text-left text-lg hover:text-gray-300 sm:mx-4 mb-2 sm:py-2 ${
              currentTheme === "dark"
                ? "text-text-secondary"
                : "text-primary-dark"
            }`}
          >
            <Link href="/projects" aria-label="Projects">
              Projects
            </Link>
          </div>
          <div
            className={`block text-left text-lg hover:text-gray-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 ${
              currentTheme === "dark"
                ? "text-text-secondary border-border-dark"
                : "text-primary-dark border-primary-light"
            }`}
          >
            <Link href="/about" aria-label="About Me">
              About Me
            </Link>
          </div>
          <div
            className={`border-t-2 pt-3 sm:pt-0 sm:border-t-0 ${
              currentTheme === "dark"
                ? "border-border-dark"
                : "border-primary-light"
            }`}
          >
            <Link
              href={"https://www.linkedin.com/in/danielaluciamartinez/"}
              className={`font-general-medium sm:hidden block text-left text-md shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24 transition-all ${
                currentTheme === "dark"
                  ? "bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white"
                  : "bg-gray-200/90 backdrop-blur-sm border border-gray-300/70 hover:bg-gray-300/90 text-gray-800"
              }`}
            >
              Hire Me
            </Link>
          </div>
        </div>

        {/* Header links large screen */}
        <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
          <div
            className={`block text-left text-lg font-medium hover:text-gray-300 sm:mx-4 mb-2 sm:py-2 ${
              currentTheme === "dark"
                ? "text-text-secondary"
                : "text-primary-dark"
            }`}
            aria-label="Projects"
          >
            <Link href="/projects">Projects</Link>
          </div>
          <div
            className={`block text-left text-lg font-medium hover:text-gray-300 sm:mx-4 mb-2 sm:py-2 ${
              currentTheme === "dark"
                ? "text-text-secondary"
                : "text-primary-dark"
            }`}
            aria-label="About Me"
          >
            <Link href="/about">About Me</Link>
          </div>
        </div>

        {/* Header right section buttons */}
        <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
          <div className="hidden md:flex">
            <Link
              href={"https://www.linkedin.com/in/danielaluciamartinez/"}
              className={`text-md font-general-medium shadow-sm rounded-md px-5 py-2.5 duration-300 transition-all ${
                currentTheme === "dark"
                  ? "bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white"
                  : "bg-gray-200/90 backdrop-blur-sm border border-gray-300/70 hover:bg-gray-300/90 text-gray-800"
              }`}
            >
              Hire Me
            </Link>
          </div>

          {/* Theme switcher large screen */}
          <div
            onClick={handleThemeToggle}
            aria-label="Theme Switcher"
            className={`ml-8 p-3 shadow-sm rounded-xl cursor-pointer transition-all duration-300 ${
              currentTheme === "dark"
                ? "bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:border-white/40"
                : "bg-gray-200/90 backdrop-blur-sm border border-gray-300/70 hover:bg-gray-300/90 hover:border-gray-400/80"
            }`}
          >
            {currentTheme === "dark" ? (
              <FiMoon className="text-text-primary hover:text-gray-300 text-xl" />
            ) : (
              <FiSun className="text-text-primary hover:text-gray-300 text-xl" />
            )}
          </div>
        </div>
      </div>

      <div>
        {showModal ? (
          <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />
        ) : null}
        {showModal ? showHireMeModal : null}
      </div>
    </motion.nav>
  );
}

export default AppHeader;
