"use client";

import Link from "next/link";
import Icon from "./Icon";

const Footer = () => {
  const textEffect =
    "bg-gradient-to-br from-theme1FooterTitleColor1 via-theme1FooterTitleColor2 to-theme1FooterTitleColor3 text-transparent bg-clip-text";
  const hoverEffect =
    "hover:bg-gradient-to-br hover:from-theme1FooterTextHoverColor1 hover:via-theme1FooterTextHoverColor2 hover:to-theme1FooterTextHoverColor3 hover:bg-clip-text hover:text-transparent ease-in-out duration-300";
  const socialMedia = [
    {
      name: "x",
      link: "https://x.com/genaisummitsf",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/company/gptdao/",
    },
    {
      name: "facebook",
      link: "https://www.facebook.com/gptdaoai/",
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/genaisummit.xyz",
    },
  ];
  const quickLinks = [
    {
      name: "Partners",
      link: "/partners",
    },
    {
      name: "Speakers",
      link: "/speakers",
    },
    {
      name: "Exhibitors",
      link: "/exhibitors",
    },
    {
      name: "Agenda",
      link: "/agenda",
    },
  ];
  return (
    <div className="flex flex-col bg-theme1FooterBg text-theme1FooterText border-t border-theme1FooterBorder">
      <div className="flex p-7 justify-between flex-wrap items-start gap-y-10">
        <div className="w-full md:w-[30%] flex flex-row md:flex-col justify-around md:justify-between md:gap-y-8 items-center mt-5">
          <Link href="https://gptdao.ai" className="w-fit" target="_blank">
            <Icon
              className="icon"
              src="/images/icons/gptdao3.png"
              alt="GPTDAO Logo"
              width="200"
              height="200"
            />
          </Link>
          <Link
            href="https://santaclaraconventioncenter.com/"
            className="w-fit"
            target="_blank"
          >
            <Icon
              className="icon"
              src="/images/icons/santaclara.png"
              alt="Santa Clara Convention Center Logo"
              width="150"
              height="150"
            />
          </Link>
        </div>
        <div className="w-2/5 md:w-[20%] flex flex-col justify-center mt-5 gap-y-6">
          <div className="text-lg md:text-xl font-bold">
            <span className={textEffect}>Summit Info</span>
          </div>
          <div>Nov 1 - Nov 3, 2024</div>
          <span>
            <Link
              className={hoverEffect}
              href="https://santaclaraconventioncenter.com/"
              target="_blank"
            >
              Santa Clara Convention Center
            </Link>
          </span>
          <div>genaix@gptdao.ai</div>
          <span>
            <Link
              className={hoverEffect}
              href="https://linktr.ee/gptdao"
              target="_blank"
            >
              Contact us
            </Link>
          </span>
        </div>
        <div className="w-2/5 md:w-[15%] flex flex-col justify-center mt-5 gap-y-6">
          <div className="text-lg md:text-xl font-bold">
            <span className={textEffect}>Quick Links</span>
          </div>
          {quickLinks.map((item) => (
            <span key={item.name}>
              <Link href={item.link} className={hoverEffect}>
                {item.name}
              </Link>
            </span>
          ))}
        </div>
        <div className="w-full md:w-[35%] flex flex-col justify-center mt-5 gap-y-6">
          <div className="text-lg md:text-xl font-bold">
            <span className={textEffect}>Stay Connected</span>
          </div>
          <span className="text-base mb-2 leading-8">
            We sincerely invite you to join us, bring your creativity and ideas,
            and explore the future of generative AI together. Please contact us
            for more information.
          </span>
          <div className="flex gap-x-4">
            {socialMedia.map((item) => (
              <Link href={item.link} target="_blank" key={item.name}>
                <Icon
                  className="icon"
                  src={`/images/icons/${item.name}.svg`}
                  alt={item.name}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center md:flex-row md:justify-between p-5 border-t border-color7">
        <div className="text-sm">
          <span className="text-sm">
            <Link href="/privacy" className={hoverEffect}>
              Privacy Policy
            </Link>
          </span>
          <span className="text-sm"> | </span>
          <span className="text-sm">
            <Link href="/terms" className={hoverEffect}>
              Terms of Service
            </Link>
          </span>
        </div>
        <span className="text-sm">
          Copyright 2024 GPTDAO. All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
