"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }
};

const ServiceSection = ({ num, title, desc, details }: { num: string, title: string, desc: string, details: string[] }) => (
  <motion.div
    variants={fadeInUp}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="py-16 border-t border-neutral-200 grid grid-cols-1 md:grid-cols-12 gap-12 group"
  >
    <div className="md:col-span-1">
      <span className="text-[10px] font-bold text-neutral-300 group-hover:text-black transition-colors duration-500 tracking-widest-premium">{num}</span>
    </div>
    <div className="md:col-span-5">
      <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight-premium text-black mb-6 leading-none">{title}</h2>
      <p className="text-xl text-neutral-500 font-medium leading-tight mb-8 tracking-tight max-w-sm">{desc}</p>
    </div>
    <div className="md:col-span-6 flex items-center">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 w-full">
        {details.map((d, i) => (
          <li key={i} className="text-[10px] font-bold uppercase tracking-widest-premium text-neutral-400 flex items-center gap-3">
            <div className="w-1 h-1 rounded-full bg-black group-hover:scale-150 transition-transform"></div>
            {d}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default function ProductsPage() {
  return (
    <main className="bg-white text-black min-h-screen pb-32">
      {/* Header (Image 2 style) */}
      <section className="pt-24 md:pt-32 mb-16 border-b border-neutral-200">
        <div className="container-editorial pb-12">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12"
          >
            <h1 className="text-7xl md:text-[10rem] font-bold leading-none tracking-tight-premium uppercase">
              SERVICES /
            </h1>
            <div className="flex flex-col md:flex-row gap-12 items-start md:items-end mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest-premium text-neutral-400">Technical Capability & Labs</span>
              <span className="text-[10px] font-bold uppercase tracking-widest-premium text-neutral-400">(2026 Edition)</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container-editorial">
        <ServiceSection
          num="01"
          title="Infra Engineering"
          desc="Low-level SVM optimizations built to eliminate state congestion and maximize throughput."
          details={["State Sharding", "Parallel Execution", "Write-Lock Logic", "Jito-Solana Tuning"]}
        />
        <ServiceSection
          num="02"
          title="Protocol Labs"
          desc="Native Rust engineering for sovereign primitives. We build the core logic of the decentralized future."
          details={["Anchor Patterns", "CPI Validation", "Event Streaming", "State Compression"]}
        />
        <ServiceSection
          num="03"
          title="Security Systems"
          desc="Multi-layered validation logic that ensures protocol state immunity from economic exploits."
          details={["Logic Hardening", "Economic Sim", "Invariant Checks", "Formal Methods"]}
        />
      </section>

      {/* Bespoke CTA */}
      <section className="container-editorial mt-20 py-20 border-t border-neutral-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight-premium leading-[0.9]">
            Bespoke <br /> Engineering <br /> for Founders.
          </h2>
          <div className="space-y-12">
            <p className="text-2xl text-neutral-500 font-medium tracking-tight leading-tight">
              We architecturalize high-performance primitives for founders who demand industrial-grade execution.
            </p>
            <button className="btn-premium">
              Initialize Project Audit
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

