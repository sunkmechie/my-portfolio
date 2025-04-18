import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="lg:flex lg:items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <TypeAnimation
              sequence={[
                'Building cool stuff. Period.',
                1000,
                'Probably overthinking a hinge mechanism right now',
                1000,
                'Sketching half-baked ideas on the napkin',
                1000,
                'The main character engineer you wish you met earlier',
                1000,
                'Occasionally bleeds poetry onto the nearest piece of paper',
                1000,
              ]}
              wrapper="h1"
              speed={50}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-6"
              repeat={Infinity}
            />
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
I’m 60 parts engineer, the rest a full-time daydreamer. When I’m locked in, I build wild things—from drones to devices I can't even name yet. But when the lab lights go out? That’s when you'll find me scribbling poems onto my palm! (Yeah, paper’s a bit too premium these days and my budget doesn't cover for poetry-grade paper😅)
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 lg:mt-0 lg:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1581093458791-9f3c3900df6b?auto=format&fit=crop&q=80"
              alt="Engineering Design"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
            />
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to="/projects"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-px"
          >
            <div className="relative rounded-[calc(0.75rem-1px)] bg-white p-6 dark:bg-gray-900">
              <div className="space-y-4">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  Featured Projects
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Explore my latest engineering projects and innovations.
                </p>
              </div>
            </div>
          </Link>

          <Link
            to="/about"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 p-px"
          >
            <div className="relative rounded-[calc(0.75rem-1px)] bg-white p-6 dark:bg-gray-900">
              <div className="space-y-4">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  About Me
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Learn about my journey, skills, and aspirations.
                </p>
              </div>
            </div>
          </Link>

          <Link
            to="/poetry"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-pink-500 to-red-600 p-px"
          >
            <div className="relative rounded-[calc(0.75rem-1px)] bg-white p-6 dark:bg-gray-900">
              <div className="space-y-4">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  Poetry Corner
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Where engineering meets artistic expression.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
