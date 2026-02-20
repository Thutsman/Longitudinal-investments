import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Award, Clock, Users, ShieldCheck, Truck, BarChart3, BadgeCheck, HeartHandshake
} from 'lucide-react';

const reasons = [
  {
    Icon: Award,
    title: '20+ Years Experience',
    desc: 'Directors with over two decades of hands-on experience in industrial supply, plumbing, and hardware.',
    color: 'bg-brand-gold/10 text-brand-gold',
  },
  {
    Icon: BadgeCheck,
    title: 'PRAZ Certified',
    desc: 'Approved by the Procurement Regulatory Authority of Zimbabwe (PRAZ) in multiple categories.',
    color: 'bg-brand-slate/10 text-brand-slate',
  },
  {
    Icon: ShieldCheck,
    title: 'Quality Guaranteed',
    desc: 'We supply only quality-tested, industry-standard products that meet client specifications.',
    color: 'bg-brand-gold/10 text-brand-gold',
  },
  {
    Icon: Truck,
    title: 'Nationwide Delivery',
    desc: 'We deliver to Bulawayo, Matabeleland, Midlands, Eastern Lowveld, Masvingo and beyond.',
    color: 'bg-brand-slate/10 text-brand-slate',
  },
  {
    Icon: Clock,
    title: 'On-Time Delivery',
    desc: 'Punctuality is one of our core values. We keep our delivery commitments, always.',
    color: 'bg-brand-gold/10 text-brand-gold',
  },
  {
    Icon: Users,
    title: 'Proven Track Record',
    desc: 'Trusted by City of Bulawayo, Victoria Falls TC, Chiredzi TC, Zvishavane TC, and more.',
    color: 'bg-brand-slate/10 text-brand-slate',
  },
  {
    Icon: HeartHandshake,
    title: 'After-Sales Support',
    desc: 'Our technically qualified team provides strong after-sales and backup service for all products.',
    color: 'bg-brand-gold/10 text-brand-gold',
  },
  {
    Icon: BarChart3,
    title: 'Competitive Pricing',
    desc: 'We offer fair, transparent pricing while maintaining quality — ensuring real value for money.',
    color: 'bg-brand-slate/10 text-brand-slate',
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-us" className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <span className="section-label">Why Choose Us</span>
          </div>
          <h2 className="section-heading text-4xl md:text-5xl mb-4">
            The Longitudinal
            <span className="text-brand-gold block">Advantage</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            We combine experience, integrity and dedication to deliver superior service.
            Here's why clients keep choosing us.
          </p>
        </motion.div>

        {/* Reason cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map(({ Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-brand-border card-hover group"
            >
              <div className={`${color} rounded-xl w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={22} />
              </div>
              <h3 className="font-display font-bold text-brand-slate text-base mb-2 leading-tight">
                {title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Feature highlight strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid md:grid-cols-3 gap-6"
        >
          {[
            { num: '20+', label: 'Years of Industry Experience', sublabel: 'Serving Zimbabwe since 2003' },
            { num: '3',   label: 'PRAZ Registration Categories', sublabel: 'Water Treatment, Tools, Protective Clothing' },
            { num: '5+',  label: 'Major Institutional Clients',  sublabel: 'Councils, hospitals & clinics' },
          ].map(({ num, label, sublabel }) => (
            <div key={label} className="bg-brand-dark rounded-2xl p-7 text-center text-white">
              <div className="font-display font-black text-5xl text-brand-gold mb-2">{num}</div>
              <div className="font-display font-semibold text-lg mb-1">{label}</div>
              <div className="text-brand-on-dark/50 text-sm">{sublabel}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
