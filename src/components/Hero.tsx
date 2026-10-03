import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { HeroSomaticArtwork } from './ArtVisuals';
import { BreathingWidget } from './BreathingWidget';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-28 sm:pt-40 pb-16 sm:pb-28 overflow-hidden bg-transparent">
      {/* Delicate central sunlit aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(235,243,238,0.7)_0%,_rgba(250,249,246,0)_70%)] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Centered Editorial Hero Block */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Quiet, unboxed luxury kicker */}
          <div className="text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.25em] text-[#2E473B] font-semibold mb-4 sm:mb-6">
            Биодинамическая остеопатия · Телесная терапия
          </div>

          {/* Majestic Centered Headline with relaxed mobile line-height */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[68px] text-[#18181B] font-normal leading-[1.16] sm:leading-[1.08] tracking-tight [text-wrap:balance]">
            Возвращение тела к естественному ритму и исцелению через тишину и мягкое прикосновение
          </h1>

          {/* Refined lead paragraph */}
          <p className="mt-5 sm:mt-8 text-base sm:text-lg lg:text-xl text-[#52525B] leading-relaxed max-w-2xl font-light [text-wrap:balance]">
            Бережная практика мягкого контактного воздействия руками для активации природных механизмов саморегуляции и восстановления организма. Без боли, резких движений и силового давления.
          </p>

          {/* Clean Action Buttons: full width on mobile, inline on desktop */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#1E3A2F] hover:bg-[#142921] active:scale-[0.99] text-white text-sm sm:text-base font-medium shadow-xs transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>Записаться на сеанс</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#method"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-[#E4E4E7] bg-white/90 hover:bg-[#F4F4F5] text-[#27272A] text-sm sm:text-base font-medium transition-colors whitespace-nowrap shadow-2xs"
            >
              <Compass className="w-4 h-4 text-[#1E3A2F]" />
              <span>О методе биодинамики</span>
            </a>
          </div>

          {/* Responsive Trust Bar: 2-col grid on mobile, flex on desktop */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#E4E4E7] w-full grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-y-3 gap-x-4 sm:gap-x-8 text-xs sm:text-sm text-[#71717A]">
            <a
              href="#about"
              className="hover:text-[#18181B] transition-colors py-1 cursor-pointer"
            >
              Опыт более 8 лет
            </a>
            <span aria-hidden="true" className="hidden sm:inline text-[#D4D4D8]">·</span>
            <a
              href="#reviews"
              className="hover:text-[#18181B] transition-colors py-1 cursor-pointer"
            >
              1 200+ сессий
            </a>
            <span aria-hidden="true" className="hidden sm:inline text-[#D4D4D8]">·</span>
            <a
              href="#process"
              className="hover:text-[#18181B] transition-colors py-1 cursor-pointer"
            >
              В свободной одежде
            </a>
            <span aria-hidden="true" className="hidden sm:inline text-[#D4D4D8]">·</span>
            <button
              onClick={onOpenBooking}
              className="hover:text-[#18181B] transition-colors py-1 cursor-pointer"
            >
              Индивидуальный приём
            </button>
          </div>
        </div>

        {/* Visual Anchor: Somatic Artwork */}
        <div className="mt-12 sm:mt-20">
          <HeroSomaticArtwork />
        </div>

        {/* Breathing widget */}
        <div className="mt-10 sm:mt-12">
          <BreathingWidget />
        </div>
      </div>
    </section>
  );
};
