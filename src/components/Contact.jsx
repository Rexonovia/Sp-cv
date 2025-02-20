import React from 'react'
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
function Contact() {
  return (
    <section id="contact" className="text-center py-16">
           <h2 className="text-3xl md:text-4xl font-bold text-gray-300">Contact Me</h2>
           <div className="mt-6 space-y-4">
             <p className="text-lg text-gray-400 flex items-center justify-center gap-2">
               <FaPhone className="text-gray-300" /> +91 8126943904
             </p>
             <p className="text-lg text-gray-400 flex items-center justify-center gap-2">
               <FaEnvelope className="text-gray-300" />
               <a
                 href="mailto:shivanipandeysp1230@gmail.com"
                 className="hover:text-gray-100 transition-all duration-300 underline"
               >
                 shivanipandeysp1230@gmail.com
               </a>
             </p>
             <a
               href="https://www.linkedin.com/in/shivani-pandey-670283241/"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-gray-300 underline text-lg hover:text-gray-100 mt-4 transition-all duration-300"
             >
               <FaLinkedin /> LinkedIn Profile
             </a>
           </div>
         </section>
  )
}

export default Contact