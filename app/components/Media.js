import SectionLayout from "../layouts/SectionLayout";
import Logo from "../components/Logo";

const Media = async () => {
  const media = await getMediaData();
  return (
    <SectionLayout title="Media" description="MEDIA COVERAGE OF GENAI SUMMIT">
      <div className="flex flex-wrap flex-center mt-2 gap-x-8 gap-y-4">
        {media.map((item) => (
          <div key={item.id} className="w-full h-36 md:w-1/4 md:h-28 bg-white">
            <Logo info={item} />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

const getMediaData = async () => {
  const media = [
    {
      id: 0,
      name: "Washington Post",
      logo: "/media/washingtonpost.webp",
      url: "https://www.washingtonpost.com/",
    },
    {
      id: 1,
      name: "NBC",
      logo: "/media/nbcnews.webp",
      url: "https://www.nbcnews.com/",
    },
    {
      id: 2,
      name: "Bloomberg",
      logo: "/media/bloomberg.webp",
      url: "https://www.bloomberg.com/",
    },
    {
      id: 3,
      name: "Business Insider",
      logo: "/media/businessinsider.webp",
      url: "https://www.businessinsider.com/",
    },
  ];
  return media;
};

export default Media;
