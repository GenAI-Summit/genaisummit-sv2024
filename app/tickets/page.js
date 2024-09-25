import { Suspense } from "react";
import SectionEnter from "@/motions/SectionEnter";
import Tickets from "@/components/Tickets";
import GoBackController from "@/components/Button/GoBackController";
import Loader from "@/components/Loader";

const SubscribePage = () => {
  return (
    <SectionEnter>
      <div className="w-full mt-10">
        <Suspense fallback={<Loader />}>
          <Tickets widget={<GoBackController />} />
        </Suspense>
      </div>
    </SectionEnter>
  );
};

export default SubscribePage;
