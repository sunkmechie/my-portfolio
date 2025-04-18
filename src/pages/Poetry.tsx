import React from 'react';

const Poetry = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-gradient-to-br from-[#2b2e4a] via-[#f2e9e4] to-[#22223b] text-center text-white">
      <div className="max-w-3xl bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/20">
        <h1 className="text-5xl font-serif font-bold text-pink-100 mb-8 tracking-wide drop-shadow-xl">
          Poetry Corner
        </h1>
        <p className="text-lg md:text-xl text-purple-200 leading-relaxed mb-4 font-light italic">
          Sometimes, when equations rest, verses rise. This is my sanctuary for romantic poetry and lyrical reflections—a balance between gears and grace.
        </p>
        <p className="text-sm text-purple-300 mt-6">📝 I'll soon upload some of my published poems here.</p>
      </div>
    </div>
  );
};

export default Poetry;
