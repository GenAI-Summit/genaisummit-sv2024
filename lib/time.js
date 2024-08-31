import { fromZonedTime, toZonedTime, format } from "date-fns-tz";

const ptTimeZone = "America/Los_Angeles";
const cnTimeZone = "Asia/Tokyo";

export const PTtoUTC = (dateString) => {
  // Parse and normalize the datetime string to PT
  const utcDate = fromZonedTime(dateString, ptTimeZone);
  return utcDate;
};

export const UTCtoPT = (date) => {
  const ptDate = toZonedTime(date, ptTimeZone);
  return ptDate;
};

export const formatToPTTime = (date) => {
  return format(toZonedTime(date, ptTimeZone), "h:mm a");
};

export const formatToPTDate = (date) => {
  return format(toZonedTime(date, ptTimeZone), "MM/dd/yyyy");
};

export const formatToCNTime = (date) => {
  return format(toZonedTime(date, cnTimeZone), "h:mm a");
};

export const formatToCNDate = (date) => {
  return format(toZonedTime(date, cnTimeZone), "MM/dd/yyyy");
};