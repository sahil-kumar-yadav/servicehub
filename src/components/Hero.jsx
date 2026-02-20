"use client";

import { brandNames } from "./data";

export default function Hero({ mounted, scrollToSection }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className={`transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
            <span className="text-sm text-gray-300">Accepting New Projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Transform Your Business with{" "}
            <span className="gradient-text">AI & Full-Stack Solutions</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            We deliver scalable, production-ready, cost-effective solutions for startups and enterprises. 
            From AI chatbots to cloud infrastructure, we build the future of your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-gradient px-8 py-4 rounded-full text-lg font-semibold w-full sm:w-auto"
            >
              <span>Get Started</span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="btn-outline px-8 py-4 rounded-full text-lg font-medium w-full sm:w-auto"
            >
              View Services
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500 mb-6">TRUSTED BY INNOVATIVE COMPANIES</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {brandNames.map((brand) => (
                <span key={brand} className="text-lg font-semibold text-gray-400">{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gradient-to-b from-[#00F0FF] to-[#8B5CF6] rounded-full" />
        </div>
      </div>
    </section>
  );
}

