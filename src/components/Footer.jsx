import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    /**
     * Footer Component
     * - Sticky footer that stays at bottom of page
     * - Responsive design for all screen sizes
     * - Contains copyright, social links, and navigation
     * - Accessible with proper ARIA labels
     */
    <footer className="bg-gray-900 text-white py-8 px-4 border-t border-gray-800">
      {/* Main Footer Container */}
      <div className="max-w-6xl mx-auto">
        {/* Social Links Section */}
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="https://github.com/NadereZ" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/nadere-zaboli" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
          
          <a 
            href="mailto:naderezaboli@gmail.com" 
            aria-label="Email"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
          >
            <FaEnvelope className="h-6 w-6" />
          </a>
        </div>

        {/* Footer Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
          <a href="#about" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
            About
          </a>
          <a href="#projects" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
            Contact
          </a>
          <a href="/privacy" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
            Terms
          </a>
        </nav>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Nadere. All rights reserved.</p>
          <p className="mt-1">Built with React and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;