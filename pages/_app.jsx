import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import DefaultLayout from "../components/layout/DefaultLayout";
import UseScrollToTop from "../hooks/useScrollToTop";
import ChatbotWidget from "../components/shared/ChatbotWidget";
import ParticlesBackground from "../components/ParticlesBackground";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme") || "dark";

    // Apply theme to document
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(savedTheme);
  }, []);

  return (
    <AnimatePresence>
      <div className="transition duration-300">
        <ParticlesBackground />
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
        <UseScrollToTop />
        {/* <ChatbotWidget /> */}
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
