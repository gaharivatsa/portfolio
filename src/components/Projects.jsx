import { motion } from 'framer-motion';
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
  },
  {
    id: 2,
    title: 'EasyML',
    description: 'Machine learning utilities for rapid prototyping with intuitive APIs.',
    tech: ['Python', 'Scikit-learn', 'Pandas'],
    github: 'https://github.com/gaharivatsa/easyml',
    category: 'ML',
  },
  {
    id: 3,
    title: 'EasyFormer',
    description: 'Transformer implementations from scratch with educational focus.',
    tech: ['Python', 'PyTorch'],
    github: 'https://github.com/gaharivatsa/easyformer',
    category: 'ML',
  },
  {
    id: 4,
    title: 'Election Analysis',
    description: 'Comprehensive analysis of Indian Lok Sabha Elections 2024 with Power BI dashboards.',
    tech: ['Python', 'Power BI', 'Pandas'],
    github: 'https://github.com/gaharivatsa/kalvium',
    category: 'Data',
  },
  {
    id: 5,
    title: 'House Price Prediction',
    description: 'Advanced ML model with multi-algorithm comparison.',
    tech: ['Python', 'XGBoost', 'Scikit-learn'],
    github: 'https://github.com/gaharivatsa/Multi-model-camparison-for-Advanced-house-prediction',
    category: 'ML',
  },
  {
    id: 6,
    title: 'Disease Predictor',
    description: 'ML model predicting diseases from symptoms.',
    tech: ['Python', 'Flask', 'ML'],
    github: 'https://github.com/gaharivatsa/Disease-predictor',
    category: 'ML',
  },
];

const categories = ['All', 'AI', 'ML', 'Data'];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            A collection of my work spanning AI/ML, full-stack development, and data science.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card ${project.featured ? 'md:col-span-2' : ''}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-slate-900 mt-1">
                      {project.title}
                    </h3>
                  </div>
                  {project.featured && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-slate-600 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Code
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/gaharivatsa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              View all projects on GitHub
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
