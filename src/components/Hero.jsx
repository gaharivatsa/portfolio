import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Planet component
function Planet({ size, color, orbitDuration, orbitRadius, delay }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        background: color,
        boxShadow: `0 0 ${size}px ${color}`,
      }}
      animate={{
        x: [0, orbitRadius, 0, -orbitRadius, 0],
        y: [orbitRadius, 0, -orbitRadius, 0, orbitRadius],
      }}
      transition={{
        duration: orbitDuration,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
    />
  );
}

// Astronaut floating component
function Astronaut() {
  return (
    <motion.div
      className="absolute text-6xl"
      style={{ right: '10%', top: '20%' }}
      animate={{
        y: [0, -30, 0],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      👨‍🚀
    </motion.div>
  );
}

// Rocket component
function Rocket() {
  return (
    <motion.div
      className="absolute text-4xl"
      style={{ left: '5%', bottom: '30%' }}
      animate={{
        y: [0, -100, -200],
        x: [0, 50, 100],
        opacity: [0, 1, 0],
        scale: [0.5, 1, 0.8],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay: 2,
        ease: "easeOut",
      }}
    >
      🚀
    </motion.div>
  );
}

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
        className="inline-block w-0.5 h-8 bg-cyan-400 ml-1 align-middle"
      />
    </span>
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

  const roles = ["Full Stack Developer", "AI Engineer", "Data Scientist", "Space Explorer"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cosmic background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sun */}
        <motion.div
          className="absolute w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, #ff006e 0%, #8338ec 50%, transparent 70%)',
            right: '-5%',
            top: '10%',
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Planets */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Planet size={20} color="#3a86ff" orbitDuration={20} orbitRadius={200} delay={0} />
          </div>
          <div className="absolute left-1/3 top-1/3">
            <Planet size={15} color="#ff006e" orbitDuration={15} orbitRadius={150} delay={2} />
          </div>
          <div className="absolute right-1/4 bottom-1/4">
            <Planet size={25} color="#8338ec" orbitDuration={25} orbitRadius={180} delay={4} />
          </div>
        </div>

        {/* Astronaut and Rocket */}
        <Astronaut />
        <Rocket />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Mission badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm"
          >
            <motion.span
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <span className="text-cyan-300 text-sm font-medium">🚀 Mission Control: Online</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">
              Harivatsa G A
            </span>
          </motion.h1>

          {/* Cosmic role text */}
          <motion.div
            className="h-12 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              {'<'}
              <span className="text-cyan-400 font-semibold">
                <TypewriterText text={roles[currentRole]} key={currentRole} />
              </span>
              {' />'}
            </p>
          </motion.div>

          <motion.p
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Navigating the digital cosmos, building intelligent systems, and exploring 
            the frontiers of AI. Welcome to my space station.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white rounded-full font-semibold transition-all flex items-center gap-2 space-btn"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(131, 56, 236, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Launch Projects
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                →
              </motion.span>
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-300 rounded-full font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📡 Establish Contact
            </motion.a>
          </motion.div>

          {/* Social links - space themed */}
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { name: 'GitHub', icon: '🌌', color: 'from-purple-500 to-pink-500' },
              { name: 'LinkedIn', icon: '🪐', color: 'from-blue-500 to-cyan-500' },
              { name: 'Twitter', icon: '☄️', color: 'from-orange-500 to-red-500' },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={`https://${social.name.toLowerCase()}.com/gaharivatsa`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg hover:shadow-xl transition-all`}
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - space version */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-gray-500 text-sm">Descend into orbit</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-2xl"
        >
          🛸
        </motion.div>
      </motion.div>
    </section>
  );
}
