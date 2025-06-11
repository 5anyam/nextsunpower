import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
// import Script from "next/script";


import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Next Sun Power",
  description: "Tap into the boundless potential of the sun with NextSunPower – your go-to solar energy company.",
  openGraph: {
    title: "Next Sun Power",
    description: "Tap into the boundless potential of the sun with NextSunPower – your go-to solar energy company.",
    url: "https://nextsunpower.com",
    siteName: "Next Sun Power",
    images: [
      {
        url: "/nextsunpower-logo.svg", // Place this image in /public
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Sun Power",
    description: "Tap into the boundless potential of the sun with NextSunPower – your go-to solar energy company.",
    images: ["/nextsunpower-logo.svg"],
  },
  metadataBase: new URL("https://nextsunpower.com"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <head>
  <link rel="canonical" href="https://www.nextsunpower.com/" />
  {/* <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-8BRKYL2QR2"
    strategy="afterInteractive"
  />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-8BRKYL2QR2');
    `}
  </Script> */}
</head>
      <body
        className={`${inter.className}
        antialiased
        overflow-y-scroll
        w-full
        overflow-x-hidden
      `}>
        <meta name="google-site-verification" content="SrhB-NOlpPpJPL5wP3FpRwuT1yDTE2e0SdFOtcrkfa0" />
        <div className="w-screen p-4 md:p-10 mx-auto bg-white min-h-screen">
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
