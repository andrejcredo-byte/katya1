import React, { useState } from 'react';
import { SYMPTOMS_DATA } from '../data/content';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface IndicationsProps {
  onSelectSymptom: (symptomTitle: string) => void;
}

export const Indications: React.FC<IndicationsProps> = ({ onSelectSymptom }) => {
  const [activeId, setActiveId] = useState(SYMPTOMS_DATA[0].id);

  const activeSymptom = SYMPTOMS_DATA.find((s) => s.id === activeId) || SYMPTOMS_DATA[0];

  return (
    <section id="symptoms" className="py-24 sm:py-32 bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="text-xs text-[#1E3A2F] font-semibold tracking-wider uppercase mb-3">
            Симптомы & Запросы
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#18181B] font-normal leading-tight">
            С какими состояниями я помогаю справиться
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#52525B] leading-relaxed font-light">
            Тело сохраняет память о каждом пережитом стрессе и невыраженной эмоции. Выберите то, что наиболее актуально для вас сейчас:
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Category Selector */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {SYMPTOMS_DATA.map((item, index) => {
              const isSelected = item.id === activeId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#1E3A2F] shadow-sm translate-x-1'
                      : 'bg-white/60 border-[#E4E4E7] hover:bg-white text-[#52525B]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-base font-medium ${isSelected ? 'text-[#18181B]' : 'text-[#3F3F46]'}`}>
                      {item.title}
                    </span>
                    <span className="text-xs font-mono text-[#A1A1AA]">0{index + 1}</span>
                  </div>
                  <p className="text-xs text-[#71717A] mt-1.5 line-clamp-1">
                    {item.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Deep Dive Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E4E4E7] p-6 sm:p-12 shadow-xs">
            <div className="flex items-center justify-between text-xs text-[#71717A] pb-4 border-b border-[#F4F4F5] uppercase tracking-wider">
              <span>Соматический разбор</span>
              <span className="font-semibold text-[#1E3A2F]">Терапевтический отклик</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl text-[#18181B] font-normal mt-5 sm:mt-6 leading-tight">
              {activeSymptom.title}
            </h3>
            <p className="text-sm sm:text-base text-[#71717A] italic mt-2">
              {activeSymptom.subtitle}
            </p>

            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
              <div className="bg-[#FAFAF9] rounded-2xl p-5 sm:p-6 border border-[#E4E4E7]">
                <h4 className="text-xs uppercase tracking-wider text-[#71717A] font-semibold mb-2">
                  Как это проявляется в теле:
                </h4>
                <p className="text-sm sm:text-base text-[#3F3F46] leading-relaxed">
                  {activeSymptom.manifestation}
                </p>
              </div>

              <div className="bg-[#F4F7F5] rounded-2xl p-5 sm:p-6 border border-[#D5E0D8]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#1E3A2F] font-semibold mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E3A2F]" />
                  <span>Что происходит на сеансе биодинамики:</span>
                </div>
                <p className="text-sm sm:text-base text-[#1E3A2F] leading-relaxed">
                  {activeSymptom.biodynamicAction}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#F4F4F5] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#71717A] text-center sm:text-left">
                Первые изменения ощутимы уже после 1-го сеанса
              </span>
              <button
                onClick={() => onSelectSymptom(activeSymptom.title)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1E3A2F] hover:bg-[#142921] text-white text-xs sm:text-sm font-medium transition-all shadow-xs cursor-pointer whitespace-nowrap"
              >
                <span>Записаться с этим запросом</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
