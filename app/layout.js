import { Inter } from "next/font/google";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import FloatFotter from "./Components/FloatFooter";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Generative AI Summit 2024",
  description: "Generative AI Summit 2024, Santa Clara, CA",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <link rel="icon" href="/images/icons/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <Navbar />
        <div className="pt-20 pb-5 px-5 flex flex-col items-center text-center bg-sky-50">
          {children}
        </div>
        <FloatFotter />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
