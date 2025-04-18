import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Whether it's about a project idea, a collab, or just to share thoughts, I'd love to hear from you!
        </p>

        <div className="space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            📧 Email: <a href="mailto:svns.surya@gmail.com" className="text-blue-600 hover:underline">svns.surya@gmail.com</a>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            🐙 GitHub: <a href="https://github.com/sunkmechie" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/your-username</a>
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Contact;

