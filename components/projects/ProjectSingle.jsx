import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { IoLink } from "react-icons/io5";
import { useState, useEffect } from "react"; // Import useState and useEffect

import useThemeSwitcher from "../../hooks/useThemeSwitcher";

const ProjectSingle = (props) => {
  const technologies = props.technologies;
  const [activeTheme] = useThemeSwitcher();

  // Define array of box shadow styles, including your custom shadow
  const boxShadowStyles = [
    // "0 4px 6px rgba(0, 0, 0, 0.1)",
    // "0 4px 8px rgba(0, 0, 0, 0.2)",
    "0 6px 12px rgba(0, 0, 0, 0.3)",
    "0 0 20px rgba(33, 147, 176, 0.5)", // Your custom shadow
  ];

  // Use state to track current box shadow style index
  const [boxShadowIndex, setBoxShadowIndex] = useState(0);

  // Use effect to toggle box shadow periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setBoxShadowIndex(
        (prevIndex) => (prevIndex + 1) % boxShadowStyles.length
      );
    }, 2000); // Change box shadow every 3 seconds

    return () => clearInterval(interval);
  }, []); // Run effect only once on component mount

  // Define transition duration and easing
  const transitionDuration = "0.3s";
  const transitionTimingFunction = "ease-in-out";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
      className="mb-8"
    >
      <div
        className={`max-w-sm rounded overflow-hidden mx-auto w-4/5 h-96 transition-transform transform border-2 border-transparent transition-border duration-300 ease-in-out shadow-md`}
        href={props.url}
        style={{
          boxShadow: boxShadowStyles[boxShadowIndex],
          transition: `box-shadow ${transitionDuration} ${transitionTimingFunction}`, // Apply transition
        }}
      >
        <Image
          src={props.img}
          alt="Single Project"
          width={400}
          height={100}
          // layout="responsive"
          className="h-2/4"
        />

        <div className="px-2 py-4 flex flex-row ">
          <p className="font-general-semibold text-xl  text-ternary-dark dark:text-primary-light">
            {props.title}
          </p>
        </div>
        <div className="px-2">
          {technologies &&
            technologies.map((item, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-1 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1"
              >
                {item}
              </span>
            ))}
        </div>
        <div className="flex flex-row justify-end items-center mt-12 text-gray-500">
          <Link className="mx-2" href={props.github}>
            <FaGithub size={20} className="hover:scale-105" />
          </Link>
          <Link className="mx-2" href={props.url}>
            <IoLink size={26} className="hover:scale-105" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSingle;
