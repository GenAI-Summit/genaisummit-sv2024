import SectionEnter from "@/motions/SectionEnter";
import Tickets from "@/components/Tickets";
import GoBackController from "@/components/Button/GoBackController";

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
