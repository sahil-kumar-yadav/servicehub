"use client";

export default function Navigation({ 
  scrolled, 
  activeSection, 
  mobileMenuOpen, 
  setMobileMenuOpen,
  scrollToSection 
}) {
  const navItems = ["services", "projects", "process", "testimonials", "contact"];

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="flex flex-col">
          {["home", ...navItems].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="mobile-nav-link capitalize"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#8B5CF6] flex items-center justify-center glow-purple">
              <span className="text-xl font-bold text-white">S</span>
            </div>
            <span className="text-xl font-bold gradient-text">SS ServiceHub</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`nav-link text-sm font-medium capitalize transition-colors ${
                  activeSection === item
                    ? "text-[#00F0FF]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-gradient px-6 py-2.5 rounded-full text-sm font-semibold hidden md:block"
            >
              <span>Get Started</span>
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

