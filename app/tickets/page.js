import SectionEnter from "../Motions/SectionEnter";
import GoBackController from "../Components/Button/GoBackController";
import Tickets from "../Components/Tickets";

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
