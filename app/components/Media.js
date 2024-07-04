import Link from "next/link";

import SectionLayout from "../layouts/SectionLayout";
import Logo from "../components/Logo";

const Media = async () => {
  const media = await getMediaData();
  return (
    <SectionLayout title="Media" description="MEDIA COVERAGE OF GENAI SUMMIT">
      <div className="flex flex-wrap mt-2 items-center gap-x-8 gap-y-4">
        {media.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            target="_blank"
            className="w-full h-36 md:w-48 md:h-27 bg-white"
          >
            <Logo info={item} />
          </Link>
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
      image: "/media/washingtonpost.webp",
      url: "https://www.washingtonpost.com/",
    },
    {
      id: 1,
      name: "NBC",
      image: "/media/nbcnews.webp",
      url: "https://www.nbcnews.com/",
    },
    {
      id: 2,
      name: "Bloomberg",
      image: "/media/bloomberg.webp",
      url: "https://www.bloomberg.com/",
    },
    {
      id: 3,
      name: "Business Insider",
      image: "/media/businessinsider.webp",
      url: "https://www.businessinsider.com/",
    },
  ];
  return media;
};

export default Media;
