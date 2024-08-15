import Link from "next/link";
import Logo from "./Logo";
import ParsedHtml from "./ParsedHtml";

const OrganizationDetail = ({ organization }) => {
  return (
    <div className="flex flex-col items-center md:p-4 p-2 text-color6">
      <Link
        className="w-64 h-36 bg-cardBg"
        href={organization.url}
        target="_blank"
      >
        <Logo src={organization.logo} alt={organization.name} />
      </Link>
      <div className="mt-6 text-3xl font-monaspace_neon font-semibold">
        {organization.name}
      </div>
      <div className="mt-6 text-color6">
        <ParsedHtml html={organization.desc} />
      </div>
    </div>
  );
};

export default OrganizationDetail;
