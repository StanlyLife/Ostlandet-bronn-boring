import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import styles from "./HelpSection.module.scss";

export function HelpSection() {
  return (
    <section className={styles.section} id="kontakt">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <span>Gratis befaring</span>
          <h2>Vi kommer gjerne på uforpliktende befaring</h2>
          <p>
            Ta kontakt for prisestimat, energibehovsanalyse eller faglige råd om
            boring av energibrønn og vannbrønn i Oslo, Viken, Innlandet eller
            Vestfold og Telemark. Vi svarer raskt og finner et tidspunkt som
            passer.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Ta direkte kontakt</h3>
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <FaPhoneAlt aria-hidden="true" />
              <div>
                <span>Ring oss </span>
                <a href="tel:41512461">415 12 461</a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <FaEnvelope aria-hidden="true" />
              <div>
                <span>Send e-post </span>
                <a href="mailto:post@bronn-energiboring.no">
                  post@bronn-energiboring.no
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
