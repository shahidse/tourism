"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Optional: change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all ${
        scrolled ? "bg-white shadow-md" : "bg-white/20 "
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-700">
          bestandbest
        </Link>

        {/* Menu */}
        <div className="flex gap-8 text-lg font-medium text-gray-800">
          <Link
            href="/"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/tours"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Tours
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
