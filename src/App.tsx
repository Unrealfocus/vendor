import { useEffect, useRef, useState } from 'react';
import { 
  TrendingUp, 
  LayoutDashboard, 
  CheckCircle2,
  ArrowRight,
  Star,
  Menu,
  X,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Sparkles,
  BarChart3,
  MessageCircle,
  Zap,
  Bot,
  Shield,
  Smartphone
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#F5C518] rounded-full flex items-center justify-center">
              <span className="text-[#2D5016] font-bold text-xl font-serif">C</span>
            </div>
            <span className={`font-serif font-bold text-xl transition-colors ${isScrolled ? 'text-[#2D5016]' : 'text-[#2D5016]'}`}>
              Catered by Africa
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#benefits" className={`font-medium transition-colors hover:text-[#E67E22] ${isScrolled ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]'}`}>
              Benefits
            </a>
            <a href="#how-it-works" className={`font-medium transition-colors hover:text-[#E67E22] ${isScrolled ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]'}`}>
              How It Works
            </a>
            {/* <a href="#stories" className={`font-medium transition-colors hover:text-[#E67E22] ${isScrolled ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]'}`}>
              Success Stories
            </a> */}
            <a href="#faq" className={`font-medium transition-colors hover:text-[#E67E22] ${isScrolled ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]'}`}>
              FAQ
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://admin.cateredbyafrica.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2D5016] font-medium hover:text-[#E67E22] transition-colors"
            >
              Dashboard
            </a>
            <a 
              href="https://form.jotform.com/222031160957146"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Become a Vendor
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-6 space-y-4">
            <a href="#benefits" className="block text-[#1A1A1A] font-medium py-2">Benefits</a>
            <a href="#how-it-works" className="block text-[#1A1A1A] font-medium py-2">How It Works</a>
            <a href="#stories" className="block text-[#1A1A1A] font-medium py-2">Success Stories</a>
            <a href="#faq" className="block text-[#1A1A1A] font-medium py-2">FAQ</a>
            <hr />
            <a 
              href="https://admin.cateredbyafrica.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#2D5016] font-medium py-2"
            >
              Dashboard
            </a>
            <a 
              href="https://form.jotform.com/222031160957146"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary block text-center"
            >
              Become a Vendor
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ perspective: '1000px' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="african-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="5" fill="#F5C518" opacity="0.3"/>
              <circle cx="0" cy="0" r="3" fill="#4A7C23" opacity="0.2"/>
              <circle cx="20" cy="20" r="3" fill="#E67E22" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#african-pattern)"/>
        </svg>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-32 left-10 w-20 h-20 bg-[#F5C518]/20 rounded-full animate-float" style={{ animationDelay: '0s' }}/>
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-[#4A7C23]/20 rounded-full animate-float" style={{ animationDelay: '1s' }}/>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-[#E67E22]/20 rounded-full animate-float" style={{ animationDelay: '2s' }}/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#4A7C23]/10 text-[#4A7C23] px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-current"/>
                <span>Join 100+ African Vendors</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2D5016] leading-tight">
                Grow Your{' '}
                <span className="text-[#E67E22]">Business</span>
                {' '}with Catered by Africa
              </h1>
              <p className="text-lg md:text-xl text-[#1A1A1A]/70 max-w-xl leading-relaxed">
                Join the leading platform connecting authentic African restaurants, caterers, and grocery stores with thousands of hungry customers eager to experience the rich flavors of Africa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://form.jotform.com/222031160957146"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 text-lg animate-pulse-glow"
              >
                Become a Vendor
                <ArrowRight className="w-5 h-5"/>
              </a>
              <a 
                href="https://admin.cateredbyafrica.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2 text-lg"
              >
                Go to Dashboard
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F5C518] to-[#E67E22] border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F5C518] text-[#F5C518]"/>
                  ))}
                </div>
                <p className="text-sm text-[#1A1A1A]/60">Trusted by 100+ vendors</p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className={`relative h-[500px] lg:h-[600px] transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Main Image - Vendor */}
            <div 
              className="absolute top-0 right-0 w-[80%] h-[70%] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
              style={{ transformStyle: 'preserve-3d', transform: 'translateZ(50px)' }}
            >
              <img 
                src="/images/hero-vendor.jpg" 
                alt="Happy vendor with tablet"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D5016]/30 to-transparent"/>
            </div>

            {/* Food Image */}
            <div 
              className="absolute bottom-0 left-0 w-[60%] h-[50%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.05] transition-transform duration-500"
              style={{ transformStyle: 'preserve-3d', transform: 'translateZ(100px)' }}
            >
              <img 
                src="/images/hero-food.jpg" 
                alt="Delicious African food"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute bottom-20 right-10 bg-white rounded-2xl shadow-xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#4A7C23] rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white"/>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#2D5016]">+40%</p>
                  <p className="text-sm text-[#1A1A1A]/60">Avg. Revenue Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

// Benefits Section
function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Enhanced benefits data with your specific features
  const benefits = [
    {
      icon: MessageCircle,
      title: 'Unified Communication Hub',
      subtitle: 'Integrated Chat App',
      description: 'Eliminate communication gaps with our built-in Chat App that connects merchants, customers, drivers, and admins in real-time within every order thread. Resolve delivery issues instantly without switching platforms.',
      highlights: [
        'Real-time messaging inside order threads',
        'Direct customer & driver communication',
        'Admin support integration',
        'Delivery workflow coordination'
      ],
      color: '#4A7C23',
      gradient: 'from-[#4A7C23] to-[#2D5016]',
      stats: '3x faster issue resolution'
    },
    {
      icon: Sparkles,
      title: 'AI-Powered Sales Engine',
      subtitle: 'Smart Product Recommendations',
      description: 'Our AI analyzes customer behavior to display personalized "Recommended Products" sections. Returning customers see suggestions based on purchase history; new visitors discover your best-sellers automatically.',
      highlights: [
        'Personalized for returning customers',
        'Popular items for new visitors',
        'Purchase history analysis',
        'Dynamic bestseller rankings'
      ],
      color: '#F5C518',
      gradient: 'from-[#F5C518] to-[#E67E22]',
      stats: '40% higher conversion'
    },
    {
      icon: LayoutDashboard,
      title: 'Intelligent Command Center',
      subtitle: 'All-in-One Dashboard',
      description: 'Manage your entire operation from a single, powerful dashboard. Track orders in real-time, update menus instantly, monitor analytics, and control inventory with intuitive, mobile-first design.',
      highlights: [
        'Real-time order tracking',
        'Live menu management',
        'Advanced analytics suite',
        'Inventory automation'
      ],
      color: '#E67E22',
      gradient: 'from-[#E67E22] to-[#D35400]',
      stats: '156% mobile efficiency boost'
    }
  ];

  // Additional micro-features grid
  const microFeatures = [
    {
      icon: Zap,
      title: 'Lightning-Fast Setup',
      desc: 'Go live in minutes, not days'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      desc: 'Stripe, Buy Now Pay Later & more integrated'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First',
      desc: 'Manage business on-the-go'
    },
    {
      icon: Bot,
      title: 'AI Automation',
      desc: 'Smart alerts & predictions'
    }
  ];

  return (
    <section 
      id="benefits" 
      ref={sectionRef} 
      className="py-24 bg-gradient-to-b from-white via-[#FFF8E7]/30 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#4A7C23]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F5C518]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A7C23]/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#4A7C23]" />
            <span className="text-sm font-semibold text-[#4A7C23] tracking-wide uppercase">Powered by Hyperzod</span>
          </div> */}
          
          <h2 className="text-4xl md:text-6xl font-bold text-[#2D5016] mb-6 leading-tight">
            Everything You Need to<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A7C23] via-[#F5C518] to-[#E67E22]">
              Scale Your Business
            </span>
          </h2>
          
          <p className="text-xl text-[#1A1A1A]/60 max-w-3xl mx-auto leading-relaxed">
            Join 100+ successful merchants using our AI-enhanced platform to streamline operations, 
            boost sales with smart recommendations, and communicate seamlessly with customers and drivers.
          </p>
        </div>

        {/* Main Feature Cards - Large Interactive Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-[2px]`}>
                <div className="w-full h-full bg-white rounded-3xl" />
              </div>

              <div className="relative p-8 h-full flex flex-col">
                {/* Header with Icon */}
                <div className="flex items-start justify-between mb-6">
                  {/* <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                    style={{ backgroundColor: `${benefit.color}15` }}
                  >
                    <benefit.icon className="w-8 h-8 transition-colors" style={{ color: benefit.color }}/>
                  </div> */}
                  
                  <div 
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{ backgroundColor: `${benefit.color}15`, color: benefit.color }}
                  >
                    {benefit.subtitle}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#2D5016] mb-3 group-hover:text-[#4A7C23] transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-[#1A1A1A]/70 leading-relaxed mb-6 flex-grow">
                  {benefit.description}
                </p>

                {/* Expandable Highlights */}
                <div className={`space-y-3 transition-all duration-500 overflow-hidden ${activeFeature === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 lg:max-h-64 lg:opacity-100'}`}>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent mb-4" />
                  {benefit.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-[#1A1A1A]/80">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: benefit.color }} />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Badge */}
                <div className="mt-6 pt-6 border-t border-[#E5E7EB] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#E67E22] font-semibold">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-sm">{benefit.stats}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#4A7C23] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <span className="text-sm">Explore feature</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Micro Features Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {microFeatures.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#4A7C23]/30 hover:bg-white transition-all duration-300 hover:-translate-y-1"
            >
              <feature.icon className="w-8 h-8 text-[#4A7C23] mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-[#2D5016] mb-1">{feature.title}</h4>
              <p className="text-sm text-[#1A1A1A]/60">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats Section with Context */}
        {/* <div className={`bg-gradient-to-br from-[#2D5016] to-[#4A7C23] rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block">
                  <p className="text-4xl md:text-5xl font-bold text-[#F5C518] mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </p>
                  <div className="absolute -inset-4 bg-[#F5C518]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-white font-semibold mb-1">{stat.label}</p>
                <p className="text-white/60 text-sm">{stat.context}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center border-t border-white/20 pt-8">
            <p className="text-white/80 mb-4 text-lg">Ready to transform your business?</p>
            <button className="bg-[#F5C518] hover:bg-[#E67E22] text-[#2D5016] font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 mx-auto">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div> */}

        {/* Trust Indicators */}
        {/* <div className={`mt-16 text-center transition-all duration-1000 delay-[1200ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-sm text-[#1A1A1A]/40 uppercase tracking-widest font-semibold mb-4">
            Trusted by leading merchants worldwide
          </p>
          <div className="flex justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="h-8 w-32 bg-[#1A1A1A]/10 rounded" />
            <div className="h-8 w-28 bg-[#1A1A1A]/10 rounded" />
            <div className="h-8 w-36 bg-[#1A1A1A]/10 rounded" />
            <div className="h-8 w-24 bg-[#1A1A1A]/10 rounded hidden md:block" />
          </div>
        </div> */}
      </div>
    </section>
  );
}
// How It Works Section
function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Sign Up',
      description: 'Create your vendor account in just minutes. Provide your business details and we\'ll get you set up quickly.',
      image: '/images/login.png'
    },
    {
      number: '02',
      title: 'Set Up Your Menu',
      description: 'Add your delicious dishes, upload mouth-watering photos, and set your prices. Make your offerings irresistible!',
      image: '/images/set-up.jpg'
    },
    {
      number: '03',
      title: 'Start Receiving Orders',
      description: 'Get instant notifications for new orders. Prepare, package, and watch your business grow!',
      image: '/images/step-3.jpg'
    }
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 bg-[#FFF8E7] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5C518]/10 rounded-full blur-3xl"/>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4A7C23]/10 rounded-full blur-3xl"/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D5016] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
            Getting started is easy. Follow these simple steps to begin your journey with us.
          </p>
        </div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D5016]/40 to-transparent"/>
                </div>
                {/* Step Number Badge */}
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#F5C518] rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-3xl font-bold text-[#2D5016]">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#4A7C23] rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white"/>
                  </div>
                  <span className="text-[#4A7C23] font-semibold uppercase tracking-wider">Step {step.number}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#2D5016]">
                  {step.title}
                </h3>
                <p className="text-lg text-[#1A1A1A]/70 leading-relaxed">
                  {step.description}
                </p>
                {index === 0 && (
                  <a 
                    href="https://form.jotform.com/222031160957146"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#E67E22] font-semibold hover:gap-4 transition-all"
                  >
                    Start your application
                    <ArrowRight className="w-5 h-5"/>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Success Stories Section
// function SuccessStoriesSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const testimonials = [
//     {
//       name: 'Mama Nkechi',
//       business: "Mama's Kitchen",
//       quote: "Our revenue increased by 40% within the first 3 months! The platform helped us reach customers we never knew existed. It's been a game-changer for our family restaurant.",
//       image: '/images/testimonial-1.jpg',
//       rating: 5
//     },
//     {
//       name: 'Kwame Asante',
//       business: 'Afro Spice Market',
//       quote: "As a grocery store owner, I was skeptical at first. But Catered by Africa connected us with customers craving authentic African ingredients. Our sales have doubled!",
//       image: '/images/testimonial-2.jpg',
//       rating: 5
//     },
//     {
//       name: 'Chef Adeola',
//       business: 'Jollof Express',
//       quote: "The dashboard is so easy to use, and the support team is amazing. We've grown from a small kitchen to a thriving business. Highly recommend!",
//       image: '/images/testimonial-3.jpg',
//       rating: 5
//     }
//   ];

//   return (
//     <section id="stories" ref={sectionRef} className="py-24 bg-white relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <h2 className="text-4xl md:text-5xl font-bold text-[#2D5016] mb-4">
//             Success Stories
//           </h2>
//           <p className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
//             Hear from vendors who have transformed their businesses with Catered by Africa.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div 
//               key={index}
//               className={`group relative bg-[#FFF8E7] rounded-3xl overflow-hidden hover-lift transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//               style={{ transitionDelay: `${index * 150}ms` }}
//             >
//               {/* Image */}
//               <div className="relative h-64 overflow-hidden">
//                 <img 
//                   src={testimonial.image} 
//                   alt={testimonial.name}
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#2D5016]/60 to-transparent"/>
                
//                 {/* Quote Icon */}
//                 <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#F5C518] rounded-full flex items-center justify-center">
//                   <Quote className="w-6 h-6 text-[#2D5016]"/>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6 space-y-4">
//                 {/* Rating */}
//                 <div className="flex items-center gap-1">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-4 h-4 fill-[#F5C518] text-[#F5C518]"/>
//                   ))}
//                 </div>

//                 <p className="text-[#1A1A1A]/80 leading-relaxed italic">
//                   "{testimonial.quote}"
//                 </p>

//                 <div className="pt-4 border-t border-[#2D5016]/10">
//                   <p className="font-bold text-[#2D5016]">{testimonial.name}</p>
//                   <p className="text-sm text-[#1A1A1A]/60">{testimonial.business}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// FAQ Section
function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: 'How do I sign up as a vendor?',
      answer: 'Signing up is easy! Click the "Become a Vendor" button, fill out our application form with your business details, and our team will review your application within 24-48 hours. Once approved, you\'ll receive access to your vendor dashboard.'
    },
    // {
    //   question: 'What are the commission fees?',
    //   answer: 'We charge a competitive commission of 15-20% per order, depending on your business type and volume. There are no monthly fees or hidden charges. You only pay when you make a sale!'
    // },
    {
      question: 'How and when do I get paid?',
      answer: 'Through Stripe Connect, we deposit your earnings weekly (every Monday) straight to your bank account. You\'ll get full visibility via your dashboard with real-time sales tracking, automatic transfer receipts, and detailed financial reports for easy bookkeeping.'
    },
    {
      question: 'What support do you offer vendors?',
      answer: 'We provide 24/7 customer support, marketing assistance, professional photography sessions for your dishes, and access to our Influencers. Our dedicated account managers help you optimize your menu and pricing.'
    },
    {
      question: 'Can I update my menu and prices?',
      answer: 'Absolutely! You have full control over your menu through the vendor dashboard. Add new items, update prices, mark items as unavailable, and manage your inventory in real-time.'
    },
    {
      question: 'What types of businesses can join?',
      answer: 'We welcome African restaurants, caterers, grocery stores, and food producers. Whether you serve jollof rice, sell authentic spices, or cater events, we\'d love to have you on board!'
    }
  ];

  return (
    <section id="faq" ref={sectionRef} className="py-24 bg-[#FFF8E7] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D5016] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#1A1A1A]/60">
            Got questions? We've got answers.
          </p>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-2xl border-none shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-left font-semibold text-[#2D5016] hover:no-underline hover:bg-[#FFF8E7]/50 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-[#1A1A1A]/70 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/cta-background.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2D5016]/90 to-[#2D5016]/70"/>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ready to Grow Your{' '}
            <span className="text-[#F5C518]">African Food</span>{' '}
            Business?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join hundreds of successful vendors sharing the rich flavors of Africa with eager customers. Your journey starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a 
              href="https://form.jotform.com/222031160957146"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F5C518] text-[#2D5016] font-bold px-10 py-5 rounded-full text-lg hover:bg-[#E67E22] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2"
            >
              Become a Vendor Today
              <ArrowRight className="w-5 h-5"/>
            </a>
            <a 
              href="mailto:support@cateredbyafrica.com"
              className="border-2 border-white text-white font-semibold px-10 py-5 rounded-full text-lg hover:bg-white hover:text-[#2D5016] transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5"/>
              Contact Sales
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-white/60">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#F5C518]"/>
              <span>Free to join</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#F5C518]"/>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#F5C518]"/>
              <span>No monthly fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#2D5016] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F5C518] rounded-full flex items-center justify-center">
                <span className="text-[#2D5016] font-bold text-xl font-serif">C</span>
              </div>
              <span className="font-serif font-bold text-xl">Catered by Africa</span>
            </div>
            <p className="text-white/70">
              Connecting authentic African cuisine with customers who crave it. Delivered directly to you.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/cateredbyafricausa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F5C518] hover:text-[#2D5016] transition-colors">
                <Instagram className="w-5 h-5"/>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F5C518] hover:text-[#2D5016] transition-colors">
                <Facebook className="w-5 h-5"/>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F5C518] hover:text-[#2D5016] transition-colors">
                <Twitter className="w-5 h-5"/>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="https://www.cateredbyafrica.com/en" className="text-white/70 hover:text-[#F5C518] transition-colors">Order Food</a></li>
              <li><a href="#benefits" className="text-white/70 hover:text-[#F5C518] transition-colors">Vendor Benefits</a></li>
              <li><a href="#how-it-works" className="text-white/70 hover:text-[#F5C518] transition-colors">How It Works</a></li>
              <li><a href="#faq" className="text-white/70 hover:text-[#F5C518] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="http://www.cateredbyafrica.com/en/page/terms" className="text-white/70 hover:text-[#F5C518] transition-colors">Terms of Service</a></li>
              <li><a href="http://www.cateredbyafrica.com/en/page/privacy-policy" className="text-white/70 hover:text-[#F5C518] transition-colors">Privacy Policy</a></li>
              <li><a href="http://www.cateredbyafrica.com/en/page/merchant-agreement" className="text-white/70 hover:text-[#F5C518] transition-colors">Merchant Agreement</a></li>
              <li><a href="http://www.cateredbyafrica.com/en/page/contact-us" className="text-white/70 hover:text-[#F5C518] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h4 className="font-bold text-lg mb-4">Download Our App</h4>
            <p className="text-white/70 mb-4">Manage your business on the go.</p>
            <div className="space-y-3">
              <a 
                href="https://apps.apple.com/us/app/catered-by-africa/id6470067405"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 hover:bg-white/20 transition-colors"
              >
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-[#2D5016] font-bold text-xs">iOS</span>
                </div>
                <div>
                  <p className="text-xs text-white/60">Download on</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.cba.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 hover:bg-white/20 transition-colors"
              >
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-[#2D5016] font-bold text-xs">And</span>
                </div>
                <div>
                  <p className="text-xs text-white/60">Get it on</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Catered by Africa. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            Made with ❤️ for African food lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      {/* Grain Overlay */}
      <div className="fixed inset-0 grain-overlay z-50 pointer-events-none"/>
      
      <Navigation/>
      <HeroSection/>
      <BenefitsSection/>
      <HowItWorksSection/>
      {/* <SuccessStoriesSection/> */}
      <FAQSection/>
      <FinalCTASection/>
      <Footer/>
    </div>
  );
}

export default App;
