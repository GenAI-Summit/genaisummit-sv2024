import OrganizationDetail from "../../Components/OrganizationDetail";
import GoBackController from "../../Components/Button/GoBackController";
import { getOrganizationById } from "/lib/api";
import SectionLayout from "../../Layouts/SectionLayout";
import CardLayout from "../../Layouts/CardLayout";
import SectionEnter from "../../Motions/SectionEnter";

// export const runtime = "edge";

const SponsorPage = async ({ params }) => {
  const organization = await getOrganizationData(params.id);
  return (
    <SectionEnter>
      <div className="w-full mt-10">
        <SectionLayout title="Sponsor" widget={<GoBackController />}>
          <div className="w-full mt-6">
            <CardLayout>
              <OrganizationDetail organization={organization} />
            </CardLayout>
          </div>
        </SectionLayout>
      </div>
    </SectionEnter>
  );
};

const getOrganizationData = async (id) => {
  const orgnization = await getOrganizationById(id);
  return orgnization;
};

export default SponsorPage;
