import { fromZonedTime, toZonedTime, format } from "date-fns-tz";

const ptTimeZone = "America/Los_Angeles";

export const PTtoUTC = (dateString) => {
  // Parse and normalize the datetime string to PT
  const utcDate = fromZonedTime(dateString, ptTimeZone);
  return utcDate;
};

export const UTCtoPT = (date) => {
  const ptDate = toZonedTime(date, ptTimeZone);
  return ptDate;
};

// format(nyDate, 'yyyy-MM-dd HH:mm:ssXXX', { timeZone: 'America/New_York' }) // 2014-10-25 06:46:20-04:00

export const formatToPTTime = (date) => {
  return format(date, "h:mm a", { timeZone: ptTimeZone });
};

export const formatToPTDate = (date) => {
  return format(date, "MM/dd/yyyy", { timeZone: ptTimeZone });
};