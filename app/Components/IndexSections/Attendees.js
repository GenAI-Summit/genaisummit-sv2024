import SectionLayout from "../../Layouts/SectionLayout";
import Logo from "../Logo";
import Link from "next/link";
import { getNotableAttendees } from "../../../lib/api";

const Attendees = async () => {
  const attendees = await getAttendeesData();
  return (
    <SectionLayout
      title="Notable Attendees"
      description="THE WORLD'S LEADING COMPANIES ATTENDED GENAI SUMMIT, 29-31 MAY 2024."
    >
      <div className="mt-8 md:mt-10 flex flex-wrap justify-start items-center gap-y-3 md:gap-y-4 lg:gap-y-4 gap-x-[2%] md:gap-x-[2%] lg:gap-x-[1.5%]">
        {attendees.map((media) => (
          <Link
            key={media.id}
            className="w-[23%] h-24 md:w-[23%] md:h-28 lg:w-[15%] lg:h-32 bg-theme1Gray3 cursor-pointer border-2 border-theme1Gray3 ease-in-out duration-300 hover:border-theme1Gray2 rounded-lg shadow-md"
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

const getAttendeesData = async () => {
  const attendees = await getNotableAttendees();
  return attendees;
};

export default Attendees;
