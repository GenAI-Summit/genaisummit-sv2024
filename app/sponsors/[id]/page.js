import CompanyDetail from "../../Components/CompanyDetail";
import { getSponsorById } from "/lib/api";
import SectionLayout from "../../Layouts/SectionLayout";
import CardLayout from "../../Layouts/CardLayout";

const SponsorPage = async ({ params }) => {
  const sponsor = await getSponsorData(params.id);
  return (
    <div className="w-full">
      <SectionLayout title="Sponsor">
        <div className="mt-4">
          <CardLayout>
            <CompanyDetail company={sponsor} />
          </CardLayout>
        </div>
      </SectionLayout>
    </div>
  );
};

const getSponsorData = async (id) => {
  const sponsor = await getSponsorById(id);
  return sponsor;
};

export default SponsorPage;
