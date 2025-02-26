import React from 'react';
import ResumeButton from './Resume';
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800/50 backdrop-blur-md p-4 z-10">
      <div className="flex justify-center items-center gap-6 text-gray-300">
        <ul className="flex gap-6">
          <li><a href="#about" className="hover:text-gray-100 transition">About</a></li>
          <li><a href="#experience" className="hover:text-gray-100 transition">Experience</a></li>
          <li><a href="#skills" className="hover:text-gray-100 transition">Skills</a></li>
          <li><a href="#achievements" className="hover:text-gray-100 transition">Achievements</a></li>
          <li><a href="#contact" className="hover:text-gray-100 transition">Contact</a></li>
        </ul>
<ResumeButton />
      </div>
    </nav>
  );
}

export default Navbar;