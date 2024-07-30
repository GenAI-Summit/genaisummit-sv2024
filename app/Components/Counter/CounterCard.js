import CardLayout from "../../Layouts/CardLayout";
import NumberRoller from "./NumberRoller";

const CounterCard = ({ title, start, end }) => {
  return (
    <CardLayout>
      <div className="text-2xl md:text-4xl text-color1 font-bold">
        <NumberRoller start={start} end={end} />
        <div className="text-lg md:text-xl text-color5 font-semibold">
          {title}
        </div>
      </div>
    </CardLayout>
  );
};

export default CounterCard;
