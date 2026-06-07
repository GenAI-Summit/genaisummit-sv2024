import OrganizationDetail from "@/components/OrganizationDetail";
import GoBackController from "@/components/Button/GoBackController";
import { getOrganizationById, getOrganizations } from "@/lib/api";
import SectionLayout from "@/layouts/SectionLayout";
import CardLayout from "@/layouts/CardLayout";
import SectionEnter from "@/motions/SectionEnter";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const organizations = await getOrganizations();
  return organizations.map((organization) => ({
    id: String(organization.id),
  }));
};

const SponsorPage = async ({ params }) => {
  let organization = await getOrganizationData(params.id);
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
  let organization = await getOrganizationData(params.id);
  let desc = organization.desc.split(". ")[0] + ".";
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
  let orgnization = await getOrganizationById(id);
  return orgnization;
};

export default SponsorPage;
