import SectionLayout from "../../Layouts/SectionLayout";
import IntroCarousel from "../Carousel/IntroCarousel";

const Intro = ({ title, paragraphs, images, widget }) => {
  return (
    <SectionLayout title={title} widget={widget}>
      <div className="w-full flex flex-col md:flex-row items-start justify-between">
        <div className="w-full md:w-[48%]">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-color5 mb-4">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="w-full md:w-[48%] max-w-[700px]">
          <IntroCarousel images={images} />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Intro;
