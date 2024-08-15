import Intro from "./Intro";
import RegisterBtn from "../Button/RegisterBtn";

const IndexIntro = () => {
  const title = "Power the Future";
  const paragraphs = [
    "Be a driving force behind innovation at the Generative AI Summit Silicon Valley 2024. As a sponsor, you'll have the unique opportunity to showcase your brand to over 5000 total attendees, 200 speakers, 1500 startups, 2000 founders/CEOs, 20 international media outlets, and more than 3000 developers at the forefront of generative AI. From November 1 to November 3, 2024, at the Santa Clara Convention Center, your company will be associated with cutting-edge technology and visionary thinking. Gain unparalleled exposure to key industry players and decision-makers in this rapidly evolving field.",
    "Our sponsorship packages offer a range of benefits, including prominent logo placement, speaking opportunities, and exclusive networking events. By aligning your brand with this groundbreaking summit, you'll position your company as a leader in the AI revolution. Join us in shaping the future of AI and forge valuable connections that will drive your business forward in the years to come.",
  ];
  const images = [
    "/images/propaganda/index_intro1.webp",
    "/images/propaganda/index_intro2.webp",
    "/images/propaganda/index_intro3.webp",
    "/images/propaganda/index_intro4.webp",
    "/images/propaganda/index_intro5.webp",
  ];
  return (
    <>
      <Intro
        title={title}
        paragraphs={paragraphs}
        images={images}
        widget={<RegisterBtn text="Become Our Sponsor" mode="day" />}
      />
    </>
  );
};

export default IndexIntro;
