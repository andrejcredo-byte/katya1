import React from 'react';
import { CONTACT_PHONE, TELEGRAM_USERNAME, PRACTITIONER_NAME, STUDIO_LOCATION } from '../data/content';
import { Send, Phone, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#18181B] text-[#A1A1AA] py-16 sm:py-24 border-t border-[#27272A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#27272A]">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <span className="font-serif text-3xl text-white tracking-tight block font-normal">
              {PRACTITIONER_NAME}
            </span>
            <p className="text-sm text-[#A1A1AA] mt-3 max-w-sm leading-relaxed font-light">
              Биодинамическая остеопатия и телесная терапия. Мягкая соматическая настройка для возвращения тела к естественному ритму здоровья и глубокого покоя.
            </p>
            <div className="mt-5 text-xs text-[#71717A] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#34D399]" />
              <span>{STUDIO_LOCATION}</span>
            </div>
          </div>

          {/* Nav mirror */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Навигация
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A1A1AA]">
              <li>
                <a href="#method" className="hover:text-white transition-colors">О методе биодинамики</a>
              </li>
              <li>
                <a href="#symptoms" className="hover:text-white transition-colors">С чем я работаю</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">Как проходит сеанс</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">О мастере и дипломах</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Отзывы клиентов</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Стоимость сеансов</a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Контакты & Запись
            </h4>
            <div className="space-y-3.5 text-sm text-[#A1A1AA]">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <a href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, '')}`} className="hover:text-white font-mono">
                  {CONTACT_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Send className="w-4 h-4 text-white shrink-0" />
                <a
                  href={`https://t.me/${TELEGRAM_USERNAME}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white text-[#E4E4E7] font-medium"
                >
                  @{TELEGRAM_USERNAME} (Telegram)
                </a>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#27272A]">
              <a
                href="#booking"
                className="inline-block text-xs font-medium text-white underline underline-offset-4 hover:text-[#34D399]"
              >
                Выбрать свободное окно в расписании &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p>© {new Date().getFullYear()} {PRACTITIONER_NAME}. Все права защищены.</p>
          <p>Биодинамическая остеопатия и телесная терапия</p>
        </div>
      </div>
    </footer>
  );
};
