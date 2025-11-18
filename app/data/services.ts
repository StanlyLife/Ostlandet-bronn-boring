import { cdn } from "../lib/cdn";

export type ServiceInfo = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export const services: ServiceInfo[] = [
  {
    id: 1,
    title: "Boring av energibrønner",
    description:
      "Vi borer energibrønner og leverer komplette løsninger frem til teknisk rom i boliger.",
    image: cdn("/assets/images/energibronn.webp"),
  },
  {
    id: 2,
    title: "Boring av energiparker",
    description:
      "Skalerte parker til næringsbygg og industriprosjekter – fra prosjektering til ferdig anlegg.",
    image: cdn("/assets/images/industri.webp"),
  },
  {
    id: 3,
    title: "Boring av vannbrønner",
    description:
      "Vi borer og installerer komplette vannbrønnssystemer med pumpe og oppsett ved behov.",
    image: cdn("/assets/images/vannbronn.webp"),
  },
];
