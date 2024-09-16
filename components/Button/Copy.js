"use client";

import { useState } from "react";

const Copy = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const onCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <button onClick={onCopy} className="relative group z-0 w-24">
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3"></div>
      <div className="m-[1.5px] rounded-full bg-theme1Dark1 px-4 py-2 transition ease-in-out duration-300 group-hover:bg-gray-800">
        <span className="h-full w-full rounded-full bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text font-light text-transparent">
          {copied ? "Copied!" : "Copy"}
        </span>
      </div>
    </button>
  );
};

export default Copy;