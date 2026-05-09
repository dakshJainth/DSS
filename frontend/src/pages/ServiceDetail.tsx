import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams();

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <Link to="/services" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-orange transition-colors mb-12">
        <ArrowLeft size={20} /> Back to Services
      </Link>
      
      <div className="max-w-4xl mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">Website Development {id}</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          High-performance, cinematic, and responsive web experiences built with modern architecture. We don't just build sites; we craft immersive digital ecosystems that convert.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="bg-slate-50 dark:bg-[#1a1a1a] rounded-3xl p-10 border border-slate-200 dark:border-white/5">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">What You Get</h3>
          <ul className="space-y-4">
            {['Custom UI/UX Design', 'Performant Frontend (React/Next)', 'Framer Motion Animations', 'Responsive across all devices', 'SEO Optimization', 'CMS Integration'].map(t => (
              <li key={t} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="text-brand-orange" size={20} /> {t}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-brand-orange text-white rounded-3xl p-10 relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px]" />
          <h3 className="text-3xl font-bold mb-4 relative z-10">Start Your Project</h3>
          <p className="mb-8 relative z-10 text-white/90">Let's build something extraordinary together.</p>
          <Link to="/contact" className="w-fit px-8 py-4 bg-white text-brand-orange font-bold rounded-full hover:scale-105 transition-transform relative z-10">
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
