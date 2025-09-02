// import React from "react";
// import { FaReact, FaGitSquare } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io";
// import { SiTypescript, SiTailwindcss } from "react-icons/si";
// import techStack from "./techStack.json";

// function ProjectsTech() {
//   return (
//     <div className="w-full mx-auto my-10">
//       <p className="text-center font-general-medium text-2xl sm:text-4xl mb-4 text-ternary-dark dark:text-ternary-light">
//         Tech Stack
//       </p>
//       <div className="flex flex-wrap justify-center text-ternary-dark dark:text-ternary-light">
//         {techStack.map((tech, index) => (
//           <div
//             key={index}
//             className=" w-full mt-10  px-2 py-4 sm:w-1/2 md:w-1/3 lg:w-1/4  flex justify-center my-2  rounded-lg tracking-wide text-white"
//           >
//             <div className="w-full flex justify-center max-w-xs bg-gray-200 dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
//               <div className="px-2 py-4">
//                 <p className="text-lg font-semibold text-black dark:text-white">
//                   {tech.name}
//                 </p>
//                 <div className="flex justify-center items-center">
//                   {tech.icon === "FaReact" && <FaReact size="30px" />}
//                   {tech.icon === "IoLogoJavascript" && (
//                     <IoLogoJavascript size="30px" />
//                   )}
//                   {tech.icon === "SiTypescript" && <SiTypescript size="30px" />}
//                   {tech.icon === "SiTailwindcss" && (
//                     <SiTailwindcss size="30px" />
//                   )}
//                   {tech.icon === "FaGitSquare" && <FaGitSquare size="30px" />}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProjectsTech;

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaGitSquare } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import techStack from "./techStack.json";
import dynamic from "next/dynamic";

function ProjectsTech() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const SceneBolt = dynamic(() => import("../SceneBolt"), {
    ssr: false,
  });

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

  return (
    <div ref={containerRef} className="w-full mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Tech Stack
        </h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Technologies I use to bring ideas to life
        </p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <AnimatePresence>
          {isVisible &&
            techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="backdrop-blur-xl bg-gray-900/40 dark:bg-gray-800/40 rounded-2xl p-6 text-center border border-gray-700/50 dark:border-gray-600/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group-hover:border-gray-500/70">
                  <div className="flex justify-center items-center mb-3">
                    {tech.icon === "FaReact" && (
                      <FaReact size="32" className="text-blue-400" />
                    )}
                    {tech.icon === "IoLogoJavascript" && (
                      <IoLogoJavascript size="32" className="text-yellow-400" />
                    )}
                    {tech.icon === "SiTypescript" && (
                      <SiTypescript size="32" className="text-blue-500" />
                    )}
                    {tech.icon === "SiTailwindcss" && (
                      <SiTailwindcss size="32" className="text-cyan-400" />
                    )}
                    {tech.icon === "FaGitSquare" && (
                      <FaGitSquare size="32" className="text-orange-500" />
                    )}
                    {tech.icon === "RiNextjsFill" && (
                      <SiNextdotjs size="32" className="text-gray-300" />
                    )}
                  </div>
                  <p className="text-sm font-mono font-medium text-gray-200 dark:text-gray-100 group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </p>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      <div className="mt-12">
        <SceneBolt />
      </div>
    </div>
  );
}

export default ProjectsTech;
