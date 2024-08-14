"use client";

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
  TwitterShareButton,
} from "react-share";

import { usePathname } from "next/navigation";

const ShareBar = () => {
  const url = `https://genaisummit.ai${usePathname()}`;
  return (
    <div>
      <div className="w-10 h-1 mt-2 bg-gradient-to-br from-color1 to-color2" />
      <div className="flex justify-center gap-2 items-center">
        <div className="text-color8 font-bold">Share on:</div>
        <TwitterShareButton url={url}>
          <XIcon size={32} round={true} />
        </TwitterShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
        <FacebookShareButton url={url}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <RedditShareButton url={url}>
          <RedditIcon size={32} round={true} />
        </RedditShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon size={32} round={true} />
        </TelegramShareButton>
        <WhatsappShareButton url={url}>
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
        <EmailShareButton url={url}>
          <EmailIcon size={32} round={true} />
        </EmailShareButton>
      </div>
    </div>
  );
};

export default ShareBar;
