"use client";

import { useEffect } from "react";
import Script from "next/script";
import SectionEnter from "../Motions/SectionEnter";
import SectionLayout from "../Layouts/SectionLayout";
import CardLayout from "../Layouts/CardLayout";

const CTCT_SCRIPT_SRC =
  "//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js";
const CTCT_FORM_ID = "dbd60e74-0f3c-45cf-a70a-e7d88e062509";

const useCtctScript = () => {
  useEffect(() => {
    window._ctct_m = "30bb8cd15e4ce5c252b5c0df5da52b42";
  }, []);

  return <Script src={CTCT_SCRIPT_SRC} strategy="lazyOnload" />;
};

const SubscribePage = () => {
  const CtctScript = useCtctScript();

  return (
    <SectionEnter>
      <SectionLayout
        title="Get Updates"
        description="SUBSCRIBE TO OUR NEWSLETTER TO GET THE LATEST UPDATES"
      >
        <CardLayout>
          {CtctScript}
          <div className="ctct-inline-form" data-form-id={CTCT_FORM_ID} />
        </CardLayout>
      </SectionLayout>
    </SectionEnter>
  );
};

export default SubscribePage;
