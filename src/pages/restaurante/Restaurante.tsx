import "./Restaurante.css";
import { useTranslation } from "react-i18next";
import type { CSSProperties } from "react";

import SEO from "../../components/seo/SEO";

import heroImg from "../../assets/images/restaurante/oxido.png";
import propuestaImg from "../../assets/images/restaurante/brasa.jpeg";
import entornoImg from "../../assets/images/espacios/terraza.png";
import experienciaBg from "../../assets/images/restaurante/baner.png";

/* =========================================================
   WHATSAPP
========================================================= */

const WA_NUMBER = "34621238619";

function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

/* =========================================================
   COMPONENT
========================================================= */

export default function Restaurante() {
  const { t } = useTranslation();

  const waText = t("restaurante.whatsapp.text", {
    defaultValue: "Hola, quiero reservar una mesa en el restaurante.",
  });

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
        title={t("restaurante.seo.title", { defaultValue: "Restaurante | Taverna de la Sal" })}
        description={t("restaurante.seo.description", {
          defaultValue:
            "Restaurante a la brasa en L'Escala: producto de temporada, ambiente íntimo y cocina de calidad cerca del mar.",
        })}
        image={heroImg}
      />

      <main className="restPage restPage--restaurant">
        {/* =========================================================
            HERO
        ========================================================= */}

        <section className="hero restHero" style={heroVars} aria-label={t("restaurante.hero.aria", { defaultValue: "Restaurante" })}>
          <div className="hero__overlay" />

          <div className="container hero__content">
            <h1 className="hero__title">{t("restaurante.hero.title", { defaultValue: "Restaurante" })}</h1>

            <div className="hero__panel">
              <p className="hero__subtitle">{t("restaurante.hero.subtitle", { defaultValue: "" })}</p>

              <a className="btn-re btn btn--primary" href={waLink(waText)} target="_blank" rel="noopener noreferrer">
                {t("restaurante.hero.cta")}
              </a>

              <p className="hero__note">
                <span aria-hidden="true">✓</span> {t("restaurante.hero.note")}
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            INTRO
        ========================================================= */}

        <section className="rest-section section--white">
          <div className="rest-container g-container">
            <figure className="rest-media g-media">
              <img
                className="rest-media-img g-img"
                src={propuestaImg}
                alt={t("restaurante.propuesta.imageAlt", { defaultValue: "Propuesta gastronómica" })}
                loading="lazy"
              />
            </figure>

            <div className="rest-intro g-intro">
              <p className="rest-eyebrow g-eyebrow">{t("restaurante.propuesta.eyebrow")}</p>
              <h2 className="rest-title g-title">{t("restaurante.propuesta.title")}</h2>

              <p className="rest-text g-text">{t("restaurante.propuesta.lead")}</p>
              <p className="rest-text g-text">{t("restaurante.propuesta.p2")}</p>
            </div>
          </div>
        </section>

        {/* =========================================================
            ENTORNO
        ========================================================= */}

        <section className="rest-section section--beige">
          <div className="rest-container g-container rest-split-reverse">
            <div className="rest-intro g-intro">
              <p className="rest-eyebrow g-eyebrow">{t("restaurante.entorno.eyebrow")}</p>
              <h2 className="rest-title g-title">{t("restaurante.entorno.title")}</h2>

              <p className="rest-text g-text">{t("restaurante.entorno.p1")}</p>
              <p className="rest-text g-text">{t("restaurante.entorno.p2")}</p>
              <p className="rest-text g-text">{t("restaurante.entorno.p3")}</p>
              <p className="rest-text g-text">{t("restaurante.entorno.p4")}</p>
            </div>

            <figure className="rest-media g-media">
              <img
                className="rest-media-img g-img"
                src={entornoImg}
                alt={t("restaurante.entorno.imageAlt", { defaultValue: "Entorno del restaurante" })}
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        {/* =========================================================
            BANNER
        ========================================================= */}

        <section
          className="rest-banner"
          style={{ backgroundImage: `url(${experienciaBg})` }}
          aria-label={t("restaurante.experiencia.aria", { defaultValue: "Experiencia" })}
        >
          <div className="rest-banner-overlay" />

          <div className="rest-banner-content g-container">
            <p className="rest-banner-eyebrow g-eyebrow g-eyebrow-light">{t("restaurante.experiencia.eyebrow")}</p>
            <h2 className="rest-banner-title g-title">{t("restaurante.experiencia.title")}</h2>

            <p className="rest-banner-lead g-text">{t("restaurante.experiencia.lead")}</p>
            <p className="rest-banner-text g-text">{t("restaurante.experiencia.p2")}</p>
          </div>
        </section>

        {/* =========================================================
            VENTAJAS
        ========================================================= */}

        <section className="section section--beige">
          <div className="rest-container_ventajas g-container">
            <header className="rest-advantages-header">
              <p className="rest-eyebrow g-eyebrow">{t("restaurante.ventajas.eyebrow")}</p>
              <h2 className="rest-title g-title">{t("restaurante.ventajas.title")}</h2>
              <p className="rest-lead g-text">{t("restaurante.ventajas.lead")}</p>
            </header>

            <ul className="rest-advantages-list">
              {[0, 1, 2].map((i) => (
                <li className="rest-advantages-item" key={i}>
                  <span className="rest-check" aria-hidden="true">
                    ✓
                  </span>
                  <span className="g-text">{t(`restaurante.ventajas.items.${i}`)}</span>
                </li>
              ))}
            </ul>

            <div className="rest-advantages-cta">
              <a className="btn-re btn btn--primary" href={waLink(waText)} target="_blank" rel="noopener noreferrer">
                {t("restaurante.ventajas.cta")}
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            CARTA
        ========================================================= */}

        <section className="rest-section section--white">
          <div className="rest-container_menu g-container">
            <header className="rest-menu-header">
              <p className="rest-eyebrow g-eyebrow">{t("restaurante.carta.eyebrow")}</p>
              <h2 className="rest-title g-title">{t("restaurante.carta.title")}</h2>
              <p className="rest-lead g-text">{t("restaurante.carta.lead")}</p>
            </header>

            <div className="rest-menu-cta">
              <a
                className="g-link"
                href="https://docs.google.com/document/d/1UHRPUm4q1uIj6z6lqksVUhgYQm7ar-3cg9pETBSRPZQ/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("restaurante.carta.ctaAria", { defaultValue: "Abrir carta en PDF" })}
              >
                {t("restaurante.carta.linkText")} →
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            HORARIOS
        ========================================================= */}

        <section className="rest-section section--beige">
          <div className="rest-horari g-container">
            <header className="rest-hours-header">
              <p className="rest-eyebrow g-eyebrow">{t("restaurante.horarios.eyebrow")}</p>
              <h2 className="rest-title g-title">{t("restaurante.horarios.title")}</h2>
            </header>

            <div className="rest-hours">
              <div className="rest-hours-col">
                <h3 className="rest-hours-title">{t("restaurante.horarios.week.title")}</h3>
                <p className="g-text">{t("restaurante.horarios.week.time")}</p>
              </div>

              <div className="rest-hours-col">
                <h3 className="rest-hours-title">{t("restaurante.horarios.weekend.title")}</h3>
                <p className="g-text">{t("restaurante.horarios.weekend.lunch")}</p>
                <p className="g-text">{t("restaurante.horarios.weekend.dinner")}</p>
              </div>
            </div>

            <p className="rest-hours-note g-text">{t("restaurante.horarios.note")}</p>

            <div className="rest-hours-cta">
              <a className="btn-re btn btn--primary" href={waLink(waText)} target="_blank" rel="noopener noreferrer">
                {t("restaurante.horarios.cta")}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}