import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Typewriter effect component
function TypewriterText({ text, delay = 0 }) {
  const [displayText, setDisplayText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.5 }}
        className="inline-block w-0.5 h-8 bg-purple-400 ml-1 align-middle"
      />
    </span>
  );
}

// Floating particles
function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-500/30 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          animate={{
            y: [null, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const roles = ["Full Stack Developer", "AI Engineer", "Data Scientist", "Open Source Contributor"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Particles />
      
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.05,
            y: mousePosition.y * 0.05,
            scale: [1, 1.2, 1],
          }}
          transition={{
            x: { type: 'spring', damping: 50 },
            y: { type: 'spring', damping: 50 },
            scale: { duration: 8, repeat: Infinity },
          }}
          style={{ top: '10%', left: '5%' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x * 0.05,
            y: -mousePosition.y * 0.05,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            x: { type: 'spring', damping: 50 },
            y: { type: 'spring', damping: 50 },
            scale: { duration: 10, repeat: Infinity },
          }}
          style={{ bottom: '10%', right: '5%' }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ top: '50%', left: '50%', x: '-50%', y: '-50%' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-purple-300 text-sm font-medium">Available for Opportunities</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Harivatsa G A
            </span>
          </motion.h1>

          {/* Animated role text */}
          <motion.div
            className="h-12 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              I'm a{' '}
              <span className="text-purple-400 font-semibold">
                <TypewriterText text={roles[currentRole]} key={currentRole} />
              </span>
            </p>
          </motion.div>

          <motion.p
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Building intelligent systems and scalable applications. 
            Passionate about AI, open source, and creating impactful technology.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              View My Work
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-purple-500/50 text-purple-300 rounded-full font-semibold hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all backdrop-blur-sm"
            >
              Let's Connect
            </a>
          </motion.div>

          {/* Social links with icons */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { name: 'GitHub', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' },
              { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              { name: 'Twitter', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
            ].map((social) => (
              <a
                key={social.name}
                href={`https://${social.name.toLowerCase()}.com/gaharivatsa`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 hover:border-purple-500 transition-all transform hover:scale-110"
                aria-label={social.name}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-gray-500 text-sm">Scroll down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            className="w-1.5 h-3 bg-white/60 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
