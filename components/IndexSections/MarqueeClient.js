"use client";

import dynamic from "next/dynamic";

const MarqueeClient = dynamic(() => import("@/components/IndexSections/Marquee"), {
  ssr: false,
});

export default MarqueeClient;
