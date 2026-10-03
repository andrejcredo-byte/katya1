import React from 'react';
import { SERVICES } from '../data/content';
import { Check, ArrowRight, Clock } from 'lucide-react';

interface PricingProps {
  onSelectService: (serviceId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectService }) => {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="text-xs text-[#1E3A2F] font-semibold tracking-wider uppercase mb-3">
            Форматы & Стоимость
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#18181B] font-normal leading-tight">
            Прозрачные условия и бережный формат работы
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#52525B] leading-relaxed font-light">
            В каждый сеанс включены соматический опрос, работа на анатомической кушетке, интеграционная пауза с травяным сбором и индивидуальные рекомендации.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className={`p-6 sm:p-10 rounded-3xl border transition-all duration-200 flex flex-col justify-between ${
                srv.tag
                  ? 'bg-white border-[#1E3A2F] shadow-sm ring-1 ring-[#1E3A2F]/20'
                  : 'bg-white border-[#E4E4E7] hover:border-[#D4D4D8]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#71717A]">
                    <Clock className="w-3.5 h-3.5 text-[#1E3A2F]" />
                    <span>{srv.duration}</span>
                  </div>
                  {srv.tag && (
                    <button
                      type="button"
                      onClick={() => onSelectService(srv.id)}
                      className="text-xs font-medium text-[#1E3A2F] bg-[#F4F7F5] px-3 py-1 rounded-full border border-[#D5E0D8] hover:bg-[#E4ECE6] transition-colors cursor-pointer"
                    >
                      {srv.tag}
                    </button>
                  )}
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal leading-snug">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#71717A] italic mt-1.5">
                  {srv.subtitle}
                </p>

                <div className="mt-5 mb-5 text-3xl sm:text-4xl font-serif text-[#18181B] font-normal">
                  {srv.price}
                </div>

                <p className="text-sm sm:text-base text-[#52525B] leading-relaxed mb-6 font-light">
                  {srv.description}
                </p>

                <div className="pt-6 border-t border-[#F4F4F5] space-y-3">
                  <div className="text-xs uppercase tracking-wider text-[#71717A] font-semibold mb-2">
                    Что входит в сеанс:
                  </div>
                  {srv.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#3F3F46]">
                      <Check className="w-4 h-4 text-[#1E3A2F] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#F4F4F5]">
                <button
                  onClick={() => onSelectService(srv.id)}
                  className="w-full py-3.5 sm:py-4 rounded-xl bg-[#1E3A2F] hover:bg-[#142921] active:scale-[0.99] text-white text-sm font-medium transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Выбрать и записаться</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-[#71717A] mt-2.5 font-mono">
                  {srv.recommendedCount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
