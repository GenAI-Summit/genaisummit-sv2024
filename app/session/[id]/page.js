import SessionCard from "../../Components/SessionCard";
import { getSessionById } from "/lib/api";

const SessionPage = async ({ params }) => {
  const session = await getSessionData(params.id);
  return (
    <div className="w-full">
      <SessionCard session={session} showDesc={true} />
    </div>
  );
};

const getSessionData = async (id) => {
  const session = await getSessionById(id);
  return session;
};

export default SessionPage;
