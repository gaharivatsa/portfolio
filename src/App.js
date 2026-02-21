import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';

// Starfield background component
function Starfield() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1a0f2e_0%,#0f0f1a_40%,#0a0a0f_100%)]" />
      
      {/* Nebula effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-900/10 rounded-full blur-[120px]" />
      
      {/* Stars */}
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {/* Larger stars */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`big-${i}`}
          className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
      
      {/* Shooting stars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute w-20 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            left: `${80 + Math.random() * 20}%`,
            top: `${Math.random() * 30}%`,
          }}
          animate={{
            x: [-500, 0],
            y: [0, 500],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 8 + Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <Starfield />
      
      {/* Scroll progress - cosmic trail */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left"
        style={{ 
          scaleX,
          background: 'linear-gradient(90deg, #ff006e, #8338ec, #3a86ff, #00f5ff)',
          boxShadow: '0 0 20px rgba(255, 0, 110, 0.5)',
        }}
      />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <footer className="py-12 bg-black/50 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-6 text-center">
            <div className="text-2xl font-bold gradient-text mb-4">Harivatsa G A</div>
            <p className="text-gray-500 text-sm">Exploring the digital cosmos © {new Date().getFullYear()}</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
