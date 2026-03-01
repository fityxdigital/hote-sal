import "./Room.css";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import type { TFunction } from "i18next";
import type { CSSProperties } from "react";
import { useState } from "react";

import heroRooms from "../../assets/images/habitaciones/cami.png";
import introRooms from "../../assets/images/habitaciones/camabaño.png";
import { BOOKING_URL } from "../../config/links";

import img1 from "../../assets/images/laras/cama.png";
import img2 from "../../assets/images/laras/amenitisss.png";
import img3 from "../../assets/images/laras/sofa.png";
import img4 from "../../assets/images/laras/escritorio.png";
import img5 from "../../assets/images/habitaciones/espejo.png";
import img6 from "../../assets/images/laras/frey.png";
import img7 from "../../assets/images/laras/baño.png";
import img8 from "../../assets/images/laras/bombilla.png";

import FaqItem from "../../components/Faqitem/FaqItem";
import SEO from "../../components/seo/SEO";

import { SUPPORTED_LANGS, ROUTE_SEGMENTS, type SupportedLang } from "../../router/paths";

/* =========================================================
   TYPES
========================================================= */

type Feature = {
  title: string;
  items: string[];
};

type Faq = {
  q: string;
  a: string;
};

/* =========================================================
   HELPERS
========================================================= */

function normalizeLang(value?: string): SupportedLang {
  const raw = (value ?? "").toLowerCase();
  return (SUPPORTED_LANGS as readonly string[]).includes(raw) ? (raw as SupportedLang) : "es";
}

function route(lang: SupportedLang, path: string) {
  const clean = path.replace(/^\/+/, "");
  return clean ? `/${lang}/${clean}` : `/${lang}`;
}

function tArray(t: TFunction, key: string): string[] {
  const v: unknown = t(key, { returnObjects: true });
  if (!Array.isArray(v)) return [];
  return v.filter((x): x is string => typeof x === "string");
}

function tFeatures(t: TFunction, key: string): Feature[] {
  const v: unknown = t(key, { returnObjects: true });
  if (!Array.isArray(v)) return [];

  return v.filter((x): x is Feature => {
    if (typeof x !== "object" || x === null) return false;
    const r = x as Record<string, unknown>;
    if (typeof r.title !== "string") return false;
    if (!Array.isArray(r.items)) return false;
    return r.items.every((it) => typeof it === "string");
  });
}

function tFaq(t: TFunction, key: string): Faq[] {
  const v: unknown = t(key, { returnObjects: true });
  if (!Array.isArray(v)) return [];

  return v.filter((x): x is Faq => {
    if (typeof x !== "object" || x === null) return false;
    const r = x as Record<string, unknown>;
    return typeof r.q === "string" && typeof r.a === "string";
  });
}

/* =========================================================
   GALLERY
========================================================= */

const GALLERY = [img1, img2, img3, img4, img5, img6, img7, img8] as const;

/* =========================================================
   COMPONENT
========================================================= */

