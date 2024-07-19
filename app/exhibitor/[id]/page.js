import CompanyDetail from "../../Components/CompanyDetail";
import { getExhibitorById } from "/lib/api";
import SectionLayout from "../../Layouts/SectionLayout";
import CardLayout from "../../Layouts/CardLayout";

const ExhibitorPage = async ({ params }) => {
  const exhibitor = await getExhibitorData(params.id);
  return (
    <div className="w-full">
      <SectionLayout title="Exhibitor">
        <div className="w-full mt-4">
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
