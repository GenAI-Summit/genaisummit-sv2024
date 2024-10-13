import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import useMarquee from "@/hooks/useMarquee";

const FullscreenContinuousLogo = () => {
  const { organizations, isLoading, isError } = useMarquee();
  const [visibleLogos, setVisibleLogos] = useState([]);
  const logos = useMemo(() => organizations.map((org) => org.logo), [organizations]);

  useEffect(() => {
    if (logos.length > 0) {
      const emergenceInterval = setInterval(() => {
        if (visibleLogos.length < logos.length) {
          setVisibleLogos(prev => [
            ...prev,
            {
              src: logos[prev.length],
              x: Math.random() * 100,
              y: Math.random() * 100,
            }
          ]);
        } else {
          clearInterval(emergenceInterval);
        }
      }, 1000);

      return () => clearInterval(emergenceInterval);
    }
  }, [logos, visibleLogos]);

  const generateNewPosition = () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
  });

  if (isLoading || isError) {
    return null;
  }

  return (
    <div className="absolute z-40 w-full h-screen overflow-hidden">
      {visibleLogos.map((logo, index) => (
        <motion.img
          key={index}
          src={logo.src}
          className="absolute w-24 h-20 md:w-48 md:h-32 object-contain z-50 rounded-lg bg-theme1Light1"
          initial={{ opacity: 0, x: `${logo.x}vw`, y: `${logo.y}vh` }}
          animate={{
            opacity: 0.9,
            x: [`${logo.x}vw`, `${generateNewPosition().x}vw`, `${generateNewPosition().x}vw`],
            y: [`${logo.y}vh`, `${generateNewPosition().y}vh`, `${generateNewPosition().y}vh`],
          }}
          transition={{
            opacity: { duration: 0.5 },
            x: { duration: 10, times: [0, 0.5, 1], ease: "linear", repeat: Infinity },
            y: { duration: 10, times: [0, 0.5, 1], ease: "linear", repeat: Infinity },
          }}
        />
      ))}
    </div>
  );
};

export default FullscreenContinuousLogo;