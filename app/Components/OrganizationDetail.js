import Link from "next/link";
import Logo from "./Logo";

import parse from "html-react-parser";

const OrganizationDetail = ({ organization }) => {
  return (
    <div className="flex flex-col items-center md:px-3 md:py-2 p-1">
      <Link
        className="w-64 h-36 bg-cardBg"
        href={organization.url}
        target="_blank"
      >
        <Logo src={organization.logo} alt={organization.name} />
      </Link>
      <div className="mt-4 text-2xl font-bold">{organization.name}</div>
      <div className="mt-2 text-left text-lg md:text-xl">
        {parse(organization.desc)}
      </div>
    </div>
  );
};

export default OrganizationDetail;
