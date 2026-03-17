"use client";

import React, { useRef } from "react";
import { ReactNode } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface TrialProps {
  text: string;
  solana: ReactNode;
}

const Trial = ({ text, solana }: TrialProps): React.JSX.Element => {
  const trialRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".trial-line", {
      y: "100%",
      opacity: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: "power4.out",
    });
  }, { scope: trialRef });

  return (
    <div ref={trialRef} className="w-full flex flex-col items-center justify-center">
      <h1 className="text-center font-bold text-6xl md:text-8xl leading-none tracking-tighter">
        <div className="overflow-hidden py-2">
           <div className="trial-line">{text}</div>
        </div>
        <div className="overflow-hidden py-2">
           <div className="trial-line">{solana}</div>
        </div>
      </h1>
    </div>
  );
};

export default Trial;
