import { useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Fitur', href: '#fitur' },
  { label: 'Cara Kerja', href: '#cara-kerja' },
  { label: 'Manfaat', href: '#manfaat' },
  { label: 'Testimoni', href: '#testimoni' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container-custom mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-3 flex-shrink-0">
            <img src="/Logo Sihadir.png" alt="Sihadir Logo" className="h-12 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative group text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                {link.label}
                {/* Animated underline */}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white rounded-lg bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Mulai Gratis
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="lg:hidden border-t border-gray-100"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="mx-4 mt-2 p-4 rounded-xl border border-gray-200 bg-white">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-gray-200">
                <a
                  href="#kontak"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                >
                  Mulai Gratis
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
