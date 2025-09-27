import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Code, Cloud } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Passionate developer with expertise in modern web technologies and cloud solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <User size={120} className="text-white/80" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center">
                <Code size={32} className="text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Executive Summary</h3>
              <p className="text-white/80 leading-relaxed">
                Dynamic Application Developer with expertise in React.js, Node.js, and cloud technologies. 
                Experienced in building scalable, user-centric applications with a focus on performance 
                optimization and modern development practices.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <SkillHighlight 
                icon={Code}
                title="Frontend"
                description="React.js, JavaScript ES6+"
              />
              <SkillHighlight 
                icon={Target}
                title="Backend"
                description="Node.js, Express.js, APIs"
              />
              <SkillHighlight 
                icon={Cloud}
                title="Cloud"
                description="AWS, GCP, DevOps"
              />
              <SkillHighlight 
                icon={User}
                title="Collaboration"
                description="Agile, Team Leadership"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SkillHighlight: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => (
  <motion.div
    className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
  >
    <Icon size={24} className="text-blue-400 mb-2" />
    <h4 className="font-semibold text-white">{title}</h4>
    <p className="text-sm text-white/60">{description}</p>
  </motion.div>
);

export default AboutSection;