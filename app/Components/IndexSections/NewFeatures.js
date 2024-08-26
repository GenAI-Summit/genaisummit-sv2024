import SectionLayout from "../../Layouts/SectionLayout";
import NewFeature from "./NewFeature";
import TicketBtn from "../Button/TicketBtn";

const newFeatures = [
  {
    title: "Skip the Line",
    description:
      "Get your badge delivered for free ahead of time and easily enter the event with a quick scan, having your badge ready in hand!",
    image: "/images/features/feature1.svg",
  },
  {
    title: "Event App",
    description:
      "Join the event with the Whova mobile app, featuring automatically updated agendas, speaker info, guidelines/maps, and the latest news.",
    image: "/images/features/feature2.png",
  },
  {
    title: "Easy Transporation",
    description:
      "Enjoy free parking and hassle-free access to the venue all day. Simply drive up, park your vehicle, and dive straight into the action without worrying about additional costs.",
    image: "/images/features/feature3.svg",
  },
];

const NewFeatures = () => {
  return (
    <SectionLayout title="New Features" widget={<TicketBtn mode="night" />}>
      <div className="mt-8 md:mt-10 w-full flex flex-col justify-center items-center gap-8">
        {newFeatures.map((feature, index) => (
          <NewFeature key={index} feature={feature} index={index} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default NewFeatures;
