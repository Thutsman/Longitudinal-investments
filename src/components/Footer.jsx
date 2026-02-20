import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowUp, Droplets, HardHat, Zap, Drill } from 'lucide-react';

const quickLinks = [
  { label: 'Home',          href: '#home' },
  { label: 'About Us',      href: '#about' },
  { label: 'Services',      href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Our Clients',   href: '#clients' },
  { label: 'Contact Us',    href: '#contact' },
];

const services = [
  { Icon: Droplets, label: 'Plumbing Materials' },
  { Icon: HardHat,  label: 'Protective Clothing' },
  { Icon: Zap,      label: 'Hardware & Electrical' },
  { Icon: Drill,    label: 'Borehole Drilling' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-white">

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center font-display font-black text-xl text-brand-dark">
                L
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-white text-sm leading-none">LONGITUDINAL</div>
                <div className="text-brand-gold/70 text-xs tracking-widest uppercase">Investments (PVT) Ltd</div>
              </div>
            </div>
            <p className="text-brand-on-dark/60 text-sm leading-relaxed mb-5">
              Zimbabwe's trusted industrial supply partner since 2003. Supplying quality plumbing, hardware, electrical and protective clothing to institutions nationwide.
            </p>
            <div className="flex flex-col gap-2 text-sm text-brand-on-dark/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                Reg. No: 956/2003
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                PRAZ Certified Supplier
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                VAT Registered
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-5 pb-2 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className="text-brand-on-dark/60 hover:text-brand-gold text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-5 pb-2 border-b border-white/10">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-brand-on-dark/60 text-sm">
                  <Icon size={14} className="text-brand-gold flex-shrink-0" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-5 pb-2 border-b border-white/10">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-brand-on-dark/60">
                <MapPin size={15} className="text-brand-gold flex-shrink-0 mt-0.5" />
                <div>5th Floor ZIMDEF Building<br />Cnr Fort Street / 9th Avenue<br />Bulawayo, Zimbabwe</div>
              </div>
              <div className="flex items-start gap-3 text-sm text-brand-on-dark/60">
                <Phone size={15} className="text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+2639261417" className="hover:text-white transition-colors block">(+263292) 61417</a>
                  <a href="tel:+263772560292" className="hover:text-white transition-colors block">0772 560 292 (G. Moyo)</a>
                  <a href="tel:+263772544491" className="hover:text-white transition-colors block">0772 544 491 (C. Moyo)</a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-brand-on-dark/60">
                <Mail size={15} className="text-brand-gold flex-shrink-0" />
                <a href="mailto:longitudinal14@gmail.com" className="hover:text-white transition-colors">
                  longitudinal14@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-brand-on-dark/40">
          <div>
            &copy; {new Date().getFullYear()} Longitudinal Investments (PVT) Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Registered in Zimbabwe · Bulawayo · Est. 2003</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center hover:bg-brand-gold-hover transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={14} color="#111827" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
