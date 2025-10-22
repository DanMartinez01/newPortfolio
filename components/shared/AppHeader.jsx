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
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Header */}
      <div className="max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center sm:py-6 mx-auto">
        {/* Header menu links and small screen hamburger menu */}
        <div
          className={`flex justify-between items-center px-4 sm:px-0 ${
            currentTheme === "dark"
              ? "sm:bg-transparent bg-white/5 backdrop-blur-md border-b border-white/10"
              : "sm:bg-transparent bg-gray-100/80 backdrop-blur-md border-b border-gray-200/50"
          } sm:border-0 py-3 sm:py-0`}
        >
          <div>
            <Link href="/">
              <div className="flex items-center gap-2 group">
                <span
                  className={`text-xl font-mono font-semibold transition-all duration-300 ${
                    currentTheme === "dark"
                      ? "text-accent-light group-hover:text-accent-bright"
                      : "text-primary-dark group-hover:text-accent-dark"
                  }`}
                >
                  {"<"}
                </span>
                <span
                  className={`text-xl font-mono font-semibold transition-all duration-300 ${
                    currentTheme === "dark"
                      ? "text-text-primary group-hover:text-accent-light"
                      : "text-primary-dark group-hover:text-accent-dark"
                  }`}
                >
                  dev.dani
                </span>
                <span
                  className={`text-xl font-mono font-semibold transition-all duration-300 ${
                    currentTheme === "dark"
                      ? "text-accent-light group-hover:text-accent-bright"
                      : "text-primary-dark group-hover:text-accent-dark"
                  }`}
                >
                  {"/>"}
                </span>
              </div>
            </Link>
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
                className={`h-7 w-7 fill-current transition-colors ${
                  currentTheme === "dark"
                    ? "text-text-secondary hover:text-text-primary"
                    : "text-primary-dark hover:text-accent-dark"
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

        {/* Header links small screen - Dropdown menu with blur (Full Width) */}
        <motion.div
          initial={false}
          animate={{
            height: showMenu ? "auto" : 0,
            opacity: showMenu ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`sm:hidden overflow-hidden w-full ${
            showMenu ? "block" : "hidden"
          }`}
        >
          <div
            className={`w-full shadow-xl ${
              currentTheme === "dark"
                ? "bg-white/10 backdrop-blur-md border-b border-white/20"
                : "bg-gray-100/90 backdrop-blur-md border-b border-gray-200/50"
            }`}
          >
            <div className="px-6 py-4 space-y-3">
              <div
                className={`block text-left text-lg hover:text-gray-300 transition-colors ${
                  currentTheme === "dark"
                    ? "text-text-secondary hover:text-text-primary"
                    : "text-primary-dark hover:text-accent-dark"
                }`}
              >
                <Link
                  href="/technologies"
                  aria-label="Technologies & Skills"
                  onClick={() => setShowMenu(false)}
                >
                  Technologies & Skills
                </Link>
              </div>

              <div
                className={`block text-left text-lg hover:text-gray-300 border-t pt-3 transition-colors ${
                  currentTheme === "dark"
                    ? "text-text-secondary hover:text-text-primary border-white/10"
                    : "text-primary-dark hover:text-accent-dark border-gray-300/50"
                }`}
              >
                <Link
                  href="/about"
                  aria-label="About Me"
                  onClick={() => setShowMenu(false)}
                >
                  About Me
                </Link>
              </div>

              {/* Theme switcher inside dropdown - Aligned left like other links */}
              <div
                className={`flex items-center justify-start border-t pt-3 ${
                  currentTheme === "dark"
                    ? "border-white/10"
                    : "border-gray-300/50"
                }`}
              >
                <button
                  onClick={handleThemeToggle}
                  aria-label="Theme Switcher"
                  className={`p-2 rounded-lg cursor-pointer transition-all duration-300 ${
                    currentTheme === "dark"
                      ? "bg-white/10 hover:bg-white/20 text-text-primary"
                      : "bg-gray-200/90 hover:bg-gray-300/90 text-primary-dark"
                  }`}
                >
                  {currentTheme === "dark" ? (
                    <FiMoon className="text-lg" />
                  ) : (
                    <FiSun className="text-lg" />
                  )}
                </button>
              </div>

              <div
                className={`border-t pt-3 ${
                  currentTheme === "dark"
                    ? "border-white/10"
                    : "border-gray-300/50"
                }`}
              >
                <Link
                  href={"https://www.linkedin.com/in/danielaluciamartinez/"}
                  className={`font-general-medium block text-center text-md shadow-sm rounded-lg px-4 py-2.5 duration-300 transition-all ${
                    currentTheme === "dark"
                      ? "bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white"
                      : "bg-gray-200/90 backdrop-blur-sm border border-gray-300/70 hover:bg-gray-300/90 text-gray-800"
                  }`}
                  onClick={() => setShowMenu(false)}
                >
                  Hire Me
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Header links large screen */}
        <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
          <div
            className={`block text-left text-lg font-medium hover:text-gray-300 sm:mx-4 mb-2 sm:py-2 ${
              currentTheme === "dark"
                ? "text-text-secondary"
                : "text-primary-dark"
            }`}
            aria-label="Technologies & Skills"
          >
            <Link href="/technologies">Technologies & Skills</Link>
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
