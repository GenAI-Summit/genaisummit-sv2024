import Intro from "./Intro";
import TicketBtn from "../Button/TicketBtn";

const IndexIntro = () => {
  const title = "Build the Future";
  const paragraphs = [
    "Join us in exploring the future possibilities at the Generative AI Summit Silicon Valley 2024. This third large-scale generative AI conference in Silicon Valley will be held from November 1 to November 3, 2024, at the Mission City Ballroom of the Santa Clara Convention Center. The event is hosted by GPT DAO, a community spontaneously formed by developers, entrepreneurs, and enthusiasts passionate about generative AI.",
    "We are at the forefront of a new technological wave, with generative AI revealing a future of infinite possibilities. With over 5000 attendees, 300 startups, and more than 1000 developers, the summit brings together the world's most cutting-edge entrepreneurial teams and investment institutions to jointly explore the future of this field.",
  ];
  const images = [
    "/images/propaganda/index_intro1.webp",
    "/images/propaganda/index_intro2.webp",
    "/images/propaganda/index_intro3.webp",
    "/images/propaganda/index_intro4.webp",
    "/images/propaganda/index_intro5.webp",
  ];
  return (
    <Intro
      title={title}
      paragraphs={paragraphs}
      images={images}
      widget={<TicketBtn mode="day" />}
    />
  );
};

export default IndexIntro;
