import CounterCard from "./CounterCard";

const FunFacts = () => {
  const data = [
    {
      title: "Attendees",
      start: 0,
      end: 3000,
    },
    {
      title: "Speakers",
      start: 0,
      end: 150,
    },
    {
      title: "Exhibitors",
      start: 0,
      end: 300,
    },
    {
      title: "Sessions",
      start: 0,
      end: 100,
    },
  ];
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
      {data.map((item, index) => (
        <div key={index} className="w-[35%] md:w-[18%]">
          <CounterCard title={item.title} start={item.start} end={item.end} />
        </div>
      ))}
    </div>
  );
};

export default FunFacts;
