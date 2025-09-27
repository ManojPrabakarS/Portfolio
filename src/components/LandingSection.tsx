import React from 'react';
import { motion } from 'framer-motion';
import {  Mail, Phone, Linkedin, Github } from 'lucide-react';

const LandingSection: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0 
            }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2 
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Manoj Prabakar
            </span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-white/80 space-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>Application Developer</p>
            <p className="text-blue-400">React.js | Node.js | Cloud & DevOps Enthusiast</p>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Proactive IT professional skilled in building scalable applications and cloud-ready solutions.
          </motion.p>

          <motion.div
            className="flex justify-center space-x-8 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <ContactButton icon={Mail} href="mailto:manojprabakar20022000@gmail.com" />
            <ContactButton icon={Phone} href="tel:+919894170320" />
            <ContactButton icon={Linkedin} href="linkedin.com/in/manojprabakar-sekar" />
            <ContactButton icon={Github} href="https://github.com" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* <ChevronDown size={32} className="text-white/50" /> */}
      </motion.div>
    </section>
  );
};

const ContactButton: React.FC<{ icon: React.ElementType; href: string }> = ({ icon: Icon, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon size={24} />
  </motion.a>
);

export default LandingSection;