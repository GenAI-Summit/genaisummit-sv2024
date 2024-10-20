"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import umamiTrack from "@/lib/umamiTrace";

const paramList = [
  "whova",
  "source",
  "coupon",
  "discount",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "fbclid",
  "visit_from"
];

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

        if (param === "visit_from") {
          umamiTrack("visit_from", value);
        }
      } else {
        const storedValue = sessionStorage.getItem(param);
        if (storedValue) {
          newParams[param] = storedValue;
        }
      }
    });
    setParams(newParams);
  }, [searchParams]);

  // get all params as string, last last one without '&'
  const getAllParamsStr = () => {
    let str = "";
    paramList.forEach((param) => {
      if (params[param]) {
        str += `${param}=${params[param]}&`;
      }
    });
    if (str === "") {
      return "";
    }
    return str.slice(0, -1);
  };
  const getParam = (param) => params[param] || "";

  return { params, getParam, getAllParamsStr };
};

export default useParams;
