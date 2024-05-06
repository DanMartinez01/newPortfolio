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
import { SiTypescript, SiTailwindcss } from "react-icons/si";
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
    <div ref={containerRef} className="w-full mx-auto my-10">
      <p className="text-center font-general-medium text-2xl sm:text-4xl mb-4 text-ternary-dark dark:text-ternary-light">
        Tech Stack
      </p>
      <div className="flex flex-wrap justify-center text-ternary-dark dark:text-ternary-light">
        <AnimatePresence>
          {isVisible &&
            techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                exit={{ x: -100, opacity: 0 }}
                className=" w-full mt-10  px-2 py-4 sm:w-1/2 md:w-1/3 lg:w-1/4  flex justify-center my-2  rounded-lg tracking-wide text-white"
              >
                <div className="w-full flex justify-center max-w-xs bg-gray-200 dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
                  <div className="px-2 py-4">
                    <p className="text-lg font-semibold text-black dark:text-white">
                      {tech.name}
                    </p>
                    {/* <div className="flex justify-center items-center">
                      {tech.icon === "FaReact" && <FaReact size="30px" />}
                      {tech.icon === "IoLogoJavascript" && (
                        <IoLogoJavascript size="30px" />
                      )}
                      {tech.icon === "SiTypescript" && <SiTypescript size="30px" />}
                      {tech.icon === "SiTailwindcss" && (
                        <SiTailwindcss size="30px" />
                      )}
                      {tech.icon === "FaGitSquare" && <FaGitSquare size="30px" />}
                      
                    </div> */}
                  </div>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
      <SceneBolt />
    </div>
  );
}

export default ProjectsTech;
