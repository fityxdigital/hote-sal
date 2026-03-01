import "./Area.css";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import type { CSSProperties } from "react";

import heroImg from "../../assets/images/pueblo/bonitcala.jpg";
import antigua from "../../assets/images/pueblo/anchoabn.jpg";
import casco from "../../assets/images/pueblo/iglesia.jpg";
import alfoli from "../../assets/images/pueblo/alfolisal.jpg";
import ruinas from "../../assets/images/pueblo/ruinas.jpg";
import museo from "../../assets/images/pueblo/museo.jpg";
import banerplaya from "../../assets/images/pueblo/rocaplaya.jpg";
import emporda from "../../assets/images/pueblo/emporda.jpg";
import kayak from "../../assets/images/pueblo/kayak.jpg";
import barcos from "../../assets/images/pueblo/barcos.avif";
import pescado from "../../assets/images/pueblo/pescado.jpg";

import SEO from "../../components/seo/SEO";
import { SUPPORTED_LANGS, type SupportedLang } from "../../router/paths";

/* =========================================================
   HELPERS
========================================================= */

function normalizeLang(value?: string): SupportedLang {
  const raw = (value ?? "").toLowerCase();
  return (SUPPORTED_LANGS as readonly string[]).includes(raw)
    ? (raw as SupportedLang)
    : "es";
}

function route(lang: SupportedLang, path: string) {
  const clean = path.replace(/^\/+/, "");
  return clean ? `/${lang}/${clean}` : `/${lang}`;
}

function safeHref(value: string, fallback = "#") {
  if (!value || value.includes(".url")) return fallback;
  return value;
}

/* =========================================================
   COMPONENT
========================================================= */

