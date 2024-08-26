export const metadata = {
  title: "Speakers | GenAI Summit Silicon Valley 2024 | GPTDAO",
  description: "Discover thought leaders shaping the future of Generative AI. Gain insights from innovators, researchers, and industry pioneers.",
};

const SpeakersLayout = ({ children }) => {
  return (
    <div className="max-w-maxWidth w-full lg:w-3/4 h-full px-5 pt-20">
      {children}
    </div>
  );
};

export default SpeakersLayout;
