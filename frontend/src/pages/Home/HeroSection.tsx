import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import PlaceholderImage from '../../components/ui/PlaceholderImage';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 50, damping: 15 } },
  };

  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-brand-orange/20 dark:bg-brand-orange/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-brand-yellow/20 dark:bg-brand-yellow/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f8f9fa]/50 to-[#f8f9fa] dark:via-[#111111]/50 dark:to-[#111111]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left Content */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
          style={{ y, opacity }}
          className="max-w-2xl"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Award-Winning Digital Agency</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
            Building Powerful <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-yellow">Digital Experiences</span> <br />
            & AI Systems.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
            We help brands grow through high-performance websites, AI automation, and modern digital experiences that feel like magic.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/contact" className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold overflow-hidden shadow-[0_0_40px_rgba(255,122,0,0.2)] dark:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2 group-hover:text-white">
                Start a Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link to="/projects" className="px-8 py-4 rounded-full font-semibold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors flex items-center justify-center">
              View Portfolio
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-orange" /> 50+ Projects</div>
            <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-brand-orange" /> 5-Star Rated</div>
            <div className="flex items-center gap-2"><Zap size={16} className="text-brand-orange" /> Fast Delivery</div>
          </motion.div>
        </motion.div>

        {/* Right Visual Composition */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 40 }}
          className="relative h-[600px] w-full hidden lg:block perspective-1000"
        >
          {/* Main App Preview Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center transform rotate-y-[-10deg] hover:rotate-y-0 transition-transform duration-700 ease-out">
            <div className="relative w-[110%] h-[80%] rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-2xl p-4 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 dark:from-white/10 dark:to-transparent pointer-events-none" />
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <PlaceholderImage className="w-full h-[calc(100%-2rem)] rounded-xl" text="Main Dashboard / Site Preview" />
              
              {/* Floating Element 1 */}
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-12 top-20 w-48 h-32 bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-xl shadow-xl p-3"
              >
                <div className="w-8 h-8 rounded-full bg-brand-orange/20 mb-2 flex items-center justify-center"><Zap size={14} className="text-brand-orange" /></div>
                <div className="w-24 h-2 bg-slate-200 dark:bg-white/10 rounded mb-2" />
                <div className="w-16 h-2 bg-slate-200 dark:bg-white/10 rounded" />
              </motion.div>

              {/* Floating Element 2 (Founder Card) */}
              <motion.div 
                animate={{ y: [0, 15, 0] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 bottom-20 w-56 h-64 bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-xl shadow-2xl p-3 flex flex-col"
              >
                 <PlaceholderImage className="w-full h-3/4 rounded-lg mb-3" text="Co-Founder Image" />
                 <div className="w-20 h-3 bg-slate-800 dark:bg-white/80 rounded mb-1" />
                 <div className="w-12 h-2 bg-slate-400 dark:bg-white/40 rounded" />
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
