import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const stats = [
  { label: 'Projects Completed', value: 150, suffix: '+' },
  { label: 'Client Satisfaction', value: 99, suffix: '%' },
  { label: 'Automation Efficiency', value: 300, suffix: '%' },
  { label: 'Audience Growth', value: 10, suffix: 'x' }
];

function Counter({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(ease * (to - from) + from));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, from, to, duration]);

  return <span ref={nodeRef}>{count}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-24 bg-brand-orange text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">
                <Counter from={0} to={stat.value} />
                <span className="text-white/80 text-4xl">{stat.suffix}</span>
              </div>
              <div className="text-sm md:text-base font-medium text-white/90 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
