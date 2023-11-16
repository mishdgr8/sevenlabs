"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import a16z from "@/../public/a16z.png";
import arb from "@/../public/arb.png";
import op from "@/../public/op.png";
import pantera from "@/../public/pantera.png";
import sol from "@/../public/sol.png";
import binance from "/../../Users/mishdgr8/Web Development/sevenlabs/sevenlabs/public/binance.svg";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect } from "react";
import Trial from "@/components/trial";

export default function Home() {
  return (
    <main className="flex m flex-col items-center justify-between py-0 px-12 leading-7">
      <Hero />
      <p className="mt-8">
        We work with passionate innovators on the Solana blockchain,
      </p>
      <p>
        engineering the bridge between visionary ideas and market-ready
        products.
      </p>
      <div className="mt-5 flex items-center justify-center ">
        <button className=" items-center flex bg-green-500 text-sm  text-white my-2 mx-2 px-6 py-2 rounded-[20px]">
          Book a Call
          <FaArrowRight className="ml-[2px]" />
        </button>
        <button className="border text-sm text-white px-8 py-2 my-2 mx-2 rounded-[20px]">
          Learn More
        </button>
      </div>
      <div className="mt-6 text-2xl font-extrabold">
        <h3>Our Clients and Partners</h3>
      </div>
      <div
        className="flex flex-grow w-screen overflow-hidden relative h-[100px] justify-center items-center gap-[2rem] mt-6 mb-10"
        style={{ animation: "scroll 20s linear infinite" }}
      >
        <Image src={a16z} className="w-80 h-[4rem]" alt={""} />

        <Image src={pantera} className="w-80 h-auto" alt={""} />
        <Image src={op} className="w-80 h-auto" alt={""} />
        <Image src={binance} className="w-80 h-auto" alt={""} />
        <Image src={arb} className="w-80 h-auto" alt={""} />
        <Image src={sol} className="w-80 h-auto" alt={""} />
      </div>
      <div></div>

      <div className="flex flex-col m-10 items-center justify-center  font-extrabold">
        <h3 className="text-4xl">Our team doesn't just build,</h3>

        <h3 className="gradient-text text-3xl">we co-create</h3>
      </div>
      <div
        className="text-center font-extrabold
      text-7xl mt-48 mb-4  items-center justify-between "
      >
        <h2>Fuel your innovation</h2>
      </div>
      <div className="w-full ">
        <hr></hr>
      </div>
      <p className="mt-8">
        We work with passionate innovators on the Solana blockchain,
      </p>
      <p>
        engineering the bridge between visionary ideas and market-ready
        products.
      </p>
      <div className="mt-5 mb-48 flex items-center justify-center ">
        <button className=" items-center flex bg-green-500 text-sm  text-white my-2 mx-2 px-6 py-2 rounded-[20px]">
          Book a Call
          <FaArrowRight className="ml-[2px]" />
        </button>
        <button className="border text-sm text-white px-8 py-2 my-2 mx-2 rounded-[20px]">
          Learn More
        </button>
      </div>
      <div className=" w-screen"></div>
    </main>
  );
}
