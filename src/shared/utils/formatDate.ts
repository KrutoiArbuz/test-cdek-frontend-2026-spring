import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru');

export const formatDateTime = (date: string): string => {
  if (!date) return '';

  return dayjs(date).format('D MMMM HH:mm');
};

export const formatMonthYear = (date: string): string => {
  if (!date) return '';

  const formattedDate = dayjs(date).format('MMMM, YYYY');

  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};
