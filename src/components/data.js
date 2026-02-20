// Services data without direct prices
export const services = [
  {
    id: "ai-ml",
    title: "Artificial Intelligence & Machine Learning",
    description: "Custom models, GenAI integration (GPT, Llama, Gemini), predictive systems.",
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
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

// Projects data with demos
export const projects = [
  {
    id: "ai-chatbot",
    title: "AI Customer Support Bot",
    description: "Intelligent chatbot with RAG architecture for accurate customer responses, integrated with WhatsApp and web.",
    technologies: ["Next.js", "Python", "LangChain", "Vector DB", "WhatsApp API"],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
    demoUrl: "#",
    caseStudy: "Reduced customer support response time by 80%",
  },
  {
    id: "ecommerce-platform",
    title: "Full-Stack E-Commerce Platform",
    description: "Modern e-commerce solution with real-time inventory, payment gateway integration, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    demoUrl: "#",
    caseStudy: "Achieved 150% increase in online sales",
  },
  {
    id: "analytics-dashboard",
    title: "Real-Time Analytics Dashboard",
    description: "Interactive data visualization dashboard with live metrics, custom charts, and automated reporting.",
    technologies: ["Next.js", "D3.js", "MongoDB", "Socket.io", "Tailwind"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    demoUrl: "#",
    caseStudy: "Enabled data-driven decisions with 99.9% uptime",
  },
  {
    id: "ml-prediction",
    title: "Predictive Maintenance System",
    description: "ML-powered system for predicting equipment failures before they happen, saving maintenance costs.",
    technologies: ["Python", "TensorFlow", "FastAPI", "Redis", "GCP"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    demoUrl: "#",
    caseStudy: "Prevented $2M in potential downtime losses",
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure Setup",
    description: "Scalable cloud architecture with auto-scaling, CDN, and disaster recovery on AWS/Azure.",
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "CI/CD"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    demoUrl: "#",
    caseStudy: "Reduced infrastructure costs by 40%",
  },
  {
    id: "automation-workflow",
    title: "Business Process Automation",
    description: "Custom automation workflows to streamline operations, reduce manual tasks, and improve efficiency.",
    technologies: ["Python", "n8n", "Webhooks", "Slack", "Google Sheets"],
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop",
    demoUrl: "#",
    caseStudy: "Saved 30+ hours per week in manual work",
  },
];

// Stats data with icons
export const stats = [
  { 
    value: "150+", 
    label: "Projects Completed",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    value: "50+", 
    label: "Happy Clients",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    value: "5+", 
    label: "Years Experience",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    value: "98%", 
    label: "Success Rate",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
];

export const processSteps = [
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

export const testimonials = [
  {
    quote: "SS ServiceHub transformed our business with their AI solutions. The team's expertise in machine learning and full-stack development exceeded our expectations.",
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

// FAQ Data
export const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in a wide range of cutting-edge technologies including React, Next.js, Python, TensorFlow, LangChain, AWS, Azure, and more. Our team stays updated with the latest trends to deliver modern, scalable solutions."
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary depending on complexity. A simple website takes 2-4 weeks, while complex AI or full-stack applications can take 2-6 months. We provide detailed timelines during the discovery phase."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes! We provide comprehensive post-launch support including bug fixes, security updates, performance optimization, and feature enhancements. We offer flexible maintenance packages tailored to your needs."
  },
  {
    question: "How do you ensure project quality?",
    answer: "We follow industry best practices including code reviews, automated testing, continuous integration, and deployment. Every project goes through rigorous QA testing before delivery."
  },
  {
    question: "Can you work with our existing team?",
    answer: "Absolutely! We can either lead the entire project or collaborate with your existing team. We're experienced in integrating with various team structures and workflows."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer arrangements. We provide detailed quotes after understanding your project requirements."
  }
];

// Team Data
export const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in tech. Previously led AI initiatives at major tech companies.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "David Chen",
    role: "CTO",
    bio: "Expert in AI/ML architecture. PhD in Computer Science from MIT. 12+ years experience.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    bio: "Award-winning UX/UI designer. Specializes in creating intuitive, beautiful interfaces.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Michael Park",
    role: "Lead Developer",
    bio: "Full-stack expert. Specializes in scalable architectures and cloud infrastructure.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#"
  }
];

// Pricing Data
export const pricingPlans = [
  {
    tier: "Starter",
    price: "2,999",
    description: "Perfect for small projects and startups",
    features: [
      "Up to 5 pages website",
      "Basic SEO optimization",
      "Contact form integration",
      "Mobile responsive design",
      "1 month support",
      "Social media links"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    tier: "Pro",
    price: "7,999",
    description: "Ideal for growing businesses",
    features: [
      "Up to 15 pages website",
      "Advanced SEO & analytics",
      "Custom functionality",
      "API integrations",
      "CMS integration",
      "3 months priority support",
      "E-commerce ready",
      "Performance optimization"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    tier: "Enterprise",
    price: "Custom",
    description: "For large-scale applications",
    features: [
      "Unlimited pages",
      "Custom AI/ML features",
      "Third-party integrations",
      "Dedicated team",
      "24/7 priority support",
      "Security audit",
      "Scalability planning",
      "Custom training"
    ],
    cta: "Contact Us",
    popular: false
  }
];

// Trust Badges Data
export const trustBadges = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "Secure & Compliant",
    description: "GDPR, SOC 2 compliant"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    label: "SSL Certified",
    description: "256-bit encryption"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
    label: "Quality Assured",
    description: "ISO 9001 certified"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "Fast Delivery",
    description: "On-time project delivery"
  }
];

// Navigation items
export const navItems = ["services", "projects", "process", "testimonials", "contact"];

// Company info
export const companyInfo = {
  name: "SS ServiceHub",
  email: "connect@servicehub.tech",
  location: "Bangalore, India"
};

// Footer links
export const footerLinks = {
  services: [
    "AI & ML Solutions",
    "Full-Stack Development",
    "Cloud Infrastructure",
    "Automation"
  ],
  company: [
    "About Us",
    "Careers",
    "Blog",
    "Contact"
  ]
};

// Brand names for trust section
export const brandNames = ["TechVentures", "StartupX", "InnovateCorp", "DataFlow", "CloudNine"];

