import Intro from "./Intro";
import RegisterBtn from "../RegisterBtn";

const IndexIntro = () => {
  const title = "Showcase the Future";
  const paragraphs = [
    "Demonstrate your innovations at the Generative AI Summit Silicon Valley 2024. As an exhibitor, you'll have the chance to display your cutting-edge products and services to over 5000 attendees, 300 startups, and more than 1000 developers passionate about generative AI. From November 1 to November 3, 2024, at the Santa Clara Convention Center, your booth will be a hub of excitement and potential partnerships. Connect with industry leaders, investors, and potential customers in the heart of Silicon Valley.",
    "Our exhibitor packages include prime booth locations, personalized marketing support, and opportunities to participate in tech demonstrations and panel discussions. Whether you're a startup looking for your big break or an established company showcasing your latest AI solutions, this summit provides the perfect platform to gain visibility and traction. Don't miss this opportunity to be at the epicenter of AI innovation and drive your business forward in this rapidly expanding market.",
  ];
  const images = ["/images/propaganda/floormap.jpg"];
  return (
    <>
      <Intro
        title={title}
        paragraphs={paragraphs}
        images={images}
        widget={<RegisterBtn text="Become Our Exhibitor" />}
      />
    </>
  );
};

export default IndexIntro;
