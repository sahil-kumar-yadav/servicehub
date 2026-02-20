"use client";

import { useState, useEffect } from "react";

// Services data with pricing
const services = [
  {
    id: "ai-ml",
    title: "Artificial Intelligence & Machine Learning",
    description: "Custom models, GenAI integration (GPT, Llama, Gemini), predictive systems.",
    price: "₹30,000 – ₹2,50,000+",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "ai-architecture",
    title: "AI Architecture & RAG Systems",
    description: "Vector DBs, LangChain, LLM integration, prompt engineering.",
    price: "₹25,000 – ₹90,000+",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: "chatbots",
    title: "AI Chatbot Solutions",
    description: "RAG bots, WhatsApp/Telegram bots, multi-agent orchestration.",
    price: "₹40,000 – ₹3,00,000+",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    id: "backend",
    title: "Backend Development & APIs",
    description: "REST, GraphQL, JWT auth, scalable microservices.",
    price: "₹35,000 – ₹1,50,000",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "React, Next.js, responsive UI, data dashboards.",
    price: "₹8,000 – ₹80,000",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    id: "database",
    title: "Database Services",
    description: "MySQL, PostgreSQL, MongoDB, Vector DB setup.",
    price: "₹8,000 – ₹70,000",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    description: "AWS, Azure, GCP, serverless deployment.",
    price: "₹40,000 – ₹1,50,000",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    id: "devops",
    title: "DevOps & Deployment",
    description: "Docker, CI/CD, GitHub Actions, Nginx.",
    price: "₹8,000 – ₹90,000",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "automation",
    title: "Automation Services",
    description: "API automation, AI workflows, business process automation.",
    price: "₹10,000 – ₹1,00,000",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "98%", label: "Success Rate" },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We analyze your requirements, business goals, and technical needs to create a comprehensive project roadmap.",
  },
  {
    step: "02",
    title: "Development",
    description: "Our expert team builds your solution using cutting-edge technologies with regular progress updates.",
  },
  {
    step: "03",
    title: "Deployment",
    description: "We deploy your application to production with optimized infrastructure and monitoring setup.",
  },
  {
    step: "04",
    title: "Support",
    description: "Ongoing maintenance, updates, and support to ensure your solution continues to perform optimally.",
  },
];

const testimonials = [
  {
    quote: "ServiceHub transformed our business with their AI solutions. The team's expertise in machine learning and full-stack development exceeded our expectations.",
    author: "Raj Sharma",
    position: "CEO, TechVentures",
  },
  {
    quote: "Professional, efficient, and delivers top-notch results. Our new platform has significantly improved our customer engagement.",
    author: "Priya Patel",
    position: "Founder, StartupX",
  },
  {
    quote: "The best development team we've worked with. They understood our vision and delivered a scalable solution that grows with our business.",
    author: "Michael Chen",
    position: "CTO, InnovateCorp",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section
      const sections = ["home", "services", "process", "testimonials", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-x-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="orb orb-blue w-96 h-96 -top-48 -left-48 animate-float" />
        <div className="orb orb-purple w-80 h-80 top-1/2 -right-40 animate-float delay-200" />
        <div className="orb orb-cyan w-64 h-64 bottom-0 left-1/3 animate-float delay-400" />
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
            <span className="text-xl font-bold gradient-text">ServiceHub</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {["services", "process", "testimonials", "contact"].map((item) => (
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

          <button
            onClick={() => scrollToSection("contact")}
            className="btn-gradient px-6 py-2.5 rounded-full text-sm font-semibold"
          >
            <span>Get Started</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
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
                {["TechVentures", "StartupX", "InnovateCorp", "DataFlow", "CloudNine"].map((brand) => (
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

      {/* Services Section */}
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
                <div className="price-tag rounded-lg px-4 py-2 inline-block">
                  <span className="text-[#00F0FF] font-semibold">{service.price}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Prices are firm within listed ranges (OBO). Final pricing depends on project complexity and feature scope.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center p-6 rounded-2xl glass opacity-0 ${mounted ? "animate-fadeInUp" : ""}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-padding relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#00F0FF] text-sm font-semibold uppercase tracking-wider">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              How We Work
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A streamlined approach to deliver exceptional results on time, every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((process, index) => (
              <div
                key={process.step}
                className={`relative opacity-0 ${mounted ? "animate-fadeInUp" : ""}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="glass rounded-2xl p-6 h-full">
                  <div className="text-6xl font-bold gradient-text opacity-20 mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                  <p className="text-gray-400 text-sm">{process.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#00F0FF] text-sm font-semibold uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card rounded-2xl p-6 opacity-0 ${mounted ? "animate-fadeInUp" : ""}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <svg className="w-10 h-10 text-[#8B5CF6] mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0066FF] to-[#8B5CF6] flex items-center justify-center">
                    <span className="text-lg font-bold">{testimonial.author[0]}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-gray-500 text-sm">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Contact Section */}
      <section id="contact" className="section-padding relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#00F0FF] text-sm font-semibold uppercase tracking-wider">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Let's Build Something Amazing
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF]/20 to-[#8B5CF6]/20 flex items-center justify-center text-[#00F0FF]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">Email</div>
                    <div className="font-medium">hello@servicehub.tech</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF]/20 to-[#8B5CF6]/20 flex items-center justify-center text-[#00F0FF]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">Location</div>
                    <div className="font-medium">Bangalore, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Service Interested In</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-[var(--glass-bg)]">
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Project Details</label>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gradient w-full py-4 rounded-lg text-lg font-semibold"
                >
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <button
                onClick={() => scrollToSection("home")}
                className="flex items-center gap-2 group mb-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#8B5CF6] flex items-center justify-center">
                  <span className="text-xl font-bold text-white">S</span>
                </div>
                <span className="text-xl font-bold gradient-text">ServiceHub</span>
              </button>
              <p className="text-gray-400 text-sm">
                Transforming businesses with cutting-edge AI and full-stack development solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-[#00F0FF] transition-colors">AI & ML Solutions</button></li>
                <li><button className="hover:text-[#00F0FF] transition-colors">Full-Stack Development</button></li>
                <li><button className="hover:text-[#00F0FF] transition-colors">Cloud Infrastructure</button></li>
                <li><button className="hover:text-[#00F0FF] transition-colors">Automation</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-[#00F0FF] transition-colors">About Us</button></li>
                <li><button className="hover:text-[#00F0FF] transition-colors">Careers</button></li>
                <li><button className="hover:text-[#00F0FF] transition-colors">Blog</button></li>
                <li><button className="hover:text-[#00F0FF] transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                {["twitter", "linkedin", "github"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-[#00F0FF] hover:border-[#00F0FF] transition-all"
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 ServiceHub. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-[#00F0FF] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#00F0FF] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

