import Intro from "./Intro";
import TicketBtn from "../Button/TicketBtn";

const IndexIntro = () => {
  const title = "Define the Future";
  const paragraphs = [
    "Join us in exploring the future possibilities at the GenAI Summit Silicon Valley 2024. This large-scale Generative AI conference will be held from November 1 to November 3, 2024, at the Santa Clara Convention Center. The event is hosted by GPT DAO, the largest GenAI event brand in the world.",
    "We are at the forefront of a new AGI wave. With over 5000 total attendees, 200 speakers, 1500 startups, 2000 founders/CEOs, 20 international media outlets, and more than 3000 developers, the summit brings together the world's most cutting-edge entrepreneurial teams, corp decision makers, and investment institutions to jointly explore the future of this field.",
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
      widget={<TicketBtn mode="day" url="/tickets" />}
    />
  );
};

export default IndexIntro;
