import SectionLayout from "../Layouts/SectionLayout";
import SubSectionLayout from "../Layouts/SubSectionLayout";
import SessionCard from "../Components/SessionCard";

const Agenda = ({ sessionsByDate, daysMap }) => {
  return (
    <>
      <SectionLayout
        title="Agenda"
        description="FIND THE RIGHT SESSIONS FOR YOU | WILL BE UPDATED WEEKLY"
      >
        <div className="w-full mt-6 flex flex-col gap-y-4">
          {sessionsByDate &&
            Object.keys(sessionsByDate).map((date) => {
              return (
                <SubSectionLayout key={date} title={daysMap[date]}>
                  <div className="w-full h-full flex flex-col gap-y-10">
                    {sessionsByDate[date].map((session) => (
                      <SessionCard key={session.id} session={session} />
                    ))}
                  </div>
                </SubSectionLayout>
              );
            })}
        </div>
      </SectionLayout>
    </>
  );
};

export default Agenda;
