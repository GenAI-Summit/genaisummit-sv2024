import OrganizationDetail from "../../Components/OrganizationDetail";
import GoBackController from "../../Components/GoBackController";
import { getOrganizationById } from "/lib/api";
import SectionLayout from "../../Layouts/SectionLayout";
import CardLayout from "../../Layouts/CardLayout";
import SectionEnter from "../../Motions/SectionEnter";

const SponsorPage = async ({ params }) => {
  const organization = await getOrganizationData(params.id);
  return (
    <SectionEnter>
      <SectionLayout title="Sponsor" widget={<GoBackController />}>
        <div className="w-full mt-4">
          <CardLayout>
            <OrganizationDetail organization={organization} />
          </CardLayout>
        </div>
      </SectionLayout>
    </SectionEnter>
  );
};

const getOrganizationData = async (id) => {
  const orgnization = await getOrganizationById(id);
  return orgnization;
};

export default SponsorPage;
