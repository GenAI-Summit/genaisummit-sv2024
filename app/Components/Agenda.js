import SectionLayout from "../Layouts/SectionLayout";
import SubsectionLayout from "../Layouts/SubSectionLayout";
import SessionCard from "../Components/SessionCard";

const Agenda = ({ sessionGroups }) => {
  return (
    <>
      <SectionLayout
        title="Agenda"
        description="MAXIMIZE YOUR JOURNEY AT THE AI SUMMIT"
      >
        {sessionGroups.map((arr) => {
          if (arr.length === 0) {
            return null;
          }
          return (
            <SubsectionLayout key={arr[0].date} title={arr[0].date}>
              {arr.map((session) => (
                <SessionCard key={session.id} session={session} />
              ))}
            </SubsectionLayout>
          );
        })}
      </SectionLayout>
    </>
  );
};

export default Agenda;
