import { fromZonedTime, toZonedTime } from "date-fns-tz";

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