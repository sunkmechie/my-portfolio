import React from 'react';

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Projects</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          A curated collection of my most meaningful works in biomechanics, robotics, and custom prosthetics design. 
        </p>
        <p className="text-gray-600 dark:text-gray-400">🚧 Coming soon: detailed project cards with demos & writeups.</p>
      </div>
    </div>
  );
};

export default Projects;
