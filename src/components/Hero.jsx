import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Shield, Wrench, Zap, Droplets } from 'lucide-react';

const floatingIcons = [
  { Icon: Droplets, label: 'Plumbing',   x: '10%', y: '20%' },
  { Icon: Shield,   label: 'Safety Gear', x: '85%', y: '15%' },
  { Icon: Wrench,   label: 'Hardware',    x: '90%', y: '70%' },
  { Icon: Zap,      label: 'Electrical',  x: '5%',  y: '75%' },
];

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-brand-dark"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Soft glow accents */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-brand-gold"
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute -bottom-52 -left-24 w-[620px] h-[620px] rounded-full bg-brand-slate"
      />

      {/* Floating category icons */}
      {floatingIcons.map(({ Icon, label, x, y }, i) => (
        <motion.div
          key={label}
          className="absolute hidden lg:flex flex-col items-center gap-1 opacity-0"
          style={{ left: x, top: y }}
          animate={{ opacity: 0.7, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 1 + i * 0.2 },
            y: { duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 },
          }}
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl shadow-lg">
            <Icon size={22} color="white" />
          </div>
          <span className="text-brand-on-dark/70 text-xs font-medium bg-white/5 px-2 py-0.5 rounded-full backdrop-blur-sm">
            {label}
          </span>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 text-brand-on-dark/80 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Registered &amp; PRAZ Certified Supplier · Est. 2003
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-white text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
          >
            Zimbabwe's
            <span className="block text-brand-gold">Trusted Industrial</span>
            <span className="block">Supply Partner</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-brand-on-dark/70 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
          >
            Supplying Plumbing materials, Protective Clothing, General Hardware, Electricals
            and Borehole Drilling services to councils, hospitals, schools and industries
            across Zimbabwe — with <strong className="text-white font-semibold">20+ years</strong> of expertise.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => {
                const msg = encodeURIComponent('Hello Longitudinal Investments, I would like to request a quote for your products and services.');
                window.open(`https://wa.me/263772560292?text=${msg}`, '_blank');
              }}
              className="btn-primary text-base px-7 py-3.5"
            >
              Request a Quote <ArrowRight size={18} />
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline-gold text-base px-7 py-3.5"
            >
              Our Services
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/10"
          >
            {[
              { value: '20+',  label: 'Years Experience' },
              { value: '2003', label: 'Year Founded' },
              { value: '5+',   label: 'Major Clients' },
              { value: '3',    label: 'PRAZ Categories' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-display font-black text-3xl text-brand-gold">{value}</div>
                <div className="text-brand-on-dark/60 text-sm mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.button
        onClick={scrollToNext}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-on-dark/50 hover:text-brand-on-dark transition-colors flex flex-col items-center gap-1"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <ChevronDown size={20} />
      </motion.button>
    </section>
  );
}
