import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Thunderbolt AI',
    description: 'Autonomous AI agent running on Raspberry Pi 4 with continuous learning, self-reflection, and MCP integration. Features Constitutional AI safety constraints, ReAct reasoning engine, and persistent memory systems.',
    tech: ['Python', 'React', 'Redis', 'SQLite', 'MCP', 'Systemd'],
    github: 'https://github.com/gaharivatsa/thunderbolt-home',
    category: 'AI',
    featured: true,
    stats: { stars: 0, forks: 0 },
  },
  {
    id: 2,
    title: 'EasyML',
    description: 'Machine learning utilities and helper functions for rapid prototyping. Simplifies common ML workflows with intuitive APIs and pre-built pipelines.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    github: 'https://github.com/gaharivatsa/easyml',
    category: 'ML',
    featured: false,
  },
  {
    id: 3,
    title: 'EasyFormer',
    description: 'Transformer implementations from scratch with educational focus. Includes attention mechanisms, positional encoding, and training pipelines.',
    tech: ['Python', 'PyTorch', 'Transformers'],
    github: 'https://github.com/gaharivatsa/easyformer',
    category: 'ML',
    featured: false,
  },
  {
    id: 4,
    title: 'Kalvium - Election Analysis',
    description: 'Comprehensive analysis of Indian Lok Sabha Elections 2024. Data scraping, processing, visualization with Power BI dashboards and statistical insights.',
    tech: ['Python', 'Jupyter', 'Power BI', 'Pandas', 'BeautifulSoup'],
    github: 'https://github.com/gaharivatsa/kalvium',
    category: 'Data',
    featured: false,
  },
  {
    id: 5,
    title: 'House Price Prediction',
    description: 'Advanced ML model for house price prediction with multi-model comparison. Optimized hyperparameters using grid search and ensemble methods.',
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas'],
    github: 'https://github.com/gaharivatsa/Multi-model-camparison-for-Advanced-house-prediction',
    category: 'ML',
    featured: false,
  },
  {
    id: 6,
    title: 'Disease Predictor',
    description: 'ML model that predicts diseases based on symptoms using classification algorithms. Includes Flask web interface for easy interaction.',
    tech: ['Python', 'Machine Learning', 'Flask', 'Pandas'],
    github: 'https://github.com/gaharivatsa/Disease-predictor',
    category: 'ML',
    featured: false,
  },
];

const categories = ['All', 'AI', 'ML', 'Data', 'Web'];

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
      className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 transition-all duration-500 ${
        project.featured ? 'md:col-span-2 ring-2 ring-purple-500/20' : ''
      } ${isHovered ? 'border-purple-500/50 shadow-xl shadow-purple-500/10 transform -translate-y-2' : ''}`}
    >
      {project.featured && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />
      )}
      
      {project.featured && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Featured
        </div>
      )}

      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-xs font-medium text-purple-400 uppercase tracking-wider">{project.category}</span>
            <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-purple-400 transition-colors">{project.title}</h3>
          </div>
          <motion.div
            animate={{ rotate: isHovered ? 45 : 0 }}
            className="text-gray-500 group-hover:text-purple-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.div>
        </div>
        
        <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-lg border border-slate-600 hover:border-purple-500/50 hover:bg-slate-700 transition-all"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors group/link"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span className="group-hover/link:underline">View Code</span>
          </a>
          
          {project.stats && (
            <div className="flex items-center gap-4 text-sm text-gray-500">
              {project.stats.stars > 0 && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {project.stats.stars}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Hover gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
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
    <section id="projects" className="py-24 bg-slate-900">
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
            className="text-purple-400 font-medium tracking-wider uppercase text-sm"
          >
            My Work
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my work spanning AI/ML, full-stack development, and data science. 
            Each project represents a unique challenge and learning experience.
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
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white'
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
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium group"
          >
            View all projects on GitHub
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="group-hover:translate-x-1 transition-transform"
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
