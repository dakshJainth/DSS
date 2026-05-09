import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import logo from '../../assets/nexoralogo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'services', 'projects', 'about', 'team', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      
      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
      if (location.pathname === '/') {
        e.preventDefault();
        const targetId = path.substring(2);
        if (targetId === '') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }
      }
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/#', id: 'home' },
    { name: 'Services', path: '/#services', id: 'services' },
    { name: 'Projects', path: '/#projects', id: 'projects' },
    { name: 'About', path: '/#about', id: 'about' },
    { name: 'Team', path: '/#team', id: 'team' },
    { name: 'Contact', path: '/#contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-4 bg-white/20 dark:bg-[#111111]/30 backdrop-blur-xl border-b border-white/10 dark:border-white/5 shadow-lg shadow-black/5' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="relative z-10 flex items-center gap-2">
          <img src={logo} alt="Nexora Logo" className="h-8 object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === '/' ? activeSection === link.id : false;
            
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`relative text-sm font-medium transition-colors hover:text-brand-orange ${
                  isActive ? 'text-brand-orange' : 'text-slate-700 dark:text-slate-300'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-orange rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <Link
            to="/#contact"
            onClick={(e) => handleNavClick(e, '/#contact')}
            className="px-6 py-2.5 rounded-full bg-brand-orange text-white text-sm font-medium hover:bg-[#e66e00] transition-all shadow-[0_0_20px_rgba(255,122,0,0.3)] hover:shadow-[0_0_30px_rgba(255,122,0,0.5)] transform hover:-translate-y-0.5"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4 z-10">
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-700 dark:text-slate-300"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-700 dark:text-slate-300">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-white dark:bg-[#111111] border-b border-slate-200 dark:border-slate-800 p-6 md:hidden flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className="text-lg font-medium text-slate-900 dark:text-white hover:text-brand-orange transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={(e) => handleNavClick(e, '/#contact')}
            className="mt-4 text-center px-6 py-3 rounded-full bg-brand-orange text-white font-medium shadow-[0_0_20px_rgba(255,122,0,0.3)]"
          >
            Book a Call
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
