import React from "react";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#1B2551] text-white pt-12 pb-8 px-6 md:px-16">
      {/* Wave Top Divider */}
      <div className="absolute -top-1 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#F8FAFC">
          <path d="M0 0h1200v83.6c-110.4 15.28-220.23 2.8-321.39-27.46-202.42-38.52-359.7 10.24-474.05 19.45C266.91 85.94 114.72 71.93 0 27.35V0z" />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
        <div>
          <h3 className="text-xl font-bold mb-3">Rising Star Academy</h3>
          <p className="text-[#97A9B8]">
            A vibrant learning community nurturing young minds with knowledge, values, and creativity.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-[#97A9B8]">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/kindergarten" className="hover:text-white">Kindergarten</Link></li>
            <li><Link to="/elementary" className="hover:text-white">Grades 1–8</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-[#97A9B8]">Gurd shola, Addis Ababa, Ethiopia</p>
          <p className="text-[#97A9B8]">Phone: +251 953 239 367</p>
          <p className="text-[#97A9B8]">Phone: +011 666 1015</p>
          <p className="text-[#97A9B8]">Email: rsaethiopia@gmail.com</p>
        </div>
      </div>

      <div className="relative z-10 mt-12 text-center text-[#cbd5e1] text-xs border-t border-[#2f3a6b] pt-4">
        © {new Date().getFullYear()} Rising Star Academy. All rights reserved.
        <p className="mt-1 flex justify-center items-center gap-1">
          Developed by{" "}
          <a
            href="https://t.me/Davidyz17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#60a5fa] hover:underline inline-flex items-center gap-1"
          >
            <FaTelegramPlane className="text-sm" />
            David – Full Stack Web Developer
          </a>
        </p>

      </div>
    </footer>
  );
};
