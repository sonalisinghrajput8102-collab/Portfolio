import React from "react";
import { FaLinkedinIn, FaWhatsapp, FaFilePdf, FaUserFriends, FaSkype } from "react-icons/fa";

const AboutSection = () => {
  const skills = [
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 92 },
    { name: "JavaScript", percentage: 88 },
    { name: "Tailwind CSS", percentage: 90 },
    { name: "Material UI", percentage: 85 },
    { name: "React.js", percentage: 93 },
    { name: "SQL", percentage: 80 },
  ];

  const contactItems = [
    { icon: <FaSkype size={22} />, text: "Skype Me", link: "#" },
    { icon: <FaLinkedinIn size={22} />, text: "LinkedIn", link: "https://linkedin.com/in/sonalisingh" },
    { icon: <FaWhatsapp size={22} />, text: "WhatsApp Me", link: "https://wa.me/919876543210" },
    { icon: <FaUserFriends size={22} />, text: "Meet Me", link: "#" },
    { icon: <FaFilePdf size={22} />, text: "Download Resume", link: "/resume.pdf" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex flex-col items-center justify-center py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10 items-start relative z-10">

        {/* Left Side - About, Education, Experience */}
        <div className="space-y-8 text-gray-800">
          {/* About */}
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-widest text-pink-600 font-bold flex items-center gap-2">
              <span className="w-8 h-px bg-pink-600"></span> About Me
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
              Hi, I’m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
                Sonali Singh
              </span>
            </h1>

            <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Web Developer @ Bitmax (P) LTD.
            </h2>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              I’m a passionate web developer who loves creating{" "}
              <span className="font-semibold text-purple-700">beautiful, responsive</span> and
              high-performing websites. I specialize in front-end development and
              UI/UX implementation using modern web technologies.
            </p>
          </div>

          {/* Education Box */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/60 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
            <h3 className="text-xl font-bold mb-4 text-purple-700 flex items-center gap-2">
              <span className="w-6 h-px bg-purple-500"></span> Education
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <p className="font-semibold text-gray-900">🎓 R.P. Sharma Institute of Technology</p>
                <p className="text-sm">B.Tech (CSE) — <span className="text-purple-600">Passed Out 2024</span></p>
              </li>
              <li>
                <p className="font-semibold text-gray-900">🏫 B.S. College, Chenari Hatta, Rohtas</p>
                <p className="text-sm">Intermediate — <span className="text-purple-600">Science Stream</span></p>
              </li>
            </ul>
          </div>

          {/* Experience Box */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/60 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
            <h3 className="text-xl font-bold mb-4 text-purple-700 flex items-center gap-2">
              <span className="w-6 h-px bg-pink-500"></span> Experience
            </h3>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold text-gray-900">💼 Company:</span> Bitmax (P) LTD.</p>
              <p><span className="font-semibold text-gray-900">Role:</span> Frontend Developer</p>
              <p><span className="font-semibold text-gray-900">Projects:</span> 7+ Completed</p>
              <p className="text-sm text-gray-600 leading-snug">
                Worked on full responsive dashboards, admin panels, hospital management systems and portfolio websites using React.js, Tailwind, and API integration.
              </p>
            </div>
          </div>
        </div>

        {/* Center - Profile Image */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
            <img
              src="/IMG-20241230-WA0061.jpg"
              alt="Sonali Singh"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-8 border-white/80"
            />
          </div>

          {/* Contact Buttons */}
          <div className="w-full flex flex-col gap-3 mt-6">
            {contactItems.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 px-5 py-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl border hover:border-purple-200 transition-all duration-400"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                    <span className="text-purple-700">{item.icon}</span>
                  </div>
                  <span className="font-medium text-gray-800 group-hover:text-purple-700">{item.text}</span>
                </div>
                <span className="text-purple-500 group-hover:translate-x-1 transition-all">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side - Skills */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg p-6 border border-white/50 hover:shadow-2xl transition-all duration-500">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6">
            <span className="w-10 h-px bg-purple-600"></span> My Skills
          </h3>

          <div className="space-y-5">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm md:text-base font-medium text-gray-700">{skill.name}</span>
                  <span className="text-sm font-semibold text-purple-600">{skill.percentage}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

export default AboutSection;
