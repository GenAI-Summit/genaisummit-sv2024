import Icon from "./Icon";

const CalendarBtnDialog = ({ onAddToGoogleCalendar, onDownloadICS }) => {
  return (
    <div className="absolute bg-color7 rounded-full flex justify-center">
      <div className="cursor-pointer p-0.5" onClick={onAddToGoogleCalendar}>
        <Icon
          src="/images/icons/google_calendar.webp"
          alt="Google Calendar"
          width={50}
          height={50}
        />
      </div>
      <div className="cursor-pointer p-0.5" onClick={onDownloadICS}>
        <Icon
          src="/images/icons/apple_calendar.webp"
          alt="Apple Calendar"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default CalendarBtnDialog;
