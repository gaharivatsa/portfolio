import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  { title: 'Languages', skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL'], color: 'from-blue-500 to-cyan-500' },
  { title: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3', 'Framer Motion'], color: 'from-purple-500 to-pink-500' },
  { title: 'Backend', skills: ['Node.js', 'Express', 'FastAPI', 'GraphQL', 'REST APIs'], color: 'from-green-500 to-emerald-500' },
  { title: 'AI/ML', skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenAI API'], color: 'from-orange-500 to-red-500' },
  { title: 'Data Science', skills: ['Power BI', 'Tableau', 'Data Visualization', 'Statistical Analysis'], color: 'from-yellow-500 to-amber-500' },
  { title: 'DevOps & Tools', skills: ['Git', 'Docker', 'Linux', 'AWS', 'Redis', 'SQLite'], color: 'from-indigo-500 to-purple-500' },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical <span className="text-purple-400">Skills</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Technologies and tools I work with to bring ideas to life.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all">
              <div className={`h-1 w-20 bg-gradient-to-r ${category.color} rounded-full mb-4`} />
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-lg hover:bg-slate-600 transition-colors cursor-default">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
