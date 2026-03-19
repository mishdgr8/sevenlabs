"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
   ArrowUpRight, ArrowDown, Instagram, Linkedin, ArrowUp,
   Code, Database, Terminal, Cloud, Github
} from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";

// New Assets
import latestImg from "@/../public/latest.png";
import aboutImg from "@/../public/about.png";

import { GeometricPattern, TechnicalSVG } from "@/components/GeometricPattern";
import { StudioAnimation } from "@/components/StudioAnimations";

const fadeInUp = {
   initial: { y: 20, opacity: 0 },
   animate: { y: 0, opacity: 1 },
   transition: { duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }
};

const stagger = {
   animate: {
      transition: {
         staggerChildren: 0.05
      }
   }
};

const capabilities = [
   {
      num: "01",
      title: "Programs",
      desc: "Smart contract development. Compute-optimized, security-first, built with the right patterns for production and compliance.",
      icon: <Code size={20} />
   },
   {
      num: "02",
      title: "Indexing",
      desc: "Custom indexer infrastructure. Real-time and historical data, high availability, built to scale.",
      icon: <Database size={20} />
   },
   {
      num: "03",
      title: "Rust Backends",
      desc: "High-performance APIs in Rust. High throughput for demanding workloads.",
      icon: <Terminal size={20} />
   },
   {
      num: "04",
      title: "Infrastructure",
      desc: "Optimized for high-throughput transaction sending and low-latency chain data access.",
      icon: <Cloud size={20} />
   }
];

const latestArticles = [
   { num: "01", title: "High-Performance Blockchain Patterns" },
   { num: "02", title: "Optimizing SVM for Mass Transaction Throughput" },
   { num: "03", title: "Carbon: The Future of Modular Indexing" }
];

