import Image from "next/image";
import Navbar from "../components/Navbar";
import { Montserrat } from "next/font/google";
import AnimateText from "../components/AnimateText";
import Hero from "../components/Hero";

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
        <h3>Our team doesn't just build,</h3>
        <h3></h3>
      </div>
    </main>
  );
}