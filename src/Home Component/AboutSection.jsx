import React, { useEffect, useState } from "react";
import { FaLinkedinIn, FaWhatsapp, FaUserFriends, FaFilePdf, FaSkype } from "react-icons/fa";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counter, setCounter] = useState(0);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector("#about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        if (counter < 25) setCounter(counter + 1);
      }, 50);
      return () => clearInterval(timer);
    }
  }, [isVisible, counter]);

  const name = "SONALI SINGH";
  const words = name.split(" ");
  const getStartIndex = (wordIdx) => words.slice(0, wordIdx).join("").length + wordIdx;

  const contactItems = [
    { icon: <FaSkype size={20} />, text: "Skype Me", link: "#" },
    { icon: <FaLinkedinIn size={20} />, text: "LinkedIn", link: "https://linkedin.com/in/sonalisingh" },
    { icon: <FaWhatsapp size={20} />, text: "WhatsApp Me", link: "https://wa.me/919876543210" },
    { icon: <FaUserFriends size={20} />, text: "Meet Me", link: "#" },
    { icon: <FaFilePdf size={20} />, text: "Resume", link: "/resume.pdf" },
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20 md:py-28 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 lg:gap-16 items-start">
        
        {/* LEFT — Enhanced Text Content */}
        <div className={`md:col-span-2 space-y-8 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Animated Title */}
          <h3 className="text-sm font-semibold tracking-widest text-pink-600 uppercase animate-fadeIn">
            ● About Me
          </h3>
          
          {/* Animated Name */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Hi, I'm{" "}
            <span className="inline-block">
              {words.map((word, wordIdx) => (
                <span key={wordIdx} className="inline-block mr-2">
                  {word.split("").map((letter, i) => (
                    <span
                      key={getStartIndex(wordIdx) + i}
                      className={`inline-block animate-fadeInUp ${isVisible ? '' : 'opacity-0'}`}
                      style={{ animationDelay: `${wordIdx * 0.4 + i * 0.05}s` }}
                    >
                      {letter}  
                    </span>
                  ))}
                </span>
              ))}
            </span>{" "}
            👩‍💻
          </h2>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Web Developer
          </h3>

          {/* Description */}
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              I'm passionate about creating <span className="font-semibold text-purple-600">modern, user-friendly web applications</span>.
              I love transforming creative ideas into digital realities using clean code, stunning UI, and seamless UX.
            </p>
            <p>
              Currently based in <strong className="text-pink-600">India</strong>, I enjoy working with dynamic teams
              and contributing to meaningful projects. Apart from coding, I love designing and exploring new tech innovations.
            </p>
          </div>

          {/* Animated Stats */}
          <div className="flex items-center gap-6 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="text-center">
              <h1 className={`text-4xl md:text-5xl font-extrabold text-gray-900 transition-all duration-1000 ${isVisible ? 'animate-pulse' : ''}`}>
                {counter}+
              </h1>
              <p className="text-gray-600 font-medium">Completed Projects</p>
            </div>
          </div>
        </div>

        {/* RIGHT — Enhanced Image + Contact Cards */}
        <div className={`flex flex-col items-center space-y-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Enhanced Profile Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-[30%] blur-3xl opacity-60 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 to-purple-500 rounded-[30%] blur-xl opacity-30 scale-110 animate-spin-slow"></div>
            <img
              src="/IMG-20241230-WA0061.jpg"
              alt="Sonali Singh"
              className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-[30%] shadow-2xl border-4 border-white/50 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-700"
            />
          </div>

          {/* Interactive Contact Cards */}
          <div className="grid grid-cols-1 gap-4 w-full">
            {contactItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-6 py-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-500 transform"
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  {item.text}
                </span>
                <span className="ml-auto text-purple-500 group-hover:text-white transition-colors">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </section>
  );
};

export default AboutSection;