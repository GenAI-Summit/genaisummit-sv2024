import { Suspense } from "react";
import SectionLayout from "@/layouts/SectionLayout";
import Loader from "@/components/Loader";
import ShowMore from "@/components/Button/ShowMore";
import { getHomeSessions } from "@/lib/api";
import SessionCard from "@/components/SessionCard";

const IndexAgenda = async () => {
  const sessions = await getHomeSessions();
  return (
    <SectionLayout
      title="Agenda"
      widget={<ShowMore target="/agenda" text="View All Sessions" mode="day" />}
      description="AGENDA OF THIS GENAI SUMMIT"
    >
      <div className="w-full mt-6 flex flex-col gap-y-4">
        {sessions.map((session) => (
          <Suspense key={session.id} fallback={<Loader />}>
            <SessionCard session={session} />
          </Suspense>
        ))}
      </div>
    </SectionLayout>
  );
};

export default IndexAgenda;