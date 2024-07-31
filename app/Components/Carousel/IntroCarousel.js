"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const IntroCarousel = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/images/propaganda/intro1.jpg",
    "/images/propaganda/intro2.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="intro-carousel">
      <Image
        src={images[index]}
        alt="intro-carousel"
        width={800}
        height={500}
        className="rounded-lg"
      />
    </div>
  );
};

export default IntroCarousel;
