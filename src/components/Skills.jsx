import React from "react";
import  { motion } from "framer-motion";
import { FaChartLine, FaUsers, FaTools } from "react-icons/fa";
function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-300">
        Core Competencies & Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {[
          {
            icon: <FaChartLine className="text-gray-300" />,
            title: "Business Development",
            skills: [
              "Client Acquisition",
              "Strategic Planning",
              "Process Optimization",
            ],
          },
          {
            icon: <FaUsers className="text-gray-300" />,
            title: "Communication & Leadership",
            skills: [
              "Stakeholder Communication",
              "Team Leadership",
              "Project Management",
            ],
          },
          {
            icon: <FaTools className="text-gray-300" />,
            title: "Technical Skills",
            skills: [
              "Microsoft Office Suite",
              "Business Analytics Tools",
              "CRM Systems",
            ],
          },
        ].map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/20 backdrop-blur-lg text-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl text-gray-300 mx-auto w-fit">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-300 text-center mt-4">
              {skill.title}
            </h3>
            <ul className="text-gray-100 text-center mt-3 space-y-2">
              {skill.skills.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
