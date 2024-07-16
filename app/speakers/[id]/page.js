import SpeakerDetail from "../../components/SpeakerDetail";
import SessionCard from "../../components/SessionCard";
import SectionLayout from "../../layouts/SectionLayout";
import CardLayout from "../../layouts/CardLayout";
import { getSpeakerById, getSessionsBySpeakerId } from "/lib/api";

const SpeakerPage = async ({ params }) => {
  const speaker = await getSpeakerData(params.id);
  const sessions = await getSsionsData(params.id);
  console.log(sessions);
  return (
    <div className="w-full">
      <SectionLayout title="Speaker">
        <div className="mt-4">
          <CardLayout>
            <SpeakerDetail speaker={speaker} />
          </CardLayout>
        </div>
      </SectionLayout>
      {sessions && sessions.length > 0 && (
        <SectionLayout title="Sessions">
          {sessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </SectionLayout>
      )}
    </div>
  );
};

const getSpeakerData = async (id) => {
  const speaker = await getSpeakerById(id);
  return speaker;
};

const getSsionsData = async (id) => {
  const sessions = await getSessionsBySpeakerId(id);
  return sessions;
};

export default SpeakerPage;
