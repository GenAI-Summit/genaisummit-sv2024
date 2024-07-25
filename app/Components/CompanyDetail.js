import Link from "next/link";
import Logo from "./Logo";

const CompanyDetail = ({ company }) => {
  return (
    <div className="flex flex-col items-center md:px-3 md:py-2 p-1">
      <Link className="w-64 h-36 bg-cardBg" href={company.url} target="_blank">
        <Logo info={company} />
      </Link>
      <Link
        href={company.url}
        target="_blank"
        className="mt-4 text-2xl font-bold hover:text-color1 duration-300 ease-in-out"
      >
        {company.name}
      </Link>
      <div className="mt-4 text-left text-lg md:text-xl">
        {company.description}
      </div>
    </div>
  );
};

export default CompanyDetail;
