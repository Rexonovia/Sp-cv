import React from 'react'
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
    id="about"
    className="max-w-4xl mx-auto py-12 bg-gray-800/20 backdrop-blur-lg text-gray-100 p-8 rounded-2xl shadow-xl"
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-300">Professional Summary</h2>
    <div className="mt-6 space-y-5 text-base md:text-lg leading-relaxed">
      <p>
        Results-driven professional with over 2 years of experience in academic counseling, client engagement, and business development.
      </p>
      <p>
        Currently pursuing an MBA in Artificial Intelligence, with expertise in strategic planning and relationship management.
      </p>
      <p>
        Achieved the highest admission rates for consecutive years (2023-2024) through data-driven strategies and personalized engagement.
      </p>
      <p>
        Passionate about driving organizational growth with innovative solutions and process optimization.
      </p>
    </div>
  </motion.section>

  )
}

export default About