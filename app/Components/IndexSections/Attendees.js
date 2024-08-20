"use client";

import SectionLayout from "../../Layouts/SectionLayout";
import Loader from "../Loader";
import Error from "../Error";
import useExhibitors from "../../Hooks/useExhibitors";
import Logo from "../Logo";
import Link from "next/link";

const Attendees = () => {
  const { attendees, isLoading, isError } = useExhibitors();
  if (isLoading) return <Loader />;
  if (isError) return <Error />;
  return (
    <SectionLayout
      title="Notable Attendees"
      description="THE WORLD'S LEADING COMPANIES ATTENDED GENAI SUMMIT, 29-31 MAY 2024."
    >
      <div className="mt-8 md:mt-10 flex flex-wrap justify-start items-center gap-y-7 md:gap-y-7 lg:gap-y-6 gap-x-[4%] md:gap-x-[4%] lg:gap-x-[2%]">
        {attendees.map((media) => (
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

export default Attendees;
