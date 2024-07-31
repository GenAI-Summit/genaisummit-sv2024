import SectionLayout from "../Layouts/SectionLayout";
import IntroCarousel from "./Carousel/IntroCarousel";

const IndexIntro = () => {
  const paragraphs = [
    "Join us in exploring the future possibilities at the Generative AI Summit Silicon Valley 2024. This third large-scale generative AI conference in Silicon Valley will be held from November 1 to November 3, 2024, at the Mission City Ballroom of the Santa Clara Convention Center. The event is hosted by GPT DAO, a community spontaneously formed by developers, entrepreneurs, and enthusiasts passionate about generative AI.",
    "We are at the forefront of a new technological wave, with generative AI revealing a future of infinite possibilities. With over 300 attendees, 100+ startups, and more than 1000 developers, the summit brings together the world's most cutting-edge entrepreneurial teams and investment institutions to jointly explore the future of this field.",
  ];
  return (
    <div className="w-full mt-10">
      <SectionLayout title="Build the Future">
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-[48%] max-w-[600px]">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-color5 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="w-full md:w-[48%] max-w-[700px]">
            <IntroCarousel />
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default IndexIntro;
