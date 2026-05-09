import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import PlaceholderImage from '../../components/ui/PlaceholderImage';

const categories = ['All', 'Web Development', 'AI Systems', 'Branding', 'Social Growth'];

const projects = [
  { id: 1, title: 'Lumina AI', category: 'AI Systems', desc: 'Enterprise automation dashboard', tech: ['React', 'Python', 'OpenAI'], colSpan: 'md:col-span-2 md:row-span-2' },
  { id: 2, title: 'Velocity', category: 'Web Development', desc: 'High-speed e-commerce platform', tech: ['Next.js', 'Tailwind'], colSpan: 'md:col-span-1 md:row-span-1' },
  { id: 3, title: 'Nexus Brand', category: 'Branding', desc: 'Complete identity system', tech: ['Figma', 'Illustrator'], colSpan: 'md:col-span-1 md:row-span-1' },
  { id: 4, title: 'Aura Growth', category: 'Social Growth', desc: '10x engagement strategy', tech: ['Analytics', 'Content'], colSpan: 'md:col-span-1 md:row-span-1' },
  { id: 5, title: 'Quantum Flow', category: 'Web Development', desc: 'Cinematic corporate site', tech: ['Vue', 'GSAP'], colSpan: 'md:col-span-2 md:row-span-1' },
];

export default function ProjectsSection() {
  const [activeCat, setActiveCat] = useState('All');

  const filtered = activeCat === 'All' ? projects : projects.filter(p => p.category === activeCat);

  return (
    <section className="py-32 bg-slate-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-brand-orange font-semibold tracking-wider uppercase text-sm mb-4">Featured Work</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Premium Case Studies</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCat === cat 
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' 
                    : 'bg-slate-200 text-slate-600 hover:bg-slate-300 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          <AnimatePresence>
            {filtered.map(project => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer ${project.colSpan}`}
                onClick={() => window.location.href = `/projects/${project.id}`}
              >
                <PlaceholderImage className="w-full h-full object-cover" text="Project Thumbnail / Video" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />
                
                {/* Hover Video Indicator */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
                  <Play className="text-white fill-white ml-1" size={24} />
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-xs font-medium bg-brand-orange/20 text-brand-orange rounded-full border border-brand-orange/30 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-slate-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.desc}
                  </p>
                  <div className="flex gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs text-slate-400 font-mono">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 rounded-full border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
