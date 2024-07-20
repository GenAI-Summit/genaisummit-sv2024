import Link from "next/link";

import SectionLayout from "../Layouts/SectionLayout";
import Logo from "../Components/Logo";

import { getMedia } from "/lib/api";

const Media = async () => {
  const media = await getMediaData();
  return (
    <SectionLayout title="Media" description="MEDIA COVERAGE OF GENAI SUMMIT">
      <div className="w-full flex flex-wrap mt-2 items-center gap-x-8 gap-y-4 justify-start">
        {media.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            target="_blank"
            className="w-full h-36 md:w-48 md:h-27 bg-white cursor-pointer border-2 border-white ease-in-out duration-300 hover:border-sky-500 rounded-lg shadow-md"
          >
            <Logo info={item} />
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

export default Media;
