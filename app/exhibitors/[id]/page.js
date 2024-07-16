import CompanyDetail from "../../components/CompanyDetail";
import { getExhibitorById } from "/lib/api";
import SectionLayout from "../../layouts/SectionLayout";
import CardLayout from "../../layouts/CardLayout";

const ExhibitorPage = async ({ params }) => {
  const exhibitor = await getExhibitorData(params.id);
  return (
    <div className="w-full">
      <SectionLayout title="Exhibitor">
        <div className="mt-4">
          <CardLayout>
            <CompanyDetail company={exhibitor} />
          </CardLayout>
        </div>
      </SectionLayout>
    </div>
  );
};

const getExhibitorData = async (id) => {
  const exhibitor = await getExhibitorById(id);
  return exhibitor;
};

export default ExhibitorPage;
