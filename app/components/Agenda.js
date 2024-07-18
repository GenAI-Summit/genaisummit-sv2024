import SectionLayout from "../Layouts/SectionLayout";
import SubsectionLayout from "../Layouts/SubSectionLayout";
import SessionCard from "../Components/SessionCard";
import { getSessions } from "/lib/api";

const Agenda = async () => {
  const sessions = await getSessionsData();
  return (
    <>
      <SectionLayout
        title="Agenda"
        description="MAXIMIZE YOUR JOURNEY AT THE AI SUMMIT"
      >
        {sessions.map((arr) => (
          <SubsectionLayout key={arr[0].date} title={arr[0].date}>
            {arr.map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
          </SubsectionLayout>
        ))}
      </SectionLayout>
    </>
  );
};

const getSessionsData = async () => {
  const sessions = await getSessions();

  const groupedEvents = sessions.reduce((acc, session) => {
    if (!acc[session.date]) {
      acc[session.date] = [];
    }
    acc[session.date].push(session);
    return acc;
  }, {});

  return Object.values(groupedEvents);
};

export default Agenda;
