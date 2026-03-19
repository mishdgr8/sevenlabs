"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }
};

const JobListing = ({ title, type, location }: { title: string, type: string, location: string }) => (
  <motion.div
    variants={fadeInUp}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="group py-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:bg-neutral-50 transition-colors duration-500 px-4 -mx-4 cursor-pointer"
  >
    <div className="flex flex-col gap-2">
      <h3 className="text-3xl font-bold uppercase tracking-tight-premium leading-none group-hover:translate-x-2 transition-transform duration-500">{title}</h3>
      <div className="flex gap-4">
        <span className="text-[10px] font-bold uppercase tracking-widest-premium text-neutral-400">{type}</span>
        <span className="text-[10px] font-bold uppercase tracking-widest-premium text-neutral-400">/</span>
        <span className="text-[10px] font-bold uppercase tracking-widest-premium text-neutral-400">{location}</span>
      </div>
    </div>
    <ArrowUpRight size={32} className="text-neutral-300 group-hover:text-black transition-colors" />
  </motion.div>
);

export default function CareersPage() {
  return (
    <main className="bg-white text-black min-h-screen pb-32">
      {/* Header */}
      <section className="pt-24 md:pt-32 mb-16 border-b border-neutral-200">
        <div className="container-editorial pb-12">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12"
          >
            <h1 className="text-7xl md:text-[10rem] font-bold leading-none tracking-tight-premium uppercase">
              CAREERS /
            </h1>
            <div className="flex flex-col md:flex-row gap-12 items-start md:items-end mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest-premium text-neutral-400">Building the High-Performance Era</span>
              <span className="text-[10px] font-bold uppercase tracking-widest-premium text-neutral-400">(Now Hiring)</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container-editorial">
        <div className="mb-24 max-w-2xl">
          <h2 className="text-4xl font-bold uppercase tracking-tight-premium mb-8 leading-tight">
            We are looking for engineers who dream in Rust and ship in production.
          </h2>
          <p className="text-xl text-neutral-500 font-medium tracking-tight leading-tight">
            SevenLabs is a production studio. We don&apos;t just &quot;research&quot; - we build. Our culture is defined by industrial-grade execution and a relentless focus on performance.
          </p>
        </div>

        <div className="border-b border-neutral-200 mb-8">
          <span className="text-[10px] font-bold uppercase tracking-widest-premium text-neutral-400 block pb-4">Open Positions</span>
        </div>

        <JobListing
          title="Senior Rust Engineer"
          type="Full-Time"
          location="Remote / Dubai"
        />
        <JobListing
          title="SVM Systems Lead"
          type="Full-Time"
          location="Remote"
        />
        <JobListing
          title="Technical Product Designer"
          type="Contract"
          location="Global"
        />
      </section>

      {/* Manifest snippet */}
      <section className="container-editorial mt-20 py-20 bg-black text-white px-8 md:px-16">
        <div className="max-w-4xl">
          <span className="text-[10px] font-bold uppercase tracking-widest-premium text-neutral-500 block mb-12">The SevenLabs Way</span>
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight-premium leading-[0.9] mb-12">
            No bloated teams. <br /> No endless meetings. <br /> Just high-frequency building.
          </h2>
          <button className="btn-premium border-white text-white hover:bg-white hover:text-black">
            Send Manifest
          </button>
        </div>
      </section>
    </main>
  );
}
