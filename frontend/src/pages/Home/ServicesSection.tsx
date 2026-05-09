import { motion } from 'framer-motion';
import { MonitorSmartphone, Cpu, TrendingUp, Sparkles, Layers } from 'lucide-react';

const services = [
  {
    icon: <MonitorSmartphone size={32} className="text-brand-orange" />,
    title: "Website Development",
    desc: "High-performance, cinematic, and responsive web experiences built with modern architecture."
  },
  {
    icon: <Cpu size={32} className="text-brand-yellow" />,
    title: "AI Automation",
    desc: "Custom AI systems to streamline your operations, save time, and scale your business efficiently."
  },
  {
    icon: <TrendingUp size={32} className="text-green-400" />,
    title: "Social Media Growth",
    desc: "Data-driven strategies to expand your reach, increase engagement, and build authority."
  },
  {
    icon: <Sparkles size={32} className="text-purple-400" />,
    title: "Branding",
    desc: "Premium identity design that makes your business unforgettable and builds instant trust."
  },
  {
    icon: <Layers size={32} className="text-blue-400" />,
    title: "Business Systems",
    desc: "Scalable backend architectures and interconnected workflows for ultimate efficiency."
  }
];

export default function ServicesSection() {
  return (
    <section className="py-32 relative bg-[#f8f9fa] dark:bg-[#111111] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-brand-orange font-semibold tracking-wider uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Premium Services</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 border border-slate-200 dark:border-white/5 shadow-xl hover:shadow-[0_0_40px_rgba(255,122,0,0.1)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/0 to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
              <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-black/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-100 dark:border-white/5">
                {srv.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{srv.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {srv.desc}
              </p>
              <div className="text-brand-orange font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <span className="text-lg">→</span>
              </div>
              <a href={`/services/${idx}`} className="absolute inset-0" aria-label="View Service Detail" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
