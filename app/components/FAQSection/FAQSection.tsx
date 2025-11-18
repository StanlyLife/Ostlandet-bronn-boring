import styles from "./FAQSection.module.scss";

const faqs = [
  {
    question: "Hvor lang tid tar boring av en energibrønn?",
    answer:
      "Normalt tar boring, montering og innkobling 7–10 arbeidsdager per boligprosjekt. Større energiparker planlegges i etapper for å sikre kontinuerlig drift.",
  },
  {
    question: "Leverer dere i hele Østlandet?",
    answer:
      "Ja, vi dekker Oslo, Viken, Innlandet, Vestfold og Telemark samt prosjekter på Romerike og i Grenlandsområdet.",
  },
  {
    question: "Hvilke garantier gir dere?",
    answer:
      "Vi leverer dokumenterte brønndata, trykktesting og komplett FDV-dokumentasjon. Du får både entreprenørgaranti og serviceavtale ved behov.",
  },
];

export function FAQSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <span>FAQ</span>
          <h2 id="faq-title">Vanlige spørsmål om boring av brønner</h2>
          <p>
            Få raske svar på de vanligste spørsmålene om prosjektgang, område og
            kvalitetssikring.
          </p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq) => (
            <article key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
