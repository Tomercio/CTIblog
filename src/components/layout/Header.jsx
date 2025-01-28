import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { BiAtom } from "react-icons/bi";

const Header = () => (
  <header className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-12 overflow-hidden">
    {/* Animated Background Grid */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.2)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0.2)_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]"></div>
    </div>

    {/* Main Content */}
    <div className="container mx-auto px-4 relative">
      <div className="flex justify-center items-center mb-6">
        <FaShieldAlt className="text-cyan-400 w-10 h-10 mr-4 animate-pulse" />
        <BiAtom className="text-purple-400 w-10 h-10 animate-spin-slow" />
      </div>
      <h1 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text leading-relaxed tracking-normal">
        The Cyber Threat Intelligence Cave
      </h1>
      <p className="text-lg text-center text-blue-300 max-w-2xl mx-auto mb-4 leading-relaxed">
        <span className="font-semibold text-cyan-400">Unveiling</span> Digital
        Threats •{" "}
        <span className="font-semibold text-purple-400">Analyzing</span> Attack
        Patterns •{" "}
        <span className="font-semibold text-blue-400">Strengthening</span>{" "}
        Defense
      </p>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>
  </header>
);

export default Header;
