import { Suspense } from "react";
import Loader from "@/components/Loader";
import SectionLayout from "@/layouts/SectionLayout";
import SubSectionLayout from "@/layouts/SubSectionLayout";
import SessionCard from "@/components/SessionCard";

const Agenda = ({ sessionsByDate, daysMap }) => {
  return (
    <>
      <SectionLayout
        title="Agenda"
        description="LISTEN TO THE BEST SPEAKERS | WILL BE UPDATED WEEKLY"
      >
        <div className="w-full mt-6 flex flex-col gap-y-4">
          {sessionsByDate &&
            Object.keys(sessionsByDate).map((date) => {
              return (
                <SubSectionLayout key={date} title={daysMap[date]}>
                  <div className="w-full h-full flex flex-col gap-y-10">
                    {sessionsByDate[date].map((session) => (
                      <Suspense key={session.id} fallback={<Loader />}>
                        <SessionCard session={session} />
                      </Suspense>
                    ))}
                  </div>
                </SubSectionLayout>
              );
            })}
        </div>
      </SectionLayout>
    </>
  );
};

export default Agenda;
