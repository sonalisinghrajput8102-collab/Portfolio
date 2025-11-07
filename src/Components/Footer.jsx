import React from "react";

const FooterSection = () => {
  return (
    <footer className="bg-white text-center py-10 shadow-inner rounded-t-3xl">
      <div className="flex flex-col items-center space-y-6">
        {/* Line + Image + Line */}
        <div className="flex items-center w-full justify-center gap-6">
          <div className="flex-1 h-px bg-gray-300 max-w-[200px]" />
          <div className="w-20 h-20 rounded-full border-4 border-gray-200 overflow-hidden shadow-md">
            <img
              src="/IMG-20241230-WA0061.jpg"
              alt="Sonali Singh"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 h-px bg-gray-300 max-w-[200px]" />
        </div>

        {/* Name */}
        <h2 className="text-lg font-semibold text-gray-900">Sonali Singh</h2>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} copyright all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;

