import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const values = [
  { icon: '🤝', title: 'Integrity', desc: 'We conduct business with the highest ethical standards and transparency.' },
  { icon: '✅', title: 'Honesty', desc: 'We build trust through honest dealings with every client and partner.' },
  { icon: '⭐', title: 'Quality', desc: 'We supply only quality products that meet industry standards.' },
  { icon: '⏱️', title: 'Punctuality', desc: 'We deliver on time, every time, because your time matters.' },
];

function AnimatedSection({ children, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div variants={fadeUp} className="flex justify-center mb-4">
            <span className="section-label">About Us</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-heading text-4xl md:text-5xl mb-4">
            Over Two Decades of
            <span className="text-brand-gold block">Industrial Excellence</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-brand-muted text-lg max-w-2xl mx-auto">
            Founded in Bulawayo in 2003, we've grown from a 2-person team to a trusted regional supplier serving councils, hospitals, and institutions across Zimbabwe.
          </motion.p>
        </AnimatedSection>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

          {/* Left: Story */}
          <AnimatedSection>
            <motion.div variants={fadeUp} className="relative">
              {/* Big number accent */}
              <div className="absolute -top-8 -left-4 font-display font-black text-[120px] text-brand-slate/5 select-none leading-none">
                2003
              </div>
              <div className="relative z-10">
                <p className="text-brand-muted text-lg leading-relaxed mb-6">
                  <strong className="text-brand-slate">Longitudinal Investments (PVT) Ltd</strong> is a client-focused business that specializes in the supply and delivery of plumbing materials, borehole drilling, borehole maintenance, electrical lights and cables, general hardware, and protective clothing.
                </p>
                <p className="text-brand-muted leading-relaxed mb-6">
                  Founded and registered in 2003 with just a complement of two people, the company has dynamically grown and boasts directors with over <strong className="text-brand-slate">20 years' experience</strong> in this field of industry — enabling us to operate a strong after-sales and backup service.
                </p>
                <p className="text-brand-muted leading-relaxed mb-8">
                  We have successfully serviced Local Councils, Schools, Hospitals, and Clinics across Bulawayo, Matabeleland-North, Matabeleland-South, parts of Midlands, Eastern Lowveld, and Masvingo Province.
                </p>

                <div className="flex flex-wrap gap-3">
                  {['PRAZ Registered', 'VAT Registered', 'Stanbic Bank Account', 'Reg. No: 956/2003'].map(tag => (
                    <span key={tag} className="flex items-center gap-1.5 bg-white border border-brand-border text-brand-muted text-sm px-3 py-1.5 rounded-full shadow-sm">
                      <CheckCircle2 size={13} className="text-green-500" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Right: Vision/Mission cards */}
          <AnimatedSection className="space-y-4">
            {[
              {
                Icon: Eye,
                color: 'bg-brand-slate',
                title: 'Our Vision',
                text: 'To be a major excellent service provider in the supply of Plumbing, General Hardware, Electrical and Protective Clothing across Zimbabwe and the region.',
              },
              {
                Icon: Target,
                color: 'bg-brand-gold',
                title: 'Our Mission',
                text: 'To strike a balance in the field of supplying Plumbing, General Hardware and Protective Clothing — being a leading force in the industry while delivering quality service.',
              },
              {
                Icon: Heart,
                color: 'bg-brand-slate',
                title: 'Our Promise',
                text: 'We commit to delivering only quality-tested products with exceptional after-sales support, ensuring every client receives the service they deserve — on time, every time.',
              },
            ].map(({ Icon, color, title, text }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 shadow-sm border border-brand-border flex gap-4 card-hover"
              >
                <div className={`${color} rounded-xl p-3 flex-shrink-0 h-fit`}>
                  <Icon size={20} color="white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-brand-slate text-lg mb-1">{title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{text}</p>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>

        {/* Core Values */}
        <AnimatedSection>
          <motion.h3 variants={fadeUp} className="text-center section-heading text-2xl mb-8">
            Our Core Values
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-brand-border card-hover group"
              >
                <div className="text-4xl mb-3">{icon}</div>
                <h4 className="font-display font-bold text-brand-slate text-lg mb-2 group-hover:text-brand-gold transition-colors">
                  {title}
                </h4>
                <p className="text-brand-muted text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
