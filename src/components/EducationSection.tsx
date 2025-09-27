import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, Award } from 'lucide-react';

const EducationSection: React.FC = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'University of Madras',
      period: 'Pursuing',
      status: 'Current',
      color: 'from-blue-500 to-purple-600',
      description: 'Advanced studies in computer applications, software development, and emerging technologies'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Thiruvalluvar University',
      period: '2019 – 2022',
      status: 'Completed',
      color: 'from-emerald-500 to-teal-600',
      description: 'Foundation in computer science, programming languages, and software engineering principles'
    }
  ];

  const achievements = [
    'Strong academic performance in software development courses',
    // 'Active participation in coding competitions and hackathons',
    'Leadership roles in technology-focused student organizations',
    'Completed multiple certifications in web development'
  ];

  return (
    <section className="h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-white/70">
            Academic foundation and continuous learning journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${edu.color} rounded-lg flex-shrink-0`}>
                      <GraduationCap size={24} className="text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          edu.status === 'Current' 
                            ? 'bg-blue-500/20 text-blue-300' 
                            : 'bg-emerald-500/20 text-emerald-300'
                        }`}>
                          {edu.status}
                        </span>
                        <div className="flex items-center space-x-1 text-white/60 text-sm">
                          <Calendar size={14} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                      <h4 className="text-lg text-blue-400 mb-3">{edu.institution}</h4>
                      <p className="text-white/70 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Timeline connector */}
                {index < education.length - 1 && (
                  <div className="absolute left-6 top-24 w-0.5 h-8 bg-gradient-to-b from-white/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Achievements & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
                  <Award size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white ml-3">Academic Achievements</h3>
              </div>
              
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-white/80 text-sm">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <BookOpen size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white ml-3">Continuous Learning</h3>
              </div>
              
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Currently pursuing advanced studies while staying updated with the latest 
                technologies and industry best practices through online courses, workshops, 
                and hands-on projects.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['Web Development', 'Cloud Computing', 'DevOps', 'Mobile Development'].map((area) => (
                  <span 
                    key={area}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;