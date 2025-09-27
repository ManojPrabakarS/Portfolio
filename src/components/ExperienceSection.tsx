import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, CheckCircle } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experience = {
    company: 'Thinkbig Infotech (India) Pvt Ltd',
    role: 'Application Developer',
    period: 'Feb 2024 – Present',
    location: 'India',
    responsibilities: [
      'Built and maintained responsive React.js applications with Node.js, Express.js, MongoDB, MySQL',
      'Successfully migrated data from MongoDB to MySQL ensuring complete data integrity',
      'Collaborated on QR-based restaurant ordering app with real-time functionality',
      'Focused on UI/UX optimization and performance enhancement techniques',
      'Implemented modern development practices and code review processes'
    ]
  };

  return (
    <section className="h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-white/70">
            Professional journey and achievements
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full -translate-y-16 translate-x-16" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
              <div className="flex items-start space-x-4">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                  <Building size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{experience.role}</h3>
                  <h4 className="text-xl text-blue-400 mb-4">{experience.company}</h4>
                  <div className="flex flex-wrap gap-4 text-white/60">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-lg font-semibold text-white mb-4">Key Responsibilities & Achievements</h5>
              {experience.responsibilities.map((responsibility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3 group"
                >
                  <CheckCircle size={20} className="text-emerald-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <p className="text-white/80 leading-relaxed">{responsibility}</p>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack Used */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <h5 className="text-lg font-semibold text-white mb-4">Technologies Used</h5>
              <div className="flex flex-wrap gap-3">
                {[
                  'React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 
                  'Material-UI', 'Bootstrap', 'PHP', 'Axios'
                ].map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-400/20"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;