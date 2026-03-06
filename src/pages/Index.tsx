import React, { useState, useEffect } from 'react';
import {
  Hammer,
  Home,
  Building2,
  Wrench,
  TrendingUp,
  Users,
  ShieldCheck,
  ChevronRight,
  Star,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Menu,
  X,
  Clock,
  ClipboardCheck,
  Truck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import deckPorch1 from '@/assets/deck-porch-1.jpeg';
import deckPorch2 from '@/assets/deck-porch-2.jfif';
import deckPorch3 from '@/assets/deck-porch-3.png';
import garageShed1 from '@/assets/garage-shed-1.png';
import garageShed2 from '@/assets/garage-shed-2.png';
import garageShed3 from '@/assets/garage-shed-3.png';
import garageShed4 from '@/assets/garage-shed-4.png';
import interior1 from '@/assets/interior-1.png';
import interior2 from '@/assets/interior-2.jpeg';
import interior3 from '@/assets/interior-3.jpeg';
import exteriorOverhaul1 from '@/assets/exterior-overhaul-1.jpeg';
import exteriorOverhaul2 from '@/assets/exterior-overhaul-2.jpeg';
import exteriorOverhaul3 from '@/assets/exterior-overhaul-3.jpeg';
import exteriorOverhaul4 from '@/assets/exterior-overhaul-4.png';
import exteriorOverhaul5 from '@/assets/exterior-overhaul-5.jpeg';
import exteriorOverhaul6 from '@/assets/exterior-overhaul-6.jpeg';

const services = [
  {
    title: "Residential Renovations",
    description: "Complete home remodels, luxury bath upgrades, deck additions, flooring, and interior transformations that add real value to your property.",
    icon: Home,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Commercial Build-Outs",
    description: "Office spaces, retail fit-outs, and commercial tenant improvements delivered on time and within budget.",
    icon: Building2,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Repairs & Maintenance",
    description: "Fast, reliable repairs for plumbing, electrical, drywall, roofing, and general property maintenance needs.",
    icon: Wrench,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Investment Property Upgrades",
    description: "Strategic upgrades that maximize ROI for landlords and real estate investors — we know what buyers and renters want.",
    icon: TrendingUp,
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "GC Subcontracting",
    description: "Reliable subcontracting services for general contractors who need a dependable crew with a proven track record.",
    icon: Users,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Property Management Support",
    description: "On-call service agreements and priority scheduling for property managers overseeing multiple units or buildings.",
    icon: ShieldCheck,
    color: "bg-rose-50 text-rose-600"
  }
];

const projects = [
  {
    title: "Residential Interior Renovation",
    category: "Full Interior",
    description: "Complete interior transformation including luxury master bath with soaking tub, walk-in closet, kitchen remodel, and refinished hardwood floors throughout.",
    imageFit: "object-cover scale-95" as string | undefined,
    images: [
      interior1,
      interior2,
      interior3,
    ],
  },
  {
    title: "Exterior & Interior Overhaul",
    category: "Full Renovation",
    description: "Full renovation including new siding, screened porch addition, kitchen remodel with island range, and open-plan living areas with refinished hardwood floors.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
    ],
  },
  {
    title: "Deck & Covered Porch Addition",
    category: "Exterior Addition",
    description: "New pressure-treated wood deck and covered porch addition on a brick residential home, including stairs and full railing system.",
    images: [
      deckPorch1,
      deckPorch2,
      deckPorch3,
    ],
  },
  {
    title: "Brick Home — Curb Appeal & Concrete",
    category: "Exterior Refresh",
    description: "New concrete walkway, fresh exterior paint on trim and fascia, and overall curb appeal refresh on a classic brick residential home.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1590066305974-2694b3ef4c2b?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=1200"
    ],
  },
  {
    title: "Custom Garage / Shed Build",
    category: "New Construction",
    description: "Ground-up construction of a custom detached garage from foundation to finished structure, including framing, sheathing, siding, and roofing.",
    images: [
      garageShed1,
      garageShed2,
      garageShed3,
      garageShed4,
    ],
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered && project.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }, 3000);
    } else {
      setCurrentImageIndex(0);
    }
    return () => clearInterval(interval);
  }, [isHovered, project.images.length]);

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[16/9] overflow-hidden rounded-3xl mb-6 bg-zinc-300 relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={project.images[currentImageIndex]}
            alt={project.title}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`w-full h-full ${project.imageFit || 'object-cover'}`}
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        {project.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {project.images.map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="flex items-start justify-between">
        <div className="flex-1 pr-4">
          <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">{project.category}</div>
          <h3 className="text-xl font-black text-black mb-2">{project.title}</h3>
          <p className="text-xs text-black/50 font-medium leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
            {project.description}
          </p>
        </div>
        <button className="p-3 border border-black rounded-full hover:bg-black hover:text-white transition-all shrink-0">
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const processSteps = [
  {
    title: "Request a Quote",
    description: "Fill out our quick form or give us a call. We'll gather the details needed to prepare an accurate estimate.",
    icon: Mail
  },
  {
    title: "On-Site Assessment",
    description: "We schedule a walkthrough of your property to fully understand the scope of work and any special requirements.",
    icon: ClipboardCheck
  },
  {
    title: "Proposal & Agreement",
    description: "You receive a detailed written proposal with timeline, materials, and pricing. No hidden costs — ever.",
    icon: CheckCircle2
  },
  {
    title: "Work & Delivery",
    description: "Our team gets to work. We keep you updated throughout and do a final walkthrough to ensure your complete satisfaction.",
    icon: Truck
  }
];

const Index = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Stubbed — no Firebase
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitStatus('success');
    (e.target as HTMLFormElement).reset();
    setIsSubmitting(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#E5E7EB] font-sans text-black selection:bg-zinc-900 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A192F]/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Hammer className="text-[#0A192F] w-5 h-5" />
            </div>
            <span className={`text-lg font-bold tracking-tight ${scrolled || isMenuOpen ? 'text-white' : 'text-white md:text-[#0A192F]'}`}>
              McLeod's <span className="opacity-60 font-medium">HSS</span>
            </span>
          </div>

          <div className={`hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest ${scrolled ? 'text-white/70' : 'text-[#0A192F]/70'}`}>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#process" className="hover:text-white transition-colors">Our Process</a>
            <a href="#contact" className="px-4 py-2 bg-white text-[#0A192F] rounded-full hover:bg-zinc-200 transition-all">
              Request Quote
            </a>
          </div>

          <button className={`md:hidden p-2 ${scrolled || isMenuOpen ? 'text-white' : 'text-[#0A192F]'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-[#0A192F] pt-24 px-6 md:hidden text-white"
          >
            <div className="flex flex-col gap-8 text-3xl font-bold">
              <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#process" onClick={() => setIsMenuOpen(false)}>Our Process</a>
              <a href="#contact" className="text-emerald-400" onClick={() => setIsMenuOpen(false)}>Request Quote</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-[60%] bg-[#0A192F] flex items-center px-6 md:px-20 py-32 md:py-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8">
              FAMILY <br />
              VALUES. <br />
              <span className="text-zinc-500">FLAWLESS</span> <br />
              WORK.
            </h1>
            <div className="flex items-center gap-4 text-zinc-500 font-mono text-xs tracking-widest uppercase">
              <div className="w-12 h-[1px] bg-zinc-700" />
              <span>Est. 2009</span>
              <div className="w-12 h-[1px] bg-zinc-700" />
            </div>
          </motion.div>
        </div>

        <div className="w-full md:w-[40%] bg-[#E5E7EB] flex items-center px-6 md:px-16 py-20 md:py-0">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm md:text-base text-black leading-relaxed mb-10 max-w-sm font-medium opacity-80">
              Serving the Upstate, Midlands, and Pee Dee areas, McLeod's Home Service Solutions provides top-tier renovations and dependable repairs for residential and commercial customers. We're the team that local investors, property managers, and contractors turn to when they need quality work they can actually rely on.
            </p>
            <div className="flex flex-col gap-4">
              <a href="#contact" className="group w-full px-8 py-4 bg-black text-white rounded-full font-bold flex items-center justify-between hover:bg-zinc-800 transition-all">
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#projects" className="w-full px-8 py-4 border-2 border-black text-black rounded-full font-bold flex items-center justify-center hover:bg-black hover:text-white transition-all">
                VIEW OUR WORK
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects", value: "350+" },
              { label: "Satisfaction", value: "98%" },
              { label: "Experience", value: "15Y" },
              { label: "Status", value: "Active" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center md:items-start border-l border-zinc-800 pl-6">
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-6">FULL-SERVICE SOLUTIONS.</h2>
              <p className="text-sm text-black/60 font-medium max-w-md">From single-unit repairs to full-scale commercial renovations, we handle it all with precision and professionalism.</p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, i) => (
                <div key={i} className="p-6 bg-white border border-zinc-200 rounded-2xl hover:border-black transition-colors group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-zinc-100 rounded-lg group-hover:bg-black group-hover:text-white transition-colors">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xs font-black uppercase tracking-widest">{service.title}</h3>
                  </div>
                  <p className="text-[11px] text-black/50 leading-relaxed font-medium">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter mb-4">RECENT WORK.</h2>
            <div className="w-24 h-2 bg-black" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-black leading-none mb-8">OUR <br /> PROCESS.</h2>
              <p className="text-sm text-black/60 font-medium max-w-sm mb-12">We've streamlined our workflow to ensure transparency and quality at every stage of the project.</p>
              <div className="aspect-square bg-[#0A192F] rounded-[3rem] p-12 flex flex-col justify-end">
                <div className="text-white">
                  <div className="text-6xl font-black mb-4">04</div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-50">Proven Steps to Success</div>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              {processSteps.map((step, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="text-4xl font-black text-zinc-200 group-hover:text-black transition-colors">0{i + 1}</div>
                  <div>
                    <h3 className="text-lg font-black text-black uppercase mb-2 tracking-tight">{step.title}</h3>
                    <p className="text-xs text-black/50 leading-relaxed font-medium max-w-md">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-black rounded-[3rem] p-8 md:p-20 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="text-4xl md:text-6xl font-black leading-none mb-8">LET'S <br /> BUILD.</h2>
                <div className="space-y-6 mb-12">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-zinc-500" />
                    <a href="tel:8032380706" className="text-sm font-bold hover:text-white transition-colors">(803) 238-0706</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-zinc-500" />
                    <a href="mailto:McleodHss@gmail.com" className="text-sm font-bold hover:text-white transition-colors">McleodHss@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-zinc-500" />
                    <span className="text-sm font-bold">Columbia, SC 29229</span>
                  </div>
                </div>
              </div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="NAME" required className="w-full bg-zinc-900 border-none rounded-2xl px-6 py-4 text-xs font-bold tracking-widest outline-none focus:ring-2 focus:ring-white transition-all" />
                <input name="email" type="email" placeholder="EMAIL" required className="w-full bg-zinc-900 border-none rounded-2xl px-6 py-4 text-xs font-bold tracking-widest outline-none focus:ring-2 focus:ring-white transition-all" />
                <textarea name="details" placeholder="PROJECT DETAILS" required className="w-full bg-zinc-900 border-none rounded-2xl px-6 py-4 text-xs font-bold tracking-widest outline-none focus:ring-2 focus:ring-white transition-all min-h-[120px] resize-none" />
                <button disabled={isSubmitting} className="w-full py-5 bg-white text-black rounded-2xl font-black text-xs tracking-[0.2em] hover:bg-zinc-200 transition-all disabled:opacity-50">
                  {isSubmitting ? 'SENDING...' : 'SEND REQUEST'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest text-center">Request sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest text-center">Failed to send request. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
              <Hammer className="text-white w-3 h-3" />
            </div>
            <span className="text-sm font-black tracking-tight">McLeod's HSS</span>
          </div>
          <div className="flex gap-8 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
            <a href="https://www.facebook.com/McLeodhss/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Facebook</a>
          </div>
          <p className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">© 2024 MCLEOD'S HOME SERVICE SOLUTIONS</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
