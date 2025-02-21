import {
  FaLinkedin,
  FaEnvelope,
  FaChartLine,
  FaUsers,
  FaTools,
  FaTrophy,
  FaCertificate,
  FaPhone,
} from "react-icons/fa";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import { motion } from "framer-motion";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-700 to-gray-600 text-gray-100 p-6 font-sans">
      <Navbar />
      <Hero />
      <About />
      <div className="h-1 bg-gray-700/20"></div>
      <Experience />
      <div className="h-1 bg-gray-700/20"></div>
      <Skills />
      <div className="h-1 bg-gray-700/20"></div>
      <Achievements />
      <div className="h-1 bg-gray-700/20"></div>
      <Contact />
    </div>
  );
}
