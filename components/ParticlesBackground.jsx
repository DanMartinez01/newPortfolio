import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
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

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles loaded successfully!", container);
  }, []);

  if (!mounted) return null;

  console.log("Rendering ParticlesBackground with theme:", currentTheme);

  return (
    <Particles
      key={currentTheme} // Force re-render when theme changes
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: currentTheme === "dark" ? "#e5e5e5" : "#000000", // Off-white for dark, black for light
          },
          links: {
            color: currentTheme === "dark" ? "#e5e5e5" : "#000000", // Off-white for dark, black for light
            distance: 150,
            enable: true,
            opacity: 0.6, // More subtle
            width: 1, // Thinner lines
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.8, // Slower animation
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.7, // More subtle particles
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 4 }, // Smaller, more subtle particles
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1, // Temporarily in front for debugging
        pointerEvents: "auto", // Allow interaction for debugging
      }}
    />
  );
};

export default ParticlesBackground;
