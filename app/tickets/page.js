import SectionEnter from "@/motions/SectionEnter";
import GoBackController from "@/components/Button/GoBackController";
import Tickets from "@/components/Tickets";

const SubscribePage = () => {
  return (
    <SectionEnter>
      <div className="w-full mt-10">
        <Tickets widget={<GoBackController />} />
      </div>
    </SectionEnter>
  );
};

export default SubscribePage;
