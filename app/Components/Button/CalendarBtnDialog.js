import Icon from "../Icon";

const CalendarBtnDialog = ({ onAddToGoogleCalendar, onDownloadICS }) => {
  return (
    <div className="w-full h-full rounded-lg bg-gradient-to-r from-theme1Color1 via-theme1Color2 to-theme1Color3 pt-[2.5px] rounded-lg flex justify-around">
      <div className="w-full h-full bg-theme1Light1 rounded-lg flex justify-around px-4">
        <div className="cursor-pointer" onClick={onAddToGoogleCalendar}>
          <Icon
            src="/images/icons/google_calendar.svg"
            alt="Google Calendar"
            width={45}
            height={45}
          />
        </div>
        <div className="cursor-pointer" onClick={onDownloadICS}>
          <Icon
            src="/images/icons/apple_calendar.svg"
            alt="Apple Calendar"
            width={45}
            height={45}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarBtnDialog;
