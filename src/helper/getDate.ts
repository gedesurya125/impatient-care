export const getDate = (rawDate: string | number | Date) => {
  let date = new Date(rawDate);
  if (checkIfValidDate(date)) return getLocalDateAndTime(date);
  date = new Date(Number(rawDate));
  if (checkIfValidDate(date)) return getLocalDateAndTime(date);
  return 'invalid date';
};

const getLocalDateAndTime = (date: Date) => {
  return `${date.toString().slice(0, 24)}:${date.getMilliseconds()}`;
};

const checkIfValidDate = (date: any) => {
  if (Object.prototype.toString.call(date) === '[object Date]') {
    // it is a date
    if (isNaN(date)) {
      // d.getTime() or d.valueOf() will also work
      // date object is not valid
      return false;
    } else {
      // date object is valid
      return true;
    }
  } else {
    // not a date object
    return false;
  }
};
