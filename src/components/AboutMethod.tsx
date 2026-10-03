import React from 'react';
import { Waves, Heart, ShieldCheck, Feather } from 'lucide-react';

export const AboutMethod: React.FC = () => {
  const principles = [
    {
      icon: Feather,
      title: 'Неинвазивное касание весом в несколько грамм',
      description: 'Биодинамика исключает силовые приёмы, хруст, рывки и болезненные продавливания. Терапевт прикладывает руки с предельной чуткостью, создавая надёжную соматическую опору.'
    },
    {
      icon: Waves,
      title: '«Первичное дыхание» и флюидные приливы',
      description: 'Всё тело пронизано глубинными гидродинамическими ритмами ликвора и фасций. При стрессе и травмах это движение замирает. Практик возвращает тканям естественную подвижность.'
    },
    {
      icon: ShieldCheck,
      title: 'Активация внутренней саморегуляции',
      description: 'В каждом организме заложена природная матрица здоровья. Терапевт не навязывает форму извне, а бережно устраняет блоки, позволяя телу восстановиться собственными ресурсами.'
    },
    {
      icon: Heart,
      title: 'Глубокая разгрузка нервной системы',
      description: 'В атмосфере абсолютной безопасности выключается хронический режим тревоги («бей или беги»), уступая место парасимпатической системе восстановления сил, сна и иммунитета.'
    }
  ];

  return (
    <section id="method" className="py-24 sm:py-32 bg-white border-y border-[#E4E4E7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs text-[#1E3A2F] font-semibold tracking-wider uppercase mb-3">
            Основы & Принципы
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#18181B] font-normal leading-tight">
            Что такое биодинамика и как она восстанавливает организм
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#52525B] leading-relaxed font-light">
            Это направление краниосакральной остеопатии и соматической терапии, разработанное доктором Уильямом Сазерлендом. Метод работает с телом как с единой целостной системой, где фасции, нервы и эмоции неразрывно связаны.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-[#FAFAF9] p-8 sm:p-10 rounded-3xl border border-[#E4E4E7] flex flex-col justify-between hover:border-[#D4D4D8] transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#E4E4E7] flex items-center justify-center text-[#1E3A2F] mb-6 shadow-2xs">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#18181B] font-normal leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3.5 text-sm sm:text-base text-[#52525B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-8 pt-5 border-t border-[#E4E4E7] text-xs font-mono text-[#A1A1AA]">
                  Принцип 0{index + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="mt-16 bg-[#FAFAF9] rounded-3xl border border-[#E4E4E7] p-6 sm:p-10">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#18181B] mb-2 font-normal">
            Сравнение подходов к телу
          </h3>
          <p className="text-xs text-[#71717A] mb-4 sm:hidden">
            Листайте таблицу вправо &rarr;
          </p>

          <div className="overflow-x-auto -mx-2 px-2 pb-2">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead>
                <tr className="border-b border-[#E4E4E7] text-xs uppercase tracking-wider text-[#71717A]">
                  <th className="py-4 pr-4 font-semibold">Критерий</th>
                  <th className="py-4 px-5 font-semibold text-[#1E3A2F] bg-white rounded-t-xl border-t border-x border-[#E4E4E7]">Биодинамика</th>
                  <th className="py-4 px-4 font-normal text-[#71717A]">Классический массаж</th>
                  <th className="py-4 pl-4 font-normal text-[#71717A]">Мануальная терапия</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4E4E7] text-[#3F3F46]">
                <tr>
                  <td className="py-4 pr-4 font-medium text-[#18181B]">Сила контакта</td>
                  <td className="py-4 px-5 font-medium text-[#1E3A2F] bg-white border-x border-[#E4E4E7]">
                    Невесомое касание (3–5 грамм)
                  </td>
                  <td className="py-4 px-4 text-[#71717A]">Интенсивное мышечное разминание</td>
                  <td className="py-4 pl-4 text-[#71717A]">Резкие силовые трасты</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium text-[#18181B]">Болезненность</td>
                  <td className="py-4 px-5 font-medium text-[#1E3A2F] bg-white border-x border-[#E4E4E7]">
                    Полное отсутствие боли, глубокий покой
                  </td>
                  <td className="py-4 px-4 text-[#71717A]">Часто болезненно при триггерах</td>
                  <td className="py-4 pl-4 text-[#71717A]">Возможен резкий дискомфорт</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium text-[#18181B]">Уровень воздействия</td>
                  <td className="py-4 px-5 font-medium text-[#1E3A2F] bg-white border-x border-[#E4E4E7]">
                    Нервная система, фасции, флюиды, эмоции
                  </td>
                  <td className="py-4 px-4 text-[#71717A]">Мышечные волокна</td>
                  <td className="py-4 pl-4 text-[#71717A]">Суставы и кости</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium text-[#18181B]">Формат одежды</td>
                  <td className="py-4 px-5 font-medium text-[#1E3A2F] bg-white border-x border-[#E4E4E7]">
                    В свободной комфортной одежде
                  </td>
                  <td className="py-4 px-4 text-[#71717A]">Без одежды с маслами</td>
                  <td className="py-4 pl-4 text-[#71717A]">В белье</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium text-[#18181B]">Устойчивость эффекта</td>
                  <td className="py-4 px-5 font-medium text-[#1E3A2F] bg-white rounded-b-xl border-b border-x border-[#E4E4E7]">
                    Глубинная системная саморегуляция
                  </td>
                  <td className="py-4 px-4 text-[#71717A]">Краткосрочное расслабление мышц</td>
                  <td className="py-4 pl-4 text-[#71717A]">Механическое устранение блока</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
