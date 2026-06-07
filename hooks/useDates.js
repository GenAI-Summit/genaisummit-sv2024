import { PTtoUTC, formatToPTDate } from "@/lib/time";
import agendaData from "@/public/data/agenda.json";

const useDates = () => {
  const dates = [
    ...new Set(
      agendaData
        .filter((session) => !session.hide)
        .map((session) => formatToPTDate(PTtoUTC(session.start))),
    ),
  ];

  const daysMap = Object.fromEntries(
    dates.map((date, index) => [date, `DAY ${index + 1}`]),
  );

  return {
    dates,
    daysMap,
    isLoading: false,
    isError: false,
  };
};

export default useDates;
