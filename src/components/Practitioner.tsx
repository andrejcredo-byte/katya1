import React from 'react';
import { PractitionerPhotoArtwork } from './ArtVisuals';
import { Award, BookOpen, HeartHandshake } from 'lucide-react';
import { PRACTITIONER_NAME } from '../data/content';

export const Practitioner: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAFAF9] border-t border-[#E4E4E7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          {/* Left Column: Portrait Artwork */}
          <div className="lg:col-span-5">
            <PractitionerPhotoArtwork />
          </div>

          {/* Right Column: Bio & Philosophy */}
          <div className="lg:col-span-7">
            <div className="text-xs text-[#1E3A2F] font-semibold tracking-wider uppercase mb-3">
              О мастере & Подход
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#18181B] font-normal leading-tight">
              «Я не навязываю телу форму — я помогаю ему вспомнить собственное здоровье»
            </h2>

            <div className="mt-8 space-y-4 text-base sm:text-lg text-[#52525B] leading-relaxed font-light">
              <p>
                Здравствуйте. Меня зовут {PRACTITIONER_NAME}. Более восьми лет я посвятила исследованию соматики, биодинамической остеопатии и естественных механизмов саморегуляции человека.
              </p>
              <p>
                В суете повседневности мы привыкаем жить «в голове», игнорируя сигналы мышечных спазмов и фоновой тревоги. В биодинамике мы возвращаем внимание обратно в тело. Моё прикосновение — это не силовое давление, а чуткое соприсутствие. Когда организм чувствует полную безопасность и бережную точку опоры, он сам находит естественный путь к здоровью.
              </p>
            </div>

            {/* Certifications and Milestones */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#E4E4E7]">
              <div className="bg-white p-5 rounded-2xl border border-[#E4E4E7]">
                <Award className="w-5 h-5 text-[#1E3A2F] mb-3" />
                <h4 className="text-sm font-medium text-[#18181B]">Краниосакральная биодинамика</h4>
                <p className="text-xs text-[#71717A] mt-1.5 leading-relaxed">Международные стандарты биодинамического подхода</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E4E4E7]">
                <BookOpen className="w-5 h-5 text-[#1E3A2F] mb-3" />
                <h4 className="text-sm font-medium text-[#18181B]">Телесная терапия</h4>
                <p className="text-xs text-[#71717A] mt-1.5 leading-relaxed">Работа с мышечными панцирями и психосоматикой</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E4E4E7]">
                <HeartHandshake className="w-5 h-5 text-[#1E3A2F] mb-3" />
                <h4 className="text-sm font-medium text-[#18181B]">Бережная этика</h4>
                <p className="text-xs text-[#71717A] mt-1.5 leading-relaxed">Регулярные профессиональные супервизии и личная терапия</p>
              </div>
            </div>

            <div className="mt-10">
              <span className="italic font-serif text-xl sm:text-2xl text-[#18181B] font-light">
                «Тело помнит всё, но оно также изначально знает, как исцелиться».
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
