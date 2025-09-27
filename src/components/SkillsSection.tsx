import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Monitor, 
  Server, 
  Database, 
  Zap, 
  Wrench, 
  Cloud, 
  Smartphone 
} from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Core',
      icon: Code,
      skills: [
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'React.js', level: 95 },
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 }
      ]
    },
    {
      title: 'Frontend',
      icon: Monitor,
      skills: [
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Material-UI', level: 85 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Styled Components', level: 75 }
      ]
    },
    {
      title: 'Backend/Database',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Neon', level: 70 }
      ]
    },
    {
      title: 'Tools & Cloud',
      icon: Cloud,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'AWS (EC2, S3)', level: 80 },
        { name: 'GCP', level: 75 },
        { name: 'Netlify/Render', level: 85 }
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Abilities
          </h2>
          <p className="text-xl text-white/70">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white ml-3">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80 text-sm">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-emerald-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance & Mobile Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <div className="flex items-center mb-4">
              <Zap className="text-yellow-400 mr-3" size={24} />
              <h3 className="text-xl font-bold text-white">Performance Optimization</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Lazy Loading', 'Memoization', 'Code-Splitting'].map((item) => (
                <span 
                  key={item}
                  className="px-3 py-1 bg-yellow-400/20 text-yellow-300 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <div className="flex items-center mb-4">
              <Smartphone className="text-emerald-400 mr-3" size={24} />
              <h3 className="text-xl font-bold text-white">Mobile Development</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React Native', 'Responsive Design', 'Mobile-First'].map((item) => (
                <span 
                  key={item}
                  className="px-3 py-1 bg-emerald-400/20 text-emerald-300 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;