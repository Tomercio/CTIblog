import React, { useState } from "react";
import { Shield, Globe, BookOpen, Mail, Menu, X } from "lucide-react";

const NavLink = ({ icon, text, onClick }) => (
  <a
    href={`#${text.toLowerCase()}`}
    onClick={onClick}
    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 w-full"
  >
    {icon}
    <span className="font-medium">{text}</span>
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: <Shield className="w-5 h-5" />, text: "Home" },
    { icon: <Globe className="w-5 h-5" />, text: "News" },
    { icon: <BookOpen className="w-5 h-5" />, text: "Blog" },
    { icon: <Mail className="w-5 h-5" />, text: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center py-4">
          <div className="flex space-x-4 bg-gray-800/50 p-2 rounded-xl backdrop-blur-sm">
            {navItems.map((item, index) => (
              <NavLink key={index} icon={item.icon} text={item.text} />
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex justify-end py-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm py-4 px-4 border-t border-gray-800">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <NavLink
                    key={index}
                    icon={item.icon}
                    text={item.text}
                    onClick={() => setIsOpen(false)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
