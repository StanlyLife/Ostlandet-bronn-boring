import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./globals.css";
import { cdn } from "./lib/cdn";

export const metadata: Metadata = {
  title: "Østlandet brønn boring",
  description:
    "Østlandet Brønn Boring leverer boring av energibrønner, energiparker og vannbrønner for både privat og kommersiell virksomhet.",
  metadataBase: new URL("https://bronn-energiboring.no"),
  icons: {
    icon: cdn("/assets/images/1.svg"),
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Østlandet Brønn Boring",
  url: "https://bronn-energiboring.no",
  telephone: "+4741512461",
  email: "post@bronn-energiboring.no",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NO",
    addressRegion: "Viken",
    addressLocality: "Lillestrøm",
  },
  areaServed: ["Oslo", "Viken", "Innlandet", "Vestfold og Telemark"],
  serviceType: ["Boring av energibrønn", "Boring av vannbrønn", "Energiparker"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body className={poppins.className}>
        {children}
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5MMHYB0BM4"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5MMHYB0BM4');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
