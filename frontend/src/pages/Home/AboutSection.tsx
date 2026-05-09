import { motion } from 'framer-motion';
import { Target, Lightbulb, Rocket } from 'lucide-react';

const timeline = [
  {
    icon: <Target className="text-brand-orange" size={24} />,
    title: "Our Vision",
    desc: "To redefine the digital landscape by blending cinematic design with powerful AI automation.",
  },
  {
    icon: <Lightbulb className="text-brand-yellow" size={24} />,
    title: "The Innovation",
    desc: "We don't just build websites; we craft immersive digital ecosystems that convert and inspire.",
  },
  {
    icon: <Rocket className="text-brand-orange" size={24} />,
    title: "Future Goals",
    desc: "Scaling businesses to new heights by implementing robust architectures and modern growth strategies.",
  }
];

export default function AboutSection() {
  return (
    <section className="py-32 relative bg-slate-50 dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-orange font-semibold tracking-wider uppercase text-sm mb-4">About Nexora</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Designing the future of <br/> digital transformation.
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              We are a premium digital agency and AI automation startup dedicated to crafting world-class experiences. From striking web designs to intelligent automated workflows, we empower modern brands to stand out and scale efficiently.
            </p>
            <div className="flex items-center gap-4 text-slate-800 dark:text-white font-medium">
              <div className="w-12 h-[1px] bg-slate-300 dark:bg-white/20" />
              Building the extraordinary
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-slate-200 dark:bg-white/10" />
            <div className="flex flex-col gap-12">
              {timeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="relative pl-24"
                >
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-2xl bg-white dark:bg-[#111111] border border-slate-200 dark:border-white/10 shadow-lg flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
