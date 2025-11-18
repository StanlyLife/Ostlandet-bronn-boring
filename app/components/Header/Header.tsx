"use client";

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import Image from "next/image";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import styles from "./Header.module.scss";
import { cdn } from "../../lib/cdn";

const contactChannels = [
  {
    href: "mailto:post@bronn-energiboring.no",
    label: "post@bronn-energiboring.no",
    icon: <FaEnvelope aria-hidden="true" />,
  },
  {
    href: "tel:41512461",
    label: "415 12 461",
    icon: <FaPhoneAlt aria-hidden="true" />,
  },
];

export function Header() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!showPhoneModal) {
      return undefined;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowPhoneModal(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [showPhoneModal]);

  const phoneHref = "tel:41512461";
  const phoneDisplay = "415 12 461";

  const handlePhoneClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isDesktop) {
      return;
    }

    event.preventDefault();
    setShowPhoneModal(true);
  };

  const closeModal = () => setShowPhoneModal(false);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          {contactChannels.map((channel) => (
            <a
              key={channel.href}
              href={channel.href}
              className={styles.contactLink}
            >
              {channel.icon}
              <span>{channel.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.mainBar}>
        <div className={styles.mainBarInner}>
          <div className={styles.logoGroup}>
            <Image
              src={cdn("/assets/images/1.svg")}
              alt="Østlandet brønn boring logo"
              width={96}
              height={96}
              priority
              style={{ width: "96px", height: "auto" }}
            />
            <div className={styles.logoText}>
              <strong>Østlandet Brønn Boring</strong>
              <span>Kompetanse fra 1980-tallet til i dag</span>
            </div>
          </div>

          <a
            href={phoneHref}
            className={styles.ctaLink}
            onClick={handlePhoneClick}
          >
            Ring oss i dag
          </a>
        </div>
      </div>

      {showPhoneModal && (
        <div
          className={styles.modalOverlay}
          role="presentation"
          onClick={closeModal}
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="phone-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={closeModal}
              aria-label="Lukk vinduet"
            >
              ×
            </button>
            <p id="phone-modal-title" className={styles.modalTitle}>
              Ring oss på
            </p>
            <p className={styles.modalNumber}>{phoneDisplay}</p>
            <a href={phoneHref} className={styles.modalButton}>
              Åpne telefonapp
            </a>
            <p className={styles.modalHint}>Vi svarer alle hverdager 08–17.</p>
          </div>
        </div>
      )}
    </header>
  );
}
