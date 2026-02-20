import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, MapPin } from 'lucide-react';

const clients = [
  {
    name: 'City of Bulawayo',
    type: 'Municipal Authority',
    location: 'Bulawayo',
    contact: 'Ms S. Sithole',
    tel: '(09) 63526 / 7',
    note: 'Recommended as a reputable supplier of Protective Clothing, Electrical Goods and Plumbing Material.',
    abbr: 'CB',
  },
  {
    name: 'Victoria Falls Town Council',
    type: 'Municipal Authority',
    location: 'Victoria Falls',
    contact: 'Mr S. Ndlovu',
    tel: '(013) 42018',
    note: 'Long-standing supply relationship for plumbing and hardware materials.',
    abbr: 'VF',
  },
  {
    name: 'Zvishavane Town Council',
    type: 'Municipal Authority',
    location: 'Zvishavane',
    contact: 'Mr F. Nyika',
    tel: '0772 884 223',
    note: 'Confirmed as a trusted supplier — "We do not hesitate to recommend them."',
    abbr: 'ZV',
  },
  {
    name: 'Chiredzi Town Council',
    type: 'Municipal Authority',
    location: 'Chiredzi',
    contact: 'Mr J. Sithole',
    tel: '0772 516 948',
    note: 'Reliable supply partner for hardware and electrical goods.',
    abbr: 'CT',
  },
  {
    name: 'Chiredzi Rural District Council',
    type: 'District Authority',
    location: 'Chiredzi',
    contact: 'Mr D. Chengetai',
    tel: '0772 775 478',
    note: 'A regular supplier of Hardware, Electrical and Protective Clothing for more than 5 years.',
    abbr: 'CR',
  },
];

const regions = [
  { name: 'Bulawayo',            count: 'Primary Base' },
  { name: 'Matabeleland North',  count: 'Active' },
  { name: 'Matabeleland South',  count: 'Active' },
  { name: 'Midlands',            count: 'Active' },
  { name: 'Eastern Lowveld',     count: 'Active' },
  { name: 'Masvingo Province',   count: 'Active' },
];

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="clients" className="py-24 bg-white">
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
            <span className="section-label">Trusted By</span>
          </div>
          <h2 className="section-heading text-4xl md:text-5xl mb-4">
            Our Clients &amp;
            <span className="text-brand-gold block">Reference Partners</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            We are proud to serve local councils, district authorities, hospitals, schools, and clinics
            across Zimbabwe. Their trust is our greatest achievement.
          </p>
        </motion.div>

        {/* Client cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {clients.map(({ name, type, location, contact, tel, note, abbr }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-brand-border overflow-hidden card-hover"
            >
              {/* Card top bar — unified slate */}
              <div className="bg-brand-slate p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center text-brand-gold font-display font-black text-lg flex-shrink-0">
                  {abbr}
                </div>
                <div>
                  <div className="text-white font-display font-bold leading-tight">{name}</div>
                  <div className="text-brand-on-dark/50 text-xs mt-0.5">{type}</div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-brand-muted text-xs mb-3">
                  <MapPin size={12} />
                  <span>{location}</span>
                </div>

                {/* Testimonial note */}
                <div className="relative bg-brand-surface rounded-xl p-4 mb-4">
                  <Quote size={14} className="text-brand-border absolute top-3 left-3" />
                  <p className="text-brand-muted text-sm leading-relaxed pl-4 italic">{note}</p>
                </div>

                {/* Contact */}
                <div className="text-xs text-brand-muted space-y-1">
                  <div><span className="font-semibold text-brand-slate">Contact:</span> {contact}</div>
                  <div><span className="font-semibold text-brand-slate">Tel:</span> {tel}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coverage block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-dark rounded-2xl p-8 md:p-10"
        >
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-white text-2xl mb-2">Our Coverage Area</h3>
            <p className="text-brand-on-dark/50 text-sm">Delivering quality supplies across Zimbabwe's provinces</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {regions.map(({ name, count }) => (
              <div key={name} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                <MapPin size={18} className="text-brand-gold mx-auto mb-2" />
                <div className="text-white font-semibold text-sm leading-tight">{name}</div>
                <div className="text-brand-on-dark/50 text-xs mt-1">{count}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
