import Link from "next/link";
import Logo from "@/components/Logo";
import ParsedHtml from "@/components/ParsedHtml";

const OrganizationDetail = ({ organization }) => {
  return (
    <div className="flex flex-col items-center md:p-4 p-2 text-theme1Light1">
      <Link
        className="w-64 h-36 bg-theme1Gray3 rounded-lg shadow-md border-2 border-theme1Gray3 hover:border-theme1Gray2 transition duration-300 ease-in-out"
        href={organization.url}
        target="_blank"
      >
        <Logo src={organization.logo} alt={organization.name} />
      </Link>
      <div className="mt-6 text-3xl font-monaspace_neon font-semibold">
        {organization.name}
      </div>
      <div className="mt-6">
        <ParsedHtml html={organization.desc} />
      </div>
    </div>
  );
};

export default OrganizationDetail;
