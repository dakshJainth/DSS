import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import PlaceholderImage from '../components/ui/PlaceholderImage';

export default function ProjectDetail() {
  const { id } = useParams();

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <Link to="/projects" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-orange transition-colors mb-12">
        <ArrowLeft size={20} /> Back to Projects
      </Link>
      
      <div className="mb-16">
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm font-medium">
          <span className="px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20">AI Systems</span>
          <span className="text-slate-500">2024</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">Lumina AI Dashboard {id}</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          An enterprise-grade automation dashboard built to streamline data processing, generate predictive insights, and manage complex team workflows with an intuitive, cinematic UI.
        </p>
      </div>

      <div className="h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden mb-20 relative">
        <PlaceholderImage className="w-full h-full" text="Main Project Showcase Media (Video/Image)" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="col-span-2 space-y-12 text-slate-600 dark:text-slate-400 leading-relaxed">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Challenge</h3>
            <p>Our client needed a highly scalable solution capable of processing massive datasets without compromising UI performance. The existing systems were slow, visually dated, and hindered productivity.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Solution</h3>
            <p>We completely architected the frontend using Next.js and Tailwind, integrating Framer Motion for cinematic micro-interactions. The backend was powered by Python and OpenAI to ensure real-time predictive analytics.</p>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="p-8 bg-slate-50 dark:bg-[#1a1a1a] rounded-2xl border border-slate-200 dark:border-white/5">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6 border-b border-slate-200 dark:border-white/10 pb-4">Technologies</h4>
            <ul className="space-y-3">
              {['React / Next.js', 'Tailwind CSS', 'Framer Motion', 'Python / Django', 'OpenAI API'].map(t => (
                <li key={t} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> {t}
                </li>
              ))}
            </ul>
          </div>
          
          <a href="#" className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
            Visit Live Site <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
      
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="h-[400px] rounded-2xl overflow-hidden"><PlaceholderImage className="w-full h-full" text="Mockup / UI Details" /></div>
         <div className="h-[400px] rounded-2xl overflow-hidden"><PlaceholderImage className="w-full h-full" text="Mockup / UI Details" /></div>
      </div>
    </div>
  );
}
