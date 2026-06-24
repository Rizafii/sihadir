import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Fitur', href: '#fitur' },
  { label: 'Cara Kerja', href: '#cara-kerja' },
  { label: 'Manfaat', href: '#manfaat' },
  { label: 'Testimoni', href: '#testimoni' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efek navbar mengecil dan blur saat di-scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    // Beri jeda agar browser sempat melakukan proses scroll (native navigation) sebelum menu ditutup
    setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white border-b border-slate-200 shadow-sm' : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="container-custom mx-auto px-6">
        <nav className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo - Left */}
          <a href="#beranda" className="flex items-center flex-shrink-0 w-[160px]" onClick={handleLinkClick}>
            <img
              src="/Logo no bg.png"
              alt="Sihadir Logo"
              className="h-10 lg:h-12 w-auto transition-all duration-300"
              style={{ objectFit: 'contain' }}
            />
          </a>

          {/* Desktop Nav - Center */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-[14px] font-medium text-slate-600 hover:text-blue-500 transition-colors duration-300 py-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Empty right spacer for symmetry */}
          <div className="hidden lg:block w-[160px]" />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 -mr-2 text-slate-600 hover:text-slate-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu (Simple & Clean) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col py-2 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-4 py-3.5 text-[15px] font-medium text-slate-700 hover:text-blue-500 border-b border-slate-50 last:border-0"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
