import React from "react";

import Image from "next/image";

const Logo = ({ src, alt }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4 overflow-hidden">
      <Image src={src} alt={alt} width={200} height={200} loading="lazy" />
    </div>
  );
};

export default Logo;
