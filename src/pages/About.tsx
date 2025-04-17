import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm Surya, a passionate Mechanical Engineering student from India. My core drive is to merge human-centered design with engineering excellence to create next-gen prosthetic and rehabilitation solutions. Beyond engineering, I’m also a poet, a myth-thinker, and a creator at heart.
        </p>
      </div>
    </div>
  );
};

export default About;
