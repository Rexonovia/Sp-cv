import React from 'react'
import { FaTrophy, FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

function Achievements() {
  return (
     <section id="achievements" className="max-w-5xl mx-auto py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-300">Achievements & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <motion.div
                className="bg-gray-800/20 backdrop-blur-lg text-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <FaTrophy className="text-4xl text-gray-300 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-300 text-center mt-4">Achievements</h3>
                <ul className="text-gray-100 text-center mt-3 space-y-2">
                  <li>Outstanding Performance in Admissions (2023, 2024)</li>
                  <li>UKPCS Prelims Qualification (2022)</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-gray-800/20 backdrop-blur-lg text-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <FaCertificate className="text-4xl text-gray-300 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-300 text-center mt-4">Certifications</h3>
                <ul className="text-gray-100 text-center mt-3 space-y-2">
                  <li>Trained in Kathak Dance</li>
                </ul>
              </motion.div>
            </div>
          </section>
  )
}

export default Achievements