import SectionLayout from "../Layouts/SectionLayout";
import SessionCard from "../Components/SessionCard";

const Agenda = ({ sessions }) => {
  return (
    <>
      <SectionLayout
        title="Agenda"
        description="MAXIMIZE YOUR JOURNEY AT THE AI SUMMIT"
      >
        {sessions.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </SectionLayout>
    </>
  );
};

export default Agenda;
