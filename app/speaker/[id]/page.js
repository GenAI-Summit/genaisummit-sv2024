import SpeakerDetail from "@/components/SpeakerDetail";
import SessionCard from "@/components/SessionCard";
import GoBackController from "@/components/Button/GoBackController";
import SectionLayout from "@/layouts/SectionLayout";
import SubSectionLayout from "@/layouts/SubSectionLayout";
import CardLayout from "@/layouts/CardLayout";
import { getSpeakerById, getSessionsBySpeaker, getSpeakers } from "@/lib/api";
import SectionEnter from "@/motions/SectionEnter";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const speakers = await getSpeakers();
  return speakers.map((speaker) => ({
    id: String(speaker.id),
  }));
};

const SpeakerPage = async ({ params }) => {
  let speaker = await getSpeakerData(params.id);
  let sessions = await getSessionsData(speaker.name);
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
  let speaker = await getSpeakerData(params.id);
  let bio = speaker.bio.split(". ")[0] + ".";
  return {
    title: `${speaker.name} | GenAI Summit Silicon Valley 2024 | GPTDAO`,
    description: bio,
    image: speaker.image,
    keywords: [
      "GenAI Summit",
      "Silicon Valley",
      "GPTDAO",
      "2024",
      "Speaker",
      speaker.name,
      speaker.organization,
      speaker.title,
    ],
  };
};

const getSpeakerData = async (id) => {
  let speaker = await getSpeakerById(id);
  return speaker;
};

const getSessionsData = async (name) => {
  let sessions = await getSessionsBySpeaker(name);
  return sessions;
};

export default SpeakerPage;
