// Navbar.jsx
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll Detection
  useEffect(() => {
    const sections = ["hero", "about", "projects", "contact"];

    const onScroll = () => {
      const scrollPos = window.scrollY + 150;
      setIsScrolled(window.scrollY > 50);

      for (const section of sections) {
        const el = document.getElementById(section);

        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to Section Click
  const goToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    setActiveSection(id);
    setOpen(false);
  };

  const links = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "backdrop-blur-2xl bg-white/90 border-b border-gray-200/60 shadow-2xl shadow-purple-500/5" 
            : "backdrop-blur-xl bg-white/80 border-b border-white/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Premium Logo */}
          <a
            href="#hero"
            onClick={(e) => goToSection(e, "hero")}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <img 
                src="/Logo.png" 
                alt="Logo" 
                className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Sonali
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => goToSection(e, link.id)}
                  className="relative px-6 py-3 rounded-full text-lg font-semibold transition-all group"
                >
                  <span
                    className={`relative z-10 transition-all duration-300 ${
                      activeSection === link.id
                        ? "text-white"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </span>

                  {/* Hover Effect */}
                  {activeSection !== link.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                  )}

                  {/* Active Gradient Highlight */}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="navbarActive"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg shadow-purple-500/30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105">
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex gap-4 md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-3 rounded-xl bg-white/80 shadow-lg border border-gray-200/60 hover:shadow-xl transition-all duration-300"
            >
              {open ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Premium Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="fixed top-20 inset-x-4 z-50 md:hidden"
          >
            <div className="p-6 bg-white/95 backdrop-blur-2xl rounded-3xl border border-gray-200/60 shadow-2xl shadow-purple-500/10">
              {links.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => goToSection(e, link.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`block py-5 px-6 text-lg font-semibold rounded-2xl mb-2 transition-all duration-300 ${
                    activeSection === link.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                      : "text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              
              {/* Mobile CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full mt-4 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300"
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;