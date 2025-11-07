import React from "react";

const ContactSection = () => {
  return (
    <section className="py-24 px-6 bg-white text-gray-800 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="mb-8 text-lg text-gray-600">Let's collaborate or just say hello 👋</p>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500" />
        <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"></textarea>
        <button className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
