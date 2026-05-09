import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How long does a website project take?',
    a: 'For our premium website development, timelines typically range from 4 to 8 weeks, depending on the complexity of the animations, custom features, and backend integrations required.'
  },
  {
    q: 'What is included in your AI Automation services?',
    a: 'We build custom AI solutions tailored to your business. This includes intelligent chatbots, automated CRM workflows, AI-driven content generation systems, and predictive analytics dashboards.'
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Absolutely. We offer dedicated maintenance and support packages to ensure your digital experience remains fast, secure, and up-to-date with the latest technologies.'
  },
  {
    q: 'How does your pricing work?',
    a: 'Every project is unique. After our initial discovery call, we provide a custom proposal based on the scope of work, technical requirements, and the value we aim to deliver to your brand.'
  },
  {
    q: 'Can you integrate with my existing backend systems?',
    a: 'Yes, our architecture is highly scalable and modular. We can seamlessly integrate our modern frontend solutions via APIs with your existing databases, CRMs, and backend services.'
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-32 bg-slate-50 dark:bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-brand-yellow font-semibold tracking-wider uppercase text-sm mb-4">Answers</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Common Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-[#111111] border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-slate-900 dark:text-white pr-8">{faq.q}</span>
                <ChevronDown 
                  className={`text-brand-orange transition-transform duration-300 shrink-0 ${openIdx === idx ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/5 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
