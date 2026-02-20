import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Building2
} from 'lucide-react';

const contactInfo = [
  {
    Icon: MapPin,
    label: 'Office Address',
    lines: ['5th Floor ZIMDEF Building', 'Cnr Fort Street / 9th Avenue', 'Bulawayo, Zimbabwe'],
    color: 'bg-brand-slate/10 text-brand-slate',
  },
  {
    Icon: Building2,
    label: 'Workshop Address',
    lines: ['Herbert Chitepo Street', 'Between 3rd & 4th Avenue', 'Bulawayo'],
    color: 'bg-brand-gold/10 text-brand-gold',
  },
  {
    Icon: Phone,
    label: 'Phone Numbers',
    lines: ['Office: (+263292) 61417', 'G. Moyo: (+263) 0772 560 292', 'C. Moyo: (+263) 0772 544 491'],
    color: 'bg-brand-slate/10 text-brand-slate',
  },
  {
    Icon: Mail,
    label: 'Email Address',
    lines: ['longitudinal14@gmail.com'],
    color: 'bg-brand-gold/10 text-brand-gold',
  },
  {
    Icon: Clock,
    label: 'Business Hours',
    lines: ['Monday – Friday: 8:00 AM – 5:00 PM', 'Saturday: 8:00 AM – 1:00 PM', 'Sunday: Closed'],
    color: 'bg-brand-slate/10 text-brand-slate',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const WHATSAPP_NUMBER = '263772560292';

  const serviceLabels = {
    plumbing:   'Plumbing Materials',
    protective: 'Protective Clothing',
    hardware:   'General Hardware',
    electrical: 'Electrical Supplies',
    borehole:   'Borehole Drilling & Installation',
    other:      'Other / General Inquiry',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const lines = [
      'Hello Longitudinal Investments,',
      '',
      `*Name:* ${form.name}`,
      form.company ? `*Company:* ${form.company}` : null,
      `*Email:* ${form.email}`,
      form.phone   ? `*Phone:* ${form.phone}` : null,
      form.service ? `*Service:* ${serviceLabels[form.service] || form.service}` : null,
      '',
      '*Message:*',
      form.message,
    ].filter(l => l !== null).join('\n');

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-brand-surface">
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
            <span className="section-label">Get In Touch</span>
          </div>
          <h2 className="section-heading text-4xl md:text-5xl mb-4">
            Request a Quote or
            <span className="text-brand-gold block">Send Us a Message</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            Reach out to us for quotations, product inquiries, or to discuss your supply needs. Our team is ready to assist.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map(({ Icon, label, lines, color }) => (
              <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-brand-border flex gap-4 items-start">
                <div className={`${color} rounded-xl p-3 flex-shrink-0`}>
                  <Icon size={18} />
                </div>
                <div>
                  <div className="font-display font-semibold text-brand-slate text-sm mb-1">{label}</div>
                  {lines.map((line, i) => (
                    <div key={i} className="text-brand-muted text-sm">{line}</div>
                  ))}
                </div>
              </div>
            ))}

            {/* Company details badge */}
            <div className="bg-brand-dark rounded-2xl p-5 text-white">
              <div className="font-display font-bold mb-3">Company Details</div>
              <div className="space-y-1.5 text-brand-on-dark/60 text-sm">
                <div><span className="text-white font-medium">Reg. No:</span> 956/2003</div>
                <div><span className="text-white font-medium">BP Number:</span> 200047752</div>
                <div><span className="text-white font-medium">VAT No:</span> 10046665</div>
                <div><span className="text-white font-medium">Bank:</span> Stanbic Bank (Belmont)</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-border">
              <h3 className="font-display font-bold text-brand-slate text-xl mb-6">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-brand-slate mb-1.5">
                      Full Name <span className="text-brand-gold">*</span>
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="form-input pl-10"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium text-brand-slate mb-1.5">
                      Organisation / Company
                    </label>
                    <div className="relative">
                      <Building2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company or institution"
                        className="form-input pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-brand-slate mb-1.5">
                      Email Address <span className="text-brand-gold">*</span>
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="form-input pl-10"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-brand-slate mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+263 7XX XXX XXX"
                        className="form-input pl-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Service interested in */}
                <div>
                  <label className="block text-sm font-medium text-brand-slate mb-1.5">
                    Service / Product of Interest
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Select a category...</option>
                    <option value="plumbing">Plumbing Materials</option>
                    <option value="protective">Protective Clothing</option>
                    <option value="hardware">General Hardware</option>
                    <option value="electrical">Electrical Supplies</option>
                    <option value="borehole">Borehole Drilling & Installation</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-brand-slate mb-1.5">
                    Message <span className="text-brand-gold">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-3 top-3 text-gray-400" />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Describe what you need, quantities, delivery location, etc."
                      className="form-input pl-10 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center py-3"
                >
                  <Send size={16} />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
