import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('📡 Transmission received! I\'ll respond via subspace soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">📡 Open Channel</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            <span className="gradient-text">Establish Contact</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Send a transmission. Let's explore the cosmos together.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className="text-2xl font-bold text-white mb-6">📍 Coordinates</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="text-2xl">📧</span>
                <div>
                  <div className="text-gray-400 text-sm">Subspace Frequency</div>
                  <a href="mailto:gaharivatsa@gmail.com" className="text-white hover:text-cyan-400 transition-colors">gaharivatsa@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="text-2xl">🌌</span>
                <div>
                  <div className="text-gray-400 text-sm">Star Hub</div>
                  <a href="https://github.com/gaharivatsa" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors">@gaharivatsa</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Commander Name</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Your designation" required />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Transmission Frequency (Email)</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="your@email.com" required />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Message Content</label>
              <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none" placeholder="Your transmission..." required />
            </div>
            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2">
              🚀 <span>Send Transmission</span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
