"use client";

import { trustBadges } from "./data";

export default function TrustBadges({ mounted }) {
  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBadges.map((badge, index) => (
            <div
              key={badge.label}
              className={`trust-badge opacity-0 ${mounted ? "animate-fadeInUp" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="trust-badge-icon">
                {badge.icon}
              </div>
              <div className="trust-badge-label">{badge.label}</div>
              <div className="trust-badge-description">{badge.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

