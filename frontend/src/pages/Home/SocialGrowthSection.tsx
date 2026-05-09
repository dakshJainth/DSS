import { motion } from 'framer-motion';
import { TrendingUp, Users, Eye, ArrowUpRight } from 'lucide-react';
import PlaceholderImage from '../../components/ui/PlaceholderImage';

export default function SocialGrowthSection() {
  return (
    <section className="py-32 bg-[#f8f9fa] dark:bg-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-yellow font-semibold tracking-wider uppercase text-sm mb-4">Audience Expansion</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Scale your reach. <br /> Own your industry.
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Nexora helps brands grow faster by increasing visibility, audience reach, engagement, and social authority. We implement data-driven content strategies that turn viewers into loyal clients.
            </p>

            <div className="space-y-6">
              {[
                { icon: <TrendingUp className="text-green-400" />, title: 'Viral Growth Strategies', desc: 'Optimized hooks and formats to capture attention.' },
                { icon: <Users className="text-blue-400" />, title: 'Community Building', desc: 'Fostering deep engagement and brand loyalty.' },
                { icon: <Eye className="text-purple-400" />, title: 'Massive Reach Increase', desc: 'Getting your brand in front of millions organically.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#1a1a1a] flex items-center justify-center shrink-0 shadow-sm border border-slate-100 dark:border-white/5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual Layout */}
          <div className="relative h-[600px] w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/5 to-purple-500/5 rounded-3xl" />
            
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute top-10 right-10 w-[60%] h-[40%] bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-2xl p-4 border border-slate-200 dark:border-white/10 z-10"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-slate-900 dark:text-white">Follower Growth</span>
                <span className="flex items-center text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                  <ArrowUpRight size={12} className="mr-1" /> +324%
                </span>
              </div>
              <PlaceholderImage className="w-full h-[calc(100%-2rem)] rounded-xl" text="Growth Chart Graphic" />
            </motion.div>

            <motion.div 
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-10 left-10 w-[45%] h-[60%] bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-2xl p-2 border border-slate-200 dark:border-white/10 z-20"
            >
               <PlaceholderImage className="w-full h-full rounded-xl" text="Reels Style Video layout" />
               
               {/* Floating likes */}
               <motion.div 
                 animate={{ y: [-10, -40], opacity: [0, 1, 0] }}
                 transition={{ repeat: Infinity, duration: 2 }}
                 className="absolute bottom-10 -right-6 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white shadow-xl"
               >
                 ♥
               </motion.div>
            </motion.div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
