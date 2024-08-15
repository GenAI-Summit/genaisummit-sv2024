"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
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

  const memoizedImages = useMemo(
    () =>
      images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`intro-carousel-${i + 1}`}
          width={1600}
          height={900}
          className="rounded-lg"
          priority={i === 0}
          loading={i === 0 ? "eager" : "lazy"}
        />
      )),
    [images],
  );

  return (
    <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
      {memoizedImages[index]}
    </ControlledZoom>
  );
};

export default IntroCarousel;
