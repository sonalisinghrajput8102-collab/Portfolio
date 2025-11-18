import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Real form submit karna ho to Formspree, EmailJS ya Netlify Forms use kar sakte ho
    setSent(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setSent(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-8 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-purple-50/50 to-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-extrabold text-gray-900">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Touch</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">Have a project in mind? Let's bring it to life!</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
          >
            {sent ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-6">Thank you!</div>
                <p className="text-2xl text-gray-700">Your message has been sent successfully</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-3">Your Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-purple-500 focus:outline-none transition text-lg"
                    placeholder="Sonali Singh"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-3">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-purple-500 focus:outline-none transition text-lg"
                    placeholder="sonali@example.com"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-3">Your Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows="5"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-purple-500 focus:outline-none transition text-lg resize-none"
                    placeholder="Hi Sonali, I have a project for you..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-5 rounded-2xl text-xl font-bold shadow-xl hover:shadow-purple-600/50 transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info + Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-10"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="p-5 bg-purple-100 rounded-2xl">
                  <FaEnvelope className="text-3xl text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-600">Email</p>
                  <a href="mailto:your-email@gmail.com" className="text-2xl font-bold text-gray-900 hover:text-purple-600 transition">
                    your-email@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="p-5 bg-purple-100 rounded-2xl">
                  <FaPhone className="text-3xl text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-600">Phone</p>
                  <p className="text-2xl font-bold text-gray-900">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="p-5 bg-purple-100 rounded-2xl">
                  <FaMapMarkerAlt className="text-3xl text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-600">Location</p>
                  <p className="text-2xl font-bold text-gray-900">Delhi, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-10">
              <p className="text-xl font-semibold text-gray-800 mb-6">Connect with me</p>
              <div className="flex gap-6">
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"
                  className="p-5 bg-gray-100 rounded-2xl hover:bg-purple-100 hover:scale-110 transition-all">
                  <FaLinkedin className="text-3xl text-purple-600" />
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                  className="p-5 bg-gray-100 rounded-2xl hover:bg-purple-100 hover:scale-110 transition-all">
                  <FaGithub className="text-3xl text-purple-600" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;