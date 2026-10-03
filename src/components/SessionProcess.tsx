import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/content';
import { StudioSanctuaryArtwork } from './ArtVisuals';
import { Coffee, Shirt, BellOff } from 'lucide-react';

export const SessionProcess: React.FC = () => {
  return (
    <section id="process" className="py-24 sm:py-32 bg-white border-t border-[#E4E4E7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="text-xs text-[#1E3A2F] font-semibold tracking-wider uppercase mb-3">
            Процесс & Комфорт
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#18181B] font-normal leading-tight">
            Как проходит сеанс биодинамики: 4 шага
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#52525B] leading-relaxed font-light">
            Здесь не нужно ничего терпеть или преодолевать боль. Всё пространство выстроено вокруг уважения к вашим границам и глубокого соматического расслабления.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Steps Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-[#FAFAF9] p-5 sm:p-8 rounded-3xl border border-[#E4E4E7] flex gap-4 sm:gap-6 hover:border-[#D4D4D8] transition-colors"
              >
                <div className="shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white border border-[#E4E4E7] flex items-center justify-center font-mono font-medium text-xs sm:text-sm text-[#1E3A2F] shadow-2xs">
                    {step.step}
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#18181B] font-normal">
                      {step.title}
                    </h3>
                    <span className="text-xs font-mono text-[#71717A]">
                      · {step.duration}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Studio Atmosphere & Guidelines */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <StudioSanctuaryArtwork />

            <div className="bg-[#FAFAF9] p-5 sm:p-7 rounded-3xl border border-[#E4E4E7] space-y-4 sm:space-y-5">
              <h4 className="font-serif text-xl text-[#18181B] font-normal">
                Памятка для вашего комфорта
              </h4>

              <div className="flex items-start gap-3.5 text-xs sm:text-sm text-[#52525B]">
                <Shirt className="w-4 h-4 text-[#1E3A2F] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#18181B]">Одежда:</strong> приходите в мягкой свободной одежде (спортивные брюки, футболка, носочки). Никакого раздевания.
                </span>
              </div>

              <div className="flex items-start gap-3.5 text-xs sm:text-sm text-[#52525B]">
                <BellOff className="w-4 h-4 text-[#1E3A2F] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#18181B]">Тишина:</strong> телефоны переводятся в беззвучный режим, чтобы не отвлекать нервную систему.
                </span>
              </div>

              <div className="flex items-start gap-3.5 text-xs sm:text-sm text-[#52525B]">
                <Coffee className="w-4 h-4 text-[#1E3A2F] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#18181B]">После сеанса:</strong> травяной чай для бережной соматической интеграции перед возвращением к делам.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
