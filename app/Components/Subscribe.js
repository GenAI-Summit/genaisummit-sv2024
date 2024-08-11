"use client";

import { useEffect } from "react";
import SectionLayout from "../Layouts/SectionLayout";
import CardLayout from "../Layouts/CardLayout";

const Subscribe = () => {
  useEffect(() => {
    window._ctct_m = "30bb8cd15e4ce5c252b5c0df5da52b42";
    const script = document.createElement("script");
    script.id = "signupScript";
    script.src =
      "//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <SectionLayout
      title="Get Updates"
      description="SUBSCRIBE TO OUR NEWSLETTER TO GET THE LATEST UPDATES"
    >
      <CardLayout>
        <div
          className="ctct-inline-form"
          data-form-id="dbd60e74-0f3c-45cf-a70a-e7d88e062509"
        ></div>
      </CardLayout>
    </SectionLayout>
  );
};

export default Subscribe;
