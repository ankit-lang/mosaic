export interface ScheduleEntry {
  days: number[]; // 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
  label: string;
  openTime: string;
  closeTime: string;
  openMin: number;
  closeMin: number;
}

export const OPERATING_SCHEDULE: ScheduleEntry[] = [
  {
    days: [1, 2, 3, 4],
    label: 'Mon – Thu',
    openTime: '10:30 AM',
    closeTime: '10:30 PM',
    openMin: 10 * 60 + 30, // 630 = 10:30 AM
    closeMin: 22 * 60 + 30, // 1350 = 10:30 PM
  },
  {
    days: [5, 6],
    label: 'Fri – Sat',
    openTime: '10:30 AM',
    closeTime: '11:30 PM',
    openMin: 10 * 60 + 30, // 630 = 10:30 AM
    closeMin: 23 * 60 + 30, // 1410 = 11:30 PM
  },
  {
    days: [0],
    label: 'Sun',
    openTime: '09:30 AM',
    closeTime: '11:00 PM',
    openMin: 9 * 60 + 30,  // 570 = 09:30 AM
    closeMin: 23 * 60,      // 1380 = 11:00 PM
  },
];

/**
 * Returns current status of restaurant (Open Now or Closed with next open time)
 */
export function getOperatingStatus(date: Date = new Date()) {
  const day = date.getDay();
  const currentMinutes = date.getHours() * 60 + date.getMinutes();

  const todaySchedule = OPERATING_SCHEDULE.find((s) => s.days.includes(day)) || OPERATING_SCHEDULE[0];

  if (currentMinutes >= todaySchedule.openMin && currentMinutes < todaySchedule.closeMin) {
    return {
      isOpen: true,
      text: 'Open Now',
      todaySchedule,
    };
  }

  // If closed, check if opening later today or tomorrow
  if (currentMinutes < todaySchedule.openMin) {
    return {
      isOpen: false,
      text: `Closed • Opens today at ${todaySchedule.openTime}`,
      todaySchedule,
    };
  }

  // Opens tomorrow
  const nextDay = (day + 1) % 7;
  const tomorrowSchedule = OPERATING_SCHEDULE.find((s) => s.days.includes(nextDay)) || OPERATING_SCHEDULE[0];
  return {
    isOpen: false,
    text: `Closed • Opens tomorrow at ${tomorrowSchedule.openTime}`,
    todaySchedule,
  };
}

/**
 * Checks if a specific date & time (e.g., in reservation form) is valid within operating hours
 */
export function isValidReservationTime(dateStr: string, timeStr: string): { valid: boolean; message?: string } {
  if (!dateStr || !timeStr) return { valid: true };

  const [year, month, dayNum] = dateStr.split('-').map(Number);
  const selectedDate = new Date(year, month - 1, dayNum);
  const dayOfWeek = selectedDate.getDay();

  const [hours, minutes] = timeStr.split(':').map(Number);
  const timeInMinutes = hours * 60 + minutes;

  const schedule = OPERATING_SCHEDULE.find((s) => s.days.includes(dayOfWeek));

  if (!schedule) return { valid: true };

  if (timeInMinutes < schedule.openMin || timeInMinutes > schedule.closeMin) {
    return {
      valid: false,
      message: `For ${schedule.label}, reservations are available between ${schedule.openTime} and ${schedule.closeTime}.`,
    };
  }

  return { valid: true };
}
