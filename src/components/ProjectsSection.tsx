import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Bot, QrCode, Heart, X } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Elevate Life – Chatbot',
      description: 'A wellness-focused chatbot powered by Mistral AI to provide personalized health and lifestyle guidance.',
      longDescription: 'Elevate Life is an AI-powered wellness chatbot that provides personalized health advice, meditation guidance, and lifestyle recommendations. Built with React.js frontend, Node.js backend, and integrated with Mistral AI for intelligent conversations. Features include user authentication, conversation history, and personalized wellness plans.',
      technologies: ['React.js', 'Node.js', 'Mistral AI', 'MongoDB', 'Material-UI'],
      icon: Bot,
      color: 'from-blue-500 to-purple-600',
      features: [
        'AI-powered wellness conversations',
        'Personalized health recommendations',
        'User authentication & profiles',
        'Conversation history tracking',
        'Responsive mobile design'
      ]
    },
    {
      id: 2,
      title: 'QR-Based Restaurant Food Ordering',
      description: 'Mobile-first ordering solution with real-time updates for seamless restaurant dining experience.',
      longDescription: 'A comprehensive QR-based ordering system that revolutionizes the restaurant dining experience. Customers scan QR codes to access digital menus, place orders, and track preparation status in real-time. Features real-time order management, payment integration, and kitchen dashboard.',
      technologies: ['React.js', 'Material-UI', 'Bootstrap', 'PHP', 'MySQL'],
      icon: QrCode,
      color: 'from-emerald-500 to-teal-600',
      features: [
        'QR code menu scanning',
        'Real-time order tracking',
        'Payment integration',
        'Kitchen management dashboard',
        'Multi-language support'
      ]
    },
    {
      id: 3,
      title: 'Blood Link',
      description: 'A donor-recipient connection platform facilitating blood donations and emergency requests.',
      longDescription: 'Blood Link is a life-saving platform that connects blood donors with recipients efficiently. The system includes donor registration, blood type matching, emergency request handling, and location-based donor search. Built with a focus on reliability and quick response times for critical situations.',
      technologies: ['React.js', 'PHP', 'Axios', 'Bootstrap', 'MySQL'],
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      features: [
        'Donor registration & verification',
        'Blood type matching algorithm',
        'Emergency request system',
        'Location-based donor search',
        'SMS/Email notifications'
      ]
    }
  ];

  return (
    <section className="h-screen flex items-center justify-center px-6 overflow-y-auto">
      <div className="max-w-7xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-white/70">
            Showcasing innovative solutions and technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all cursor-pointer"
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <project.icon size={48} className="text-white z-10" />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-white/10 text-white/80 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    View Details
                  </button>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                      <Github size={16} />
                    </button>
                    <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {projects
                .filter(project => project.id === selectedProject)
                .map(project => (
                  <div key={project.id}>
                    <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative`}>
                      <project.icon size={64} className="text-white z-10" />
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 p-2 bg-black/20 rounded-full hover:bg-black/40 transition-colors"
                      >
                        <X size={20} className="text-white" />
                      </button>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-white/80 leading-relaxed mb-6">{project.longDescription}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-400 rounded-full" />
                              <span className="text-white/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex space-x-4">
                        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                          <Github size={16} />
                          <span>View Code</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors">
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;