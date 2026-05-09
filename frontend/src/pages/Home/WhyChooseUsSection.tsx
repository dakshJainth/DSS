import { motion } from 'framer-motion';
import { Zap, HeartHandshake, Bot, Gauge, LayoutTemplate, Headset } from 'lucide-react';

const features = [
  { icon: <Zap className="text-yellow-400" size={28} />, title: 'Fast Delivery', colSpan: 'col-span-1 md:col-span-2 lg:col-span-1' },
  { icon: <LayoutTemplate className="text-pink-400" size={28} />, title: 'Premium UI/UX', colSpan: 'col-span-1 md:col-span-2 lg:col-span-2' },
  { icon: <Bot className="text-blue-400" size={28} />, title: 'AI Integration', colSpan: 'col-span-1 md:col-span-1 lg:col-span-1' },
  { icon: <Gauge className="text-green-400" size={28} />, title: 'Performance', colSpan: 'col-span-1 md:col-span-1 lg:col-span-1' },
  { icon: <HeartHandshake className="text-brand-orange" size={28} />, title: 'Scalable Architecture', colSpan: 'col-span-1 md:col-span-2 lg:col-span-1' },
  { icon: <Headset className="text-purple-400" size={28} />, title: 'Dedicated Support', colSpan: 'col-span-1 md:col-span-2 lg:col-span-3' }
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-32 bg-[#f8f9fa] dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-semibold tracking-wider uppercase text-sm mb-4">Why Nexora</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">The Nexora Advantage</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-6 auto-rows-[200px]">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative rounded-3xl bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-white/5 overflow-hidden flex flex-col items-center justify-center text-center p-8 cursor-pointer shadow-lg hover:shadow-xl transition-all ${feat.colSpan}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-black/40 flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform duration-300">
                {feat.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white relative z-10">{feat.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