export default function Home() {
   return (
      <main className="bg-white text-black min-h-screen relative overflow-x-hidden">
         <GeometricPattern className="absolute inset-0 z-0" />

         {/* 01. STUDIO HERO SECTION */}
         <section id="hero" className="relative h-[90vh] min-h-[600px] flex flex-col justify-center overflow-hidden z-20 border-b border-neutral-100 bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
            <h1 className="sr-only">SevenLabs — Technical Production Studio architecting high-performance primitives for Solana.</h1>

            {/* Animated Studio Background */}
            <div className="absolute inset-0 z-0 opacity-40">
               <StudioAnimation className="w-full h-full" />
            </div>

            {/* Top Left: SEVEN */}
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
               className="absolute top-8 left-4 md:left-8 lg:left-12 z-0 pointer-events-none"
            >
               <div className="text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] xl:text-[13rem] font-bold leading-[0.75] tracking-tight-premium uppercase group text-black">
                  SEVEN
               </div>
            </motion.div>

            {/* Bottom Right: 7ABS */}
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
               className="absolute bottom-8 right-4 md:right-8 lg:right-12 z-0 pointer-events-none text-right"
            >
               <div className="text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] xl:text-[13rem] font-bold leading-[0.75] tracking-tight-premium uppercase group flex justify-end text-black">
                  <span className="inline-flex w-[1ch] justify-center text-blue-600">
                     <span className="inline-block transition-transform duration-1000 ease-[cubic-bezier(0.6,0.01,-0.05,0.95)] rotate-180 group-hover:rotate-0">
                        7
                     </span>
                  </span>
                  ABS<span className="text-blue-600">.</span>
               </div>
            </motion.div>

            <div className="container-editorial relative z-10 flex flex-col items-center justify-center">
               {/* Center: Content */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  className="flex flex-col items-center text-center max-w-3xl bg-white/20 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-3xl p-6 md:p-10 z-20"
               >
                  <p className="text-[clamp(1.1rem,1.8vw,1.75rem)] text-neutral-600 font-medium tracking-tight leading-relaxed mb-8">
                     We work with passionate innovators on the Solana blockchain, engineering the bridge between <span className="text-black font-bold">visionary ideas</span> and <span className="text-black font-bold">market-ready products</span>.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                     <button className="btn-premium bg-blue-600 hover:bg-black text-white px-6 py-3 lg:px-8 lg:py-4 text-xs tracking-wider pointer-events-auto">
                        Start a Project
                        <ArrowUpRight size={18} />
                     </button>
                     <button className="btn-premium-outline text-black border-black/10 px-6 py-3 lg:px-8 lg:py-4 text-xs tracking-wider pointer-events-auto bg-white/70 backdrop-blur-sm hover:bg-white/30 hover:backdrop-blur-md hover:border-black/20 hover:text-black transition-all">
                        How we work
                     </button>
                  </div>
               </motion.div>
            </div>
         </section>

         {/* PARTNERS CAROUSEL */}
         <section className="pt-12 pb-6 bg-white border-b border-neutral-50 overflow-hidden relative">
            <div className="container-editorial mb-6">
               <span className="text-[10px] font-bold uppercase tracking-widest-premium text-neutral-400">Our Partners</span>
            </div>
            <div className="flex whitespace-nowrap overflow-hidden py-2">
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

         {/* 02. WHAT WE DO SECTION */}
         <section className="py-24 bg-black text-white relative overflow-hidden">
            {/* Cinematic God Ray (Angle 1: Optimized) */}
            <div className="absolute top-[-50%] left-[-20%] right-0 bottom-[-20%] pointer-events-none z-0">
               {/* Simplified Gradient Structure to improve GPU performance */}
               <div className="absolute top-[20%] left-[20%] w-[60vw] h-[200vh] origin-top-left rotate-[35deg]">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-blue-500/5 to-transparent blur-[80px]" />
                  <div className="absolute top-0 left-[20%] w-[20%] h-full bg-gradient-to-b from-white/10 to-transparent blur-[20px] mix-blend-screen" />
               </div>
            </div>

            <div className="container-editorial relative z-10">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
                  <div className="max-w-xl">
                     <span className="text-[10px] font-bold uppercase tracking-widest-premium text-neutral-500 mb-6 block">What We Do</span>
                     <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight-premium leading-[0.9] mb-8">
                        Engineering with <br /> conviction
                     </h2>
                  </div>
                  <p className="text-lg text-neutral-400 font-medium max-w-sm mb-4 leading-relaxed tracking-tight">
                     From Solana programs to high-performance infrastructure. We build systems that don&apos;t break.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800 border border-neutral-800">
                  {capabilities.map((item) => (
                     <div key={item.num} className="bg-black p-10 hover:bg-neutral-900 transition-colors duration-500 group">
                        <div className="flex justify-between items-start mb-12">
                           <span className="text-[10px] font-bold text-neutral-500">{item.num} —</span>
                           <div className="text-neutral-500 group-hover:text-blue-600 transition-colors">
                              {item.icon}
                           </div>
                        </div>
                        <h3 className="text-2xl font-bold uppercase tracking-tight-premium mb-6">{item.title}</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed font-medium">
                           {item.desc}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* 03. LATEST SECTION */}
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
                        <Image
                           src={latestImg}
                           alt="Latest Article"
                           fill
                           sizes="(max-width: 1024px) 100vw, 50vw"
                           className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                     </div>
                     <h3 className="text-4xl font-bold uppercase tracking-tight-premium leading-tight mb-4">State Machines: The Future of Solana Systems</h3>
                     <p className="text-[10px] font-bold uppercase tracking-widest-premium text-neutral-400">Labs / March 2026</p>
                  </motion.div>

                  <div className="flex flex-col justify-end">
                     {latestArticles.map((article) => (
                        <motion.div
                           key={article.num}
                           variants={fadeInUp}
                           initial="initial"
                           whileInView="animate"
                           viewport={{ once: true }}
                           className="group py-8 border-t border-neutral-100 flex justify-between items-center cursor-pointer hover:px-4 transition-all"
                        >
                           <div className="space-y-1">
                              <span className="text-[10px] font-bold text-neutral-300 group-hover:text-black transition-colors">{article.num}</span>
                              <h4 className="text-xl font-bold uppercase tracking-tight-premium">{article.title}</h4>
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
                  <div className="lg:col-span-1 hidden lg:block relative h-full min-h-[300px]">
                     <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-90 text-[10px] font-bold uppercase tracking-widest-premium text-neutral-400 whitespace-nowrap origin-center">
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
                        Our team doesn&apos;t <br /> just build: <br /> <span className="text-blue-600">We co-create.</span>
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
                        <Image
                           src={aboutImg}
                           alt="About Us"
                           fill
                           sizes="(max-width: 1024px) 100vw, 40vw"
                           className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors"></div>
                     </motion.div>
                     <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white border border-neutral-200 p-8 flex items-center justify-center rounded-sm shadow-xl animate-pulse-slow">
                        <TechnicalSVG className="w-full opacity-60" />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* 05. OPEN SOURCE SECTION */}
         <section className="py-24 bg-neutral-50 border-y border-neutral-100 relative z-10">
            <div className="container-editorial">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
                  <div className="max-w-xl">
                     <span className="text-[10px] font-bold uppercase tracking-widest-premium text-neutral-400 mb-6 block">Open Source</span>
                     <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight-premium leading-[0.9]">
                        We build the tools <br /> Solana is missing
                     </h2>
                  </div>
                  <p className="text-lg text-neutral-500 font-medium max-w-sm mb-4 leading-relaxed tracking-tight">
                     Built in production. Open-sourced for the ecosystem.
                  </p>
               </div>

               <div className="bg-black text-white p-8 md:p-16 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative overflow-hidden">
                  {/* Premium Aurora / Deep Space Glow for uniqueness */}
                  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-sm">
                     {/* Massive backdrop glow */}
                     <div className="absolute top-[-50%] right-[-50%] w-[200%] h-[200%] bg-blue-900/20 blur-[120px] rounded-full" />

                     {/* Sweeping cyan aurora */}
                     <div className="absolute top-[-20%] right-[-10%] w-[120%] h-[80%] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent blur-[60px] transform -rotate-[25deg] mix-blend-screen rounded-full" />

                     {/* Deep indigo contrast */}
                     <div className="absolute bottom-[-20%] left-[-10%] w-[100%] h-[60%] bg-gradient-to-r from-indigo-500/10 via-blue-600/5 to-transparent blur-[80px] transform rotate-[15deg] mix-blend-screen rounded-full" />
                  </div>

                  <div className="lg:col-span-6 relative z-10">
                     <h3 className="text-5xl font-bold uppercase tracking-tight-premium mb-8">Carbon</h3>
                     <p className="text-xl text-neutral-400 font-medium tracking-tight leading-relaxed mb-12">
                        A lightweight indexing framework for Solana. Modular pipelines for sourcing, decoding, and processing on-chain data at any scale.
                     </p>
                     <button className="btn-premium border-white text-white hover:bg-white hover:text-black">
                        View on GitHub
                        <Github size={18} />
                     </button>
                  </div>

                  <div className="lg:col-span-6 flex flex-col gap-6 relative z-10">
                     {[
                        { label: "Source", sub: "RPC, gRPC, Jetstreamer", icon: <Database size={16} /> },
                        { label: "Decode", sub: "Anchor, Codama", icon: <Code size={16} /> },
                        { label: "Process", sub: "Transform, Store, Stream", icon: <Terminal size={16} /> }
                     ].map((step, idx, arr) => (
                        <React.Fragment key={step.label}>
                           <div className="flex items-center gap-6 p-6 border border-neutral-800 bg-neutral-900/50 hover:border-blue-600 transition-colors group">
                              <div className="w-10 h-10 bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-blue-600 transition-colors">
                                 {step.icon}
                              </div>
                              <div>
                                 <h4 className="font-bold uppercase tracking-tight-premium text-sm">{step.label}</h4>
                                 <p className="text-[10px] uppercase tracking-widest-premium text-neutral-500 font-bold">{step.sub}</p>
                              </div>
                           </div>
                           {idx < arr.length - 1 && (
                              <div className="w-px h-6 bg-neutral-800 ml-11"></div>
                           )}
                        </React.Fragment>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* 06. CONTACT SECTION */}
         <section id="contact" className="py-12 lg:py-16 relative z-10 bg-white overflow-hidden">
            <div className="container-editorial">
               <div className="flex flex-col md:flex-row justify-between items-center gap-12 lg:gap-16 mb-10">
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
