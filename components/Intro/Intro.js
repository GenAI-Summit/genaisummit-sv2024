import { Suspense } from "react";
import Loader from "@/components/Loader";
import SectionLayout from "@/layouts/SectionLayout";
import IntroCarousel from "@/components/Carousel/IntroCarousel";

const Intro = ({ title, paragraphs, images, widget, imgAspect }) => {
  return (
    <SectionLayout title={title} widget={widget}>
      <div className="w-full flex flex-col 2xl:flex-row items-start justify-between gap-y-8 pt-8">
        <div className="w-full 2xl:w-[48%] flex flex-col gap-y-6">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="w-full 2xl:w-[48%] 2xl:max-w-[700px]">
          <Suspense fallback={<Loader />}>
            <IntroCarousel images={images} imgAspect={imgAspect} />
          </Suspense>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Intro;
