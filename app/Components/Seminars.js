import Link from "next/link";
import SectionLayout from "../layouts/SectionLayout";
import Logo from "../components/Logo";
import { getSeminars } from "/lib/api";

const Seminars = async () => {
  const seminars = await getSeminarsData();
  return (
    <SectionLayout
      title="Seminars"
      description="IN-DEPTH KNOWLEDGE SHARING SESSIONS"
    >
      <div className="flex flex-wrap mt-2 items-center gap-x-8 gap-y-4">
        {seminars.map((seminar) => (
          <Link
            key={seminar.id}
            href={seminar.url}
            target="_blank"
            className="w-full h-36 md:w-48 md:h-27 bg-white"
          >
            <Logo info={seminar} />
          </Link>
        ))}
      </div>
    </SectionLayout>
  );
};

const getSeminarsData = async () => {
  const Seminars = await getSeminars();
  return Seminars;
};

export default Seminars;
