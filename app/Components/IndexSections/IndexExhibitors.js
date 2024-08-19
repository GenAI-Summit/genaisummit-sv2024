import SectionLayout from "../../Layouts/SectionLayout";
import OrganizationCard from "../OrganizationCard";
import ShowMore from "../Button/ShowMore";
import RegisterBtn from "../Button/RegisterBtn";
import Loader from "../Loader";
import Error from "../Error";
import useExhibitors from "../../Hooks/useExhibitors";

// import { getExhibitors } from "/lib/api";

const Exhibitors = () => {
  const { exhibitors, isLoading, isError } = useExhibitors();
  if (isLoading) return <Loader />;
  if (isError) return <Error />;
  // const exhibitors = await getExhibitiorsData();
  return (
    <SectionLayout
      title="Exhibitiors"
      description="MEET OUR EXHIBITIORS"
      widget={<RegisterBtn text="Become Our Exhibitor" mode="day" />}
    >
      <div className="mt-8 md:mt-10 flex flex-wrap justify-start items-center gap-y-7 md:gap-y-7 gap-x-[4%] md:gap-x-[4%] lg:gap-x-[1%]">
        {exhibitors.map((exhibitor) => (
          <div
            key={exhibitor.id}
            className="w-[48%] h-36 md:w-[30%] md:h-27 lg:w-[19%] lg:h-27"
          >
            <OrganizationCard type="exhibitor" organization={exhibitor} />
          </div>
        ))}
      </div>
      <div className="mt-6 md:mt-8">
        <ShowMore target="/exhibitors" text="View All Exhibitors" mode="day" />
      </div>
    </SectionLayout>
  );
};

/*
const getExhibitiorsData = async () => {
  const exhibitors = await getExhibitors();
  return exhibitors.slice(0, 12);
};
*/

export default Exhibitors;
