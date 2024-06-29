import React from "react";

import Link from "next/link";
import Image from "next/image";

const Logo = ({ info }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4 border-2 hover:border-sky-500 ease-in-out duration-300">
      <Link href={info.url} target="_blank">
        <Image src={info.logo} alt={info.name} width={200} height={200} />
      </Link>
    </div>
  );
};

export default Logo;
