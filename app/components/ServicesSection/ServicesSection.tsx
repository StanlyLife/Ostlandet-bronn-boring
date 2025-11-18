"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./ServicesSection.module.scss";
import { services, type ServiceInfo } from "../../data/services";

export function ServicesSection() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const canLoop = services.length > 3;

  return (
    <section className={styles.section} id="tjenester">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <span>Våre tjenester</span>
          <h2>Løsninger innen boring og energi</h2>
          <p>
            Vi leverer alt fra enkeltstående energibrønner til omfattende
            energiparker for store bygg, samt vannbrønnprosjekter – alltid med
            fokus på kvalitet og god dialog.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={
            canLoop ? { delay: 5000, disableOnInteraction: false } : false
          }
          loop={canLoop}
          spaceBetween={24}
          slidesPerView={1}
          className="services-swiper"
          onInit={(swiper) => {
            if (
              !swiper.params.navigation ||
              typeof swiper.params.navigation === "boolean"
            ) {
              return;
            }
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            900: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {services.map((service: ServiceInfo) => (
            <SwiperSlide key={service.id}>
              <article
                className={styles.serviceCard}
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className={styles.content}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.controls}>
          <button
            ref={prevRef}
            className={styles.controlBtn}
            aria-label="Forrige tjeneste"
            type="button"
          >
            <FaChevronLeft />
          </button>
          <button
            ref={nextRef}
            className={styles.controlBtn}
            aria-label="Neste tjeneste"
            type="button"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
