import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  sections: string[];
  currentSection: number;
  onSectionClick: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ sections, currentSection, onSectionClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 ">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              MP
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {sections.map((section, index) => (
                <motion.button
                  key={section}
                  onClick={() => onSectionClick(index)}
                  className={`text-sm font-medium transition-colors ${
                    currentSection === index 
                      ? 'text-blue-400' 
                      : 'text-white/70 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.button>
              ))}
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-white/10 md:hidden"
        >
          <div className="px-6 py-4 space-y-4">
            {sections.map((section, index) => (
              <motion.button
                key={section}
                onClick={() => {
                  onSectionClick(index);
                  setIsOpen(false);
                }}
                className={`block text-left w-full text-sm font-medium transition-colors ${
                  currentSection === index 
                    ? 'text-blue-400' 
                    : 'text-white/70 hover:text-white'
                }`}
                whileHover={{ x: 10 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;