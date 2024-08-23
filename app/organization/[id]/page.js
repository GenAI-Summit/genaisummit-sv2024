import OrganizationDetail from "../../Components/OrganizationDetail";
import GoBackController from "../../Components/Button/GoBackController";
import { getOrganizationById } from "/lib/api";
import SectionLayout from "../../Layouts/SectionLayout";
import CardLayout from "../../Layouts/CardLayout";
import SectionEnter from "../../Motions/SectionEnter";

const SponsorPage = async ({ params }) => {
  const organization = await getOrganizationData(params.id);
  return (
    <SectionEnter>
      <div className="w-full mt-10">
        <SectionLayout title="Organization" widget={<GoBackController />}>
          <div className="w-full mt-6">
            <CardLayout bgColor="bg-theme1Dark3">
              <OrganizationDetail organization={organization} />
            </CardLayout>
          </div>
        </SectionLayout>
      </div>
    </SectionEnter>
  );
};

export const generateMetadata = async ({ params }) => {
  const organization = await getOrganizationData(params.id);
  const desc = organization.desc.split(". ")[0] + ".";
  return {
    title: `${organization.name} | GenAI Summit Silicon Valley 2024 | GPTDAO`,
    description: desc,
    image: organization.logo,
    keywords: [
      "GenAI Summit",
      "Silicon Valley",
      "GPTDAO",
      "2024",
      organization.name,
      organization.categories,
    ],
  };
};

const getOrganizationData = async (id) => {
  const orgnization = await getOrganizationById(id);
  return orgnization;
};

export default SponsorPage;
