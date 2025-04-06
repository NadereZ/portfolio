import React from "react";

const Navbar = () => {
  // Navigation items data for cleaner code management
  const navItems = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Projects", href: "#projects" },
    { id: 4, name: "Contact me", href: "#contact" },
  ];

  return (
    /**
     * Main Navigation Bar Component
     * - Fixed positioning at top of viewport
     * - Full width with responsive padding
     * - Dark background with hover transitions
     * - Accessible and semantic HTML structure
     */
    <header className="w-full h-16 flex justify-between items-center xl:px-36 lg:px-24 md:px-12 sm:px-6 px-4 fixed top-0 bg-gray-900 z-50">
      {/* Brand/Logo Section */}
      <div className="flex items-center">
        <a
          href="#home"
          className="md:text-2xl text-lg text-white hover:text-indigo-400  transition-colors duration-300 font-medium"
          aria-label="Navigate to home page"
        >
          Nadere Zaboli
        </a>
      </div>

      {/* Navigation Links Section */}
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="group relative text-white hover:text-indigo-400  transition-colors duration-300"
          >
            {/* Link Text */}
            <span className="lg:text-lg text-base font-light tracking-wide">
              {item.name}
            </span>
            
            {/* Animated Underline Effect */}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;