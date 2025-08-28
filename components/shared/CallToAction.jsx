import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new and challenging projects. Let's
            discuss how we can bring your ideas to life!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <FiMail className="mr-2" />
                Get In Touch
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors duration-200"
              >
                View My Work
              </Link>
            </motion.div>
          </div>

          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com/DanMartinez01"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-indigo-200 transition-colors duration-200"
            >
              <FiGithub className="text-2xl" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-indigo-200 transition-colors duration-200"
            >
              <FiLinkedin className="text-2xl" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
