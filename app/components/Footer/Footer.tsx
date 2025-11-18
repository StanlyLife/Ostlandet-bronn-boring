import Image from "next/image";
import styles from "./Footer.module.scss";
import { cdn } from "../../lib/cdn";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Image
            src={cdn("/assets/images/1.svg")}
            alt="Østlandet brønn boring"
            width={120}
            height={120}
            style={{ width: "120px", height: "auto" }}
          />
          <p>
            Vi bygger videre på en stolt historie fra 80-tallet og leverer bore-
            og energiløsninger for privat, kommersiell og industriell sektor i
            hele Østlandet.
          </p>
        </div>

        <div className={styles.contactBlock}>
          <h3>Kontaktinformasjon</h3>
          <div className={styles.contactItem}>
            <span>Adresse</span>
            <p>Sverres gate 3A, 3186 Horten</p>
          </div>
          <div className={styles.contactItem}>
            <span>Telefon</span>
            <p>
              <a href="tel:41512461">415 12 461</a>
            </p>
          </div>
          <div className={styles.contactItem}>
            <span>E-post</span>
            <p>
              <a href="mailto:post@bronn-energiboring.no">
                post@bronn-energiboring.no
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        © {new Date().getFullYear()} Østlandet Brønn Boring AS. Alle rettigheter
        reservert.
        <a
          className={styles.creditLink}
          href="https://modernamedia.no/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by ModernaMedia Solutions AS.
        </a>
      </div>
    </footer>
  );
}
