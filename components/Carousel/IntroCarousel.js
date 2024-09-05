"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const IntroCarousel = ({ images, imgAspect = "aspect-[4/3]" }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={`relative w-full ${imgAspect} overflow-hidden`}>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`intro-carousel-${i}`}
          fill
          className={`rounded-lg object-cover transition-all duration-1000 ease-in-out ${
            i === index
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          } ${
            i === (index - 1 + images.length) % images.length
              ? "opacity-0 -translate-x-full"
              : ""
          }`}
          priority={i === 0}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
    </div>
  );
};

export default IntroCarousel;
