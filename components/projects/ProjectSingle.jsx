import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { IoLink } from "react-icons/io5";

const ProjectSingle = (props) => {
  const technologies = props.technologies;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/20 dark:bg-gray-800/20 border border-white/30 dark:border-gray-700/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <Link href={props.url}>
            <Image
              src={props.img}
              alt={props.title}
              width={400}
              height={250}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-75 contrast-110 saturate-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent opacity-60" />
          </Link>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white text-xs font-semibold rounded-full backdrop-blur-sm">
              {props.category}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold font-mono text-gray-800 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
            {props.title}
          </h3>

          {/* Technologies */}
          <div className="mb-4">
            {technologies &&
              technologies.map((item, index) => (
                <span
                  key={index}
                  className="inline-block backdrop-blur-sm bg-gray-700/60 dark:bg-gray-600/60 text-gray-200 dark:text-gray-100 rounded-full px-3 py-1 text-xs font-mono font-medium mr-2 mb-2 border border-gray-600/50 dark:border-gray-500/50 hover:bg-gray-600/80 dark:hover:bg-gray-500/80 transition-all duration-200"
                >
                  {item}
                </span>
              ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-700/50 dark:border-gray-600/50">
            <Link
              href={props.github}
              className="flex items-center px-4 py-2 bg-gray-800/60 dark:bg-gray-700/60 text-gray-200 dark:text-gray-100 rounded-lg hover:bg-gray-700/80 dark:hover:bg-gray-600/80 transition-all duration-200 backdrop-blur-sm border border-gray-600/50 dark:border-gray-500/50"
            >
              <FaGithub className="mr-2" size={16} />
              <span className="text-sm font-medium">Code</span>
            </Link>

            <Link
              href={props.url}
              className="flex items-center px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <IoLink className="mr-2" size={16} />
              <span className="text-sm font-medium">Live Demo</span>
            </Link>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default ProjectSingle;
