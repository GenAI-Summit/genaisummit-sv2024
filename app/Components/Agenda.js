import SectionLayout from "../Layouts/SectionLayout.js";
import SubsectionLayout from "../Layouts/SubsectionLayout.js";
import SessionCard from "../Components/SessionCard";
import { getAgenda } from "/lib/api";

const Agenda = async () => {
  const sessions = await getAgendaData();
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

const getAgendaData = async () => {
  const sessions = await getAgenda();

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
