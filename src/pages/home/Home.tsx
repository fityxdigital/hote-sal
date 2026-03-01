import "./Home.css";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import type { TFunction } from "i18next";
import type { CSSProperties } from "react";

import SEO from "../../components/seo/SEO";

import storyImg from "../../assets/images/home/entradapescado.png";
import pezdecoration from "../../assets/images/home/aseonsorsillas.jpg";
import escaleraimg from "../../assets/images/home/cenital.png";
import camaimg from "../../assets/images/home/camazul.png";
import azoteaimg from "../../assets/images/home/terraza.png";
import restauranteimg from "../../assets/images/restaurante/chorizos.png";
import salaimg from "../../assets/images/espacios/IMG-20240419-WA0062.jpg";
import vistas from "../../assets/images/habitaciones/atardecer.png";

import heroDesktop from "../../assets/images/herodes/home.jpg";
import heroMobile from "../../assets/images/herodes/heromovil.png";

import { BOOKING_URL } from "../../config/links";
import { SUPPORTED_LANGS, type SupportedLang, ROUTE_SEGMENTS } from "../../router/paths";

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

type Review = { quote: string; name: string; city: string };

function tReviews(t: TFunction, key: string): Review[] {
  const v: unknown = t(key, { returnObjects: true });
  if (!Array.isArray(v)) return [];
  return v.filter((x): x is Review => {
    if (typeof x !== "object" || x === null) return false;
    const r = x as Record<string, unknown>;
    return typeof r.quote === "string" && typeof r.name === "string" && typeof r.city === "string";
  });
}

/* =========================================================
   COMPONENT
========================================================= */

