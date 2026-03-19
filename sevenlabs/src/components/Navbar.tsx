"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on resize to avoid UI glitches
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/products" },
    { name: "Careers", href: "/careers" },
    { name: "Latest", href: "/#latest" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <nav className="w-full bg-white/80 backdrop-blur-md border-b border-neutral-200 sticky top-0 z-[100]">
        <div className="container-editorial py-6 flex justify-between items-center px-4 md:px-0">
          <div className="flex items-center">
            <Link className="font-bold text-xl md:text-2xl tracking-tight-premium text-black uppercase group flex items-center" href="/">
              SEVEN
              <span className="inline-flex w-[1ch] justify-center text-blue-600 ml-1">
                <span className="inline-block transition-transform duration-700 ease-[cubic-bezier(0.6,0.01,-0.05,0.95)] rotate-180 group-hover:rotate-0">
                  7
                </span>
              </span>
              ABS
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-black transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black transition-transform duration-300 hover:scale-110 active:scale-95"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.6, 0.01, -0.05, 0.95] }}
            className="fixed inset-0 z-[99] bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-10 items-center text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold uppercase tracking-tighter text-black hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="w-full pt-10 border-t border-neutral-100 flex flex-col items-center"
              >
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-4">Join our studio</p>
                <div className="flex space-x-6">
                  <span className="text-xs font-bold text-black border-b border-black">SEVENLABS.XYZ</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

