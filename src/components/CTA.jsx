"use client";

export default function CTA({ scrollToSection }) {
  return (
    <section className="section-padding relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/10 via-[#8B5CF6]/10 to-[#00F0FF]/10" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project and discover how we can help you achieve your goals with cutting-edge technology.
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-gradient px-10 py-4 rounded-full text-lg font-semibold"
            >
              <span>Start Your Project</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

