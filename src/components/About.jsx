import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const stats = [
    { number: '10+', label: 'Missions Completed', icon: '🚀' },
    { number: '3+', label: 'Years in Orbit', icon: '⏱️' },
    { number: '50+', label: 'Star Repositories', icon: '⭐' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div ref={ref} initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">👨‍🚀 About the Commander</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
              <span className="gradient-text">Mission Control</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>Greetings, traveler! I'm a digital explorer navigating the vast universe of code and AI.</p>
              <p>My current mission is <strong>Thunderbolt</strong> — an autonomous AI agent station operating 24/7 on Raspberry Pi, exploring the frontiers of continuous learning and self-improvement.</p>
              <p>When not piloting through neural networks, I enjoy charting new territories in full-stack development and data science.</p>
            </div>
            <div className="mt-8 flex gap-4">
              <a href="https://github.com/gaharivatsa" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all">🌌 GitHub</a>
              <a href="mailto:gaharivatsa@gmail.com" className="px-6 py-3 border border-cyan-500/50 text-cyan-300 rounded-full font-medium hover:bg-cyan-500/10 transition-all">📡 Contact</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }} 
                className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl border border-white/10 group-hover:border-purple-500/30 transition-all" />
                <div className="relative p-6 flex items-center gap-6">
                  <span className="text-4xl">{stat.icon}</span>
                  <div>
                    <div className="text-4xl font-bold gradient-text">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
