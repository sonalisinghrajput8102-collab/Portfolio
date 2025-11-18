import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaPalette, FaCode, FaRocket } from "react-icons/fa";

const ProjectsServicesSection = () => {
  const projects = [
    {
      title: "ShyEyes",
      subtitle: "Social Media Platform",
      desc: "Real-time chat, stories, reels, dark mode & modern social experience",
      live: "https://shyeyes-frontend.vercel.app/shyeyes/",
      gradient: "from-purple-600 via-pink-600 to-rose-600",
    },
    {
      title: "PlayZelo",
      subtitle: "Multiplayer Gaming Hub",
      desc: "Instant-play games, live leaderboards, tournaments & real-time chat",
      live: "https://playzelo.fun/",
      gradient: "from-emerald-500 via-cyan-500 to-teal-600",
    },
    {
      title: "Priotama.com",
      subtitle: "Premium Personal Portfolio",
      desc: "Glassmorphism design, smooth animations, dark mode & mobile-first",
      live: "https://priotama.com",
      gradient: "from-amber-500 via-orange-500 to-rose-600",
    },
  ];

  const services = [
    {
      icon: <FaPalette className="w-12 h-12" />,
      title: "Beautiful Web Design",
      desc: "Pixel-perfect, unique designs that make your brand stand out and leave a lasting impression.",
    },
    {
      icon: <FaCode className="w-12 h-12" />,
      title: "Powerful Development",
      desc: "Fast, secure, scalable web applications built with modern tech stack and clean code.",
    },
    {
      icon: <FaRocket className="w-12 h-12" />,
      title: "Growth & SEO",
      desc: "Rank higher on Google, attract more visitors, and convert them into loyal customers.",
    },
  ];

  return (
   <section id="projects" className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30">

      <div className="max-w-7xl mx-auto">

        {/* Hero Title - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-6 py-3 rounded-full text-lg font-bold shadow-lg border border-purple-200">
              <div className="w-3 h-3 bg-purple-600 rounded-full animate-ping"></div>
              My Work & Expertise
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            I Build 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Beautiful Websites</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
            Clean code. Stunning design. Real results.
          </p>
        </motion.div>

        {/* Projects - Compact Cards */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-center text-gray-900 mb-12"
          >
            Featured Projects
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500`}></div>

                {/* Main Card */}
                <div className="relative h-full bg-white/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl border border-white/50">
                  {/* Image Area */}
                  <div className="relative h-60 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <div className="text-center">
                        <h3 className="text-5xl font-black text-white tracking-tighter">{project.title}</h3>
                        <p className="text-lg text-white/90 mt-1">{project.subtitle}</p>
                      </div>
                    </div>

                    {/* Hover Button */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-xl p-3 rounded-xl hover:bg-white/40 hover:scale-110 transition-all shadow-lg"
                      >
                        <FaExternalLinkAlt className="text-white text-xl" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-2xl font-black text-gray-900 mb-2">{project.title}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.desc}</p>

                    {/* Live Link */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-purple-600 font-bold hover:gap-4 transition-all duration-300"
                    >
                      View Live Project
                      <FaExternalLinkAlt className="text-lg" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services - Compact */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-black text-center text-gray-900 mb-12"
          >
            What I Offer
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/60 text-center hover:border-purple-300 transition-all duration-300">
                  <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <div className="text-purple-600">{service.icon}</div>
                  </div>
                  <h4 className="text-2xl font-black text-gray-900 mb-4">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA - Compact */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Let's Create Something<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Extraordinary
            </span>
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your vision + My skills = Unstoppable success
          </p>
          <motion.a
            href="mailto:sonali@example.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-xl font-bold shadow-xl hover:shadow-purple-600/40 transition-all duration-300"
          >
            Start Your Project Now
          </motion.a>
        </motion.div> */}

      </div>
    </section>
  );
};

export default ProjectsServicesSection;