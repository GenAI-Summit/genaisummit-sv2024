import SpeakerDetail from "../../Components/SpeakerDetail";
import SessionCard from "../../Components/SessionCard";
import SectionLayout from "../../Layouts/SectionLayout";
import SubSectionLayout from "../../Layouts/SubSectionLayout";
import CardLayout from "../../Layouts/CardLayout";
import { getSpeakerById, getSessionsBySpeaker } from "/lib/api";

const SpeakerPage = async ({ params }) => {
  const speaker = await getSpeakerData(params.id);
  const sessions = await getSessionsData(speaker.name);
  return (
    <div className="w-full">
      <SectionLayout title="Speaker" goBackFlag={true}>
        <div className="w-full mt-4">
          <CardLayout>
            <SpeakerDetail speaker={speaker} />
          </CardLayout>
        </div>
      </SectionLayout>
      {sessions && sessions.length > 0 && (
        <SubSectionLayout title="Sessions" textAlign="text-left">
          {sessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </SubSectionLayout>
      )}
    </div>
  );
};

const getSpeakerData = async (id) => {
  const speaker = await getSpeakerById(id);
  return speaker;
};

const getSessionsData = async (name) => {
  const sessions = await getSessionsBySpeaker(name);
  return sessions;
};

export default SpeakerPage;
