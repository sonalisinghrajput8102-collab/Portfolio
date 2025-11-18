import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaFilePdf,
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaRocket,
  FaStar,
  FaEnvelope,
  FaPhone,
  FaMapPin,
  FaCalendarAlt,
} from "react-icons/fa";

const AboutSection = () => {
  const skills = [
    { name: "HTML & CSS", percentage: 95, color: "from-orange-500 to-red-600" },
    { name: "JavaScript", percentage: 90, color: "from-yellow-400 to-amber-600" },
    { name: "React.js", percentage: 92, color: "from-cyan-500 to-blue-600" },
    { name: "Tailwind CSS", percentage: 94, color: "from-teal-400 to-cyan-600" },
    { name: "Bootstrap", percentage: 88, color: "from-purple-600 to-purple-800" },
    { name: "Material UI (MUI)", percentage: 85, color: "from-blue-500 to-indigo-600" },
    { name: "SQL", percentage: 80, color: "from-emerald-500 to-green-600" },
    { name: "Git & GitHub", percentage: 90, color: "from-gray-700 to-black" },
  ];

  const contacts = [
    { icon: <FaLinkedinIn />, text: "LinkedIn", link: "https://linkedin.com/in/sonali-singh", color: "bg-[#0077b5]" },
    { icon: <FaWhatsapp />, text: "WhatsApp", link: "https://wa.me/919876543210", color: "bg-[#25D366]" },
    { icon: <FaFilePdf />, text: "Download Resume", link: "/Sonali_Singh_Resume.pdf", color: "bg-red-600" },
    { icon: <FaEnvelope />, text: "sonali@example.com", link: "mailto:sonali@example.com", color: "bg-gradient-to-r from-purple-600 to-pink-600" },
    { icon: <FaPhone />, text: "+91 98765 43210", link: "tel:+919876543210", color: "bg-gradient-to-r from-blue-600 to-cyan-600" },
  ];

  const timeline = [
    {
  date: "June 2024 – Present",
  title: "Web Developer",
  company: "Bitmax(P) Ltd",
  desc: "Building responsive, pixel-perfect web apps using React.js, Tailwind CSS, JavaScript, Bootstrap & MUI with focus on clean code and smooth UX.",
  type: "work",
  gradient: "from-purple-600 to-pink-600",
},
    {
  date: "2020 – 2024",
  title: "B.Tech in Computer Science & Engineering",
  company: "R.P. Sharma Institute of Technology, Patna",
  desc: "Graduated in 2024 | CGPA: 8.5+ | Strong foundation in Data Structures, Algorithms & Web Development",
  type: "education",
  gradient: "from-purple-600 to-pink-600",
},
    {
      date: "2018 – 2020",
      title: "Intermediate (Science + Computer Science)",
      company: "Bihar School Examination Board",
      desc: "Percentage: 67% | Strong foundation in Physics, Maths & Programming",
      type: "education",
      gradient: "from-green-500 to-emerald-600",
    },
  ];

  const stats = [
  { value: 7, suffix: "+", label: "Projects Completed", icon: <FaRocket />, color: "text-purple-600" },
  { value: 1, suffix: "+", label: "Year Experience", icon: <FaBriefcase />, color: "text-pink-600" },
  { value: 12, suffix: "+", label: "Technologies Mastered", icon: <FaLaptopCode />, color: "text-cyan-600" },
];

  return (
    <>
      {/* Shimmer Animation - Vite Compatible */}
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-shimmer {
            animation: shimmer 3s infinite linear;
          }
        `}
      </style>

<section id="about" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-3 bg-purple-100 text-purple-700 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-md">
              <div className="w-3 h-3 bg-purple-600 rounded-full animate-ping"></div>
              About Me
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
                Sonali Singh
              </span>
            </h1>

            <div className="mt-6 inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-xl font-bold shadow-2xl">
              <FaLaptopCode className="text-2xl" />
              Web Developer
            </div>

            <p className="mt-8 text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              I turn ideas into reality with clean code, modern design, and seamless user experiences.
              Passionate about React, .NET, and building products that make a difference.
            </p>
          </motion.div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-12 gap-10 items-start">

            {/* Left Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 xl:col-span-4 space-y-8"
            >
              {/* Profile Card */}
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-700"></div>

                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
                  <div className="relative">
                    <img
                      src="/IMG-20241230-WA0061.jpg"
                      alt="Sonali Singh - Web Developer"
                      className="w-72 h-72 mx-auto object-cover rounded-2xl shadow-2xl border-8 border-white group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Fixed: FCode → FaCode */}
                    <div className="absolute top-4 right-4 bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-4 rounded-2xl shadow-lg">
                      <FaCode className="text-2xl" />
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <h3 className="text-3xl font-black text-gray-900">Sonali Singh</h3>
                    <p className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mt-1">
                      Web Developer
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-3 text-gray-600">
                      <FaMapPin className="text-sm" />
                      <span className="text-sm">Patna, Bihar, India</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2 text-gray-600">
                      <FaCalendarAlt className="text-sm" />
                      <span className="text-sm">Born: 28 May 2003</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="bg-white/90 backdrop-blur rounded-2xl p-6 text-center shadow-xl border border-white/50 hover:scale-110 transition-transform duration-300"
                  >
                    <div className={`${stat.color} mb-3 inline-block`}>{stat.icon}</div>
                    <div className="text-3xl font-black text-gray-800">
                      {stat.value}<span className="text-xl">{stat.suffix}</span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Timeline */}
              <div className="space-y-10">
                <h2 className="text-4xl font-black text-gray-900 text-center mb-12">
                  Experience & Education
                </h2>
                <div className="space-y-10">
                  {timeline.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="relative pl-12"
                    >
                      <div className={`absolute left-0 top-4 w-6 h-6 bg-gradient-to-r ${item.gradient} rounded-full ring-8 ring-white shadow-xl`}></div>
                      {i !== timeline.length - 1 && (
                        <div className="absolute left-3 top-10 bottom-0 w-1 bg-gradient-to-b from-purple-200 to-transparent"></div>
                      )}

                      <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-shadow">
                        <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${item.gradient} text-white px-5 py-2 rounded-full text-sm font-bold mb-4`}>
                          {item.type === "work" ? <FaBriefcase /> : <FaGraduationCap />}
                          {item.date}
                        </div>
                        <h3 className="text-2xl font-black text-gray-900">{item.title}</h3>
                        <p className={`font-bold ${item.type === "work" ? "text-blue-600" : "text-green-600"} mt-1`}>
                          {item.company}
                        </p>
                        <p className="text-gray-600 mt-3 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 xl:col-span-8 space-y-10"
            >
              {/* About Story – Pure Frontend Focused */}
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 md:p-12 shadow-2xl border border-white/50">
                <h2 className="text-4xl font-black text-gray-900 mb-8 flex items-center gap-4">
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                  My Journey
                </h2>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    I'm a passionate <strong>Frontend Web Developer</strong> currently working at{" "}
                    <strong className="text-purple-600">Bitmax(P) Ltd</strong>, where I build fast,
                    beautiful, and user-friendly web experiences that people love to use.
                  </p>

                  <p>
                    I love building beautiful, fast, and responsive web applications using modern frontend technologies like
                    <strong> React.js, JavaScript, HTML/CSS, Tailwind CSS, Bootstrap, Material UI (MUI)</strong> and version control with <strong>Git & GitHub</strong>.
                  </p>

                  <p>
                    My focus is on writing clean, reusable code and creating pixel-perfect, user-friendly interfaces
                    that provide smooth and delightful experiences across all devices.
                  </p>

                  <p>
                    When I'm not coding, I enjoy exploring new UI/UX trends, working on personal projects,
                    improving my craft every day, and helping others learn frontend development.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/50">
                <h2 className="text-4xl font-black text-gray-900 mb-10 flex items-center gap-4">
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                  Technical Skills
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="space-y-3"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-800">{skill.name}</span>
                        <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="h-5 bg-gray-200/70 rounded-full overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Let's Connect</h3>
                <div className="space-y-4">
                  {contacts.map((contact, i) => (
                    <motion.a
                      key={i}
                      href={contact.link}
                      target={contact.link.startsWith("http") ? "_blank" : undefined}
                      rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center justify-between ${contact.color} text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-2xl">{contact.icon}</div>
                        <span>{contact.text}</span>
                      </div>
                      <span>→</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;