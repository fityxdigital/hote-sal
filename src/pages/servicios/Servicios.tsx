import "./Servicios.css";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import type { CSSProperties } from "react";

import heroImg from "../../assets/images/laras/recepciion.jpeg";
import brasaImg from "../../assets/images/espacios/paella.png";
import bufet from "../../assets/images/espacios/bufet.png";
import marImg from "../../assets/images/habitaciones/copas.png";
import lectura from "../../assets/images/espacios/sala.jpg";

import { BOOKING_URL } from "../../config/links";
import SEO from "../../components/seo/SEO";
import { SUPPORTED_LANGS, type SupportedLang } from "../../router/paths";

/* =========================================================
   LANG
========================================================= */

function normalizeLang(value?: string): SupportedLang {
  const raw = (value ?? "").toLowerCase();
  return (SUPPORTED_LANGS as readonly string[]).includes(raw) ? (raw as SupportedLang) : "es";
}

function route(lang: SupportedLang, path: string) {
  const clean = path.replace(/^\/+/, "");
  return clean ? `/${lang}/${clean}` : `/${lang}`;
}

/* =========================================================
   ICONS
========================================================= */

type IconName = "sparkle" | "parking" | "wifi";

function Icon({ name }: { name: IconName }) {
  switch (name) {
    case "sparkle":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l1.2 4.2L17.4 8 13.2 9.2 12 13.4 10.8 9.2 6.6 8l4.2-1.8L12 2zm8 8l.7 2.4 2.3.6-2.3.6L20 16l-.7-2.4-2.3-.6 2.3-.6L20 10zM5 14l.9 3 2.9.8-2.9.8L5 22l-.9-3-2.9-.8 2.9-.8L5 14z" />
        </svg>
      );

    case "parking":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 3h7a5 5 0 0 1 0 10H9v8H7V3zm2 2v6h5a3 3 0 0 0 0-6H9z" />
        </svg>
      );

    case "wifi":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7.07-4.93 1.41 1.41a8 8 0 0 1 11.32 0l1.41-1.41a10 10 0 0 0-14.14 0zM2.1 9.24l1.41 1.41a12 12 0 0 1 16.98 0l1.41-1.41a14 14 0 0 0-19.8 0zM12 2C7.3 2 3.02 3.64 0 6.36l1.41 1.41A18 18 0 0 1 22.59 7.77L24 6.36A22 22 0 0 0 12 2z" />
        </svg>
      );

    default:
      return null;
  }
}

/* =========================================================
   COMPONENT
========================================================= */

