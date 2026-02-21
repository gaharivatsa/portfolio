import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Thunderbolt AI',
    description: 'Autonomous AI agent running on Raspberry Pi 4 with continuous learning, self-reflection, and MCP integration.',
    tech: ['Python', 'React', 'Redis', 'SQLite', 'MCP'],
    github: 'https://github.com/gaharivatsa/thunderbolt-home',
    category: 'AI',
    featured: true,
    icon: '🤖',
  },
  {
    id: 2,
    title: 'EasyML',
    description: 'Machine learning utilities for rapid prototyping with intuitive APIs.',
    tech: ['Python', 'Scikit-learn', 'Pandas'],
    github: 'https://github.com/gaharivatsa/easyml',
    category: 'ML',
    featured: false,
    icon: '🧠',
  },
  {
    id: 3,
    title: 'EasyFormer',
    description: 'Transformer implementations from scratch with educational focus.',
    tech: ['Python', 'PyTorch'],
    github: 'https://github.com/gaharivatsa/easyformer',
    category: 'ML',
    featured: false,
    icon: '⚡',
  },
  {
    id: 4,
    title: 'Kalvium Analytics',
    description: 'Election 2024 analysis with Power BI dashboards.',
    tech: ['Python', 'Power BI', 'Pandas'],
    github: 'https://github.com/gaharivatsa/kalvium',
    category: 'Data',
    featured: false,
    icon: '📊',
  },
  {
    id: 5,
    title: 'House Price AI',
    description: 'Advanced ML model with multi-algorithm comparison.',
    tech: ['Python', 'XGBoost', 'Scikit-learn'],
    github: 'https://github.com/gaharivatsa/Multi-model-camparison-for-Advanced-house-prediction',
    category: 'ML',
    featured: false,
    icon: '🏠',
  },
  {
    id: 6,
    title: 'Disease Predictor',
    description: 'ML model predicting diseases from symptoms.',
    tech: ['Python', 'Flask', 'ML'],
    github: 'https://github.com/gaharivatsa/Disease-predictor',
    category: 'ML',
    featured: false,
    icon: '🏥',
  },
];

const categories = ['All', 'AI', 'ML', 'Data'];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
        project.featured ? 'md:col-span-2' : ''
      } ${isHovered ? 'transform -translate-y-2' : ''}`}
    >
      {/* Card background with glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl" />
      
      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {project.featured && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" />
      )}
      
      {project.featured && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
          ⭐ Featured Mission
        </div>
      )}

      <div className="relative p-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{project.icon}</span>
            <div>
              <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">{project.category}</span>
              <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
            </div>
          </div>
        </div>
        
        <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/5 text-cyan-300 text-sm rounded-lg border border-white/10 hover:border-cyan-500/50 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group/link"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span className="group-hover/link:underline">View Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-cyan-400 font-medium tracking-wider uppercase text-sm"
          >
            🚀 Mission Archive
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            <span className="gradient-text">Deployed Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Exploration logs from my journey through code and cosmos.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/gaharivatsa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
          >
            🌌 View all missions on GitHub
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
