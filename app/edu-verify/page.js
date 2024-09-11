import { Suspense } from "react";
import Loader from "@/components/Loader";
import SectionEnter from "@/motions/SectionEnter";
import Student from "@/components/Student";
import GoBackController from "@/components/Button/GoBackController";

const EduVerifyPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <SectionEnter>
        <div className="w-full mt-10">
          <Student widget={<GoBackController />} />
        </div>
      </SectionEnter>
    </Suspense>
  );
};

export default EduVerifyPage;