export default function Home() {
  const { t } = useTranslation();
  const params = useParams();
  const lang = normalizeLang(params.lang);

  /* =========================================================
     DATA
  ========================================================= */

  const roomsFeatures = tArray(t, "home.rooms.features");
  const servicesItems = tArray(t, "home.services.items");
  const areaItems = tArray(t, "home.area.items");
  const reviewsItems = tReviews(t, "home.reviews.items");

  /* =========================================================
     ICONS
  ========================================================= */

  const servicesIcons = ["☕", "☀", "✦", "⌁", "🚗"] as const;
  const areaIcons = ["≋", "⌂", "🏛", "🐟"] as const;

  /* =========================================================
     HERO VARS
  ========================================================= */

  type HeroVars = CSSProperties & Record<"--hero-bg" | "--hero-bg-mobile", string>;
  const heroVars: HeroVars = {
    "--hero-bg": `url(${heroDesktop})`,
    "--hero-bg-mobile": `url(${heroMobile})`,
  };

  return (
    <>
      {/* =========================================================
          SEO
      ========================================================= */}

      <SEO
        title={t("home.seo.title", { defaultValue: "Hotel Taverna de la Sal | Hotel boutique en L'Escala" })}
        description={t("home.seo.description", {
          defaultValue:
            "Hotel boutique solo adultos en L'Escala, Costa Brava. Seis habitaciones íntimas en un edificio del siglo XIX junto al mar.",
        })}
        image={storyImg}
      />

      <main className="page">
        {/* =========================================================
            HERO
        ========================================================= */}

        <section className="hero homeHero" style={heroVars} aria-label={t("home.hero.aria", { defaultValue: "Portada" })}>
          <div className="hero__overlay" />
          <div className="container hero__content">
            <p className="hero--eyebrow">{t("home.hero.eyebrow")}</p>
            <h1 className="hero__title">{t("home.hero.title")}</h1>

            <div className="hero__panel">
              <p className="hero__subtitle">{t("home.hero.subtitle")}</p>

              <a className="btn btn--primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                {t("home.hero.cta")}
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            STORY
        ========================================================= */}

        <section className="home-section section--white">
          <div className="home-container g-container">
            <figure className="home-media g-media">
              <img
                className="home-media-img g-img"
                src={storyImg}
                alt={t("home.story.imageAlt", { defaultValue: "Historia del hotel" })}
                loading="lazy"
              />
            </figure>

            <div className="home-intro g-intro">
              <p className="home-eyebrow g-eyebrow">{t("home.story.eyebrow")}</p>
              <h2 className="home-title g-title">{t("home.story.title")}</h2>
              <p className="home-text g-text">{t("home.story.text")}</p>

              <div className="link-container">
                <Link className="home-link g-link" to={route(lang, ROUTE_SEGMENTS.historia)}>
                  {t("home.story.link")} →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            REFUGE
        ========================================================= */}

        <section className="home-section section--beige">
          <div className="g-container-card">
            <header className="home-cards-header">
              <p className="g-eyebrow">{t("home.refuge.eyebrow")}</p>
              <h2 className="g-title">{t("home.refuge.title")}</h2>
            </header>

            <div className="home-grid3">
              <article className="g-card">
                <div className="g-card-icon" aria-hidden="true">
                  %
                </div>
                <h3 className="g-card-title">{t("home.refuge.cards.0.title")}</h3>
                <p className="g-card-text">{t("home.refuge.cards.0.text")}</p>
              </article>

              <article className="g-card">
                <div className="g-card-icon" aria-hidden="true">
                  ★
                </div>
                <h3 className="g-card-title">{t("home.refuge.cards.1.title")}</h3>
                <p className="g-card-text">{t("home.refuge.cards.1.text")}</p>
              </article>

              <article className="g-card">
                <div className="g-card-icon" aria-hidden="true">
                  ☀
                </div>
                <h3 className="g-card-title">{t("home.refuge.cards.2.title")}</h3>
                <p className="g-card-text">{t("home.refuge.cards.2.text")}</p>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================================
            ATMOSPHERE
        ========================================================= */}

        <section className="home-section section--white">
          <div className="home-center">
            <p className="home-eyebrow g-eyebrow">{t("home.atmosphere.eyebrow")}</p>
            <h2 className="home-title g-title">{t("home.atmosphere.title")}</h2>
            <p className="home-text g-text home-text-muted">{t("home.atmosphere.text")}</p>

            <div className="home-atmosphere-grid">
              <figure className="home-atmosphere-item home-atmosphere-item-large">
                <img
                  className="home-atmosphere-img g-img"
                  src={pezdecoration}
                  alt={t("home.atmosphere.images.0", { defaultValue: "Detalle del hotel" })}
                  loading="lazy"
                />
              </figure>

              <figure className="home-atmosphere-item">
                <img
                  className="home-atmosphere-img g-img"
                  src={escaleraimg}
                  alt={t("home.atmosphere.images.1", { defaultValue: "Escalera interior" })}
                  loading="lazy"
                />
              </figure>

              <figure className="home-atmosphere-item home-atmosphere-item-large">
                <img
                  className="home-atmosphere-img g-img"
                  src={salaimg}
                  alt={t("home.atmosphere.images.2", { defaultValue: "Sala del hotel" })}
                  loading="lazy"
                />
              </figure>

              <figure className="home-atmosphere-item">
                <img
                  className="home-atmosphere-img g-img"
                  src={azoteaimg}
                  alt={t("home.atmosphere.images.3", { defaultValue: "Terraza" })}
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* =========================================================
            BENEFITS
        ========================================================= */}

        <section className="home-section section--beige">
          <div className="g-container-card">
            <header className="home-cards-header">
              <p className="g-eyebrow">{t("home.benefits.eyebrow")}</p>
              <h2 className="g-card-title">{t("home.benefits.title")}</h2>
            </header>

            <div className="home-grid3">
              <article className="g-card">
                <div className="g-card-icon" aria-hidden="true">
                  10%
                </div>
                <h3 className="g-card-title">{t("home.benefits.cards.0.title")}</h3>
                <p className="g-card-text">{t("home.benefits.cards.0.text")}</p>
              </article>

              <article className="g-card">
                <div className="g-card-icon" aria-hidden="true">
                  €
                </div>
                <h3 className="g-card-title">{t("home.benefits.cards.1.title")}</h3>
                <p className="g-card-text">{t("home.benefits.cards.1.text")}</p>
              </article>

              <article className="g-card">
                <div className="g-card-icon" aria-hidden="true">
                  ✉
                </div>
                <h3 className="g-card-title">{t("home.benefits.cards.2.title")}</h3>
                <p className="g-card-text">{t("home.benefits.cards.2.text")}</p>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================================
            ROOMS
        ========================================================= */}

        <section className="home-section section--white">
          <div className="home-container g-container home-split">
            <figure className="home-media g-media">
              <img
                className="home-media-img g-img"
                src={camaimg}
                alt={t("home.rooms.imageAlt", { defaultValue: "Habitación del hotel" })}
                loading="lazy"
              />
            </figure>

            <div className="home-intro g-intro">
              <p className="home-eyebrow g-eyebrow">{t("home.rooms.eyebrow")}</p>
              <h2 className="home-title g-title">{t("home.rooms.title")}</h2>
              <p className="home-text g-text">{t("home.rooms.text")}</p>

              <ul className="home-list">
                {roomsFeatures.map((x, i) => (
                  <li className="home-list g-text" key={`${i}-${x}`}>
                    {x}
                  </li>
                ))}
              </ul>

              <div className="home-actions">
                <Link to={route(lang, ROUTE_SEGMENTS.habitaciones)} className="btn--light btn">
                  {t("home.rooms.details")}
                </Link>

                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                  {t("home.rooms.cta")}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            RESTAURANT
        ========================================================= */}

        <section className="home-section section--beige">
          <div className="home-container g-container home-split-reverse">
            <div className="home-intro g-intro">
              <p className="home-eyebrow g-eyebrow">{t("home.restaurant.eyebrow")}</p>
              <h2 className="home-title g-title">{t("home.restaurant.title")}</h2>
              <p className="home-text g-text">{t("home.restaurant.text")}</p>

              <div className="link-container">
                <Link className="g-link" to={route(lang, ROUTE_SEGMENTS.restaurante)}>
                  {t("home.restaurant.cta")} →
                </Link>
              </div>
            </div>

            <figure className="home-media g-media">
              <img
                className="home-media-img g-img"
                src={restauranteimg}
                alt={t("home.restaurant.imageAlt", { defaultValue: "Restaurante del hotel" })}
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        {/* =========================================================
            SERVICES
        ========================================================= */}

        <section className="home-section section--white">
          <div className="home-container__services g-container">
            <header className="home-services-header">
              <p className="home-eyebrow-services g-eyebrow">{t("home.services.eyebrow")}</p>
              <h2 className="home-title g-title">{t("home.services.title")}</h2>
            </header>

            <div className="home-services">
              {servicesIcons.map((icon, i) => {
                const text = servicesItems[i] ?? "";
                if (!text) return null;
                return (
                  <article className="home-service" key={`${icon}-${i}`}>
                    <span className="home-service-icon" aria-hidden="true">
                      {icon}
                    </span>
                    <p className="home-service-text g-text">{text}</p>
                  </article>
                );
              })}
            </div>

            <div className="home-services-cta">
              <Link className="g-link" to={route(lang, ROUTE_SEGMENTS.servicios)}>
                {t("home.services.link")} →
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            AREA
        ========================================================= */}

        <section className="home-section section--beige">
          <div className="home-container g-container home-split">
            <div className="home-intro g-intro">
              <p className="home-eyebrow g-eyebrow">{t("home.area.eyebrow")}</p>
              <h2 className="home-title g-title">{t("home.area.title")}</h2>
              <p className="home-text g-text">{t("home.area.text")}</p>

              <ul className="home-area-list">
                {areaIcons.map((icon, i) => {
                  const text = areaItems[i] ?? "";
                  if (!text) return null;
                  return (
                    <li className="home-area-item" key={`${icon}-${i}`}>
                      <span className="home-area-icon" aria-hidden="true">
                        {icon}
                      </span>
                      <span className="home-area-text g-text">{text}</span>
                    </li>
                  );
                })}
              </ul>

              <div className="home-cta">
                <Link className="g-link" to={route(lang, ROUTE_SEGMENTS.entorno)}>
                  {t("home.area.link")} →
                </Link>
              </div>
            </div>

            <figure className="home-media g-media">
              <img
                className="home-media-img g-img"
                src={vistas}
                alt={t("home.area.imageAlt", { defaultValue: "Entorno en L'Escala" })}
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        {/* =========================================================
            REVIEWS
        ========================================================= */}

        <section className="home-section section--white">
          <div className="g-container-card">
            <header className="home-reviews-header">
              <p className="home-eyebrow g-eyebrow">{t("home.reviews.eyebrow")}</p>
              <h2 className="home-title g-title">{t("home.reviews.title")}</h2>
            </header>

            <div className="container-review-cards">
              {reviewsItems.map((r, idx) => (
                <article className="home-review" key={`${r.name}-${idx}`}>
                  <div className="home-review-stars" aria-label={t("home.reviews.starsAria")}>
                    ★★★★★
                  </div>

                  <p className="home-review-quote g-text">{r.quote}</p>
                  <p className="home-review-name">{r.name}</p>
                  <p className="home-review-city">{r.city}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}

        <section className="home-cta-final">
          <div className="home-cta-container g-container">
            <h2 className="home-cta-title g-title">{t("home.cta.title")}</h2>
            <p className="home-cta-text g-text">{t("home.cta.text")}</p>

            <div className="home-cta-actions">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn--light">
                {t("home.cta.button")}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}