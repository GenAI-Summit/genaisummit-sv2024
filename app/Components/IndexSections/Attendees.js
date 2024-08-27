import { Suspense } from "react";
import Loader from "../Loader";
import SectionLayout from "../../Layouts/SectionLayout";
import { getNotableAttendees } from "../../../lib/api";
import AttendeesCarousel from "../Carousel/AttendeesCarousel";

const Attendees = async () => {
  const attendeesArray = await getAttendeesData();
  return (
    <SectionLayout
      title="Notable Attendees"
      description="THE WORLD'S LEADING COMPANIES ATTENDED GENAI SUMMIT, 29-31 MAY 2024."
    >
      <div className="w-full mt-8 md:mt-10 flex flex-wrap justify-start items-center gap-y-3 md:gap-y-4 lg:gap-y-4 gap-x-[2%] md:gap-x-[2%] lg:gap-x-[1.5%]">
        <Suspense fallback={<Loader />}>
          <AttendeesCarousel attendeesArray={attendeesArray} />
        </Suspense>
      </div>
    </SectionLayout>
  );
};

const getAttendeesData = async () => {
  const attendees = await getNotableAttendees();
  return attendees;
};

export default Attendees;
