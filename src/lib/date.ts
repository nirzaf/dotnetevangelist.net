import { format,  } from 'date-fns'

export const formatFullDate = (date: Date) => {
  return format(date, "dd MMM yyyy");
};

