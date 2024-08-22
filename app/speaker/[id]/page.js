import SpeakerDetail from "../../Components/SpeakerDetail";
import SessionCard from "../../Components/SessionCard";
import GoBackController from "../../Components/Button/GoBackController";
import SectionLayout from "../../Layouts/SectionLayout";
import SubSectionLayout from "../../Layouts/SubSectionLayout";
import CardLayout from "../../Layouts/CardLayout";
import { getSpeakerById, getSessionsBySpeaker } from "/lib/api";
import SectionEnter from "../../Motions/SectionEnter";

const SpeakerPage = async ({ params }) => {
  const speaker = await getSpeakerData(params.id);
  const sessions = await getSessionsData(speaker.name);
  return (
    <div className="w-full mt-10">
      <SectionEnter>
        <SectionLayout title="Speaker" widget={<GoBackController />}>
          <div className="w-full mt-6">
            <CardLayout bgColor="bg-theme1Dark3">
              <SpeakerDetail speaker={speaker} />
            </CardLayout>
          </div>
        </SectionLayout>
      </SectionEnter>
      {sessions && sessions.length > 0 && (
        <div className="w-full mt-8">
          <SectionEnter>
            <SubSectionLayout title="Sessions" textAlign="text-left">
              <div className="w-full flex flex-col gap-y-10">
                {sessions.map((session) => (
                  <SessionCard key={session.id} session={session} />
                ))}
              </div>
            </SubSectionLayout>
          </SectionEnter>
        </div>
      )}
    </div>
  );
};

export const generateMetadata = async ({ params }) => {
  const speaker = await getSpeakerData(params.id);
  const bio = speaker.bio.split(". ")[0] + ".";
  return {
    title: `${speaker.name} | GenAI Summit Silicon Valley 2024 | GPTDAO`,
    description: bio,
    image: speaker.image,
  };
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
