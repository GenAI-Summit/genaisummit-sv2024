import Link from "next/link";

import SectionLayout from "../Layouts/SectionLayout";
import Logo from "../Components/Logo";

const Media = ({ media }) => {
  if (media.length === 0) {
    return null;
  }
  return (
    <SectionLayout
      title="Media"
      description="MEDIA COVERAGE OF THE LAST GENAI SUMMIT"
    >
      <div className="w-full flex flex-wrap mt-2 items-center gap-x-[7%] lg:gap-x-4 gap-y-4 justify-start">
        {media.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            target="_blank"
            className="w-[46%] h-36 lg:w-48 lg:h-27 bg-color7 cursor-pointer border-2 border-color7 ease-in-out duration-300 hover:border-color1 rounded-lg shadow-md"
          >
            <Logo src={item.logo} alt={item.name} />
          </Link>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Media;
