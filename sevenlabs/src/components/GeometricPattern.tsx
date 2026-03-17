import React from "react";

export const GeometricPattern = ({ className = "" }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className={`w-full h-full opacity-[0.03] pointer-events-none ${className}`}
            aria-hidden="true"
        >
            <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" />
                </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
            <path
                d="M 0 50 Q 25 25 50 50 T 100 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2"
                vectorEffect="non-scaling-stroke"
            />
        </svg>
    );
};

export const TechnicalSVG = ({ className = "" }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 200 200"
            className={`w-full h-full text-black stroke-current fill-none ${className}`}
        >
            <circle cx="100" cy="100" r="80" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="40" strokeWidth="0.5" strokeDasharray="4 4" />
            <path d="M 20 100 L 180 100" strokeWidth="0.5" />
            <path d="M 100 20 L 100 180" strokeWidth="0.5" />
            <rect x="60" y="60" width="80" height="80" strokeWidth="0.5" transform="rotate(45 100 100)" />
        </svg>
    );
};
