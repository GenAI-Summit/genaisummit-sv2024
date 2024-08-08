"use client";

import { useState, useEffect } from "react";
import Zoom from "react-medium-image-zoom";
import "../../styles/zoom.css";
import Image from "next/image";

const IntroCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <Zoom>
      <Image
        src={images[index]}
        alt="intro-carousel"
        width={800}
        height={500}
        className="rounded-lg"
        loading="lazy"
      />
    </Zoom>
  );
};

export default IntroCarousel;
