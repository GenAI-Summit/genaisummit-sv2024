import SectionLayout from "@/layouts/SectionLayout";
import SessionCard from "@/components/SessionCard";
import GoBackController from "@/components/Button/GoBackController";
import { getSessionById } from "@/lib/api";
import SectionEnter from "@/motions/SectionEnter";

const SessionPage = async ({ params }) => {
  const session = await getSessionData(params.id);
  return (
    <div className="w-full mt-10">
      <SectionEnter>
        <SectionLayout title="Session" widget={<GoBackController />}>
          <div className="w-full mt-6">
            <SessionCard session={session} showDesc={true} />
          </div>
        </SectionLayout>
      </SectionEnter>
    </div>
  );
};

export const generateMetadata = async ({ params }) => {
  const session = await getSessionData(params.id);
  const desc = session.desc.split(". ")[0] + ".";
  return {
    title: `${session.name} | GenAI Summit Silicon Valley 2024 | GPTDAO`,
    desc,
    keywords: [
      "GenAI Summit",
      "Silicon Valley",
      "2024",
      "GPTDAO",
      "Session",
      session.name,
      session.location,
      session.tags,
      session.speakers,
      session.moderators,
    ],
  };
};

const getSessionData = async (id) => {
  const session = await getSessionById(id);
  return session;
};

export default SessionPage;
