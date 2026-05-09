import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, MapPin, Phone, ArrowRight, Loader2, CheckCircle } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const emptyFormData = { name: '', email: '', company: '', message: '', source: 'contact_form' };

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState(emptyFormData);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleBookCallClick = () => {
    setStatus('idle');
    setFormData({
      ...emptyFormData,
      source: 'book_call',
      message: 'I would like to book a discovery call.'
    });
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setStatus('success');
        setFormData(emptyFormData);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="py-32 bg-white dark:bg-[#111111] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-orange font-semibold tracking-wider uppercase text-sm mb-4">Let's Connect</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Ready to scale <br /> your business?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-md">
              Whether you need a world-class website, custom AI automation, or a strategy to grow your audience, we are here to build the extraordinary.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-brand-orange">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-semibold mb-1">Email Us</h4>
                  <p className="text-slate-500 dark:text-slate-400">hello@nexora.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-brand-orange">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-semibold mb-1">Call Us</h4>
                  <p className="text-slate-500 dark:text-slate-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-brand-orange">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-semibold mb-1">Location</h4>
                  <p className="text-slate-500 dark:text-slate-400">San Francisco, CA (Remote Worldwide)</p>
                </div>
              </div>
            </div>

            <button type="button" onClick={handleBookCallClick} className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:scale-105 transition-transform shadow-xl">
              <Calendar size={18} /> Book a Discovery Call
            </button>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-50 dark:bg-[#1a1a1a] rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-white/5 shadow-2xl relative"
          >
            {status === 'success' ? (
              <div className="absolute inset-0 bg-slate-50 dark:bg-[#1a1a1a] rounded-3xl flex flex-col items-center justify-center text-center p-8 z-20">
                <CheckCircle size={64} className="text-green-500 mb-6" />
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h4>
                <p className="text-slate-500 dark:text-slate-400 mb-8">We will get back to you within 24 hours.</p>
                <button onClick={() => setStatus('idle')} className="px-8 py-3 bg-brand-orange text-white rounded-full font-medium">Send Another</button>
              </div>
            ) : null}

            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Send us a message</h4>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input required type="text" id="name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-transparent border-b-2 border-slate-300 dark:border-white/10 py-3 px-0 text-slate-900 dark:text-white focus:outline-none focus:border-brand-orange dark:focus:border-brand-orange transition-colors peer placeholder-transparent" placeholder="Name" />
                  <label htmlFor="name" className="absolute left-0 top-3 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-orange">Your Name</label>
                </div>
                <div className="relative group">
                  <input required type="email" id="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-transparent border-b-2 border-slate-300 dark:border-white/10 py-3 px-0 text-slate-900 dark:text-white focus:outline-none focus:border-brand-orange dark:focus:border-brand-orange transition-colors peer placeholder-transparent" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-0 top-3 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-orange">Email Address</label>
                </div>
              </div>
              
              <div className="relative group">
                <input type="text" id="company" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full bg-transparent border-b-2 border-slate-300 dark:border-white/10 py-3 px-0 text-slate-900 dark:text-white focus:outline-none focus:border-brand-orange dark:focus:border-brand-orange transition-colors peer placeholder-transparent" placeholder="Company" />
                <label htmlFor="company" className="absolute left-0 top-3 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-orange">Company Name (Optional)</label>
              </div>

              <div className="relative group">
                <textarea required id="message" rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-transparent border-b-2 border-slate-300 dark:border-white/10 py-3 px-0 text-slate-900 dark:text-white focus:outline-none focus:border-brand-orange dark:focus:border-brand-orange transition-colors peer placeholder-transparent resize-none" placeholder="Message" />
                <label htmlFor="message" className="absolute left-0 top-3 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-orange">Tell us about your project</label>
              </div>

              {status === 'error' && <p className="text-red-500 text-sm">Failed to send message. Please try again.</p>}

              <button disabled={status === 'loading'} type="submit" className="w-full py-4 bg-brand-orange text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#e66e00] transition-colors disabled:opacity-70">
                {status === 'loading' ? <Loader2 className="animate-spin" size={20} /> : <>Submit Request <ArrowRight size={20} /></>}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
