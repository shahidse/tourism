"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const navVariants = {
    hidden: { y: -40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const menuVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const linkVariant = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full top-0 z-50 transition-all duration-500
        ${scrolled 
          ? "bg-white/80 shadow-xl backdrop-blur-xl border-b border-white/40"
          : "bg-white/10 backdrop-blur-sm border-b border-white/20"
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo w/ animation */}
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link href="/" className="text-3xl font-extrabold tracking-wide text-blue-800 drop-shadow-md">
            bestandbest
          </Link>
        </motion.div>

        {/* Menu with stagger animation */}
        <motion.div 
          className="flex gap-10 text-lg font-semibold text-gray-900"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
        >
          {["Home", "Tours", "Contact"].map((item) => (
            <motion.div key={item} variants={linkVariant}>
              <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="relative group">
                
                {/* Text */}
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="transition-colors duration-300 group-hover:text-blue-600"
                >
                  {item}
                </motion.span>

                {/* Underline */}
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 
                  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
}