export default function Area() {
  const { t } = useTranslation();
  const params = useParams();
  const lang = normalizeLang(params.lang);

  const ruinsUrl = safeHref(
    t("area.places.cards.0.url", { defaultValue: "#" }),
    "#"
  );

  const beachesUrl = safeHref(
    t("area.beaches.url", { defaultValue: "#" }),
    "#"
  );

  const landscapesUrl = safeHref(
    t("area.nature.items.2.url", { defaultValue: "#" }),
    "#"
  );

  /* =========================================================
     HERO VARS
  ========================================================= */

  type HeroVars = CSSProperties &
    Record<"--hero-bg" | "--hero-bg-mobile", string>;

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
        title={t("area.seo.title", {
          defaultValue: "Entorno | Taverna de la Sal",
        })}
        description={t("area.seo.description", {
          defaultValue:
            "Descubre L'Escala y la Costa Brava: calas, patrimonio, gastronomía y experiencias cerca del hotel.",
        })}
        image={heroImg}
      />

      <main className="areaPage">
        {/* =========================================================
            HERO
        ========================================================= */}

        <section
          className="hero"
          style={heroVars}
          aria-label={t("area.hero.aria", {
            defaultValue: "Entorno",
          })}
        >
          <div className="hero__overlay" />
          <div className="container hero__content">
            <h1 className="hero__title">
              {t("area.hero.title", { defaultValue: "Entorno" })}
            </h1>

            <div className="hero__panel">
              <p className="hero__subtitle">
                {t("area.hero.subtitle", { defaultValue: "" })}
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            INTRO
        ========================================================= */}

        <section className="area-section section--white">
          <div className="area-container g-container">
            <figure className="area-media g-media">
              <img
                className="area-media-img g-img"
                src={antigua}
                alt={t("area.intro.imageAlt", {
                  defaultValue: "L'Escala y su tradición marinera",
                })}
                loading="lazy"
              />
            </figure>

            <div className="area-intro g-intro">
              <h2 className="area-title g-title">
                {t("area.intro.title")}
              </h2>

              <p className="area-lead g-text">
                {t("area.intro.lead")}
              </p>

              <div className="area-text">
                <p className="area-p g-text">
                  {t("area.intro.p1")}
                </p>
                <p className="area-p g-text">
                  {t("area.intro.p2")}
                </p>
                <p className="area-p g-text">
                  {t("area.intro.p3")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PLACES
        ========================================================= */}

        <section className="area-section section--beige">
          <div className="area-container-museos g-container">
            <header className="area-places-header">
              <h2 className="area-title g-title">
                {t("area.places.header.title")}
              </h2>
              <p className="area-subtitle g-text">
                {t("area.places.header.subtitle")}
              </p>
            </header>

            <div className="area-places-grid">
              <article className="area-place-card">
                <figure className="area-place-media">
                  <img
                    className="area-place-img g-img"
                    src={ruinas}
                    alt={t("area.places.cards.0.imageAlt", {
                      defaultValue: "Ruinas de Empúries",
                    })}
                    loading="lazy"
                  />
                </figure>

                <div className="area-place-body">
                  <h3 className="area-place-title">
                    {t("area.places.cards.0.title")}
                    <span className="area-place-distance g-text">
                      {" "}
                      {t("area.places.cards.0.distance")}
                    </span>
                  </h3>

                  <p className="area-place-text g-text">
                    {t("area.places.cards.0.text")}
                  </p>

                  <a
                    className="g-link"
                    href={ruinsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("area.places.cards.0.linkText")} →
                  </a>
                </div>
              </article>

              <article className="area-place-card">
                <figure className="area-place-media">
                  <img
                    className="area-place-img g-img"
                    src={casco}
                    alt={t("area.places.cards.1.imageAlt")}
                    loading="lazy"
                  />
                </figure>

                <div className="area-place-body">
                  <h3 className="area-place-title">
                    {t("area.places.cards.1.title")}
                  </h3>
                  <p className="area-place-text g-text">
                    {t("area.places.cards.1.text")}
                  </p>
                </div>
              </article>

              <article className="area-place-card">
                <figure className="area-place-media">
                  <img
                    className="area-place-img g-img"
                    src={alfoli}
                    alt={t("area.places.cards.2.imageAlt")}
                    loading="lazy"
                  />
                </figure>

                <div className="area-place-body">
                  <h3 className="area-place-title">
                    {t("area.places.cards.2.title")}
                  </h3>
                  <p className="area-place-text g-text">
                    {t("area.places.cards.2.text")}
                  </p>
                </div>
              </article>

              <article className="area-place-card">
                <figure className="area-place-media">
                  <img
                    className="area-place-img g-img"
                    src={museo}
                    alt={t("area.places.cards.3.imageAlt")}
                    loading="lazy"
                  />
                </figure>

                <div className="area-place-body">
                  <h3 className="area-place-title">
                    {t("area.places.cards.3.title")}
                  </h3>
                  <p className="area-place-text g-text">
                    {t("area.places.cards.3.text")}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================================
            BANNER
        ========================================================= */}

        <section
          className="areaBanner"
          style={{ backgroundImage: `url(${banerplaya})` }}
          aria-label={t("area.banner.aria", {
            defaultValue: "Costa Brava",
          })}
        >
          <div className="areaBanner__overlay" />
          <div className="areaBanner__content">
            <h2 className="area_banner-title">
              {t("area.banner.title")}
            </h2>
          </div>
        </section>

        {/* =========================================================
            BEACHES
        ========================================================= */}

        <section className="area-section section--white">
          <div className="area-container_playa g-container">
            <header className="area-beaches-header">
              <p className="area-beaches-intro g-text">
                {t("area.beaches.intro")}
              </p>
            </header>

            <div className="area-beaches-grid">
              {[0, 1, 2, 3].map((i) => (
                <article className="area-beach-card" key={i}>
                  <h3 className="area-beach-title">
                    {t(`area.beaches.items.${i}.title`)}
                    {i === 0 && (
                      <span className="area-beach-distance g-text">
                        {" "}
                        {t("area.beaches.items.0.distance")}
                      </span>
                    )}
                  </h3>
                  <p className="area-beach-text g-text">
                    {t(`area.beaches.items.${i}.text`)}
                  </p>
                </article>
              ))}
            </div>

            <div className="area-beaches-cta">
              <a
                className="g-link"
                href={beachesUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("area.beaches.linkText")} →
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            NATURE
        ========================================================= */}

        <section className="area-section section--beige">
          <div className="area-container g-container area-split-reverse">
            <div className="area-intro g-intro">
              <h2 className="area-title g-title">
                {t("area.nature.title")}
              </h2>

              <p className="area-text g-text">
                {t("area.nature.p1")}
              </p>

              <div className="area-nature-list">
                {[0, 1, 2].map((i) => (
                  <article className="area-nature-card" key={i}>
                    <h3 className="area-nature-card-title">
                      {t(`area.nature.items.${i}.title`)}
                    </h3>
                    <p className="area-nature-card-text g-text">
                      {t(`area.nature.items.${i}.text`)}
                    </p>

                    {i === 2 && (
                      <a
                        className="g-link"
                        href={landscapesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("area.nature.items.2.linkText")} →
                      </a>
                    )}
                  </article>
                ))}
              </div>

              <p className="area-nature-note g-text">
                {t("area.nature.note")}
              </p>
            </div>

            <figure className="area-media g-media">
              <img
                className="area-media-img g-img"
                src={emporda}
                alt={t("area.nature.imageAlt")}
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        {/* =========================================================
            EXPERIENCES
        ========================================================= */}

        <section className="area-section section--white">
          <div className="area-container-natura g-container">
            <h2 className="area-title g-title">
              {t("area.experiences.title")}
            </h2>

            <div className="area-experiences">
              <div className="area-experiences-media">
                <img
                  className="area-exp-img g-img"
                  src={kayak}
                  alt={t("area.experiences.images.0")}
                  loading="lazy"
                />
                <img
                  className="area-exp-img g-img"
                  src={barcos}
                  alt={t("area.experiences.images.1")}
                  loading="lazy"
                />
              </div>

              <div className="area-experiences-list">
                {["01", "02", "03", "04", "05"].map((n, i) => (
                  <article className="area-exp-item" key={n}>
                    <span className="area-exp-number">{n}</span>
                    <div>
                      <h3 className="area-exp-title">
                        {t(`area.experiences.items.${i}.title`)}
                      </h3>
                      <p className="area-exp-text g-text">
                        {t(`area.experiences.items.${i}.text`)}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FOOD
        ========================================================= */}

        <section className="area-section section--beige">
          <div className="area-container g-container area-split">
            <div className="area-intro g-intro">
              <h2 className="area-title g-title">
                {t("area.food.title")}
              </h2>

              <p className="area-text g-text">
                {t("area.food.p1")}
              </p>
              <p className="area-text g-text">
                {t("area.food.p2")}
              </p>
              <p className="area-text g-text">
                {t("area.food.p3")}
              </p>

              <p className="area-food-italic g-text">
                {t("area.food.italic")}
              </p>

              <div className="area-actions">
                <Link
                  className="btn btn--primary"
                  to={route(lang, "restaurante")}
                >
                  {t("area.food.button")} →
                </Link>
              </div>
            </div>

            <figure className="area-media g-media">
              <img
                className="area-media-img g-img"
                src={pescado}
                alt={t("area.food.imageAlt")}
                loading="lazy"
              />
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}