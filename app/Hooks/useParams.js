"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const useParams = () => {
  const searchParams = useSearchParams();
  const [source, setSource] = useState("");

  useEffect(() => {
    const sourceParam = searchParams.get("source");

    if (sourceParam) {
      setSource(sourceParam);
      localStorage.setItem("source", sourceParam);
    } else {
      const storedSource = localStorage.getItem("source");
      if (storedSource) {
        setSource(storedSource);
      }
    }
  }, [searchParams]);

  return source;
};

export default useParams;
