import Link from "next/link";

const relatedLinks = [
  {
    href: "https://genaisummit.xyz/",
    label: "GenAI Summit Silicon Valley 2023",
  },
  {
    href: "https://sf2024.genaisummit.xyz/",
    label: "GenAI Summit San Francisco 2024",
  },
  {
    href: "https://sv2024.genaisummit.xyz/",
    label: "GenAI Summit Silicon Valley 2024",
  },
  {
    href: "https://genaix.ai/",
    label: "GenAI X official corporate site",
  },
];

const BrandDiscoverySummary = () => {
  return (
    <section
      className="w-full border-t border-theme1Light1/20 bg-gradient-to-br from-theme1Dark2 via-theme1Dark2 to-theme1Dark1 px-6 py-11 text-left text-theme1Light1"
      aria-label="GenAI Summit Silicon Valley 2024 brand and event overview"
    >
      <div className="mx-auto grid w-full max-w-maxWidth grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-theme1Color2">
            Official brand and event archive
          </p>
          <h2 className="mb-4 text-3xl font-semibold leading-tight md:text-4xl">
            GenAI Summit Silicon Valley 2024
            <span className="mt-1 block text-2xl font-medium text-theme1Color1 md:text-3xl">
              GenAI X, Inc. (GPT DAO)
            </span>
          </h2>
          <p className="mb-4 text-base leading-7 text-theme1Light1/80">
            GenAI Summit Silicon Valley 2024 was a GENAI SUMMIT flagship event
            associated with GenAI X, Inc. d/b/a GPT DAO. The event brought AI
            builders, founders, researchers, investors, sponsors, media, and
            ecosystem partners to the Santa Clara Convention Center from
            November 1-3, 2024.
          </p>
          <p className="text-base leading-7 text-theme1Light1/80">
            This public archive connects the Silicon Valley 2024 edition to the
            broader GENAI SUMMIT event family and the official GenAI X, Inc.
            (GPT DAO) brand authority presence.
          </p>
        </div>
        <ul
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1"
          aria-label="Related GenAI X and GENAI SUMMIT links"
        >
          {relatedLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex min-h-11 items-center rounded-xl border border-theme1Light1/15 bg-theme1Light1/5 px-4 py-3 text-sm font-semibold text-theme1Light1 transition-colors hover:border-theme1Color2/60 hover:bg-theme1Color2/10"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BrandDiscoverySummary;