export default function Servicios() {
  const { t } = useTranslation();

  const params = useParams();
  const lang = normalizeLang(params.lang);

  /* =========================================================
     HERO VARS
  ========================================================= */

  type HeroVars = CSSProperties & Record<"--hero-bg" | "--hero-bg-mobile", string>;

  const heroVars: HeroVars = {
    "--hero-bg": `url(${heroImg})`,
    "--hero-bg-mobile": `url(${heroImg})`,
  };

  return (
    <>
      {/* =========================================================
          SEO
      ========================================================= */}

      <SEO
        title={t("servicesPage.seo.title", { defaultValue: "Servicios | Taverna de la Sal" })}
        description={t("servicesPage.seo.description", {
          defaultValue:
            "Servicios del hotel: restaurante a la brasa, desayuno, terraza con vistas, rincón de lectura, parking y Wi-Fi.",
        })}
        image={heroImg}
      />

      <main className="servicesPage">
        {/* =========================================================
            HERO
        ========================================================= */}

        <section className="hero" style={heroVars} aria-label={t("servicesPage.hero.aria", { defaultValue: "Servicios" })}>
          <div className="hero__overlay" />
          <div className="container hero__content">
            <h1 className="hero__title">{t("servicesPage.hero.title")}</h1>

            <div className="hero__panel">
              <p className="hero__subtitle">{t("servicesPage.hero.subtitle")}</p>
              <p className="text hero__note">{t("servicesPage.hero.note", { defaultValue: "" })}</p>
            </div>
          </div>
        </section>

        {/* =========================================================
            BRASA
        ========================================================= */}

        <section className="services-section section--white">
          <div className="services-container g-container">
            <figure className="services-media g-media">
              <img
                className="services-media-img g-img"
                src={brasaImg}
                alt={t("servicesPage.brasa.imageAlt", { defaultValue: "Restaurante a la brasa" })}
                loading="lazy"
              />
            </figure>

            <div className="services-intro g-intro">
              <p className="services-eyebrow g-eyebrow">{t("servicesPage.brasa.eyebrow")}</p>
              <h2 className="services-title g-title">{t("servicesPage.brasa.title")}</h2>

              <p className="services-text g-text">{t("servicesPage.brasa.text1")}</p>
              <p className="services-text g-text">{t("servicesPage.brasa.text2")}</p>

              <div className="link-container">
                <Link className="services-link g-link" to={route(lang, "restaurante")}>
                  {t("servicesPage.brasa.cta")} →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            DESAYUNO
        ========================================================= */}

        <section className="services-section section--beige">
          <div className="services-container g-container services-split-reverse">
            <div className="services-intro g-intro">
              <p className="services-eyebrow g-eyebrow">{t("servicesPage.breakfast.eyebrow")}</p>
              <h2 className="services-title g-title">{t("servicesPage.breakfast.title")}</h2>
              <p className="services-text g-text">{t("servicesPage.breakfast.text")}</p>
            </div>

            <figure className="services-media g-media">
              <img
                className="services-media-img g-img"
                src={bufet}
                alt={t("servicesPage.breakfast.imageAlt", { defaultValue: "Desayuno" })}
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        {/* =========================================================
            TERRAZA
        ========================================================= */}

        <section className="services-section section--white">
          <div className="services-container g-container">
            <figure className="services-media g-media">
              <img
                className="services-media-img g-img"
                src={marImg}
                alt={t("servicesPage.terrace.imageAlt", { defaultValue: "Terraza con vistas" })}
                loading="lazy"
              />
            </figure>

            <div className="services-intro g-intro">
              <p className="services-eyebrow g-eyebrow">{t("servicesPage.terrace.eyebrow", { defaultValue: "Terraza" })}</p>
              <h2 className="services-title g-title">{t("servicesPage.terrace.title")}</h2>
              <p className="services-text g-text">{t("servicesPage.terrace.text")}</p>
            </div>
          </div>
        </section>

        {/* =========================================================
            LECTURA
        ========================================================= */}

        <section className="services-section section--beige">
          <div className="services-container g-container services-split-reverse">
            <div className="services-intro g-intro">
              <p className="services-eyebrow g-eyebrow">{t("servicesPage.reading.eyebrow", { defaultValue: "Calma" })}</p>
              <h2 className="services-title g-title">{t("servicesPage.reading.title")}</h2>
              <p className="services-text g-text">{t("servicesPage.reading.text")}</p>
            </div>

            <figure className="services-media g-media">
              <img
                className="services-media-img g-img"
                src={lectura}
                alt={t("servicesPage.reading.imageAlt", { defaultValue: "Rincón de lectura" })}
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        {/* =========================================================
            CARDS
        ========================================================= */}

        <section className="services-section section--white">
          <div className="g-container-card">
            <div className="services-grid3">
              <article className="services-grid3_card g-card">
                <span className="g-card-icon" aria-hidden="true">
                  <Icon name="sparkle" />
                </span>
                <h3 className="g-card-title">{t("servicesPage.cards.0.title")}</h3>
                <p className="g-card-text">{t("servicesPage.cards.0.text")}</p>
              </article>

              <article className="services-grid3_card g-card">
                <span className="g-card-icon" aria-hidden="true">
                  <Icon name="parking" />
                </span>
                <h3 className="g-card-title">{t("servicesPage.cards.1.title")}</h3>
                <p className="g-card-text">{t("servicesPage.cards.1.text")}</p>
              </article>

              <article className="services-grid3_card g-card">
                <span className="g-card-icon" aria-hidden="true">
                  <Icon name="wifi" />
                </span>
                <h3 className="g-card-title">{t("servicesPage.cards.2.title")}</h3>
                <p className="g-card-text">{t("servicesPage.cards.2.text")}</p>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}

        <section className="services-section section--beige">
          <div className="services-container_cta g-container">
            <h2 className="services-final-title g-title">{t("servicesPage.final.title")}</h2>

            <div className="services-final-cta">
              <a className="btn btn--primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                {t("servicesPage.final.cta")}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}