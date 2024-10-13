import { Suspense } from "react";
import Loader from "@/components/Loader";
import Intro from "@/components/Intro/Intro";
import TicketBtn from "@/components/Button/TicketBtn";

const TeslaIntro = () => {
  const title = "Tesla Special Exhibition";
  const paragraphs = [
    "Tesla brings a tech spectacle to GenAI Summit SV 2024! Witness the rugged Cybertruck and latest EV models up close. Experience their cutting-edge AI-driven self-driving technology in action. Marvel at Optimus, Tesla's advanced humanoid robot, showcasing the future of AI and automation.",
    "Don't miss this exclusive chance to interact with tomorrow's technology today! Test drive the revolutionary Cybertruck, observe Optimus's human-like capabilities, and explore Tesla's visionary AI applications. Secure your ticket now to be part of this transformative experience at the forefront of innovation!",
  ];
  const images = [
    "/images/propaganda/tesla_logo.webp",
    "/images/propaganda/cybertruck.webp",
    "/images/propaganda/optimus1.webp",
    "/images/propaganda/tesla_group.webp",
    "/images/propaganda/optimus2.webp",
  ];
  return (
    <Intro
      title={title}
      paragraphs={paragraphs}
      images={images}
      widget={
        <Suspense fallback={<Loader />}>
          <TicketBtn
            mode="night"
            url="/tickets"
            evt="Index Intro Ticket Button"
          />
        </Suspense>
      }
      imgAspect="aspect-[16/9]"
    />
  );
};

export default TeslaIntro;