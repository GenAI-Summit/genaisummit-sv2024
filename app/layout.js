import { Inter } from "next/font/google";
// import { ThemeProvider } from "./Contexts/Theme";
import Navbar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer";
import FloatFotter from "./Components/FloatFooter";
import ScrollToTop from "./Components/ScrollToTop";
import "./globals.css";

import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Generative AI Summit 2024",
  description: "Generative AI Summit 2024, Santa Clara, CA",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <link rel="icon" href="/images/icons/favicon.ico" sizes="any" />
      <body className={`${inter.className}`}>
        <Navbar />
        <div className="pb-5 flex flex-col items-center text-center bg-color3">
          {children}
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
