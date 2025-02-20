import React from "react";
import  { motion } from "framer-motion";
function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-300">
        Professional Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="bg-gray-800/20 backdrop-blur-lg text-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-300">
              Academic Counselor
            </h3>
            <p className="text-gray-400">
              Vedantu | Remote | Feb 2025 - Present
            </p>
            <ul className="list-disc pl-5 text-gray-100 mt-4 space-y-3">
              <li>
                Provide expert academic counseling, enhancing student learning
                with personalized guidance.
              </li>
              <li>
                Develop innovative engagement strategies to boost retention and
                satisfaction.
              </li>
              <li>
                Collaborate with teams to optimize curriculum delivery and
                student success.
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="bg-gray-800/20 backdrop-blur-lg text-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-300">
              Academic Counselor
            </h3>
            <p className="text-gray-400">
              Graphic Era Hill University | Bhimtal | July 2022 - Feb 2025
            </p>
            <ul className="list-disc pl-5 text-gray-100 mt-4 space-y-3">
              <li>
                Led admissions initiatives, surpassing targets by 20% in
                2023-2024.
              </li>
              <li>
                Conducted 20+ workshops for 200+ students, improving career
                clarity by 40%.
              </li>
              <li>
                Streamlined processes, cutting administrative time by 25%.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
