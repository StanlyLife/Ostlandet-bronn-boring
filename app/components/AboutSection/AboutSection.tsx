import Image from "next/image";
import {
  FaBuilding,
  FaHeadphonesAlt,
  FaHome,
  FaIndustry,
} from "react-icons/fa";
import styles from "./AboutSection.module.scss";
import { cdn } from "../../lib/cdn";

const benefits = [
  { id: "privat", label: "Privat", icon: <FaHome aria-hidden="true" /> },
  {
    id: "kommersielt",
    label: "Kommersielt",
    icon: <FaBuilding aria-hidden="true" />,
  },
  {
    id: "industrielt",
    label: "Industrielt",
    icon: <FaIndustry aria-hidden="true" />,
  },
  {
    id: "konsultering",
    label: "Konsultering",
    icon: <FaHeadphonesAlt aria-hidden="true" />,
  },
];

export function AboutSection() {
  return (
    <section className={styles.section} id="om-oss">
      <div className={styles.inner}>
        <div>
          <div className={styles.titleGroup}>
            <span>Om Oss</span>
            <h2>Vi utfører boring trygt, raskt og kostnadseffektivt</h2>
          </div>
          <p className={styles.lede}>
            Vi bygger videre på en stolt historie fra 80-tallet og leverer
            energiboring på hele Østlandet med fagkunnskap utviklet gjennom
            flere tiår i bransjen.
          </p>
          <p className={styles.copy}>
            Med kunden i fokus prosjekterer vi løsninger som gir stabile
            energikostnader år etter år, uansett om du trenger én energibrønn i
            Oslo, en vannbrønn på hytta i Innlandet eller en større energipark i
            Viken. Vi fornyer kompetansen i takt med bransjen og jobber aktivt
            med bærekraftige teknologier, slik at både privat og profesjonell
            sektor får effektive og trygge leveranser.
          </p>
          <div className={styles.benefits}>
            {benefits.map((benefit) => (
              <div key={benefit.id} className={styles.benefitCard}>
                <span className={styles.iconWrap}>{benefit.icon}</span>
                <strong>{benefit.label}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.imageCard}>
          <Image
            src={cdn("/assets/images/new_images/bronnborring_mann.webp")}
            alt="Fagperson som borer energibrønn"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            style={{ objectFit: "cover" }}
            priority
          />
          <div className={styles.experienceBadge}>
            <strong>40+</strong>
            <small>ÅRS ERFARING</small>
          </div>
        </div>
      </div>
    </section>
  );
}
