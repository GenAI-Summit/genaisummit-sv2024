import CompanyDetail from "../../Components/CompanyDetail";
import { getOrgById } from "/lib/api";
import SectionLayout from "../../Layouts/SectionLayout";
import CardLayout from "../../Layouts/CardLayout";

const SponsorPage = async ({ params }) => {
  const org = await getOrgData(params.id);
  return (
    <div className="w-full">
      <SectionLayout title="Sponsor">
        <div className="w-full mt-4">
          <CardLayout>
            <CompanyDetail company={org} />
          </CardLayout>
        </div>
      </SectionLayout>
    </div>
  );
};

const getOrgData = async (id) => {
  const org = await getOrgById(id);
  return org;
};

export default SponsorPage;
