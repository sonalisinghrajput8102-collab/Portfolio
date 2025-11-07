import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "about", "projects", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 text-gray-800 shadow-md z-50 backdrop-blur-lg bg-white/70 border-b border-white/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo with S Image */}
        <a href="#hero" className="flex items-center space-x-2 group">
          <div className="relative">
            <img
              src="/Logo.png"  // public/Logo.png
              alt="Sonali Logo"
              className="w-10 h-10 object-contain drop-shadow-md group-hover:scale-110 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-pink-300/40 rounded-full blur-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight">
            Sonali<span className="text-purple-600">.dev</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-5 py-2 rounded-full text-lg font-medium transition-all duration-300
                  ${activeSection === link.href.slice(1)
                    ? "bg-purple-600 text-white shadow-md"
                    : "hover:bg-purple-100 hover:text-purple-700"
                  }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl p-1 rounded-lg hover:bg-purple-100/50 transition"
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="bg-gradient-to-b from-pink-100 to-purple-100 px-6 py-4 space-y-2 border-t border-purple-200">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-3 px-4 rounded-lg text-lg font-medium transition-all
                  ${activeSection === link.href.slice(1)
                    ? "bg-purple-600 text-white"
                    : "hover:bg-purple-200"
                  }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;