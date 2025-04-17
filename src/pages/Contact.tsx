import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Whether it's about a project idea, a collab, or just to share thoughts, I'd love to hear from you!
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">📧 Email: surya.engineering@example.com</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">📱 LinkedIn & GitHub links will be here soon.</p>
      </div>
    </div>
  );
};

export default Contact;
