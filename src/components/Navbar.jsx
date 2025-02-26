import React, { useState } from 'react';
import ResumeButton from './Resume'; // Adjust path if needed

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800/50 backdrop-blur-md p-4 z-10">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Hamburger Menu Button (visible on mobile) */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Centered Links (including ResumeButton) */}
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row items-center justify-center gap-6 text-gray-300 absolute md:static top-16 left-0 right-0 bg-gray-800/90 md:bg-transparent p-4 md:p-0 w-full`}
        >
          <ul className="flex flex-col md:flex-row gap-6 justify-center w-full md:w-auto">
            <li>
              <a href="#about" className="hover:text-gray-100 transition" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-gray-100 transition" onClick={() => setIsOpen(false)}>
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-gray-100 transition" onClick={() => setIsOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#achievements" className="hover:text-gray-100 transition" onClick={() => setIsOpen(false)}>
                Achievements
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-100 transition" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
            <li>
              <ResumeButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;