"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-neutral-200 sticky top-0 z-[100]">
      <div className="container-editorial py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link className="font-bold text-xl md:text-2xl tracking-tight-premium text-black uppercase" href="/">
            SevenLabs
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8 lg:space-x-12 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
          <Link href="/#about" className="hover:text-black transition-colors duration-300">
            About
          </Link>
          <Link href="/products" className="hover:text-black transition-colors duration-300">
            Services
          </Link>
          <Link href="/careers" className="hover:text-black transition-colors duration-300">
            Careers
          </Link>
          <Link href="/#latest" className="hover:text-black transition-colors duration-300">
            Latest
          </Link>
          <Link href="/#contact" className="hover:text-black transition-colors duration-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

