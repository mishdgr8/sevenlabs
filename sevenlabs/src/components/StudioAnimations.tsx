import React from "react";
import { motion } from "framer-motion";

export const StudioAnimation = ({ className = "" }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 800 600"
            className={`w-full h-full pointer-events-none ${className}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Animated Blueprint Lines */}
            <motion.path
                d="M100 100 H700 V500 H100 Z"
                stroke="#0066FF"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.2 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            />

            <motion.path
                d="M100 300 H700"
                stroke="#0066FF"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
            />

            <motion.path
                d="M400 100 V500"
                stroke="#0066FF"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.1 }}
                transition={{ duration: 1.5, delay: 0.7 }}
            />

            {/* Floating Geometric Elements (Color Pops) */}
            <motion.circle
                cx="100"
                cy="100"
                r="3"
                fill="#0066FF"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            <motion.circle
                cx="700"
                cy="500"
                r="3"
                fill="#0066FF"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />

            {/* Modern Studio "Scanner" Line */}
            <motion.rect
                width="2"
                height="400"
                fill="#0066FF"
                initial={{ x: 100, y: 100, opacity: 0 }}
                animate={{
                    x: [100, 700, 100],
                    opacity: [0, 0.4, 0]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Tech Decals */}
            <g opacity="0.15" stroke="#0066FF" strokeWidth="1">
                <path d="M50 50 L70 50 M50 50 L50 70" />
                <path d="M750 50 L730 50 M750 50 L750 70" />
                <path d="M50 550 L70 550 M50 550 L50 530" />
                <path d="M750 550 L730 550 M750 550 L750 530" />
            </g>
        </svg>
    );
};

export const CircuitAnimation = ({ className = "" }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 200 200"
            className={`w-full h-full pointer-events-none ${className}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path
                d="M20 20 L40 20 L40 60 L80 60 L80 100 L120 100 L120 140 L160 140 L160 180"
                stroke="#0066FF"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
                cx="160"
                cy="180"
                r="3"
                fill="#0066FF"
                animate={{ scale: [1, 2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </svg>
    )
}
