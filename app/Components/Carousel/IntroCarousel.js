"use client";

import { useState, useEffect, useCallback } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "../../styles/zoom.css";
import Image from "next/image";

const IntroCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!isZoomed) {
      const interval = setInterval(() => {
        setIndex((index) => (index + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isZoomed, images.length]);

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
      <Image
        src={images[index]}
        alt="intro-carousel"
        width={1600}
        height={900}
        className="rounded-lg"
        loading="lazy"
      />
    </ControlledZoom>
  );
};

export default IntroCarousel;
