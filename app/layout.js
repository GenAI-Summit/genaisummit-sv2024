import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Generative AI Summit 2024",
  description: "Generative AI Summit 2024, Santa Clara, CA",
};

// TODO: temporary padding
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-20 pb-5 px-5 flex flex-col items-center text-center bg-sky-50">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
