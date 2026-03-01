import "./History.css";
import { useTranslation } from "react-i18next";
import type { CSSProperties } from "react";

import { BOOKING_URL } from "../../config/links";
import heroImg from "../../assets/images/laras/servicios.jpeg";
import pareja from "../../assets/images/espacios/pareja.jpg";
import taverna from "../../assets/images/pueblo/taverna.jpg";

import SEO from "../../components/seo/SEO";

/* =========================================================
   COMPONENT
========================================================= */

export default function History() {
  const { t } = useTranslation();

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
        title={t("history.seo.title", { defaultValue: "Historia | Taverna de la Sal" })}
        description={t("history.seo.description", {
          defaultValue:
            "Descubre la historia de Taverna de la Sal: un hotel boutique solo adultos en L'Escala, inspirado en el Mediterráneo y el descanso real.",
        })}
        image={heroImg}
      />

      <main className="page">
        {/* =========================================================
            HERO
        ========================================================= */}

        <section className="hero" style={heroVars} aria-label={t("history.hero.aria", { defaultValue: "Historia" })}>
          <div className="hero__overlay" />
          <div className="container hero__content">
            <h1 className="hero__title">{t("history.hero.title", { defaultValue: "Historia" })}</h1>

            <div className="hero__panel">
              <p className="hero__subtitle">{t("history.hero.subtitle", { defaultValue: "" })}</p>

              <a className="btn btn--primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                {t("history.hero.cta")}
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            INTRO
        ========================================================= */}

        <section className="history-section section--white">
          <div className="history-container-par g-container">
            <figure className="history-media-par">
              <img
                className="history-media-img-par"
                src={pareja}
                alt={t("history.block1.imageAlt", { defaultValue: "Pareja disfrutando del hotel" })}
                loading="lazy"
              />
            </figure>

            <div className="history-par g-intro">
              <p className="history-par_eyebrow g-eyebrow">{t("history.block1.kicker")}</p>

              <p className="history-text g-text">{t("history.block1.p1")}</p>
              <p className="history-text g-text">{t("history.block1.p2")}</p>

              <blockquote className="history-quote">
                <p className="g-text">
                  {t("history.block1.quoteLines.0")}
                  <br />
                  {t("history.block1.quoteLines.1")}
                  <br />
                  {t("history.block1.quoteLines.2")}
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* =========================================================
            BLOCK 2
        ========================================================= */}

        <section className="history-section section--beige">
          <div className="history-container g-container history-split-reverse">
            <div className="history-intro g-intro">
              <h2 className="history-title g-title">{t("history.block2.title")}</h2>

              <p className="history-text g-text">{t("history.block2.p1")}</p>
              <p className="history-text g-text">{t("history.block2.p2")}</p>
              <p className="history-text g-text">{t("history.block2.p3")}</p>
              <p className="history-text g-text">{t("history.block2.p4")}</p>
            </div>

            <figure className="history-media g-media">
              <img
                className="history-media-img g-img"
                src={taverna}
                alt={t("history.block2.imageAlt", { defaultValue: "Edificio histórico en L'Escala" })}
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        {/* =========================================================
            PHILOSOPHY
        ========================================================= */}

        <section className="history-section section--white">
          <div className="history-filosofia g-container">
            <h2 className="history-title g-title">{t("history.philosophy.title")}</h2>

            <div className="history-lines">
              <p className="history-text g-text">{t("history.philosophy.p1")}</p>
              <p className="history-text g-text">{t("history.philosophy.p2")}</p>
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA
        ========================================================= */}

        <section className="history-section section--beige">
          <div className="history-cta g-container">
            <div className="history-final">
              <p className="history-cta-text g-text">
                {t("history.final.textLine1")}
                <br />
                {t("history.final.textLine2")}
              </p>

              <a className="btn btn--primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                {t("history.final.cta")}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}