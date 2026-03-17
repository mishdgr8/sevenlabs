"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white pt-32 pb-20 overflow-hidden border-t border-neutral-100">
      <div className="container-editorial">
        {/* Scrolling Marquee */}
        <div className="whitespace-nowrap flex items-center gap-12 mb-32 select-none overflow-hidden h-40 md:h-64">
          <motion.h2
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="text-[12rem] md:text-[20rem] font-bold leading-none tracking-tight-premium uppercase opacity-5"
          >
            CONTACT US — CONTACT US — CONTACT US — CONTACT US —
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end">
          <div className="space-y-12">
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight-premium leading-[0.9] uppercase max-w-md">
              HAVE A PROJECT IN MIND?
            </h3>
            <p className="text-xl text-neutral-500 font-medium max-w-sm">
              Discover how SevenLabs can elevate and deepen your connection with your audiences.
            </p>
            <Link href="/contact" className="btn-premium w-fit">
              Reach out to us
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="flex flex-col items-end gap-16">
            <div className="flex flex-wrap justify-end gap-8 md:gap-12">
              <a href="#" className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest-premium text-neutral-400 hover:text-black transition-colors">
                <Instagram size={12} />
                <span>Instagram</span>
              </a>
              <a href="#" className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest-premium text-neutral-400 hover:text-black transition-colors">
                <Linkedin size={12} />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest-premium text-neutral-400 hover:text-black transition-colors">
                <Twitter size={12} />
                <span>Twitter</span>
              </a>
            </div>

            <div
              onClick={scrollToTop}
              className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest-premium cursor-pointer hover:opacity-50 transition-all group"
            >
              <span className="border-b border-black pb-1">Back to Top</span>
              <div className="p-2 border border-black rounded-full group-hover:bg-black group-hover:text-white transition-all">
                <ArrowUp size={14} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-bold uppercase tracking-widest-premium text-neutral-400">
            © 2026 SevenLabs — Technical Production Studio
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest-premium text-neutral-400">
            Architecting high-performance primitives.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

