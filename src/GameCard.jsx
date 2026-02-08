import React from "react";
import "./App.css";

export default function GameCardSVG() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#0b1020]">
      <svg
        viewBox="0 0 300 400"
        className="w-[300px] h-[400px]"
      >
        {/* Background polygon */}
        <polygon
          points="30,0 270,0 300,40 300,360 270,400 180,400 150,380 120,400 30,400 0,360 0,40"
          fill="url(#grad)"
          stroke="#00ffff80"
          strokeWidth="2"
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Rotating energy ring */}
        <circle
          cx="150"
          cy="200"
          r="50"
          stroke="#00ffff80"
          strokeWidth="3"
          fill="none"
          filter="url(#glow)"
          className="animate-spin-slow origin-center"
        />

        {/* Energy bar (rectangle) */}
        <rect x="40" y="340" width="220" height="12" fill="#1e293b" rx="6" />
        <rect
          x="40"
          y="340"
          width="150"
          height="12"
          fill="#00ffff"
          rx="6"
          className="animate-pulse"
        />

        {/* Text */}
        <text x="20" y="50" fill="#00ffff" fontSize="18" fontWeight="bold">
          Plasma Shield
        </text>
        <text x="20" y="80" fill="#ccc" fontSize="12">
          Absorbs damage and converts it into energy
        </text>
        <text x="20" y="370" fill="#00ffff" fontSize="10">
          Energy 67%
        </text>
      </svg>
    </div>
  );
}
