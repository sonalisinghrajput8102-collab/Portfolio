import React from "react";

const projects = [
  { title: "Hospital Website", desc: "A responsive medical website with booking system.", tech: "React + CSS" },
  { title: "Portfolio Design", desc: "A modern personal portfolio built using Tailwind.", tech: "React + Tailwind" },
  { title: "Dashboard UI", desc: "Admin dashboard for managing CRM data.", tech: "React + Chart.js" },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white text-center">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
            <p className="text-white/80 mb-3">{p.desc}</p>
            <p className="text-sm text-yellow-300">{p.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
