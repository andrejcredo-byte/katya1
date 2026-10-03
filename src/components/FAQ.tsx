import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FAFAF9] border-t border-[#E4E4E7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs text-[#1E3A2F] font-semibold tracking-wider uppercase mb-3">
            Вопросы & Ответы
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#18181B] font-normal leading-tight">
            Всё, что важно знать перед первым визитом
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed font-light">
            Если у вас останутся сомнения или вопросы по вашему состоянию, вы всегда можете написать мне в Telegram.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E4E4E7] transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-7 flex items-start sm:items-center justify-between gap-3 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-2xl text-[#18181B] font-normal leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#E4E4E7] bg-[#FAFAF9] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#1E3A2F] text-white border-[#1E3A2F]' : 'text-[#71717A]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-7 sm:pb-7 text-sm sm:text-base text-[#52525B] leading-relaxed border-t border-[#F4F4F5] pt-4 font-light">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
