import SectionEnter from "@/motions/SectionEnter";
import Student from "@/components/Student";
import GoBackController from "@/components/Button/GoBackController";

const EduVerifyPage = () => {
  return (
    <SectionEnter>
      <div className="w-full mt-10">
        <Student widget={<GoBackController />} />
      </div>
    </SectionEnter>
  );
};

export default EduVerifyPage;
