import { Suspense } from "react";
import { Inter } from "next/font/google";
// import { ThemeProvider } from "./Contexts/Theme";
import Navbar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import ShareBar from "./Components/ShareBar";
import FloatFooter from "./Components/FloatFooter";
import Loader from "./Components/Loader";
import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";

import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://genausummit.ai"),
  title: "GenAI Summit Silicon Valley 2024 | GPTDAO",
  description:
    "This third large-scale generative AI conference in Silicon Valley will be held from November 1 to November 3, 2024, at the Santa Clara Convention Center.",
  openGraph: {
    type: "website",
    url: "https://genaisummit.ai/",
    title: "Generative AI Summit Silicon Valley 2024",
    description:
      "This third large-scale generative AI conference in Silicon Valley will be held from November 1 to November 3, 2024, at the Santa Clara Convention Center.",
    images: [
      {
        url: "https://d3ej931a0s5mcg.cloudfront.net/028f7a87-38ab-485b-b7b8-5551be27c7fd/summitPostHori2.png",
        width: 1200,
        height: 630,
        alt: "Generative AI Summit Silicon Valley 2024",
      },
    ],
    siteName: "Generative AI Summit Silicon Valley 2024",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://tally.so/widgets/embed.js"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="f606f641-956b-45db-ad03-4f4c2aa2179c"
        ></script>
        <script
          defer
          src="https://hello.gptdao.ai/script.js"
          data-website-id="abca0cd7-fb79-4c0e-aae6-48ed09441129"
        ></script>
      </head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <div className="pb-5 flex flex-col items-center text-center bg-theme1Dark1 text-theme1Light1">
          <Suspense fallback={<Loader />}>
            <Navbar />
          </Suspense>
          {children}
          <div className="mt-32 mb-10">
            <ShareBar />
          </div>
          <Suspense fallback={<Loader />}>
            <FloatFooter />
          </Suspense>
        </div>
        <Footer />
        <ScrollToTop />
        <Script
          src="https://apis.google.com/js/api.js"
          type="text/javascript"
        ></Script>
      </body>
      <GoogleAnalytics gaId="G-6ETB3L7DWM" />
    </html>
  );
};

export default RootLayout;
