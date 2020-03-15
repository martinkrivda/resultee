import { format, parseISO, addMilliseconds, subHours } from 'date-fns';
import { parseFromTimeZone } from 'date-fns-timezone';

const DATE_FORMAT = 'dd. MM. yyyy';
const DATETIME_FORMAT = 'dd. MM. yyyy HH:mm';
const TIME_FORMAT = 'HH:mm:ss';

export const formatDate = dateOrStringDate => {
  let parsedDate = dateOrStringDate;

  if (typeof dateOrStringDate === 'string') {
    parsedDate = parseISO(dateOrStringDate);
  }
  return format(parsedDate, DATE_FORMAT);
};

export const formatDateTime = dateOrStringDate => {
  let parsedDate = dateOrStringDate;
  if (
    typeof dateOrStringDate === 'string' &&
    dateOrStringDate !== 'undefined'
  ) {
    parsedDate = parseISO(dateOrStringDate);
    return format(parsedDate, DATETIME_FORMAT);
  } else {
    return 'undefined';
  }
};

export const formatTime = stringTime => {
  let parsedTime = stringTime;
  if (
    (typeof stringTime === 'number' || typeof stringTime === 'string') &&
    stringTime !== 'undefined'
  ) {
    parsedTime = parseFromTimeZone(
      subHours(addMilliseconds(new Date('2020-01-01'), parsedTime), 1),
      { timeZone: 'Europe/Berlin' },
    );
    return format(parsedTime, TIME_FORMAT);
  } else {
    return 'undefined';
  }
};

export const millisToMinutesAndSeconds = millis => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};
