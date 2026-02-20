"use client";

import { useState, useEffect } from "react";

export default function BackgroundElements({ scrollProgress, particles }) {
  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Particle Background */}
      <div className="particles-container">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
          />
        ))}
      </div>

      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="orb orb-blue w-96 h-96 -top-48 -left-48 animate-float" />
        <div className="orb orb-purple w-80 h-80 top-1/2 -right-40 animate-float delay-200" />
        <div className="orb orb-cyan w-64 h-64 bottom-0 left-1/3 animate-float delay-400" />
      </div>
    </>
  );
}

