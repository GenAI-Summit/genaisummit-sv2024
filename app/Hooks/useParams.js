"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const paramList = ["source"];

const useParams = () => {
  const searchParams = useSearchParams();
  const [params, setParams] = useState({});

  useEffect(() => {
    const newParams = {};
    paramList.forEach((param) => {
      const value = searchParams.get(param);
      if (value) {
        newParams[param] = value;
        sessionStorage.setItem(param, value);
      } else {
        const storedValue = sessionStorage.getItem(param);
        if (storedValue) {
          newParams[param] = storedValue;
        }
      }
    });
    setParams(newParams);
  }, [searchParams]);

  const getParam = (param) => params[param] || "";

  return <Suspense>{(params, getParam)}</Suspense>;
};

export default useParams;
