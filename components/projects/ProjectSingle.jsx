/* eslint-disable react-hooks/rules-of-hooks */
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { IoLink } from "react-icons/io5";

import useThemeSwitcher from "../../hooks/useThemeSwitcher";

const ProjectSingle = (props) => {
  const technologies = props.technologies;

  const [activeTheme] = useThemeSwitcher();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
      className="mb-4"
    >
      <div
        // className="max-w-sm rounded overflow-hidden shadow-lg mx-auto  w-3/4  h-full  mb-2 transition-transform transform  hover:shadow-neon hover:scale-105"
        className={`max-w-sm rounded overflow-hidden mx-auto w-3/4 h-full transition-transform transform hover:shadow-neon hover:scale-105 border-2 border-transparent transition-border duration-300 ease-in-out shadow-md`}
        href={props.url}
        // style={{
        //   border: "2px solid transparent", // Set an initial transparent border
        //   transition: "border 0.3s ease-in-out", // Add transition to the border
        //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Optional: Add a subtle shadow on hover
        //   marginBottom: "10px",
        // }}
      >
        <Image
          src={props.img}
          alt="Single Project"
          width={400}
          height={100}
          className="h-2/4"
        />

        <div className="px-6 py-4 flex flex-row ">
          {activeTheme === "dark" ? (
            <p className="text-white text-xl font-bold">{props.title}</p>
          ) : (
            <p className="text-black text-xl font-bold">{props.title}</p>
          )}
        </div>
        <div className="px-6">
          {technologies &&
            technologies.map((item, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-1"
              >
                {item}
              </span>
            ))}
        </div>
        <div className="flex flex-row justify-end items-center mt-10 text-gray-500">
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
