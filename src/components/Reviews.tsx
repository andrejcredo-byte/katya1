import React, { useState } from 'react';
import { INITIAL_REVIEWS } from '../data/content';
import { ReviewItem } from '../types';
import { Quote, PlusCircle, CheckCircle, X } from 'lucide-react';

export const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);
  const [filter, setFilter] = useState<'all' | 'burnout' | 'pain' | 'psycho' | 'general'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form state
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('');
  const [category, setCategory] = useState<'burnout' | 'pain' | 'psycho' | 'general'>('burnout');
  const [text, setText] = useState('');
  const [outcome, setOutcome] = useState('');

  const filteredReviews = filter === 'all'
    ? reviews
    : reviews.filter((r) => r.category === filter);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !text.trim() || !outcome.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: author.trim(),
      role: role.trim() || 'Клиент',
      category,
      text: text.trim(),
      outcome: outcome.trim(),
      date: 'Сегодня',
      sessionsCount: '1 сеанс'
    };

    setReviews([newRev, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setAuthor('');
      setRole('');
      setText('');
      setOutcome('');
    }, 2000);
  };

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-white border-y border-[#E4E4E7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-xs text-[#1E3A2F] font-semibold tracking-wider uppercase mb-3">
              Истории & Опыт
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#18181B] font-normal leading-tight">
              Отзывы людей, вернувших связь со своим телом
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed font-light">
              Реальный соматический опыт клиентов: снятие застарелых болей, преодоление выгорания и возвращение глубокого внутреннего покоя.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#E4E4E7] bg-white hover:bg-[#F4F4F5] text-[#18181B] text-xs sm:text-sm font-medium transition-colors self-start md:self-auto cursor-pointer shadow-2xs whitespace-nowrap"
          >
            <PlusCircle className="w-4 h-4 text-[#1E3A2F]" />
            <span>Оставить отзыв</span>
          </button>
        </div>

        {/* Filter Tabs - scrollable without wrapping on mobile */}
        <div className="mt-8 sm:mt-12 overflow-x-auto pb-2 -mx-2 px-2">
          <div className="flex items-center gap-1.5 p-1.5 bg-[#F4F4F5] rounded-xl w-max">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 sm:px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-white text-[#18181B] shadow-xs'
                  : 'text-[#71717A] hover:text-[#18181B]'
              }`}
            >
              Все отзывы ({reviews.length})
            </button>
            <button
              onClick={() => setFilter('pain')}
              className={`px-3.5 sm:px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'pain'
                  ? 'bg-white text-[#18181B] shadow-xs'
                  : 'text-[#71717A] hover:text-[#18181B]'
              }`}
            >
              Боли и зажимы
            </button>
            <button
              onClick={() => setFilter('burnout')}
              className={`px-3.5 sm:px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'burnout'
                  ? 'bg-white text-[#18181B] shadow-xs'
                  : 'text-[#71717A] hover:text-[#18181B]'
              }`}
            >
              Выгорание и сон
            </button>
            <button
              onClick={() => setFilter('psycho')}
              className={`px-3.5 sm:px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'psycho'
                  ? 'bg-white text-[#18181B] shadow-xs'
                  : 'text-[#71717A] hover:text-[#18181B]'
              }`}
            >
              Психосоматика и тревога
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAFAF9] p-6 sm:p-10 rounded-3xl border border-[#E4E4E7] flex flex-col justify-between hover:border-[#D4D4D8] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-[#1E3A2F]/25" />
                  <div className="text-xs text-[#71717A] font-mono tabular-nums">
                    {rev.date} · {rev.sessionsCount}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#3F3F46] leading-relaxed italic">
                  «{rev.text}»
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E4E4E7]">
                <div className="bg-white px-4 py-2.5 rounded-xl border border-[#E4E4E7] mb-5 text-xs sm:text-sm text-[#3F3F46]">
                  <strong className="text-[#1E3A2F] font-semibold">Результат:</strong> {rev.outcome}
                </div>
                <div>
                  <h4 className="font-serif text-xl text-[#18181B] font-medium">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-[#71717A] mt-0.5">
                    {rev.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for adding review */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <div className="bg-white rounded-3xl border border-[#E4E4E7] max-w-lg w-full p-8 shadow-xl relative animate-in fade-in zoom-in-95">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-[#71717A] hover:text-[#18181B] p-1.5 rounded-lg"
                aria-label="Закрыть"
              >
                <X className="w-5 h-5" />
              </button>

              {submitted ? (
                <div className="py-10 text-center flex flex-col items-center">
                  <CheckCircle className="w-12 h-12 text-[#1E3A2F] mb-4" />
                  <h3 className="font-serif text-2xl text-[#18181B]">Спасибо за ваш отзыв!</h3>
                  <p className="text-sm text-[#52525B] mt-2">
                    Ваш опыт поможет другим людям довериться бережной телесной терапии.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview}>
                  <h3 className="font-serif text-2xl text-[#18181B] mb-1">
                    Поделитесь впечатлением
                  </h3>
                  <p className="text-xs text-[#71717A] mb-6">
                    Каждая история важна для тех, кто ищет мягкий путь к здоровью.
                  </p>

                  <div className="space-y-4 text-left">
                    <div>
                      <label className="block text-xs font-medium text-[#3F3F46] mb-1.5">
                        Ваше имя и фамилия *
                      </label>
                      <input
                        type="text"
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Например, Анна Сергеева"
                        className="w-full px-4 py-3 rounded-xl border border-[#E4E4E7] bg-white text-sm focus:outline-hidden focus:border-[#1E3A2F]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#3F3F46] mb-1.5">
                        Профессия или возраст (по желанию)
                      </label>
                      <input
                        type="text"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        placeholder="Например, Дизайнер, 32 года"
                        className="w-full px-4 py-3 rounded-xl border border-[#E4E4E7] bg-white text-sm focus:outline-hidden focus:border-[#1E3A2F]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#3F3F46] mb-1.5">
                        Тематика отзыва
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value as any)}
                        className="w-full px-4 py-3 rounded-xl border border-[#E4E4E7] bg-white text-sm focus:outline-hidden focus:border-[#1E3A2F]"
                      >
                        <option value="burnout">Выгорание и сон</option>
                        <option value="pain">Боли и спазмы</option>
                        <option value="psycho">Психосоматика и эмоции</option>
                        <option value="general">Общий тонус и здоровье</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#3F3F46] mb-1.5">
                        Текст отзыва *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Опишите ваше состояние до и после сеанса..."
                        className="w-full px-4 py-3 rounded-xl border border-[#E4E4E7] bg-white text-sm focus:outline-hidden focus:border-[#1E3A2F]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#3F3F46] mb-1.5">
                        Главный результат (кратко) *
                      </label>
                      <input
                        type="text"
                        required
                        value={outcome}
                        onChange={(e) => setOutcome(e.target.value)}
                        placeholder="Например, Прошла боль в шее, вернулся глубокий сон"
                        className="w-full px-4 py-3 rounded-xl border border-[#E4E4E7] bg-white text-sm focus:outline-hidden focus:border-[#1E3A2F]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#1E3A2F] hover:bg-[#142921] text-white text-sm font-medium transition-colors cursor-pointer mt-2"
                    >
                      Опубликовать отзыв
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
