import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>();
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call - replace with actual EmailJS integration
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'manojprabakar20022000@gmail.com',
      href: 'mailto:manojprabakar20022000@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98941 70320',
      href: 'tel:+919894170320',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/manojprabakar',
      href: 'linkedin.com/in/manojprabakar-sekar',
      color: 'from-blue-600 to-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/manojprabakar',
      // href: 'https://github.com/manojprabakar',
      color: 'from-gray-600 to-gray-400'
    }
  ];

  return (
    <section className="h-screen flex items-center justify-center px-6 overflow-y-auto">
      <div className="max-w-6xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-white/80 leading-relaxed">
                I'm always open to discussing new opportunities, innovative projects, 
                and potential collaborations. Whether you have a specific project in mind 
                or just want to connect, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.label === 'LinkedIn' || info.label === 'GitHub' ? '_blank' : undefined}
                  rel={info.label === 'LinkedIn' || info.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all group"
                >
                  <div className={`p-3 bg-gradient-to-r ${info.color} rounded-lg group-hover:scale-110 transition-transform`}>
                    <info.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center space-x-3 mb-3">
                <MapPin size={20} className="text-emerald-400" />
                <h4 className="text-white font-semibold">Location</h4>
              </div>
              <p className="text-white/80">India (Remote Work Available)</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 text-white placeholder-white/50"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 text-white placeholder-white/50"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 text-white placeholder-white/50 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  isSubmitted
                    ? 'bg-emerald-500 hover:bg-emerald-600'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                } text-white disabled:opacity-50`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                  ) : isSubmitted ? (
                    <CheckCircle size={20} />
                  ) : (
                    <Send size={20} />
                  )}
                  <span>
                    {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
                  </span>
                </div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;