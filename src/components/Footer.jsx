import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    /**
     * Minimal Footer Component
     * - Clean design that doesn't compete with contact page
     * - Just social links and copyright
     * - Responsive and accessible
     */
    <footer className="bg-gray-900 text-white py-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Social Links Only */}
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
        
        {/* Minimal Copyright */}
        <div className="mt-4 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} Nadere. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;