import OrgnizationDetail from "../../Components/OrgnizationDetail";
import { getOrgnizationById } from "/lib/api";
import SectionLayout from "../../Layouts/SectionLayout";
import CardLayout from "../../Layouts/CardLayout";

const SponsorPage = async ({ params }) => {
  const orgnization = await getOrgnizationData(params.id);
  return (
    <div className="w-full">
      <SectionLayout title="Sponsor" goBackFlag={true}>
        <div className="w-full mt-4">
          <CardLayout>
            <OrgnizationDetail orgnization={orgnization} />
          </CardLayout>
        </div>
      </SectionLayout>
    </div>
  );
};

const getOrgnizationData = async (id) => {
  const orgnization = await getOrgnizationById(id);
  return orgnization;
};

export default SponsorPage;
