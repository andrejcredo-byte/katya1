import React, { useState, useEffect } from 'react';
import { PRACTITIONER_NAME } from '../data/content';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'О методе', href: '#method' },
    { label: 'С чем работаю', href: '#symptoms' },
    { label: 'Как проходит', href: '#process' },
    { label: 'О мастере', href: '#about' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'Стоимость', href: '#pricing' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E4E4E7] shadow-xs'
          : 'bg-[#FAF9F6]/85 backdrop-blur-xs border-b border-[#EFEFEF]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between gap-3">
        {/* Zone 1: Single element wordmark */}
        <a
          href="#"
          className="font-serif text-xl sm:text-2xl tracking-tight text-[#18181B] hover:text-[#1E3A2F] transition-colors whitespace-nowrap font-normal truncate max-w-[190px] xs:max-w-none"
        >
          {PRACTITIONER_NAME}
        </a>

        {/* Zone 2: Clean desktop text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-sm font-medium text-[#52525B]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#18181B] transition-colors whitespace-nowrap py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#1E3A2F] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action button and mobile hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white bg-[#1E3A2F] hover:bg-[#142921] active:scale-[0.99] rounded-xl transition-all duration-200 shadow-xs whitespace-nowrap cursor-pointer"
          >
            Записаться
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#52525B] hover:text-[#18181B] rounded-xl border border-[#E4E4E7] bg-white focus:outline-hidden"
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E4E4E7] px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3.5 text-base font-medium text-[#27272A]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#F4F4F5] hover:text-[#1E3A2F] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 text-center text-sm font-medium text-white bg-[#1E3A2F] hover:bg-[#142921] rounded-xl shadow-xs cursor-pointer"
              >
                Записаться на сеанс
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