export default function Room() {
  const { t } = useTranslation();

  const params = useParams();
  const lang = normalizeLang(params.lang);

  const [openIndex, setOpenIndex] = useState<number>(0);

  const features = tFeatures(t, "rooms.features");
  const faq = tFaq(t, "rooms.faq.items");
  const introList = tArray(t, "rooms.intro.list");

  /* =========================================================
     HERO VARS
  ========================================================= */

  type HeroVars = CSSProperties & Record<"--hero-bg" | "--hero-bg-mobile", string>;

  const heroVars: HeroVars = {
    "--hero-bg": `url(${heroRooms})`,
    "--hero-bg-mobile": `url(${heroRooms})`,
  };

  const featuresTitle = t("rooms.featuresTitle", { defaultValue: "Características" });

  return (
    <>
      {/* =========================================================
          SEO
      ========================================================= */}

      <SEO
        title={t("rooms.seo.title", { defaultValue: "Habitaciones | Taverna de la Sal" })}
        description={t("rooms.seo.description", {
          defaultValue:
            "Habitaciones boutique en L'Escala: descanso real, luz natural, balcón y detalles cuidados para una estancia tranquila.",
        })}
        image={heroRooms}
      />

      <main className="roomsPage">
        {/* =========================================================
            HERO
        ========================================================= */}

        <section className="hero roomHero" style={heroVars} aria-label={t("rooms.hero.aria", { defaultValue: "Habitaciones" })}>
          <div className="hero__overlay" />
          <div className="container hero__content">
            <h1 className="hero__title">{t("rooms.hero.title")}</h1>

            <div className="hero__panel">
              <p className="hero__subtitle">{t("rooms.hero.subtitle")}</p>

              <a className="btn btn--primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                {t("rooms.hero.cta")}
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            INTRO
        ========================================================= */}

        <section className="rooms-section section--white">
          <div className="rooms-container g-container">
            <figure className="rooms-media g-media">
              <img
                className="rooms-media-img g-img"
                src={introRooms}
                alt={t("rooms.intro.imageAlt", { defaultValue: "Habitación con baño" })}
                loading="lazy"
              />
            </figure>

            <div className="rooms-intro g-intro">
              <h2 className="rooms-title g-title">{t("rooms.intro.title")}</h2>
              <p className="rooms-lead g-text">{t("rooms.intro.lead")}</p>

              <ul className="rooms-list">
                {introList.map((item, i) => (
                  <li className="rooms-list-item g-text" key={`${i}-${item}`}>
                    {item}
                  </li>
                ))}
              </ul>

              <blockquote className="rooms-quote">{t("rooms.intro.quote")}</blockquote>
            </div>
          </div>
        </section>

        {/* =========================================================
            FEATURES
        ========================================================= */}

        <section className="rooms-section section--beige">
          <div className="rooms-container-features g-container">
            <h2 className="g-title">{featuresTitle}</h2>

            <div className="rooms-grid4">
              {features.map((feature, index) => (
                <article className="g-card rooms-feature" key={`${index}-${feature.title}`}>
                  <h3 className="g-card-title">{feature.title}</h3>

                  <ul className="rooms-feature-list">
                    {feature.items.map((item, i) => (
                      <li className="rooms-text g-text" key={`${i}-${item}`}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            GALLERY
        ========================================================= */}

        <section className="rooms-gallery">
          <div className="rooms-gallery-container g-container">
            <header className="rooms-gallery-header">
              <h2 className="rooms-gallery-title g-title">{t("rooms.gallery.title")}</h2>
              <p className="rooms-gallery-subtitle g-text">{t("rooms.gallery.subtitle")}</p>
            </header>

            <div className="rooms-gallery-grid">
              {GALLERY.map((img, i) => (
                <figure className="rooms-gallery-item" key={`${img}-${i}`}>
                  <img
                    className="rooms-gallery-img g-img"
                    src={img}
                    alt={`${t("rooms.gallery.imageAlt", { defaultValue: "Habitación boutique" })} ${i + 1}`}
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA FINAL
        ========================================================= */}

        <section className="rooms-section section--beige">
          <div className="rooms-container g-container">
            <div className="rooms-final">
              <h2 className="rooms-final-title g-title">{t("rooms.final.title")}</h2>

              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                {t("rooms.final.button")}
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            SERVICES LINK
        ========================================================= */}

        <section className="rooms-section section--white">
          <div className="rooms-container g-container">
            <div className="rooms-services">
              <p className="rooms-services-text g-text">{t("rooms.services.text")}</p>

              <div className="rooms-services-cta">
                <Link to={route(lang, ROUTE_SEGMENTS.servicios)} className="g-link">
                  {t("rooms.services.link")} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================= */}

        <section className="rooms-section section--beige">
          <div className="rooms-container-faq g-container">
            <h2 className="rooms-faq-title g-title">{t("rooms.faq.title")}</h2>

            <div className="rooms-faq-list">
              {faq.map((item, i) => (
                <FaqItem
                  key={`${i}-${item.q}`}
                  q={item.q}
                  a={item.a}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex((prev) => (prev === i ? -1 : i))}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            BIG CTA
        ========================================================= */}

        <section className="rooms-section section--white">
          <div className="rooms-container g-container">
            <div className="rooms-big-cta">
              <h2 className="rooms-big-cta-title g-title">{t("rooms.bigCta.title")}</h2>

              <a className="btn btn--primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                {t("rooms.bigCta.button")}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}