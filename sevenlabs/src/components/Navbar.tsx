"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scrolling when menu is open
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
      <nav className={`w-full ${isOpen ? 'bg-white' : 'bg-white/80 backdrop-blur-md'} border-b border-neutral-200 sticky top-0 z-[100] transition-colors duration-300`}>
        <div className="container-editorial py-6 flex justify-between items-center px-4 md:px-0">
          <div className="flex items-center">
            <Link className="font-bold text-xl md:text-2xl tracking-tight-premium text-black uppercase group flex items-center" href="/">
              SEVEN
              <span className="inline-flex w-[1ch] justify-center text-blue-600 ml-1">
                <span className={`inline-block transition-transform duration-700 ease-[cubic-bezier(0.6,0.01,0.05,0.95)] ${isOpen ? 'rotate-0' : 'rotate-180'} group-hover:rotate-0`}>
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
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-black transition-transform duration-300 hover:scale-110 active:scale-95 relative z-[110]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.6, 0.01, 0.05, 0.95] }}
              className="absolute top-full left-0 w-full bg-white border-b border-neutral-100 z-[90] md:hidden overflow-hidden shadow-2xl"
            >
              <div className="px-6 py-10 flex flex-col space-y-8">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-bold uppercase tracking-tight-premium text-neutral-400 hover:text-black transition-all block py-2"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-8 border-t border-neutral-100 flex flex-col space-y-6"
                >
                  <Link
                    href="/#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between text-black font-bold group"
                  >
                    <span className="text-sm tracking-widest uppercase">Start a Project</span>
                    <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>

                  {/* Explicit Cancel Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full py-4 text-[10px] font-bold uppercase tracking-widest text-neutral-400 hover:text-black transition-colors bg-neutral-50 rounded-lg flex items-center justify-center space-x-2"
                  >
                    <X size={14} />
                    <span>Close Menu</span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/5 backdrop-blur-[2px] z-[80] md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

