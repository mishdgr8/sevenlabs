"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown, Instagram, Linkedin, ArrowUp } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";

// New Assets
import heroImg from "@/../public/hero.png";
import servicesImg from "@/../public/services.png";
import latestImg from "@/../public/latest.png";
import aboutImg from "@/../public/about.png";

import { GeometricPattern, TechnicalSVG } from "@/components/GeometricPattern";
import { StudioAnimation, CircuitAnimation } from "@/components/StudioAnimations";

const fadeInUp = {
   initial: { y: 40, opacity: 0 },
   animate: { y: 0, opacity: 1 },
   transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }
};

const stagger = {
   animate: {
      transition: {
         staggerChildren: 0.1
      }
   }
};

export default function Home() {
   return (
      <main className="bg-white text-black min-h-screen relative overflow-x-hidden">
         <GeometricPattern className="absolute inset-0 z-0" />

         {/* 01. STUDIO HERO SECTION */}
         <section id="hero" className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden z-10 border-b border-neutral-100 bg-white">
            {/* Animated Studio Background */}
            <div className="absolute inset-0 z-0 opacity-40">
               <StudioAnimation className="w-full h-full" />
            </div>

            <div className="container-editorial relative z-10">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-8">
                     <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                     >
                        <span className="text-[10px] font-bold uppercase tracking-widest-premium text-blue-600 mb-6 block">
                           <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                           The Studio / 2026
                        </span>
                        <h1 className="text-7xl md:text-[11rem] font-bold leading-[0.8] tracking-tight-premium uppercase mb-8">
                           SEVEN <br /> LABS<span className="text-blue-600">.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-500 font-medium tracking-tight leading-tight max-w-2xl mb-12">
                           We work with passionate innovators on the Solana blockchain, engineering the bridge between <span className="text-black">visionary ideas</span> and <span className="text-black">market-ready products</span>.
                        </p>
                        <div className="flex flex-wrap gap-4">
                           <button className="btn-premium bg-blue-600 hover:bg-black text-white px-10 py-4">
                              Start a Project
                              <ArrowUpRight size={18} />
                           </button>
                           <button className="btn-premium-outline px-10 py-4">
                              How we work
                           </button>
                        </div>
                     </motion.div>
                  </div>

                  <div className="lg:col-span-4 hidden lg:block relative">
                     <div className="aspect-square border border-neutral-100 bg-neutral-50 p-12 relative overflow-hidden group">
                        <CircuitAnimation className="w-full h-full opacity-30" />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="text-center p-8 bg-white/80 backdrop-blur-sm border border-neutral-100 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700">
                              <p className="text-[10px] font-bold uppercase tracking-widest-premium text-black mb-2">Build Details</p>
                              <div className="w-12 h-0.5 bg-blue-600 mx-auto mb-4"></div>
                              <p className="font-mono text-[9px] text-neutral-400">STATUS: ACTIVE<br />LOCATED: DUBAI<br />ESTABLISHED: 2026</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* PARTNERS CAROUSEL */}
         <section className="py-12 bg-white border-b border-neutral-50 overflow-hidden relative">
            <div className="container-editorial mb-8">
               <span className="text-[10px] font-bold uppercase tracking-widest-premium text-neutral-400">Our Partners</span>
            </div>
            <div className="flex whitespace-nowrap overflow-hidden py-4">
               <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-50%" }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="flex items-center gap-16 pr-16"
               >
                  {[...Array(2)].map((_, i) => (
                     <React.Fragment key={i}>
                        <div className="flex items-center gap-16 transition-opacity">
                           <div className="w-56 flex justify-center items-center">
                              <Image src="/pantera.png" alt="Pantera" width={220} height={80} className="h-28 w-auto object-contain brightness-0 opacity-100 hover:opacity-100 transition-opacity" />
                           </div>
                           <div className="w-80 flex justify-center items-center">
                              <Image src="/op.png" alt="Optimism" width={220} height={80} className="h-32 w-auto object-contain brightness-0 opacity-100 hover:opacity-100 transition-opacity" />
                           </div>
                           <div className="w-56 flex justify-center items-center">
                              <Image src="/binance.svg" alt="Binance" width={220} height={80} className="h-9 w-auto object-contain brightness-0 opacity-100 hover:opacity-100 transition-opacity" />
                           </div>
                           <div className="w-80 flex justify-center items-center">
                              <Image src="/arb.png" alt="Arbitrum" width={220} height={80} className="h-48 w-auto object-contain brightness-0 opacity-100 hover:opacity-100 transition-opacity" />
                           </div>
                           <div className="w-56 flex justify-center items-center">
                              <Image src="/sol.png" alt="Solana" width={220} height={80} className="h-8 w-auto object-contain brightness-0 opacity-100 hover:opacity-100 transition-opacity" />
                           </div>
                           <div className="w-56 flex justify-center items-center">
                              <Image src="/a16z.png" alt="a16z" width={220} height={80} className="h-16 w-auto object-contain brightness-0 opacity-100 hover:opacity-100 transition-opacity" />
                           </div>
                        </div>
                     </React.Fragment>
                  ))}
               </motion.div>
            </div>
         </section>

         {/* 02. LATEST SECTION */}
         <section id="latest" className="py-12 md:py-16 relative z-10 bg-white">
            <div className="container-editorial">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 border-b border-neutral-100 pb-6">
                  <motion.h2
                     variants={fadeInUp}
                     initial="initial"
                     whileInView="animate"
                     viewport={{ once: true }}
                     className="text-5xl md:text-7xl font-bold leading-none tracking-tight-premium uppercase"
                  >
                     FUEL YOUR INNOVATION /
                  </motion.h2>
                  <div className="flex flex-col md:flex-row gap-8 mt-6 md:mt-0 items-start md:items-end">
                     <span className="text-[10px] font-bold uppercase tracking-widest-premium text-neutral-400">Insights & Updates</span>
                  </div>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                  <motion.div
                     variants={fadeInUp}
                     initial="initial"
                     whileInView="animate"
                     viewport={{ once: true }}
                     className="group cursor-pointer"
                  >
                     <div className="aspect-[4/3] relative overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 rounded-sm">
                        <Image src={latestImg} alt="Latest Article" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                     </div>
                     <h3 className="text-4xl font-bold uppercase tracking-tight-premium leading-tight mb-4">State Machines: The Future of Solana Systems</h3>
                     <p className="text-[10px] font-bold uppercase tracking-widest-premium text-neutral-400">Labs / March 2026</p>
                  </motion.div>

                  <div className="flex flex-col justify-end">
                     {[1, 2, 3].map((i) => (
                        <motion.div
                           key={i}
                           variants={fadeInUp}
                           initial="initial"
                           whileInView="animate"
                           viewport={{ once: true }}
                           className="group py-8 border-t border-neutral-100 flex justify-between items-center cursor-pointer hover:px-4 transition-all"
                        >
                           <div className="space-y-1">
                              <span className="text-[10px] font-bold text-neutral-300 group-hover:text-black transition-colors">0{i}</span>
                              <h4 className="text-xl font-bold uppercase tracking-tight-premium">High-performance blockchain patterns</h4>
                           </div>
                           <ArrowUpRight size={20} className="text-neutral-300 group-hover:text-black transition-colors" />
                        </motion.div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* 03. ABOUT SECTION */}
         <section id="about" className="py-16 relative z-10 bg-neutral-50 border-y border-neutral-100">
            <div className="container-editorial">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-1 hidden lg:block h-full">
                     <span className="rotate-[-90deg] inline-block text-[10px] font-bold uppercase tracking-widest-premium text-neutral-400 origin-center whitespace-nowrap translate-y-16">
                        A PARTNER IN INNOVATION
                     </span>
                  </div>

                  <div className="lg:col-span-6 space-y-8">
                     <motion.h2
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-bold uppercase tracking-tight-premium leading-[0.85]"
                     >
                        Our team doesn't <br /> just build: <br /> <span className="text-blue-600">We co-create.</span>
                     </motion.h2>
                     <motion.p
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-2xl text-neutral-500 font-medium leading-tight max-w-lg tracking-tight"
                     >
                        SevenLabs is a production studio architecting high-performance systems for visionary founders. We specialize in Solana-native engineering and professional platform design.
                     </motion.p>
                  </div>

                  <div className="lg:col-span-5 relative group">
                     <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="aspect-[4/5] relative grayscale overflow-hidden rounded-sm"
                     >
                        <Image src={aboutImg} alt="About Us" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors"></div>
                     </motion.div>
                     <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white border border-neutral-200 p-8 flex items-center justify-center rounded-sm shadow-xl animate-pulse-slow">
                        <TechnicalSVG className="w-full opacity-60" />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* 04. CONTACT SECTION */}
         <section id="contact" className="py-20 relative z-10 bg-white overflow-hidden">
            <div className="container-editorial">
               <div className="flex flex-col md:flex-row justify-between items-center gap-16 mb-20">
                  <div className="max-w-xl">
                     <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tight-premium leading-[0.9] mb-6">
                        Bespoke engineering <br /> for founders.
                     </h2>
                     <p className="text-lg text-neutral-500 font-medium tracking-tight mb-8">
                        Direct technical contribution for founders who refuse to compromise on execution speed or quality. Fuel your innovation with SevenLabs.
                     </p>
                     <div className="flex gap-4">
                        <button className="btn-premium">
                           Book a call
                           <ArrowUpRight size={16} />
                        </button>
                        <button className="btn-premium-outline">
                           Learn More
                        </button>
                     </div>
                  </div>

                  <div className="w-full lg:w-1/3 aspect-square relative border border-neutral-100 p-12 flex items-center justify-center">
                     <TechnicalSVG className="w-full opacity-10" />
                     <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                        <p className="text-[10px] font-bold uppercase tracking-widest-premium text-neutral-400">
                           Based in Dubai <br /> Operating Globally <br /> EST. 2026
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>
   );
}
