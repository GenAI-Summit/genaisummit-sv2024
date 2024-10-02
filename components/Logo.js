import Image from "next/image";

const Logo = ({ src, alt, width = 200, height = 200, padding = "p-4" }) => {
  return (
    <div className={`w-full h-full flex flex-col justify-center items-center overflow-hidden ${padding}`}>
      <Image src={src} alt={alt} width={width} height={height} loading="lazy" />
    </div>
  );
};

export default Logo;
