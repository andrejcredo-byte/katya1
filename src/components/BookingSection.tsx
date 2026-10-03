import React, { useState, useId } from 'react';
import { SERVICES, STUDIO_LOCATION, CONTACT_PHONE, TELEGRAM_USERNAME, PRACTITIONER_NAME } from '../data/content';
import { BookingFormData } from '../types';
import { Clock, CheckCircle2, Send, Download, Shield } from 'lucide-react';

interface BookingSectionProps {
  selectedServiceId: string;
  onSelectServiceId: (id: string) => void;
  prefilledNotes?: string;
}

// Generate the next 10 days with realistic therapeutic session slots
const generateDates = () => {
  const dates = [];
  const today = new Date();
  const monthNames = [
    'янв', 'фев', 'мар', 'апр', 'май', 'июн',
    'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
  ];
  const dayNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  for (let i = 1; i <= 10; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);

    const dayOfWeekIndex = d.getDay();
    const isSunday = dayOfWeekIndex === 0;

    const dateStr = d.toISOString().split('T')[0];
    const availableSlots = isSunday
      ? []
      : ['11:00', '13:00', '15:30', '17:30', '19:30'].filter((_, idx) => (i + idx) % 5 !== 0);

    dates.push({
      dateStr,
      dayNumber: d.getDate(),
      dayName: dayNames[dayOfWeekIndex],
      monthName: monthNames[d.getMonth()],
      slots: availableSlots
    });
  }
  return dates;
};

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedServiceId,
  onSelectServiceId,
  prefilledNotes = ''
}) => {
  const days = React.useMemo(() => generateDates(), []);
  const formId = useId();

  const [selectedDate, setSelectedDate] = useState(days[0]?.dateStr || '');
  const [selectedSlot, setSelectedSlot] = useState(days[0]?.slots[0] || '11:00');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [contactMethod, setContactMethod] = useState<'telegram' | 'whatsapp' | 'call'>('telegram');
  const [telegramHandle, setTelegramHandle] = useState('');
  const [notes, setNotes] = useState(prefilledNotes);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmedData, setConfirmedData] = useState<BookingFormData | null>(null);

  React.useEffect(() => {
    if (prefilledNotes) {
      setNotes((prev) => (prev ? `${prev}; ${prefilledNotes}` : prefilledNotes));
    }
  }, [prefilledNotes]);

  const activeDay = days.find((d) => d.dateStr === selectedDate) || days[0];
  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const booking: BookingFormData = {
      serviceId: selectedServiceId,
      date: selectedDate,
      timeSlot: selectedSlot,
      name: name.trim(),
      phone: phone.trim(),
      contactMethod,
      telegramHandle: telegramHandle.trim(),
      notes: notes.trim()
    };

    setConfirmedData(booking);
    setIsSubmitted(true);
  };

  // Helper to generate and download .ics calendar file
  const handleDownloadICS = () => {
    if (!confirmedData) return;
    const [year, month, day] = confirmedData.date.split('-');
    const [hours, minutes] = confirmedData.timeSlot.split(':');

    const dtStart = `${year}${month}${day}T${hours.padStart(2, '0')}${minutes.padStart(2, '0')}00`;
    const endHour = String(Number(hours) + 1).padStart(2, '0');
    const dtEnd = `${year}${month}${day}T${endHour}${minutes.padStart(2, '0')}00`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Biodynamics//Ekaterina Andreevna//RU',
      'BEGIN:VEVENT',
      `UID:${Date.now()}@biodynamics.pro`,
      `DTSTAMP:${dtStart}`,
      `DTSTART:${dtStart}`,
      `DTEND:${dtEnd}`,
      `SUMMARY:Сеанс биодинамики: ${activeService.title}`,
      `DESCRIPTION:Мастер ${PRACTITIONER_NAME}. Формат: в удобной одежде. Телефон: ${CONTACT_PHONE}`,
      `LOCATION:${STUDIO_LOCATION}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `biodynamics-session-${confirmedData.date}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="booking" className="py-24 sm:py-32 bg-white border-t border-[#E4E4E7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs text-[#1E3A2F] font-semibold tracking-wider uppercase mb-3">
            Онлайн-запись & Расписание
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#18181B] font-normal leading-tight">
            Выберите удобное время для встречи с телом
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed font-light">
            Сеансы проходят в тихой спокойной атмосфере. Выберите подходящий формат сессии и свободное окно — я свяжусь с вами для подтверждения.
          </p>
        </div>

        {/* Confirmation Screen */}
        {isSubmitted && confirmedData ? (
          <div className="max-w-2xl mx-auto bg-[#FAFAF9] rounded-3xl border border-[#E4E4E7] p-6 sm:p-12 shadow-sm animate-in fade-in">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-white border border-[#E4E4E7] flex items-center justify-center text-[#1E3A2F] mb-6 shadow-2xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="text-center">
              <span className="text-xs text-[#1E3A2F] font-semibold tracking-wider uppercase">
                Заявка принята
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal mt-2">
                Жду вас на сеансе, {confirmedData.name}
              </h3>
              <p className="text-sm text-[#52525B] mt-2">
                Я свяжусь с вами через {confirmedData.contactMethod === 'telegram' ? 'Telegram' : confirmedData.contactMethod === 'whatsapp' ? 'WhatsApp' : 'телефонный звонок'} для финального подтверждения.
              </p>
            </div>

            {/* Session Summary Card */}
            <div className="mt-8 bg-white rounded-2xl p-5 sm:p-6 border border-[#E4E4E7] space-y-3.5 text-sm text-[#3F3F46]">
              <div className="flex items-center justify-between pb-3 border-b border-[#F4F4F5]">
                <span className="text-xs text-[#71717A]">Формат сеанса:</span>
                <span className="font-medium text-[#18181B] text-right">{activeService.title}</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-[#F4F4F5]">
                <span className="text-xs text-[#71717A]">Дата и время:</span>
                <span className="font-medium text-[#18181B] font-mono">
                  {confirmedData.date} в {confirmedData.timeSlot}
                </span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-[#F4F4F5]">
                <span className="text-xs text-[#71717A]">Длительность:</span>
                <span className="font-medium text-[#18181B]">{activeService.duration}</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-[#F4F4F5]">
                <span className="text-xs text-[#71717A]">Мастер:</span>
                <span className="font-medium text-[#18181B] text-right">{PRACTITIONER_NAME}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#71717A]">Стоимость:</span>
                <span className="font-serif text-xl font-medium text-[#18181B]">{activeService.price}</span>
              </div>
            </div>

            {/* Actions for User: Calendar & Telegram */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleDownloadICS}
                className="flex-1 py-3.5 px-4 rounded-xl border border-[#E4E4E7] bg-white hover:bg-[#F4F4F5] text-xs sm:text-sm font-medium text-[#18181B] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#1E3A2F]" />
                <span>Добавить в календарь (.ics)</span>
              </button>

              <a
                href={`https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(
                  `Здравствуйте, Екатерина Андреевна! Я записался(лась) на сеанс (${activeService.title}) на ${confirmedData.date} в ${confirmedData.timeSlot}. Моё имя: ${confirmedData.name}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3.5 px-4 rounded-xl bg-[#1E3A2F] hover:bg-[#142921] text-white text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Send className="w-4 h-4" />
                <span>Написать в Telegram</span>
              </a>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setConfirmedData(null);
                }}
                className="text-xs text-[#71717A] hover:text-[#18181B] underline cursor-pointer"
              >
                Записаться на ещё один сеанс или изменить дату
              </button>
            </div>
          </div>
        ) : (
          /* Main Interactive Booking Multi-Step Form */
          <div className="max-w-4xl mx-auto bg-[#FAFAF9] rounded-3xl border border-[#E4E4E7] p-6 sm:p-12 shadow-xs">
            <form onSubmit={handleSubmit} className="space-y-10 sm:space-y-12">
              {/* Step 1: Service Selection */}
              <div>
                <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider text-[#1E3A2F] font-semibold mb-4">
                  <span className="w-6 h-6 rounded-full bg-white border border-[#E4E4E7] flex items-center justify-center text-xs text-[#1E3A2F] font-mono">1</span>
                  <span>Выберите желаемый формат сеанса</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {SERVICES.map((srv) => {
                    const isSelected = srv.id === selectedServiceId;
                    return (
                      <button
                        type="button"
                        key={srv.id}
                        onClick={() => onSelectServiceId(srv.id)}
                        className={`text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white border-[#1E3A2F] shadow-sm ring-1 ring-[#1E3A2F]'
                            : 'bg-white/70 border-[#E4E4E7] hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-[#18181B]">{srv.title}</span>
                          <span className="font-serif text-lg text-[#18181B] shrink-0 ml-2">{srv.price}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#71717A] mt-1 font-mono">
                          <span>{srv.duration}</span>
                          <span>·</span>
                          <span className="truncate">{srv.subtitle}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Date & Slot Picker */}
              <div className="pt-8 border-t border-[#E4E4E7]">
                <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider text-[#1E3A2F] font-semibold mb-4">
                  <span className="w-6 h-6 rounded-full bg-white border border-[#E4E4E7] flex items-center justify-center text-xs text-[#1E3A2F] font-mono">2</span>
                  <span>Выберите дату и время приёма</span>
                </div>

                {/* Day selector horizontal scroll */}
                <div className="overflow-x-auto pb-2 -mx-2 px-2">
                  <div className="flex gap-2.5 min-w-max">
                    {days.map((d) => {
                      const isSelected = d.dateStr === selectedDate;
                      const hasSlots = d.slots.length > 0;
                      return (
                        <button
                          type="button"
                          key={d.dateStr}
                          disabled={!hasSlots}
                          onClick={() => {
                            setSelectedDate(d.dateStr);
                            if (d.slots.length > 0) setSelectedSlot(d.slots[0]);
                          }}
                          className={`w-16 py-3.5 rounded-xl border flex flex-col items-center transition-all cursor-pointer ${
                            !hasSlots
                              ? 'opacity-35 bg-[#F4F4F5] border-transparent cursor-not-allowed'
                              : isSelected
                              ? 'bg-[#1E3A2F] text-white border-[#1E3A2F] shadow-xs'
                              : 'bg-white text-[#27272A] border-[#E4E4E7] hover:bg-[#F4F4F5]'
                          }`}
                        >
                          <span className="text-[11px] uppercase opacity-80">{d.dayName}</span>
                          <span className="text-lg font-serif font-medium my-0.5">{d.dayNumber}</span>
                          <span className="text-[10px] opacity-75">{d.monthName}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Slots for chosen day */}
                <div className="mt-5 bg-white p-5 rounded-2xl border border-[#E4E4E7]">
                  <div className="text-xs text-[#71717A] mb-3 flex items-center gap-2 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#1E3A2F]" />
                    <span>Свободные окна на {activeDay.dayNumber} {activeDay.monthName}:</span>
                  </div>

                  {activeDay.slots.length > 0 ? (
                    <div className="flex flex-wrap gap-2.5">
                      {activeDay.slots.map((slot) => {
                        const isSlotSelected = slot === selectedSlot;
                        return (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => setSelectedSlot(slot)}
                            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all cursor-pointer ${
                              isSlotSelected
                                ? 'bg-[#1E3A2F] text-white shadow-xs'
                                : 'bg-white text-[#27272A] border border-[#E4E4E7] hover:bg-[#F4F4F5]'
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-xs text-[#71717A]">
                      На выбранный день все окна заняты. Пожалуйста, выберите соседнюю дату.
                    </p>
                  )}
                </div>
              </div>

              {/* Step 3: Contact & Request Info */}
              <div className="pt-8 border-t border-[#E4E4E7]">
                <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider text-[#1E3A2F] font-semibold mb-4">
                  <span className="w-6 h-6 rounded-full bg-white border border-[#E4E4E7] flex items-center justify-center text-xs text-[#1E3A2F] font-mono">3</span>
                  <span>Ваши контакты и пожелания</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={`${formId}-name`} className="block text-xs font-medium text-[#3F3F46] mb-1.5">
                      Имя и фамилия *
                    </label>
                    <input
                      id={`${formId}-name`}
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Мария Иванова"
                      className="w-full px-4 py-3 rounded-xl border border-[#E4E4E7] bg-white text-sm focus:outline-hidden focus:border-[#1E3A2F]"
                    />
                  </div>

                  <div>
                    <label htmlFor={`${formId}-phone`} className="block text-xs font-medium text-[#3F3F46] mb-1.5">
                      Номер телефона *
                    </label>
                    <input
                      id={`${formId}-phone`}
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (999) 000-00-00"
                      className="w-full px-4 py-3 rounded-xl border border-[#E4E4E7] bg-white text-sm focus:outline-hidden focus:border-[#1E3A2F]"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="block text-xs font-medium text-[#3F3F46] mb-2">
                    Удобный способ связи для подтверждения:
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    <button
                      type="button"
                      onClick={() => setContactMethod('telegram')}
                      className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                        contactMethod === 'telegram'
                          ? 'bg-[#1E3A2F] text-white shadow-xs'
                          : 'bg-white text-[#3F3F46] border border-[#E4E4E7] hover:bg-[#F4F4F5]'
                      }`}
                    >
                      Telegram
                    </button>
                    <button
                      type="button"
                      onClick={() => setContactMethod('whatsapp')}
                      className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                        contactMethod === 'whatsapp'
                          ? 'bg-[#1E3A2F] text-white shadow-xs'
                          : 'bg-white text-[#3F3F46] border border-[#E4E4E7] hover:bg-[#F4F4F5]'
                      }`}
                    >
                      WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={() => setContactMethod('call')}
                      className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                        contactMethod === 'call'
                          ? 'bg-[#1E3A2F] text-white shadow-xs'
                          : 'bg-white text-[#3F3F46] border border-[#E4E4E7] hover:bg-[#F4F4F5]'
                      }`}
                    >
                      Телефонный звонок
                    </button>
                  </div>
                </div>

                {contactMethod === 'telegram' && (
                  <div className="mt-4">
                    <label htmlFor={`${formId}-telegram`} className="block text-xs font-medium text-[#3F3F46] mb-1.5">
                      Ваш ник в Telegram
                    </label>
                    <input
                      id={`${formId}-telegram`}
                      type="text"
                      value={telegramHandle}
                      onChange={(e) => setTelegramHandle(e.target.value)}
                      placeholder="@username"
                      className="w-full px-4 py-3 rounded-xl border border-[#E4E4E7] bg-white text-sm focus:outline-hidden focus:border-[#1E3A2F]"
                    />
                  </div>
                )}

                <div className="mt-5">
                  <label htmlFor={`${formId}-notes`} className="block text-xs font-medium text-[#3F3F46] mb-1.5">
                    С каким запросом вы хотите поработать? (по желанию)
                  </label>
                  <textarea
                    id={`${formId}-notes`}
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Например: ноющая боль в пояснице, переутомление, бессонница, или желание соматической разгрузки..."
                    className="w-full px-4 py-3 rounded-xl border border-[#E4E4E7] bg-white text-sm focus:outline-hidden focus:border-[#1E3A2F]"
                  />
                </div>
              </div>

              {/* Submit & Confidentiality */}
              <div className="pt-8 border-t border-[#E4E4E7] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#71717A]">
                  <Shield className="w-4 h-4 text-[#1E3A2F] shrink-0" />
                  <span>Ваши данные строго конфиденциальны</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#1E3A2F] hover:bg-[#142921] active:scale-[0.99] text-white text-sm sm:text-base font-medium shadow-xs transition-all cursor-pointer whitespace-nowrap"
                >
                  Забронировать окно ({selectedSlot})
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
