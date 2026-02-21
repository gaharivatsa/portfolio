import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Thunderbolt AI',
    description: 'Autonomous AI agent running on Raspberry Pi 4 with continuous learning, self-reflection, and MCP integration. Features Constitutional AI safety constraints, ReAct reasoning engine, and persistent memory systems.',
    tech: ['Python', 'React', 'Redis', 'SQLite', 'MCP', 'Systemd'],
    github: 'https://github.com/gaharivatsa/thunderbolt-home',
    featured: true,
  },
  {
    title: 'EasyML',
    description: 'Machine learning utilities and helper functions for rapid prototyping. Simplifies common ML workflows with intuitive APIs.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    github: 'https://github.com/gaharivatsa/easyml',
  },
  {
    title: 'EasyFormer',
    description: 'Transformer implementations from scratch with educational focus. Includes attention mechanisms, positional encoding, and training pipelines.',
    tech: ['Python', 'PyTorch', 'Transformers'],
    github: 'https://github.com/gaharivatsa/easyformer',
  },
  {
    title: 'Kalvium - Election Analysis',
    description: 'Comprehensive analysis of Indian Lok Sabha Elections 2024. Data scraping, processing, visualization with Power BI dashboards.',
    tech: ['Python', 'Jupyter', 'Power BI', 'Pandas'],
    github: 'https://github.com/gaharivatsa/kalvium',
  },
  {
    title: 'House Price Prediction',
    description: 'Advanced ML model for house price prediction with multi-model comparison. Optimized hyperparameters using grid search.',
    tech: ['Python', 'Scikit-learn', 'XGBoost'],
    github: 'https://github.com/gaharivatsa/Multi-model-camparison-for-Advanced-house-prediction',
  },
  {
    title: 'Disease Predictor',
    description: 'ML model that predicts diseases based on symptoms using classification algorithms.',
    tech: ['Python', 'Machine Learning', 'Flask'],
    github: 'https://github.com/gaharivatsa/Disease-predictor',
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300 ${project.featured ? 'md:col-span-2' : ''}`}
    >
      {project.featured && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
          Featured
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">{tech}</span>
          ))}
        </div>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          GitHub
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-purple-400">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A collection of my work spanning AI/ML, full-stack development, and data science.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
