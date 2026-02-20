import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent('Hello Longitudinal Investments, I would like to get a quote for your products and services.');
    window.open(`https://wa.me/263772560292?text=${msg}`, '_blank');
  };

  return (
    <>
      {/* Top info bar */}
      <div className="bg-brand-dark text-brand-on-dark/70 py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
          <span>Zimbabwe's trusted industrial supplier since 2003</span>
          <div className="flex items-center gap-6">
            <a href="tel:+2639261417" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
              <Phone size={13} />
              <span>(+263292) 61417</span>
            </a>
            <a href="mailto:longitudinal14@gmail.com" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
              <Mail size={13} />
              <span>longitudinal14@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-brand-border'
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#home" onClick={() => handleNavClick('#home')} className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-brand-slate rounded-lg flex items-center justify-center text-white font-display font-black text-xl group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors duration-300">
                  L
                </div>
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-brand-gold rounded-full border-2 border-white group-hover:bg-brand-slate transition-colors duration-300" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-brand-slate text-base leading-none">LONGITUDINAL</div>
                <div className="font-sans text-xs text-brand-muted tracking-widest uppercase">Investments (PVT) Ltd</div>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 rounded-md text-sm font-medium font-display transition-all duration-200 ${
                    active === link.href.slice(1)
                      ? 'text-brand-gold'
                      : 'text-brand-muted hover:text-brand-slate hover:bg-brand-surface'
                  }`}
                >
                  {link.label}
                  {active === link.href.slice(1) && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-gold rounded-full"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={openWhatsApp}
                className="btn-primary text-sm px-5 py-2"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-brand-slate hover:bg-brand-surface transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-brand-border bg-white"
            >
              <div className="px-4 py-3 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium font-display transition-colors ${
                      active === link.href.slice(1)
                        ? 'text-brand-gold bg-brand-gold/10'
                        : 'text-brand-muted hover:bg-brand-surface hover:text-brand-slate'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-2">
                  <button
                    onClick={openWhatsApp}
                    className="btn-primary w-full justify-center text-sm py-2.5"
                  >
                    Get a Quote
                  </button>
                </div>
                <div className="pt-2 pb-1 border-t border-brand-border flex flex-col gap-1.5 text-xs text-brand-muted">
                  <a href="tel:+2639261417" className="flex items-center gap-2"><Phone size={12} />(+263292) 61417</a>
                  <a href="mailto:longitudinal14@gmail.com" className="flex items-center gap-2"><Mail size={12} />longitudinal14@gmail.com</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
