import React from 'react'
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
function Hero() {
  return (
    <section id="hero" className="text-center py-24 md:py-32">
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.img
        src="./image/IMG_1127.jpg"
        alt="Shivani Pandey"
        className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full mb-6 shadow-lg border-4 border-gray-400 object-cover cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-300">Shivani Pandey</h1>
      <p className="text-lg md:text-xl text-gray-400 mt-3 tracking-wide">
        Academic Counselor | Business Development Professional
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/shivani-pandey-670283241/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-700 text-gray-100 px-5 py-2 rounded-full hover:bg-gray-600 transition-all duration-300 shadow-md"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="mailto:shivanipandeysp1230@gmail.com"
          className="flex items-center gap-2 border-2 border-gray-500 text-gray-100 px-5 py-2 rounded-full hover:bg-gray-500 hover:text-gray-900 transition-all duration-300"
        >
          <FaEnvelope /> Email
        </a>
      </div>
    </motion.div>
  </section>
  )
}

export default Hero