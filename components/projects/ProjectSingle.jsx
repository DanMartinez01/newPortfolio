import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const cardStyle = {
  height: "300px", // Set your desired fixed height for the cards
};

const ProjectSingle = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link
        href="/projects/[id]"
        as={`/projects/${props.id}`}
        aria-label="Single Project"
        passHref
        className="flex h-full mx-auto"
      >
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
          {/* <img className="w-full h-2/5" src={props.img} alt="Single Project" /> */}
          <Image
            className="w-full h-2/5"
            src={props.img}
            alt="Single Project"
            width={100}
            height={100}
            // quality={100}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.title}</div>
            <p className="text-gray-700 text-base">{props.category}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;
