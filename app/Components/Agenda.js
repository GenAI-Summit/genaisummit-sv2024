import SectionLayout from "../Layouts/SectionLayout";
import SessionCard from "../Components/SessionCard";

const Agenda = ({ sessions }) => {
  return (
    <>
      <SectionLayout
        title="Agenda"
        description="MAXIMIZE YOUR JOURNEY AT THE AI SUMMIT"
      >
        <div className="w-full mt-6 flex flex-col gap-y-10">
          {sessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
      </SectionLayout>
    </>
  );
};

export default Agenda;
