import { Inter } from "next/font/google";
// import { ThemeProvider } from "./Contexts/Theme";
import Navbar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer";
import FloatFotter from "./Components/FloatFooter";
import ScrollToTop from "./Components/ScrollToTop";
import ShareBar from "./Components/ShareBar";
import "./globals.css";

import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://preview.gptdao.ai"),
  title: "GenAI Summit Silicon Valley 2024 | GPTDAO",
  description:
    "This third large-scale generative AI conference in Silicon Valley will be held from November 1 to November 3, 2024, at the Santa Clara Convention Center.",
  openGraph: {
    type: "website",
    url: "https://preview.gptdao.ai/",
    title: "Generative AI Summit Silicon Valley 2024",
    description:
      "This third large-scale generative AI conference in Silicon Valley will be held from November 1 to November 3, 2024, at the Santa Clara Convention Center.",
    images: [
      {
        url: "/images/propaganda/banner_seo.webp",
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
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${inter.className}`}>
        <Navbar />
        <div className="pb-5 flex flex-col items-center text-center bg-color3">
          {children}
          <div className="m-4">
            <ShareBar />
          </div>
        </div>
        <FloatFotter />
        <Footer />
        <ScrollToTop />
        <Script
          src="https://apis.google.com/js/api.js"
          type="text/javascript"
        ></Script>
      </body>
    </html>
  );
};

export default RootLayout;
