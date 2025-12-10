"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // ACTIVE SECTION DETECTION (your code kept)
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
  }, []);

  const linkStyle = (id) =>
    active === id
      ? "text-blue-400 font-bold"
      : "text-white";

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="w-full bg-black text-white p-4 fixed top-0 left-0 z-50">

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 justify-center">
        <a href="#home" className={linkStyle("home")}>Home</a>
        <a href="#about" className={linkStyle("about")}>About</a>
        <a href="#skills" className={linkStyle("skills")}>Skills</a>
        <a href="#projects" className={linkStyle("projects")}>Projects</a>
        <a href="#certificates" className={linkStyle("certificates")}>Certificates</a>
        <a href="#education" className={linkStyle("education")}>Education</a>
        <a href="#contact" className={linkStyle("contact")}>Contact</a>
      </ul>

      {/* Hamburger (Mobile Only) */}
      <button
        className="md:hidden absolute right-4 top-3"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {/* Icon */}
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </button>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 right-0 w-2/3 h-full bg-black/95 p-6 flex flex-col space-y-6 shadow-xl">

          <a onClick={handleLinkClick} href="#home" className={linkStyle("home")}>Home</a>
          <a onClick={handleLinkClick} href="#about" className={linkStyle("about")}>About</a>
          <a onClick={handleLinkClick} href="#skills" className={linkStyle("skills")}>Skills</a>
          <a onClick={handleLinkClick} href="#projects" className={linkStyle("projects")}>Projects</a>
          <a onClick={handleLinkClick} href="#certificates" className={linkStyle("certificates")}>Certificates</a>
          <a onClick={handleLinkClick} href="#education" className={linkStyle("education")}>Education</a>
          <a onClick={handleLinkClick} href="#contact" className={linkStyle("contact")}>Contact</a>

          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="text-red-400 font-semibold mt-10"
          >
            Close ✕
          </button>
        </div>
      )}
    </nav>
  );
}
