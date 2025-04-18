import React, { useEffect } from 'react';

const Poetry = () => {
  useEffect(() => {
    const audio = new Audio('/ambient-soundscape.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="min-h-screen relative flex items-center justify-center px-6 py-24 bg-gradient-to-b from-[#1e1b2e] via-[#362c41] to-[#1e1b2e] text-center text-white font-serif overflow-hidden">
      {/* Floating Petals Animation */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 bg-rose-300 opacity-30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-3xl bg-white/5 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/10">
        <h1 className="text-5xl md:text-6xl font-bold text-rose-100 mb-10 tracking-wide drop-shadow-lg">
          Poetry Corner
        </h1>
        <p className="text-lg md:text-xl text-rose-200 leading-loose italic mb-6">
          "Sometimes, when equations rest, verses rise." <br />
          This is my refuge—where logic sleeps and longing wakes.
        </p>
        <p className="text-md text-rose-300">
          📝 I’ll soon share some of my published poems here—written not with ink, but ache.
        </p>
      </div>

      {/* Floating Petals CSS Animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-40px) scale(1.1);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Poetry;
