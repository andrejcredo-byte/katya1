export interface ServiceItem {
  id: string;
  title: string;
  duration: string;
  price: string;
  subtitle: string;
  description: string;
  forWhom: string;
  features: string[];
  recommendedCount: string;
  tag?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  category: 'burnout' | 'pain' | 'psycho' | 'general';
  text: string;
  outcome: string;
  date: string;
  sessionsCount: string;
}

export interface BookingFormData {
  serviceId: string;
  date: string;
  timeSlot: string;
  name: string;
  phone: string;
  contactMethod: 'telegram' | 'whatsapp' | 'call';
  telegramHandle?: string;
  notes?: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface DaySchedule {
  date: string; // YYYY-MM-DD
  dayOfWeek: string;
  dayNumber: number;
  monthName: string;
  slots: TimeSlot[];
}
