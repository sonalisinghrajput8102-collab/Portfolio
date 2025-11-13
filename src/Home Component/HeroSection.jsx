import React from "react";
import { FaLinkedinIn, FaInstagram, FaGithub, FaFacebookF } from "react-icons/fa";

const HeroSection = () => {
  const name = "SONALI SINGH";
  const words = name.split(" ");
  const getStartIndex = (wordIdx) => words.slice(0, wordIdx).join("").length + wordIdx;

  return (
    <section className="relative flex flex-col md:flex-row items-center min-h-screen px-6 md:px-24 lg:px-32 overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 pt-8 md:pt-12 lg:pt-16">

      {/* Background Blurs – UPAR shift kiye */}
      <div className="absolute top-6 right-0 md:right-8 w-80 h-80 md:w-96 md:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow"></div>
      <div className="absolute bottom-6 left-0 md:left-8 w-80 h-80 md:w-96 md:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow"></div>
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Main Content – UPAR shift kiya (kam margin) */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-20 z-10 text-center md:text-left w-full mt-4 md:mt-6 lg:mt-8">

        {/* Profile Image */}
        <div className="relative group order-2 md:order-1">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-[35%_65%_60%_40%/55%_45%_60%_40%] blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-[35%_65%_60%_40%/55%_45%_60%_40%] blur-xl opacity-20 scale-110 animate-spin-slow"></div>
          <img
            src="/IMG-20241230-WA0061.jpg"
            alt="Sonali Singh"
            className="relative w-[24rem] h-[24rem] md:w-[26rem] md:h-[26rem] lg:w-[28rem] lg:h-[28rem] object-cover rounded-[35%_65%_60%_40%/55%_45%_60%_40%] shadow-2xl border-4 border-white/30 backdrop-blur-sm transform group-hover:scale-105 transition duration-700 ease-out"
          />
          <div className="absolute inset-0 rounded-[35%_65%_60%_40%/55%_45%_60%_40%] bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </div>

        {/* Text Section */}
        <div className="max-w-2xl animate-fadeIn order-1 md:order-2">
          <p className="text-xl md:text-2xl mb-4 font-semibold text-gray-700 tracking-wide">Hi, I’m</p>

          {/* Animated Name – Word by Word */}
         
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-extrabold text-gray-900 mb-4 
                flex justify-center md:justify-start 
                flex-nowrap whitespace-nowrap 
                leading-tight">
            {words.map((word, wordIdx) => {
              const startIdx = getStartIndex(wordIdx);
              return (
                <span key={wordIdx} className="inline-block">
                  {word.split("").map((letter, i) => {
                    const globalIdx = startIdx + i;
                    return (
                      <span
                        key={globalIdx}
                        className="inline-block animate-fadeInUp"
                        style={{
                          animationDelay: `${wordIdx * 0.5 + i * 0.05}s`,
                        }}
                      >
                        {letter}
                      </span>
                    );
                  })}
                  {wordIdx < words.length - 1 && <span className="mx-2"></span>}
                </span>
              );
            })}
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-6 tracking-wider">
            Web Developer
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
            I specialize in building <span className="font-semibold text-purple-600">clean, responsive, and creative</span> web experiences.
            Passionate about modern frameworks, seamless UX, and pushing the boundaries of web technologies.
          </p>

          {/* CTA Button */}
          <div className="mb-8">
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            >
              Let’s Connect
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center md:justify-start">
            {[
              { icon: <FaLinkedinIn size={24} />, link: "https://linkedin.com/in/yourprofile" },
              { icon: <FaInstagram size={24} />, link: "https://instagram.com/yourprofile" },
              { icon: <FaGithub size={24} />, link: "https://github.com/yourprofile" },
              { icon: <FaFacebookF size={24} />, link: "https://facebook.com/yourprofile" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/80 backdrop-blur-sm shadow-lg rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:shadow-2xl transition-all duration-400 transform hover:scale-110"
              >
                {social.icon}
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
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.7s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 40s linear infinite; }
        .animate-fadeIn { animation: fadeInUp 1s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default HeroSection;