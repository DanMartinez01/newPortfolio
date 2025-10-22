import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowDownCircle,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiCalendar,
} from "react-icons/fi";
import { aboutMeData } from "../../data/aboutMeData";

function AboutMeBio() {
  const [aboutMe, setAboutMe] = useState(aboutMeData);

  return (
    <div className="min-h-screen py-16 relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-accent-dark/20 to-accent-light/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-accent-light/20 to-accent-bright/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-accent-dark/20 to-accent-bright/20 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
          About Me
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Full-Stack Developer passionate about creating meaningful digital
          experiences
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="backdrop-blur-xl bg-white/20 dark:bg-gray-800/20 rounded-2xl shadow-2xl p-8 sticky top-8 border border-white/30 dark:border-gray-700/30">
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <div className="relative">
                    <Image
                      src="/images/profilepic.jpg"
                      width={200}
                      height={200}
                      className="rounded-full h-48 w-48 object-cover shadow-2xl"
                      alt="Daniela Martinez"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-dark/20 to-accent-light/20"></div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white/80 dark:border-gray-800/80 shadow-lg"></div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-4">
                  Daniela Martinez
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Front-End Developer
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-600 dark:text-gray-300 p-3 rounded-lg backdrop-blur-sm bg-white/30 dark:bg-gray-700/30 border border-white/20 dark:border-gray-600/20">
                  <FiMapPin className="mr-3 text-accent-bright" />
                  <span>Argentina</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 p-3 rounded-lg backdrop-blur-sm bg-white/30 dark:bg-gray-700/30 border border-white/20 dark:border-gray-600/20">
                  <FiCalendar className="mr-3 text-accent-bright" />
                  <span>Available for opportunities</span>
                </div>
              </div>

              {/* Download Resume Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mb-6"
              >
                <a
                  download="CV_Resume.pdf"
                  href="/files/CV_Resume.pdf"
                  className="w-full bg-gradient-to-r from-accent-dark to-accent-light text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center hover:from-accent-light hover:to-accent-bright transition-all duration-200 shadow-lg"
                  aria-label="Download Resume"
                >
                  <FiArrowDownCircle className="mr-2" />
                  Download Resume
                </a>
              </motion.div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 p-4 rounded-lg backdrop-blur-sm bg-white/20 dark:bg-gray-700/20 border border-white/20 dark:border-gray-600/20">
                <motion.a
                  href="https://github.com/DanMartinez01"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 dark:text-gray-300 hover:text-accent-bright transition-colors p-2 rounded-lg hover:bg-white/30 dark:hover:bg-gray-600/30"
                >
                  <FiGithub className="text-xl" />
                </motion.a>
                <motion.a
                  href="mailto:danimartinez233@gmail.com"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 dark:text-gray-300 hover:text-accent-bright transition-colors p-2 rounded-lg hover:bg-white/30 dark:hover:bg-gray-600/30"
                >
                  <FiMail className="text-xl" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/danielaluciamartinez"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 dark:text-gray-300 hover:text-accent-bright transition-colors p-2 rounded-lg hover:bg-white/30 dark:hover:bg-gray-600/30"
                >
                  <FiLinkedin className="text-xl" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="backdrop-blur-xl bg-white/20 dark:bg-gray-800/20 rounded-2xl shadow-2xl p-8 border border-white/30 dark:border-gray-700/30">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                My Story
              </h3>

              <div className="space-y-6">
                {aboutMe.map((bio, index) => (
                  <motion.p
                    key={bio.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                  >
                    {bio.bio}
                  </motion.p>
                ))}
              </div>

              {/* Skills Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  What I Do
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "React",
                    "Next.js",
                    "Tailwind",
                    "Chakra UI",
                    "TypeScript",
                    "Git",
                    "Responsive Design",
                    "PostgreSQL",
                    "Firebase",
                    "Strapi",
                  ].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                      className="px-3 py-2 backdrop-blur-md bg-accent-dark/40 dark:bg-accent-dark/40 text-accent-bright dark:text-accent-bright rounded-lg text-sm font-medium border border-accent-light/50 dark:border-accent-light/50 hover:bg-accent-light/60 dark:hover:bg-accent-light/60 transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeBio;
