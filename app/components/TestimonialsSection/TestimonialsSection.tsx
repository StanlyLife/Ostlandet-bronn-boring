import styles from "./TestimonialsSection.module.scss";

const testimonials = [
  {
    id: "energi-oslo",
    quote:
      "De tok totalansvar for boring av to energibrønner i Oslo, og vi fikk stabil varme og lavere kostnader første sesong.",
    author: "Kari N.",
    subtitle: "Enebolig, Oslo",
  },
  {
    id: "park-viken",
    quote:
      "Østlandet Brønn Boring leverte en komplett energipark til industribygget vårt i Viken på tid og budsjett.",
    author: "Jonas L.",
    subtitle: "Driftssjef, næringsbygg i Viken",
  },
  {
    id: "vann-hytte",
    quote:
      "Hytten i Innlandet fikk rent vann på under to uker takket være god prosjektering og tett oppfølging.",
    author: "Familien Berg",
    subtitle: "Hytteeiere, Innlandet",
  },
];

const caseStudy = {
  title: "Case: 28 energibrønner for kontorbygg i Drammen",
  body: "Vi boret og leverte 28 dype energibrønner, energisentral og komplett innkobling i teknisk rom for et kontorbygg på 8 000 m². Leveransen ga 62 % reduksjon i oppvarmingskostnader og halverte CO₂-avtrykket.",
  metrics: [
    { label: "Brønndybde", value: "280 m" },
    { label: "Tidsramme", value: "9 uker" },
    { label: "Årlig besparelse", value: "1.2 MNOK" },
  ],
};

export function TestimonialsSection() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Kundereferanser fra Østlandet Brønn Boring",
    review: testimonials.map((testimonial) => ({
      "@type": "Review",
      reviewBody: testimonial.quote,
      author: {
        "@type": "Person",
        name: testimonial.author,
      },
      itemReviewed: {
        "@type": "Service",
        name: "Boring av energibrønn og vannbrønn",
        provider: {
          "@type": "Organization",
          name: "Østlandet Brønn Boring",
        },
      },
    })),
  };

  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <span>Referanser</span>
          <h2 id="testimonials-title">
            Bevis på leveranser over hele Østlandet
          </h2>
          <p>
            Prosjekter innen boring av energibrønner, energiparker og
            vannbrønner dokumentert av kunder og samarbeidspartnere.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className={styles.testimonialCard}>
              <p className={styles.quote}>“{testimonial.quote}”</p>
              <div>
                <strong>{testimonial.author}</strong>
                <p className={styles.subtitle}>{testimonial.subtitle}</p>
              </div>
            </article>
          ))}

          <article className={styles.caseCard}>
            <h3>{caseStudy.title}</h3>
            <p>{caseStudy.body}</p>
            <ul className={styles.metrics}>
              {caseStudy.metrics.map((metric) => (
                <li key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    </section>
  );
}
