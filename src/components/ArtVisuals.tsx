import React from 'react';
import { Feather } from 'lucide-react';

/**
 * Editorial, minimalist visual representations:
 * - Fluid cranial wave & still point
 * - Feather touch presence (3-5 grams)
 * - Safe vertical breathing room on mobile devices
 */

export const HeroSomaticArtwork: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full min-h-[380px] sm:min-h-0 sm:aspect-[16/9] lg:aspect-[21/9] rounded-3xl overflow-hidden bg-gradient-to-b from-white via-[#F9F9F8] to-[#F1F1EF] border border-[#E5E5E3] p-6 sm:p-12 flex flex-col justify-between shadow-xs ${className}`}>
      {/* Background delicate organic fluid tide lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-45"
        viewBox="0 0 1000 450"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0,220 C200,160 350,280 500,210 C650,140 800,260 1000,200 L1000,450 L0,450 Z"
          fill="url(#flow-gradient-1)"
        />
        <path
          d="M0,280 C250,230 400,320 600,260 C800,200 900,280 1000,250 L1000,450 L0,450 Z"
          fill="url(#flow-gradient-2)"
        />
        <defs>
          <linearGradient id="flow-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8E4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#CBD5CE" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="flow-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ECECE8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#F5F5F3" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Primary Respiration Still Point Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-56 h-56 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border border-[#D1D9D3]/40 animate-calm-glow" />
        <div className="absolute inset-8 sm:inset-10 rounded-full border border-[#B8C5BC]/30" />
        <div className="absolute inset-16 sm:inset-20 rounded-full border border-[#9EB3A4]/25" />
      </div>

      {/* Top Quiet Indicator */}
      <div className="relative z-10 flex items-center justify-between text-xs tracking-wider text-[#52525B] uppercase">
        <div className="flex items-center gap-2">
          <Feather className="w-3.5 h-3.5 text-[#1E3A2F]" />
          <span className="font-medium text-[#27272A]">Принцип Первичного Дыхания</span>
        </div>
        <span className="hidden sm:inline text-[#71717A]">Жидкостное тело и тишина</span>
      </div>

      {/* Center Serene Quote with comfortable mobile line-height */}
      <div className="relative z-10 my-auto text-center max-w-2xl mx-auto py-4 sm:py-6">
        <p className="font-serif italic text-xl sm:text-3xl text-[#18181B] font-light leading-snug sm:leading-snug">
          «Здоровье присутствует в теле всегда. Задача терапевта — создать тишину, в которой организм вспоминает собственный ритм».
        </p>
        <p className="text-xs text-[#71717A] mt-2.5 sm:mt-3 font-medium tracking-wide">
          Уильям Сазерленд · Основатель краниосакральной биодинамики
        </p>
      </div>

      {/* Bottom Bar Indicators with safe wrap on mobile */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-xs text-[#52525B] pt-4 border-t border-[#E4E4E7]">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
          <span>Прикосновение весом в перо (3–5 г)</span>
          <span aria-hidden="true" className="text-[#D4D4D8]">·</span>
          <span>Без боли и хруста</span>
        </div>
        <div className="font-medium text-[#1E3A2F]">
          Точка глубокого покоя
        </div>
      </div>
    </div>
  );
};

export const PractitionerPhotoArtwork: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative min-h-[380px] sm:min-h-0 sm:aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-b from-white to-[#F4F4F5] border border-[#E4E4E7] flex flex-col justify-between p-6 sm:p-8 shadow-xs ${className}`}>
      {/* Background Soft Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white via-[#F9F9F8] to-[#EDEDEB]" />

      {/* Top Tag */}
      <div className="relative z-10 text-xs text-[#71717A] font-medium tracking-wider uppercase">
        <span>Практика соматической терапии</span>
      </div>

      {/* Silhouette & Name */}
      <div className="relative z-10 my-auto text-center flex flex-col items-center py-4">
        <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-white border border-[#E4E4E7] p-3 shadow-xs flex items-center justify-center mb-5 sm:mb-6">
          <svg className="w-20 h-20 sm:w-24 sm:h-24 text-[#2E473B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.5-1.632z" />
            <circle cx="12" cy="10" r="8" stroke="#1E3A2F" strokeDasharray="2 3" opacity="0.4" />
          </svg>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal">Екатерина Андреевна</h3>
        <p className="text-xs sm:text-sm text-[#52525B] mt-1.5 sm:mt-2 max-w-[260px] leading-relaxed">
          Сертифицированный специалист по краниосакральной биодинамике и телесной остеопатии
        </p>
      </div>

      {/* Bottom credentials */}
      <div className="relative z-10 pt-4 border-t border-[#E4E4E7] flex items-center justify-between text-xs text-[#71717A] font-mono">
        <span>Опыт: более 8 лет</span>
        <span>1 200+ сеансов</span>
      </div>
    </div>
  );
};

export const StudioSanctuaryArtwork: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative min-h-[300px] sm:min-h-0 sm:aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-tr from-white to-[#F4F4F5] border border-[#E4E4E7] p-6 sm:p-8 flex flex-col justify-between shadow-xs ${className}`}>
      <div className="flex items-center justify-between text-xs text-[#71717A] uppercase tracking-wider">
        <span className="font-medium">Атмосфера сеанса</span>
        <span>Камерный формат</span>
      </div>

      <div className="my-auto flex flex-col items-center text-center px-2 sm:px-4 py-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-[#E4E4E7] flex items-center justify-center text-[#1E3A2F] mb-3 sm:mb-4 shadow-xs">
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            <circle cx="18" cy="17.25" r="2.25" />
          </svg>
        </div>
        <h4 className="font-serif text-xl sm:text-2xl text-[#18181B]">Пространство глубокого покоя</h4>
        <p className="text-xs sm:text-sm text-[#52525B] mt-2 leading-relaxed max-w-sm">
          Мягкий рассеянный свет, анатомическая кушетка с натуральным льняным бельем, абсолютная тишина без посторонних звуков и горячий травяной сбор.
        </p>
      </div>

      <div className="flex items-center justify-between text-xs text-[#71717A] border-t border-[#E4E4E7] pt-4 font-medium">
        <span>В свободной одежде</span>
        <span>Личный приём</span>
      </div>
    </div>
  );
};
