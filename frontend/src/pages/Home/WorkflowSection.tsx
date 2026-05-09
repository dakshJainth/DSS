import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Discovery', desc: 'Understanding your goals, audience, and technical requirements.' },
  { num: '02', title: 'Strategy', desc: 'Crafting the blueprint for design, development, and AI integration.' },
  { num: '03', title: 'Design', desc: 'Creating cinematic, premium UI/UX that converts and engages.' },
  { num: '04', title: 'Development', desc: 'Building scalable, high-performance architecture with modern stacks.' },
  { num: '05', title: 'Optimization', desc: 'Testing, SEO, performance tuning, and final polish.' },
  { num: '06', title: 'Launch', desc: 'Deploying your digital experience and scaling your reach.' }
];

export default function WorkflowSection() {
  return (
    <section className="py-32 bg-slate-900 dark:bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djIwaC0ydi0yMGgtMjB2LTJoMjB2LTIwaDJ2MjBoMjB2MmgvMjB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20">
          <h2 className="text-brand-yellow font-semibold tracking-wider uppercase text-sm mb-4">How We Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold">The Nexora Process</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-bold text-white/5 absolute -top-8 -left-4 pointer-events-none select-none">
                {step.num}
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-orange/20 border border-brand-orange/50 flex items-center justify-center text-brand-orange font-bold">
                  {step.num}
                </div>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-brand-orange/50 to-transparent" />
              </div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-slate-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
