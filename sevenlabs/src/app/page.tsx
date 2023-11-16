"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import { Montserrat } from "next/font/google";
import AnimateText from "../components/AnimateText";
import Hero from "../components/Hero";
import logo from "@/../public/logo.png";
import logs from "@/../public/logs.png";

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
      <div className="mt-5  ">
        <button className="bg-green-500 text-sm  text-white my-2 mx-2 px-6 py-2 rounded-[20px]">
          Book a Call
        </button>
        <button className="border text-sm text-white px-6 py-2 my-2 mx-2 rounded-[20px]">
          Learn More
        </button>
      </div>
      <div className="mt-6 text-2xl font-extrabold">
        <h3>Our Clients and Partners</h3>
      </div>
      <div className="flex w-32 items-center justify-center mt-6 mb-10">
        <Image src={logo} className="w-20 h-auto" alt={""} />
        <Image src={logs} className="w-40 h-auto" alt={""} />
        <Image src={logo} className="w-20 h-auto" alt={""} />
        <Image src={logs} className="w-40 h-auto" alt={""} />
        <Image src={logo} className="w-20 h-auto" alt={""} />
      </div>

      <div className="flex flex-col m-10 items-center justify-center  font-extrabold">
        <h3 className="text-4xl">Our team doesn't just build,</h3>

        <h3 className="gradient-text text-3xl">we co-create</h3>
      </div>
      <div className="relative">
        <div className="  flex items-center justify-center w-[400px] h-[400px] rounded-full bg-slate-500 ">
          <div className="  w-[300px] h-[300px] rounded-full bg-slate-800">
            <Image
              alt={""}
              src={logo}
              className="w-[70px] h-auto relative top-[-20%] left-[84%]"
            />
            <Image
              alt={""}
              src={logs}
              className="w-40 h-auto relative top-[40%] right-[20%]"
            />
            <Image
              alt={""}
              src={logo}
              className="w-[70px] h-auto relative bottom-[20%] left-[70%]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
