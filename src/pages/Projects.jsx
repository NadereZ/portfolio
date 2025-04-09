import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon

const Projects = () => {
  // Project data array for easier management
  const projects = [
    {
      title: "Movie App",
      url: "https://github.com/NadereZ/movie_app.git",
      description: "A web application for browsing and discovering movies"
    },
    {
      title: "E-commerce Platform",
      url: "https://github.com/NadereZ/ecommerce.git",
      description: "Full-stack online shopping platform implementation"
    },
    {
      title: "CRM System",
      url: "https://github.com/NadereZ/crm.git",
      description: "Customer relationship management solution for businesses"
    }
  ];

  return (
    /**
     * Projects Section Component
     * - Responsive grid layout for project cards
     * - Interactive hover effects and transitions
     * - Accessible link labels and semantic HTML
     * - Consistent styling with Tailwind CSS
     */
    <div className="min-h-screen bg-gray-900 text-white p-8 md:p-12 lg:p-16">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-indigo-400">
        My Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group relative bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700 hover:transform hover:scale-105"
          >
            {/* Project Card Content */}
            <div className="flex flex-col h-full">
              {/* Project Title */}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              
              {/* Project Description */}
              <p className="text-gray-400 mb-4 flex-grow">
                {project.description}
              </p>

              {/* GitHub Link */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <FaGithub className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;