"use client";

import { pricingPlans } from "./data";

export default function Pricing({ mounted, scrollToSection }) {
  return (
    <section id="pricing" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#00F0FF] text-sm font-semibold uppercase tracking-wider">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Choose Your Plan
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose the package that best fits your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.tier}
              className={`pricing-card glass rounded-2xl ${plan.popular ? 'popular' : ''} opacity-0 ${mounted ? "animate-fadeInUp" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && <div className="pricing-badge">POPULAR</div>}
              <div className="pricing-header">
                <div className="pricing-tier">{plan.tier}</div>
                <div className="pricing-price">
                  {plan.price !== "Custom" && <span className="pricing-currency">$</span>}
                  <span className="pricing-amount">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="pricing-period">/project</span>}
                </div>
                <p className="pricing-description">{plan.description}</p>
              </div>
              <div className="pricing-features">
                {plan.features.map((feature, i) => (
                  <div key={i} className="pricing-feature">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="pricing-cta">
                <button
                  onClick={() => scrollToSection("contact")}
                  className={plan.popular ? 'btn-gradient' : 'btn-outline'}
                >
                  {plan.popular ? <span>{plan.cta}</span> : plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

