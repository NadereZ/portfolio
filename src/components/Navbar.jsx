import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Navigation items with proper React Router paths
  const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Projects", path: "/projects" },
    { id: 4, name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full h-16 flex justify-between items-center xl:px-36 lg:px-24 md:px-12 sm:px-6 px-4 fixed top-0 bg-gray-900 z-50">
      {/* Brand/Logo with React Router Link */}
      <div className="flex items-center">
        <Link
          to="/"
          className="md:text-2xl text-lg text-white hover:text-indigo-400 transition-colors duration-300 font-medium"
          aria-label="Navigate to home page"
        >
          Nadere Zaboli
        </Link>
      </div>

      {/* Navigation Links using React Router */}
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="group relative text-white hover:text-indigo-400 transition-colors duration-300"
          >
            <span className="lg:text-lg text-base font-light tracking-wide">
              {item.name}
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;