import Link from "next/link";

import SectionLayout from "../layouts/SectionLayout";
import Logo from "../components/Logo";

import { getMedia } from "/lib/api";

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
  const media = await getMedia();
  return media;
};

export default Media;
