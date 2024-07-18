import React from "react";

import Image from "next/image";

const Logo = ({ info }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4 border-2 border-white hover:border-sky-500 ease-in-out duration-300">
      <Image
        src={info.image}
        alt={info.name}
        width={200}
        height={200}
        loading="lazy"
      />
    </div>
  );
};

export default Logo;
