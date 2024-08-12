import SectionLayout from "../../Layouts/SectionLayout";
import SessionCard from "../../Components/SessionCard";
import GoBackController from "../../Components/GoBackController";
import { getSessionById } from "/lib/api";
import SectionEnter from "../../Motions/SectionEnter";

// export const runtime = "edge";

const SessionPage = async ({ params }) => {
  const session = await getSessionData(params.id);
  return (
    <SectionEnter>
      <SectionLayout title="Session" widget={<GoBackController />}>
        <SessionCard session={session} showDesc={true} />
      </SectionLayout>
    </SectionEnter>
  );
};

const getSessionData = async (id) => {
  const session = await getSessionById(id);
  return session;
};

export default SessionPage;
