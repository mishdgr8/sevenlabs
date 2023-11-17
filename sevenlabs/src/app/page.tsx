"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Trial from "../components/Trial";
import a16z from "@/../public/a16z.png";
import arb from "@/../public/arb.png";
import op from "@/../public/op.png";
import pantera from "@/../public/pantera.png";
import sol from "@/../public/sol.png";
import binance from "/../../Users/mishdgr8/Web Development/sevenlabs/sevenlabs/public/binance.svg";
import { FaArrowRight } from "react-icons/fa6";
import "@/styles/app.css";
import { useEffect } from "react";

const UnravelSection = ({ children }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;

      // Adjust the threshold as needed
      const threshold = windowHeight * 0.08;

      // Check if the section is in view
      if (scrollY > threshold) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0.5, y: 100 });
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Trigger the initial animation check
    handleScroll();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      className=" flex flex-col w-full items-center justify-between "
      initial={{ opacity: 0.5, y: 100 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const scrollers = document.querySelectorAll(".scroller");

      // If a user hasn't opted in for reduced motion, then we add the animation
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
      }

      function addAnimation() {
        scrollers.forEach((scroller) => {
          // add data-animated="true" to every `.scroller` on the page
          scroller.setAttribute("data-animated", true);

          // Make an array from the elements within `.scroller-inner`
          const scrollerInner = scroller.querySelector(".scroller__inner");
          const scrollerContent = Array.from(scrollerInner.children);

          // For each item in the array, clone it
          // add aria-hidden to it
          // add it into the `.scroller-inner`
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
          });
        });
      }
    }
  }, []);

  return (
    <main className="flex  flex-col items-center justify-between py-0 px-12 leading-7">
      <Trial text={" We turn ideas to "} />;
      <p className="mt-8">
        We work with passionate innovators on the Solana blockchain,
      </p>
      <p>
        engineering the bridge between visionary ideas and market-ready
        products.
      </p>
      <div className="mt-5 flex items-center justify-center ">
        <motion.button
          className=" items-center flex bg-green-500 text-sm  text-white my-2 mx-2 px-6 py-2 rounded-[20px]"
          whileTap={{ scale: 0.9 }}
        >
          Book a Call
          <FaArrowRight className="ml-[2px]" />
        </motion.button>
        <motion.button
          className="border text-sm text-white px-8 py-2 my-2 mx-2 rounded-[20px]"
          whileTap={{ scale: 0.9 }}
        >
          Learn More
        </motion.button>
      </div>
      <div className="mt-6 text-2xl font-extrabold">
        <h3>Our Clients and Partners</h3>
      </div>
      <div
        className="mt-2 mb-2 scroller"
        data-direction="right"
        data-speed="slow"
      >
        <div className="scroller__inner">
          <Image src={pantera} className="w-60  h-auto" alt={""} />
          <Image src={op} className="w-60 h-auto" alt={""} />
          <Image src={binance} className="w-60 h-auto" alt={""} />
          <Image src={arb} className="w-60 h-auto" alt={""} />
          <Image src={sol} className="w-60 h-auto" alt={""} />
          <Image src={a16z} className="w-60 h-[4rem]" alt={""} />
        </div>
      </div>
      <UnravelSection>
        <div className="flex flex-col m-5 items-center justify-center  font-extrabold">
          <h3 className="text-4xl">Our team doesn't just build,</h3>

          <h3 className="gradient-text text-3xl">we co-create</h3>
        </div>
        <div
          className="text-center font-extrabold
      text-7xl mt-10 mb-4 items-center justify-between "
        >
          <h2>Fuel your innovation</h2>
        </div>
        <div className="w-full">
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
          <motion.button
            whileTap={{ scale: 0.9 }}
            className=" items-center flex bg-green-500 text-sm  text-white my-2 mx-2 px-6 py-2 rounded-[20px]"
          >
            Book a Call
            <FaArrowRight className="ml-[2px]" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="border text-sm text-white px-8 py-2 my-2 mx-2 rounded-[20px]"
          >
            Learn More
          </motion.button>
        </div>
      </UnravelSection>
      <div className=" w-screen"></div>
    </main>
  );
}
