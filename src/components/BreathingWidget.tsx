import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Sparkles } from 'lucide-react';

export const BreathingWidget: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'вдох' | 'пауза покоя' | 'выдох' | 'тишина'>('тишина');
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0 && isActive) {
      setIsActive(false);
      setCompleted(true);
      setPhase('тишина');
    }
    return () => clearInterval(timer);
  }, [isActive, secondsLeft]);

  // Breathing cycle: 4s inhale, 4s still point, 6s exhale, 2s stillness = 16s cycle
  useEffect(() => {
    if (!isActive) return;
    const cycleTime = (60 - secondsLeft) % 16;
    if (cycleTime < 4) {
      setPhase('вдох');
    } else if (cycleTime < 8) {
      setPhase('пауза покоя');
    } else if (cycleTime < 14) {
      setPhase('выдох');
    } else {
      setPhase('тишина');
    }
  }, [secondsLeft, isActive]);

  const handleToggle = () => {
    if (completed) {
      setSecondsLeft(60);
      setCompleted(false);
    }
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setSecondsLeft(60);
    setCompleted(false);
    setPhase('тишина');
  };

  const getPhaseInstruction = () => {
    switch (phase) {
      case 'вдох':
        return 'Мягкий плавный вдох... наполнение тканей';
      case 'пауза покоя':
        return 'Точка глубокого покоя... позвольте телу замереть';
      case 'выдох':
        return 'Глубокий отпускающий выдох... напряжение тает';
      case 'тишина':
        return completed ? 'Контакт с телом восстановлен. Сохраните это состояние.' : 'Нажмите старт для соматической паузы заземления на 1 минуту';
    }
  };

  return (
    <div className="relative rounded-3xl bg-white border border-[#E4E4E7] p-6 sm:p-10 shadow-xs overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Information */}
        <div className="max-w-md text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs text-[#1E3A2F] font-semibold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Соматическая практика</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal leading-snug">
            Минута тишины и заземления
          </h3>
          <p className="text-sm text-[#52525B] mt-2.5 leading-relaxed">
            В биодинамике исцеление начинается с замедления. Синхронизируйте своё дыхание с плавным ритмом точки глубокого покоя.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
            <button
              onClick={handleToggle}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1E3A2F] hover:bg-[#142921] text-white text-xs sm:text-sm font-medium transition-all shadow-xs cursor-pointer"
            >
              {isActive ? (
                <>
                  <Pause className="w-4 h-4" /> Приостановить
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" /> {completed ? 'Повторить' : 'Начать практику'}
                </>
              )}
            </button>
            {(isActive || secondsLeft < 60) && (
              <button
                onClick={handleReset}
                className="p-3 rounded-xl border border-[#E4E4E7] text-[#71717A] hover:text-[#18181B] hover:bg-[#F4F4F5] transition-colors"
                title="Сбросить"
                aria-label="Сбросить"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
            <span className="text-sm font-mono tabular-nums text-[#71717A]">
              {String(Math.floor(secondsLeft / 60)).padStart(2, '0')}:
              {String(secondsLeft % 60).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Right Side: Animated Zen Breathing Vessel */}
        <div className="flex flex-col items-center">
          <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center">
            {/* Outer halo */}
            <div
              className={`absolute inset-0 rounded-full border border-[#CBD5CE] transition-transform duration-1000 ${
                phase === 'вдох' ? 'scale-110 opacity-75' : phase === 'выдох' ? 'scale-95 opacity-40' : 'scale-100 opacity-50'
              }`}
            />
            {/* Inner responsive orb */}
            <div
              className={`w-32 h-32 sm:w-36 sm:h-36 rounded-full flex flex-col items-center justify-center transition-all duration-[4000ms] ease-in-out ${
                phase === 'вдох'
                  ? 'scale-115 bg-[#E6ECE8] shadow-sm'
                  : phase === 'выдох'
                  ? 'scale-90 bg-[#F4F4F5]'
                  : phase === 'пауза покоя'
                  ? 'scale-110 bg-[#D7E3DA] shadow-md'
                  : 'scale-95 bg-[#F4F4F5]'
              }`}
            >
              <span className="font-serif text-xl text-[#18181B] capitalize font-medium transition-opacity duration-300">
                {phase}
              </span>
              <span className="text-[11px] font-mono text-[#71717A] mt-1">
                {phase === 'вдох' ? '4 сек' : phase === 'пауза покоя' ? 'покой' : phase === 'выдох' ? '6 сек' : 'тишина'}
              </span>
            </div>
          </div>
          <p className="text-xs text-[#52525B] font-medium mt-4 text-center max-w-[280px] min-h-[34px] flex items-center justify-center">
            {getPhaseInstruction()}
          </p>
        </div>
      </div>
    </div>
  );
};
