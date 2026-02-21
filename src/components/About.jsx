import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const stats = [
    { number: '10+', label: 'Projects' },
    { number: '3+', label: 'Years Experience' },
    { number: '50+', label: 'GitHub Repos' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div ref={ref} initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About <span className="text-purple-400">Me</span></h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>I'm a passionate Full Stack Developer and AI Engineer with expertise in building intelligent systems and scalable web applications.</p>
              <p>Currently, I'm working on <strong>Thunderbolt</strong> - an autonomous AI agent that runs on Raspberry Pi, featuring continuous learning and advanced reasoning capabilities.</p>
            </div>
            <div className="mt-8 flex gap-4">
              <a href="https://github.com/gaharivatsa" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">GitHub Profile</a>
              <a href="mailto:gaharivatsa@gmail.com" className="px-6 py-3 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-all">Email Me</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.5 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }} className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-600">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
