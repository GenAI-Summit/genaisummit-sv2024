import SectionLayout from "@/layouts/SectionLayout";
import Logo from "@/components/Logo";
import Link from "next/link";

import { getMedia } from "@/lib/api";

const IndexMedia = async () => {
  const media = await getMediaData();
  return (
    <SectionLayout
      title="Media"
      description="MEDIA COVERAGE OF THE LAST GENAI SUMMIT"
    >
      <div className="mt-8 md:mt-10 flex flex-wrap justify-start items-center gap-y-7 md:gap-y-7 lg:gap-y-6 gap-x-[4%] md:gap-x-[4%] lg:gap-x-[2%]">
        {media.map((media) => (
          <Link
            key={media.id}
            className="w-[48%] h-36 md:w-[30%] lg:w-[23%] lg:h-27 bg-theme1Gray3 cursor-pointer border-2 border-theme1Gray3 ease-in-out duration-300 hover:border-theme1Gray2 rounded-lg shadow-md"
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
