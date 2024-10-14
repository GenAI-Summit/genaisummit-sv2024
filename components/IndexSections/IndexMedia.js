import SectionLayout from "@/layouts/SectionLayout";
import Logo from "@/components/Logo";
import Link from "next/link";
import MediaBtn from "@/components/Button/MediaBtn";

import { getMedia } from "@/lib/api";

const IndexMedia = async () => {
  const media = await getMediaData();
  return (
    <SectionLayout
      title="Media"
      description="MEDIA COVERAGE OF THIS GENAI SUMMIT"
      widget={<MediaBtn text="Get Media Pass" mode="day" />}
    >
      <div className="w-full mt-8 md:mt-10 flex flex-wrap justify-start items-center gap-y-7 md:gap-y-8 lg:gap-y-4 gap-x-[4%] md:gap-x-[4%] lg:gap-x-[1%]">
        {media.map((media) => (
          <Link
            key={media.id}
            className="w-[48%] h-36 md:w-[30%] md:h-27 lg:w-[19%] lg:h-27 bg-theme1Gray3 cursor-pointer border-2 border-theme1Gray3 ease-in-out duration-300 hover:border-theme1Gray2 rounded-lg shadow-md"
            href={media.url}
            target="_blank"
          >
            <Logo src={media.logo} alt={media.name} />
          </Link>
        ))}
      </div>
    </SectionLayout>
  );
};

const getMediaData = async () => {
  const media = await getMedia();
  return media;
};

export default IndexMedia;
