import { Suspense } from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer";
import BrandDiscoverySummary from "@/components/BrandDiscoverySummary";
import ScrollToTop from "@/components/ScrollToTop";
import ShareBar from "@/components/ShareBar";
import Image from "next/image";
// import FloatFooter from "@/components/FloatFooter";
import Loader from "@/components/Loader";
// import ChatBot from "@/components/ChatBot/ChatBot";
import "@/styles/globals.css";
import ColorUtility from "@/components/ColorUtility";
import { AudioProvider } from "@/hooks/useAudio";
import AudioPlayer from "@/hooks/useAudio";

import { GoogleAnalytics } from "@next/third-parties/google";

import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = "https://sv2024.genaisummit.xyz";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "GenAI Summit Silicon Valley 2024 | GenAI X, Inc. (GPT DAO)",
  description:
    "GenAI Summit Silicon Valley 2024 was a GENAI SUMMIT flagship event associated with GenAI X, Inc. d/b/a GPT DAO, held November 1-3, 2024 at the Santa Clara Convention Center.",
  alternates: {
    canonical: `${siteUrl}/`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/`,
    title: "GenAI Summit Silicon Valley 2024 | GenAI X, Inc. (GPT DAO)",
    description:
      "A GENAI SUMMIT flagship event associated with GenAI X, Inc. d/b/a GPT DAO, held November 1-3, 2024 at the Santa Clara Convention Center.",
    keywords: [
      "GenAI X",
      "GenAIX",
      "Generative AI",
      "GENAI SUMMIT",
      "GenAI Summit",
      "AI",
      "Conference",
      "Technology",
      "Investment",
      "Silicon Valley",
      "GPT DAO",
      "GPTDAO",
      "2024",
    ],
    images: [
      {
        url: `${siteUrl}/images/propaganda/banner_seo.webp`,
        width: 1200,
        height: 630,
        alt: "Generative AI Summit Silicon Valley 2024",
      },
    ],
    siteName: "Generative AI Summit Silicon Valley 2024",
  },
  twitter: {
    card: "summary_large_image",
    title: "GenAI Summit Silicon Valley 2024 | GenAI X, Inc. (GPT DAO)",
    description:
      "A GENAI SUMMIT flagship event associated with GenAI X, Inc. d/b/a GPT DAO, held November 1-3, 2024 at the Santa Clara Convention Center.",
    images: [`${siteUrl}/images/propaganda/banner_seo.webp`],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://genaix.ai/#organization",
      name: "GenAI X, Inc.",
      alternateName: ["GenAI X", "GenAIX", "GPT DAO", "GPTDAO"],
      url: "https://genaix.ai/",
      sameAs: [
        "https://genaisummit.xyz/",
        "https://sf2024.genaisummit.xyz/",
        "https://sv2024.genaisummit.xyz/",
      ],
    },
    {
      "@type": "Event",
      "@id": `${siteUrl}/#event`,
      name: "GenAI Summit Silicon Valley 2024",
      alternateName: ["GENAI SUMMIT SV 2024", "GenAI Summit SV 2024"],
      description:
        "A GENAI SUMMIT flagship event associated with GenAI X, Inc. d/b/a GPT DAO, held from November 1-3, 2024 at the Santa Clara Convention Center.",
      url: `${siteUrl}/`,
      image: `${siteUrl}/images/propaganda/banner_seo.webp`,
      startDate: "2024-11-01",
      endDate: "2024-11-03",
      eventStatus: "https://schema.org/EventCompleted",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Santa Clara Convention Center",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Santa Clara",
          addressRegion: "CA",
          addressCountry: "US",
        },
      },
      organizer: {
        "@id": "https://genaix.ai/#organization",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Student Pass",
          url: "https://whova.com/portal/registration/genai_202405/7zyww8zo",
          price: 139,
          priceCurrency: "USD",
          availability: "https://schema.org/SoldOut",
        },
        {
          "@type": "Offer",
          name: "One-Day Pass",
          url: "https://whova.com/portal/registration/genai_202405",
          price: 259,
          priceCurrency: "USD",
          availability: "https://schema.org/SoldOut",
        },
        {
          "@type": "Offer",
          name: "Three-Day Pass",
          url: "https://whova.com/portal/registration/genai_202405",
          price: 599,
          priceCurrency: "USD",
          availability: "https://schema.org/SoldOut",
        },
        {
          "@type": "Offer",
          name: "VIP Pass",
          url: "https://whova.com/portal/registration/genai_202405",
          price: 1699,
          priceCurrency: "USD",
          availability: "https://schema.org/SoldOut",
        },
      ],
      performer: {
        "@type": "PerformingGroup",
        name: "GenAI Summit Silicon Valley 2024 speakers",
      },
      isPartOf: {
        "@type": "EventSeries",
        "@id": "https://genaisummit.xyz/#event-series",
        name: "GENAI SUMMIT",
        alternateName: "GenAI Summit",
        url: "https://genaisummit.xyz/",
      },
    },
  ],
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content={metadata.openGraph.keywords.join(", ")}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16708105359"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16708105359');
          `}
        </Script>
        {/*<!-- Event snippet for Purchase conversion page -->*/}
        <Script id="google-analytics-event" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {
                'send_to': 'AW-16708105359/TDmPCJ-OqtQZEI_phZ8-',
                'transaction_id': ''
            });
          `}
        </Script>
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
        <AudioProvider>
          <div className="flex-grow pb-5 flex flex-col items-center text-center bg-theme1Dark1 text-theme1Light1">
            <ColorUtility />
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
          <BrandDiscoverySummary />
          <Suspense fallback={<Loader />}>
            <Footer />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollToTop />
          </Suspense>
          <div className="fixed bottom-4 left-4">
            <AudioPlayer />
          </div>
        </AudioProvider>
        {/*
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
        */}
        <Script
          data-bot-id="pub-455d6737-84a0-47d1-bcac-880363df6184"
          src="https://chatbox.copilot.livex.ai/livex.min.js"
          strategy="afterInteractive"
        />
        {/*<!-- Meta Pixel Code -->*/}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
        >
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '493023690363001'); 
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <Image
            height="1"
            width="1"
            src="https://www.facebook.com/tr?id=493023690363001&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          />
        </noscript>
        {/*<!-- End Meta Pixel Code -->*/}
      </body>
      <GoogleAnalytics gaId="G-6ETB3L7DWM" />
    </html>
  );
};

export default RootLayout;
