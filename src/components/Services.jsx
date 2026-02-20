"use client";

import { services } from "./data";

export default function Services({ mounted, scrollToSection }) {
  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#00F0FF] text-sm font-semibold uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Comprehensive Tech Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From concept to deployment, we provide end-to-end development services tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card glass rounded-2xl p-6 relative group opacity-0 ${mounted ? "animate-fadeInUp" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0066FF]/20 to-[#8B5CF6]/20 flex items-center justify-center mb-4 text-[#00F0FF] group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <button
                onClick={() => scrollToSection("contact")}
                className="btn-outline px-4 py-2 rounded-lg text-sm font-medium"
              >
                Get Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

