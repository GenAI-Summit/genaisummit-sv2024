import Icon from "./Icon";

const CalendarBtnDialog = ({ onAddToGoogleCalendar, onDownloadICS }) => {
  return (
    <div className="absolute bg-color7 rounded-full flex justify-center px-4">
      <div className="cursor-pointer" onClick={onAddToGoogleCalendar}>
        <Icon
          src="/images/icons/google_calendar.webp"
          alt="Google Calendar"
          width={45}
          height={45}
        />
      </div>
      <div className="cursor-pointer" onClick={onDownloadICS}>
        <Icon
          src="/images/icons/apple_calendar.webp"
          alt="Apple Calendar"
          width={45}
          height={45}
        />
      </div>
    </div>
  );
};

export default CalendarBtnDialog;
