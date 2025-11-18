import type { Metadata } from "next";
import {
  AboutSection,
  CounterSection,
  FAQSection,
  Footer,
  Header,
  HelpSection,
  Hero,
  ServicesSection,
  TestimonialsSection,
} from "./components";
import { services } from "./data/services";
import { cdn } from "./lib/cdn";

const siteUrl = "https://bronn-energiboring.no";

export const metadata: Metadata = {
  title: {
    default:
      "Østlandet Brønn Boring – Energibrønner og vannbrønner på Østlandet",
    template: "%s | Østlandet Brønn Boring",
  },
  description:
    "Totalleverandør av boring av energibrønner, energiparker og vannbrønner på Østlandet. Prosjektering, boring og innkobling for privat, næring og offentlig sektor.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Østlandet Brønn Boring | Boring av energibrønner og vannbrønner",
    description:
      "Spesialister på energibrønner, vannbrønner og energiparker for hjem, hytter og næringsbygg i hele Østlandet.",
    images: [
      {
        url: cdn("/assets/images/new_images/start_slide.webp"),
        width: 1200,
        height: 630,
        alt: "Østlandet Brønn Boring – Energibrønner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Østlandet Brønn Boring",
    description:
      "Boring av energibrønner, energiparker og vannbrønner på Østlandet siden 1980-tallet.",
    images: [cdn("/assets/images/new_images/start_slide.webp")],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Tjenester fra Østlandet Brønn Boring",
  itemListElement: services.map((service, index) => ({
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Østlandet Brønn Boring",
      url: siteUrl,
      areaServed: "Østlandet, Norge",
    },
    url: `${siteUrl}#tjenester`,
    position: index + 1,
  })),
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <CounterSection />
        <FAQSection />
        <HelpSection />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
