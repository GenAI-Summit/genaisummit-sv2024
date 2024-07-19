"use client";

import Link from "next/link";
import Icon from "./Icon";
import styles from "../styles/footer.module.css";

const Footer = () => {
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
    <div className="flex flex-col bg-black text-gray-500">
      <div className="flex p-7 justify-between flex-wrap items-start">
        <div className="w-full md:w-1/5 flex flex-row md:flex-col justify-around items-center">
          <Link href="/" className="w-fit bg-white">
            <Icon
              className="icon"
              src="/images/icons/gptdao2.png"
              alt="GPTDAO Logo"
              width="200"
              height="200"
            />
          </Link>
          <Link
            href="https://santaclaraconventioncenter.com/"
            className="w-fit bg-white"
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
        <div className="w-2/5 md:w-1/5 flex flex-col justify-center">
          <div className="text-white text-lg md:text-xl font-bold">
            Summit Info
          </div>
          <div className={styles.content}>Nov 1 - Nov 3, 2024</div>
          <div className={`${styles.content}`}>
            <Link
              className="hover:text-sky-500"
              href="https://santaclaraconventioncenter.com/"
              target="_blank"
            >
              Santa Clara Convention Center
            </Link>
          </div>
          <div className={styles.content}>genaix@gptdao.ai</div>
          <div className={`${styles.content}`}>
            <Link
              className="hover:text-sky-500 ease-in-out duration-300"
              href="https://linktr.ee/gptdao"
              target="_blank"
            >
              Contact us
            </Link>
          </div>
        </div>
        <div className="w-2/5 md:w-1/5 flex flex-col justify-center">
          <div className="text-white text-lg md:text-xl font-bold">
            Quick Links
          </div>
          <div className="flex flex-col text-lg">
            {quickLinks.map((item) => (
              <Link href={item.link} key={item.name}>
                <span className="hover:text-sky-500 ease-in-out duration-300">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full md:w-2/5 flex flex-col justify-center">
          <div className="text-white text-lg md:text-xl font-bold">
            Stay Connected
          </div>
          <span className="text-sm">
            We sincerely invite you to join us, bring your creativity and ideas,
            and explore the future of generative AI together. Please contact us
            for more information.
          </span>
          <div className={`${styles.content} ${styles.icons}`}>
            {socialMedia.map((item) => (
              <Link href={item.link} target="_blank" key={item.name}>
                <Icon
                  className="icon"
                  src={`/images/icons/${item.name}.png`}
                  alt={item.name}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center md:flex-row md:justify-between p-5 border-t border-gray-700">
        <div className="text-sm">
          <span className="text-sm">
            <Link href="/privacy" className="hover:text-sky-500">
              Privacy Policy
            </Link>
          </span>
          <span className="text-sm"> | </span>
          <span className="text-sm">
            <Link href="/terms" className="hover:text-sky-500">
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
