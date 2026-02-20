import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Droplets, HardHat, Zap, Drill, ArrowRight, CheckCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const services = [
  {
    id: 'plumbing',
    Icon: Droplets,
    title: 'Plumbing',
    subtitle: 'Complete plumbing solutions',
    description: 'We supply a comprehensive range of plumbing materials including galvanized and PVC pipes, gate valves, fittings and accessories for both industrial and municipal water systems.',
    items: [
      'PVC Pipes (all sizes)',
      'Galvanised Pipes',
      'Gate Valves & Ball Valves',
      'Pipe Fittings & Joints',
      'Check Valves',
      'Water Meters',
      'Flanges & Adaptors',
      'HDPE Pipes & Fittings',
    ],
  },
  {
    id: 'protective',
    Icon: HardHat,
    title: 'Protective Clothing',
    subtitle: 'Safety equipment & PPE',
    description: 'We supply a comprehensive range of safety and protective clothing including overalls, gloves, boots, hard hats and dust masks for all industrial and field operations.',
    items: [
      'Work Overalls (all types)',
      'Safety Helmets / Hard Hats',
      'Safety Boots & Shoes',
      'Industrial Gloves',
      'Dust Masks & Respirators',
      'Safety Glasses / Goggles',
      'High-Visibility Vests',
      'Dust Coats',
    ],
  },
  {
    id: 'hardware',
    Icon: Zap,
    title: 'General Hardware & Electrical',
    subtitle: 'Hardware, tools & electrical supplies',
    description: 'We supply a wide range of general hardware and electrical products — from bearings, bolts and cutting tools to ballasts, switch sockets, circuit breakers and lighting solutions.',
    items: [
      'Bearings & Fasteners',
      'Bolts, Nuts & Washers',
      'Cutting Tools & Drill Bits',
      'Electrical Cables & Wires',
      'Fluorescent Ballasts',
      'Switch Sockets & Plugs',
      'Circuit Breakers',
      'CFL Bulbs & Fluorescent Tubes',
    ],
  },
  {
    id: 'borehole',
    Icon: Drill,
    title: 'Borehole Drilling & Installations',
    subtitle: 'Water access solutions',
    description: 'We offer professional borehole drilling, installation and maintenance services to provide reliable access to clean underground water for communities, institutions, and industries.',
    items: [
      'Borehole Drilling',
      'Pump Installation',
      'Borehole Rehabilitation',
      'Borehole Maintenance',
      'Water Tank Installations',
      'Submersible Pumps',
      'Solar-Powered Pumping',
      'Water Quality Testing',
    ],
  },
];

function ServiceCard({ service, index }) {
  const { Icon, title, subtitle, description, items } = service;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-sm border border-brand-border overflow-hidden group card-hover flex flex-col"
    >
      {/* Card Header — unified slate */}
      <div className="bg-brand-slate p-7 relative overflow-hidden">
        <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white/5" />
        <div className="absolute -bottom-6 -left-2 w-16 h-16 rounded-full bg-white/5" />
        <div className="relative z-10">
          <div className="bg-brand-gold/20 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
            <Icon size={24} className="text-brand-gold" />
          </div>
          <h3 className="font-display font-bold text-white text-2xl mb-1">{title}</h3>
          <p className="text-brand-on-dark/60 text-sm">{subtitle}</p>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-brand-muted text-sm leading-relaxed mb-5">{description}</p>

        {/* Items list */}
        <div className="grid grid-cols-1 gap-1.5 mb-5 flex-1">
          {(expanded ? items : items.slice(0, 4)).map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-brand-slate">
              <CheckCircle size={14} className="text-brand-gold flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>

        {/* Show more / less */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-sm font-semibold text-brand-gold hover:gap-3 transition-all duration-200 mt-auto"
        >
          {expanded ? 'Show less' : `+${items.length - 4} more products`}
          <ArrowRight
            size={14}
            className={expanded ? 'rotate-90' : ''}
            style={{ transition: 'transform 0.2s' }}
          />
        </button>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-4">
            <span className="section-label">What We Supply</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-heading text-4xl md:text-5xl mb-4">
            Our Products &amp; Services
          </motion.h2>
          <motion.p variants={fadeUp} className="text-brand-muted text-lg max-w-2xl mx-auto">
            From plumbing and protective clothing to electrical supplies and borehole drilling —
            we are your one-stop industrial supply partner in Zimbabwe.
          </motion.p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 bg-brand-slate rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display font-bold text-white text-2xl mb-2">
              Need something not listed here?
            </h3>
            <p className="text-brand-on-dark/60 text-sm">
              Our experienced team can source a wide variety of industrial supplies. Get in touch and we'll help you find what you need.
            </p>
          </div>
          <button
            onClick={() => {
              const msg = encodeURIComponent('Hello Longitudinal Investments, I would like to enquire about your products and services.');
              window.open(`https://wa.me/263772560292?text=${msg}`, '_blank');
            }}
            className="btn-primary flex-shrink-0"
          >
            Chat on WhatsApp <ArrowRight size={16} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
