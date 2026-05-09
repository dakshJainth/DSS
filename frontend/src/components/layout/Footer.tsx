import { Link } from 'react-router-dom';
import logo from '../../assets/nexoralogo.png';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="Nexora" className="h-10 object-contain" />
            </Link>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8 leading-relaxed">
              Building powerful digital experiences and AI automation systems. We help brands grow through high-performance websites and modern digital strategies.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map(link => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-slate-500 dark:text-slate-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-6">Connect</h4>
            <ul className="flex flex-col gap-4">
              {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map(social => (
                <li key={social}>
                  <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors">
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Nexora. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
