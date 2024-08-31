import Image from "next/image";
import styles from "@/styles/icon.module.css";

const Icon = ({ src, alt = "", width = 35, height = 35 }) => {
  return (
    <Image
      className={styles.icon}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Icon;
