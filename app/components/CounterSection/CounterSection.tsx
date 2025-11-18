import styles from "./CounterSection.module.scss";

const stats = [
  { id: "prosjekter", value: "250+", label: "PROSJEKTER" },
  { id: "kunder", value: "180+", label: "FORNØYDE KUNDER" },
  { id: "erfaring", value: "40+", label: "ÅR MED ERFARING" },
];

export function CounterSection() {
  return (
    <section className={styles.section} aria-label="Nøkkeltall">
      <div className={styles.inner}>
        {stats.map((stat) => (
          <article key={stat.id} className={styles.statCard}>
            <p className={styles.statNumber}>{stat.value}</p>
            <p className={styles.statLabel}>{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
