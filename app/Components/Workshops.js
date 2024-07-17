import Link from "next/link";
import SectionLayout from "../Layouts/SectionLayout";
import Logo from "../Components/Logo";
import { getWorkshops } from "/lib/api";

const Workshops = async () => {
  const workshops = await getWorkshopsData();
  return (
    <SectionLayout
      title="Workshops"
      description="LEARN FROM THE BEST IN THE INDUSTRY"
    >
      <div className="flex flex-wrap mt-2 items-center gap-x-8 gap-y-4">
        {workshops.map((workshop) => (
          <Link
            key={workshop.id}
            href={workshop.url}
            target="_blank"
            className="w-full h-36 md:w-48 md:h-27 bg-white"
          >
            <Logo info={workshop} />
          </Link>
        ))}
      </div>
    </SectionLayout>
  );
};

const getWorkshopsData = async () => {
  const workshops = await getWorkshops();
  return workshops;
};

export default Workshops;
