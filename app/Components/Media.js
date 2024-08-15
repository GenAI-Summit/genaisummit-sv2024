import SectionLayout from "../Layouts/SectionLayout";
import Link from "next/link";
import Logo from "./Logo";

const Media = ({ media }) => {
  if (media.length === 0) {
    return null;
  }
  return (
    <SectionLayout
      title="Media"
      description="MEDIA COVERAGE OF THE LAST GENAI SUMMIT"
    >
      <div className="w-full flex flex-wrap mt-12 items-center gap-x-[4%] md:gap-x-[4%] lg:gap-x-[2%] gap-y-6 md:gap-y-8 lg:gap-y-4 justify-start">
        {media.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            target="_blank"
            className="w-[48%] h-36 md:w-[30%] md:h-27 lg:w-[23.5%] lg:h-27 bg-color13 cursor-pointer border-2 border-color11 ease-in-out duration-300 hover:border-color12 rounded-lg shadow-md"
          >
            <Logo src={item.logo} alt={item.name} />
          </Link>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Media;
