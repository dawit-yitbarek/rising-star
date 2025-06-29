import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-16 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white text-[#132669] shadow"
          : "bg-[#0D1A3C]/50 backdrop-blur-md text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-inherit">
          Rising Star
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-[#97A9B8]">Home</Link>
          <Link to="/about" className="hover:text-[#97A9B8]">About</Link>
          <Link to="/kindergarten" className="hover:text-[#97A9B8]">Kindergarten</Link>
          <Link to="/elementary" className="hover:text-[#97A9B8]">Grades 1–8</Link>
          <Link to="/contact" className="hover:text-[#97A9B8]">Contact</Link>
          <Link to="/blog" className="hover:text-[#97A9B8]">Blog</Link>
        </nav>

        {/* Mobile Menu Icon (Only shown on small screens) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-inherit"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-[#132669] shadow-md">
          <nav className="flex flex-col items-center gap-4 py-6 text-base font-medium">
            <Link to="/" onClick={closeMenu} className="hover:text-[#3B4E9B]">Home</Link>
            <Link to="/about" onClick={closeMenu} className="hover:text-[#3B4E9B]">About</Link>
            <Link to="/kindergarten" onClick={closeMenu} className="hover:text-[#3B4E9B]">Kindergarten</Link>
            <Link to="/elementary" onClick={closeMenu} className="hover:text-[#3B4E9B]">Grades 1–8</Link>
            <Link to="/contact" onClick={closeMenu} className="hover:text-[#3B4E9B]">Contact</Link>
            <Link to="/blog" onClick={closeMenu} className="hover:text-[#3B4E9B]">Blog</Link>
          </nav>
        </div>
      )}
    </header>
  );
};