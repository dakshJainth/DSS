import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import PlaceholderImage from '../../components/ui/PlaceholderImage';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    company: 'TechFlow Startup',
    text: 'Nexora completely transformed our digital presence. The AI integration alone saved us 20 hours a week, and the new site is an absolute conversion machine.',
  },
  {
    name: 'Marcus Chen',
    company: 'Elevate E-commerce',
    text: 'The most premium web experience we have ever had built. The attention to detail, the cinematic animations, and the lightning-fast delivery blew us away.',
  },
  {
    name: 'Elena Rostova',
    company: 'Aura Agency',
    text: 'Working with Nexora feels like working with the future. They didn’t just build a website; they architected a scalable business engine for us.',
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-[#f8f9fa] dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-semibold tracking-wider uppercase text-sm mb-4">Client Success</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Trusted by Visionaries</h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 text-slate-200 dark:text-white/5 transform -translate-x-8 -translate-y-8">
            <Quote size={120} />
          </div>
          
          <div className="relative bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 md:p-16 shadow-2xl border border-slate-200 dark:border-white/5 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} className="text-brand-yellow fill-brand-yellow" size={20} />)}
                </div>
                
                <p className="text-xl md:text-3xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed mb-10">
                  "{testimonials[current].text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-brand-orange/20">
                     <PlaceholderImage className="w-full h-full text-xs" text="IMG" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">{testimonials[current].name}</h4>
                    <p className="text-brand-orange text-sm font-medium">{testimonials[current].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-8 right-8 flex gap-2">
              <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button onClick={handleNext} className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center hover:bg-[#e66e00] transition-colors shadow-lg shadow-brand-orange/20">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${current === idx ? 'w-8 bg-brand-orange' : 'w-2 bg-slate-300 dark:bg-white/20'}`} 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
