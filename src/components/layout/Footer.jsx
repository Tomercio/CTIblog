import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-900 border-t border-gray-800">
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            The CTI Cave
          </h3>
          <p className="text-gray-400 mt-2">
            Unveiling Digital Threats, Empowering Defense
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mb-8">
          <SocialLink href="https://github.com" icon={<Github size={20} />} />
          <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} />
          <SocialLink
            href="https://linkedin.com"
            icon={<Linkedin size={20} />}
          />
          <SocialLink
            href="mailto:contact@example.com"
            icon={<Mail size={20} />}
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <FooterLink href="#home" text="Home" />
          <FooterLink href="#news" text="News" />
          <FooterLink href="#blog" text="Blog" />
          <FooterLink href="#contact" text="Contact" />
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm text-center">
          © 2025 The CTI Cave. Created by Tomer. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, text }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
  >
    {text}
  </a>
);

export default Footer;
