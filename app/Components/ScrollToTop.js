"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-28 right-10 cursor-pointer z-50 transition-opacity duration-300"
          style={{ opacity: isVisible ? true : false }}
        >
          <Image
            src="/images/icons/goToTop.svg"
            alt="Go to top"
            width={40}
            height={40}
          />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
