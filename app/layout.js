import { Suspense } from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ShareBar from "@/components/ShareBar";
// import FloatFooter from "@/components/FloatFooter";
import Loader from "@/components/Loader";
// import ChatBot from "@/components/ChatBot/ChatBot";
import "@/styles/globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";

import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://genausummit.ai"),
  title: "GenAI Summit Silicon Valley 2024 | GPTDAO",
  description:
    "Explore the future possibilities at the GenAI Summit from November 1 to November 3, 2024, at the Santa Clara Convention Center.",
  openGraph: {
    type: "website",
    url: "https://genaisummit.ai/",
    title: "Generative AI Summit Silicon Valley 2024",
    description:
      "This third large-scale generative AI conference in Silicon Valley will be held from November 1 to November 3, 2024, at the Santa Clara Convention Center.",
    keywords: [
      "Generative AI",
      "AI",
      "Conference",
      "Technology",
      "Investment",
      "Silicon Valley",
      "GPTDAO",
      "2024",
    ],
    images: [
      {
        url: "https://genaisummit.ai/images/propaganda/banner_seo.webp",
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
        <meta
          name="keywords"
          content={metadata.openGraph.keywords.join(", ")}
        />
        <Script
          strategy="lazyOnload"
          src="https://tally.so/widgets/embed.js"
          crossOrigin="anonymous"
        />
        <Script
          strategy="lazyOnload"
          src="https://hello.gptdao.ai/script.js"
          data-website-id="abca0cd7-fb79-4c0e-aae6-48ed09441129"
        />
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="lazyOnload"
        />
      </head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <div className="flex-grow pb-5 flex flex-col items-center text-center bg-theme1Dark1 text-theme1Light1">
          <Suspense fallback={<Loader />}>
            <Navbar />
          </Suspense>
          {children}
          <div className="mt-32 mb-10">
            <Suspense fallback={<Loader />}>
              <ShareBar />
            </Suspense>
          </div>
        </div>
        <Suspense fallback={<Loader />}>
          <Footer />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <ScrollToTop />
        </Suspense>
        <Script
          src="https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/0.1.0-beta.5/libs/oversea/index.js"
          strategy="beforeInteractive"
        />
        <Script id="coze-init" strategy="afterInteractive">
          {`
            if (typeof window !== 'undefined' && window.CozeWebSDK) {
              new window.CozeWebSDK.WebChatClient({
                config: {
                  bot_id: '7408265523265929221',
                },
                componentProps: {
                  title: 'Coze',
                },
              });
            }
          `}
        </Script>
        <Script
          data-bot-id="pub-455d6737-84a0-47d1-bcac-880363df6184"
          src="https://chatbox.copilot.livex.ai/livex.min.js"
          strategy="afterInteractive"
        />
      </body>
      <GoogleAnalytics gaId="G-6ETB3L7DWM" />
    </html>
  );
};

export default RootLayout;