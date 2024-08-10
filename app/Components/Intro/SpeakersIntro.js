import Intro from "./Intro";
import RegisterBtn from "../RegisterBtn";

const IndexIntro = () => {
  const title = "Voice the Future";
  const paragraphs = [
    "Share your insights and shape the dialogue at the Generative AI Summit Silicon Valley 2024. We're seeking thought leaders, innovators, and experts to inspire and educate our audience of over 5000 AI enthusiasts, developers, and entrepreneurs. From November 1 to November 3, 2024, at the Santa Clara Convention Center, you'll have the platform to discuss the latest trends, challenges, and opportunities in generative AI. Your expertise will help guide the future of this transformative technology.",
    "As a speaker, you'll join a roster of distinguished voices from across the AI landscape. Whether you're presenting cutting-edge research, sharing real-world applications, or exploring the ethical implications of AI, your contribution will be invaluable. This is your chance to influence the direction of generative AI, network with industry peers, and establish yourself as a thought leader in one of the most exciting fields of our time.",
  ];
  const images = [
    "/images/propaganda/speakers_intro1.webp",
    "/images/propaganda/speakers_intro2.webp",
  ];
  return (
    <>
      <Intro
        title={title}
        paragraphs={paragraphs}
        images={images}
        widget={<RegisterBtn text="Become Our Speaker" />}
      />
    </>
  );
};

export default IndexIntro;
