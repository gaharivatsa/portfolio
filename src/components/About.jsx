import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  I'm a Full Stack Developer and AI Engineer with expertise in building 
                  intelligent systems and scalable web applications.
                </p>
                <p>
                  Currently working on <strong className="text-slate-900">Thunderbolt</strong>, 
                  an autonomous AI agent running on Raspberry Pi with continuous learning 
                  and self-improvement capabilities.
                </p>
                <p>
                  I specialize in Python, React, machine learning, and cloud infrastructure. 
                  Always eager to learn and solve complex problems.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Stat number="10+" label="Projects" />
                <Stat number="3+" label="Years Experience" />
                <Stat number="50+" label="GitHub Repos" />
                <Stat number="∞" label="Learning" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 bg-white rounded-xl border border-slate-200"
    >
      <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">{number}</div>
      <div className="text-sm text-slate-500">{label}</div>
    </motion.div>
  );
}
