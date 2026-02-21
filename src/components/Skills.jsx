import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  { title: 'Languages', icon: '💻', skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL'], color: 'from-cyan-500 to-blue-500' },
  { title: 'Frontend', icon: '🎨', skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3', 'Framer Motion'], color: 'from-pink-500 to-purple-500' },
  { title: 'Backend', icon: '⚙️', skills: ['Node.js', 'Express', 'FastAPI', 'GraphQL', 'REST APIs'], color: 'from-green-500 to-emerald-500' },
  { title: 'AI/ML', icon: '🧠', skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenAI API'], color: 'from-purple-500 to-pink-500' },
  { title: 'Data Science', icon: '📊', skills: ['Power BI', 'Tableau', 'Data Visualization', 'Statistical Analysis'], color: 'from-orange-500 to-red-500' },
  { title: 'DevOps', icon: '🚀', skills: ['Git', 'Docker', 'Linux', 'AWS', 'Redis', 'SQLite'], color: 'from-blue-500 to-cyan-500' },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">🛠️ Equipment Bay</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            <span className="gradient-text">Technical Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Tools and technologies in my spacecraft.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} 
              className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-white/10 group-hover:border-cyan-500/30 transition-all" />
              <div className="relative p-6">
                <div className={`h-1 w-16 bg-gradient-to-r ${category.color} rounded-full mb-4`} />
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white/5 text-cyan-300 text-sm rounded-lg border border-white/10 hover:bg-white/10 transition-colors">{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
