"use client";

import styles from "./Hero.module.scss";
import { cdn } from "../../lib/cdn";

const heroContent = {
  eyebrow: "Totalleverandør på Østlandet",
  title: "Energibrønner",
  highlight: "for hjem, hytte og næringsbygg",
  body: [
    "Vi prosjekterer, borer og kobler til energibrønner og vannbrønner i hele Østlandsregionen med dokumentert effekt i krevende grunnforhold.",
    "Fast pris, kort responstid og ett team som følger deg fra energibehovsanalyse til ferdig varmepumpe og serviceavtale.",
  ],
  cta: { label: "Bestill gratis befaring", href: "#kontakt" },
  image: cdn("/assets/images/new_images/start_slide.webp"),
};

export function Hero() {
  return (
    <section className={styles.hero}>
      <div
        className={styles.slide}
        style={{ backgroundImage: `url(${heroContent.image})` }}
      >
        <div className={styles.content}>
          {heroContent.eyebrow && (
            <p className={styles.eyebrow}>{heroContent.eyebrow}</p>
          )}
          <h1 className={styles.title}>
            {heroContent.title}{" "}
            <span className={styles.highlight}>{heroContent.highlight}</span>
          </h1>
          <p className={styles.body}>
            {heroContent.body.map((line, index) => (
              <span key={`hero-line-${index}`}>
                {line}
                {index < heroContent.body.length - 1 && <br />}
              </span>
            ))}
          </p>
          {heroContent.cta && (
            <div className={styles.ctaRow}>
              <a href={heroContent.cta.href} className={styles.cta}>
                {heroContent.cta.label}
              </a>
              <p className={styles.subCta}>
                eller ring <a href="tel:41512461">415 12 461</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
