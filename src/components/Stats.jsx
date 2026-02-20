"use client";

import { stats } from "./data";

export default function Stats({ mounted }) {
  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 rounded-2xl glass opacity-0 ${mounted ? "animate-fadeInUp" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="counter-icon">
                {stat.icon}
              </div>
              <div className="counter-value mt-4">
                {stat.value}
              </div>
              <div className="counter-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

