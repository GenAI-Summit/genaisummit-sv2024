import Link from "next/link";
import Logo from "./Logo";

const CompanyDetail = ({ company }) => {
  return (
    <div className="flex flex-col items-center">
      <Link className="w-64 h-36 bg-white" href={company.url} target="_blank">
        <Logo info={company} />
      </Link>
      <div className="mt-4 text-2xl font-bold">{company.name}</div>
      <div className="mt-4">{company.description}</div>
    </div>
  );
};

export default CompanyDetail;
