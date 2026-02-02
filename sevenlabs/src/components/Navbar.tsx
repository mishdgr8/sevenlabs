"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="w-full card  px-[6rem] py-4 flex justify-between items-center">
      <Link className="  font-bold text-2xl" href="/">
        SEVEN<span className=" inline-block transform rotate-180">7</span>ABS
      </Link>

      <div className=" flex items-center space-x-4 text-sm">
        <div className="space-x-4">
          <Link href="/careers" className="text-white">
            Careers
          </Link>
        </div>
        <motion.button
          className="bg-green-500 text-white 
         px-4 py-0 rounded-[20px] flex items-center"
          whileTap={{ scale: 0.9 }}
        >
          Book a Call
          <FaArrowRight className="ml-[2px]" />
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
