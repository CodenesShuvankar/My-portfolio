import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
"use client";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Slideshow state for contact video/info box
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.sendForm(
        "service_s7phi0f",
        "template_20vdpct",
        e.currentTarget as HTMLFormElement,
        "uJ6lJJWgLQR6LBbJA"
      );

      console.log(result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8"
          >
            <div className="mb-6 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <div className="mb-6">
              <p className="text-moon-gray font-mono">
                <span className="text-green-400">$</span> Initializing contact form...
              </p>
              <p className="text-moon-gray font-mono">
                <span className="text-green-400">$</span> Ready to receive message...
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-moon-gray font-mono mb-2">
                  <span className="text-green-400">$</span> Enter your name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-space-blue/20 border border-space-blue text-star-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400 font-mono"
                />
              </div>

              <div>
                <label className="block text-moon-gray font-mono mb-2">
                  <span className="text-green-400">$</span> Enter your email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-space-blue/20 border border-space-blue text-star-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400 font-mono"
                />
              </div>

              <div>
                <label className="block text-moon-gray font-mono mb-2">
                  <span className="text-green-400">$</span> Enter your message:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-space-blue/20 border border-space-blue text-star-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400 font-mono resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full btn-primary font-mono ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitStatus === 'success' && (
                <p className="text-green-400 font-mono">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 font-mono">Error sending message. Please try again.</p>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-panel p-8">
              <h3 className="text-2xl font-bold mb-6">Other Ways to Connect</h3>
              <div className="space-y-4">
                <a
                  href="mailto:shuvankardhara@gmail.com"
                  className="flex items-center space-x-4 text-moon-gray hover:text-star-white transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>shuvankardhara@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/shuvankar-dhara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-moon-gray hover:text-star-white transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/CodenesShuvankar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-moon-gray hover:text-star-white transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            <div className="p-4 aspect-video flex items-center justify-center overflow-hidden relative rounded-xl">
              {/* Animated colorful background */}
              <div className="absolute inset-0 bg-gradient-to-br from-black-100 animate-gradient-x rounded-xl blur-sm z-0"></div>
              {/* Slides */}
              {slideIndex === 0 ? (
                <motion.div
                  key="slide1"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full flex flex-col items-center justify-center text-center z-20"
                >
                  <h3 className="text-3xl md:text-4xl font-extrabold text-cyan-glow mb-4 drop-shadow-lg">Let's Connect!</h3>
                  <p className="text-xl md:text-2xl text-bright-white font-semibold mb-2">Feel free to contact me through my email or LinkedIn profile</p>
                  <div className="flex justify-center gap-4 mt-4">
                    <a href="mailto:shuvankardhara@gmail.com" className="px-4 py-2 rounded-full bg-green-400 text-deep-space-blue font-bold shadow-lg hover:bg-cyan-glow/80 transition">Email</a>
                    <a href="https://www.linkedin.com/in/shuvankar-dhara/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-blue-500 text-white font-bold shadow-lg hover:bg-magenta-pulse/80 transition">LinkedIn</a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="slide2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full flex flex-col items-center justify-center text-center z-20"
                >
                  <h3 className="text-3xl md:text-4xl font-extrabold text-magenta-pulse mb-4 drop-shadow-lg">Thank You!</h3>
                  <p className="text-xl md:text-2xl text-bright-white font-semibold mb-2">Thank you and visit again</p>
                  <div className="mt-4 flex justify-center gap-2">
                    <span className="inline-block w-4 h-4 rounded-full bg-cyan-glow animate-pulse"></span>
                    <span className="inline-block w-4 h-4 rounded-full bg-red-400 animate-pulse"></span>
                    <span className="inline-block w-4 h-4 rounded-full bg-yellow-400 animate-pulse"></span>
                    <span className="inline-block w-4 h-4 rounded-full bg-green-400 animate-pulse"></span>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-space-blue/20 via-transparent to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default Contact;