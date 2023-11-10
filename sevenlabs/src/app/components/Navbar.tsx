import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const Navbar = () => {
  return (
    <nav className="w-full  px-[6rem] py-4 flex justify-between items-center">
      <Link className=" font-bold text-2xl" href="your-logo.png">
        SEVENLABS
      </Link>

      <div className=" flex items-center space-x-4 text-sm">
        <div className="space-x-4">
          <a href="#" className="text-white">
            Career
          </a>
        </div>
        <button
          className="bg-green-500 text-white 
         px-4 py-0 rounded-[20px]"
        >
          Book a Call
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
