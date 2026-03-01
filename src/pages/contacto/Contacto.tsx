import "./Contacto.css";
import { useTranslation } from "react-i18next";
import type { CSSProperties } from "react";

import { BOOKING_URL } from "../../config/links";

import heroContact from "../../assets/images/habitaciones/atardecer.png";
import ctaImg from "../../assets/images/espacios/sala.jpg";

import SEO from "../../components/seo/SEO";

/* =========================================================
   HELPERS
========================================================= */

function safeHref(value: string, fallback = "#") {
  if (!value || value.includes(".") || value.includes("undefined")) return fallback;
  return value;
}

/* =========================================================
   COMPONENT
========================================================= */

export default function Contacto() {
  const { t } = useTranslation();

  /* =========================================================
     HERO VARS
  ========================================================= */

  type HeroVars = CSSProperties & Record<"--hero-bg" | "--hero-bg-mobile", string>;

  const heroVars: HeroVars = {
    "--hero-bg": `url(${heroContact})`,
    "--hero-bg-mobile": `url(${heroContact})`,
  };

  /* =========================================================
     LINKS (SAFE)
  ========================================================= */

  const mapsUrl = safeHref(t("contact.cards.address.mapsUrl", { defaultValue: "#" }), "#");
  const mailtoUrl = safeHref(t("contact.cards.email.mailto", { defaultValue: "mailto:info@tavernadelasal.com" }), "mailto:info@tavernadelasal.com");
  const telUrl = safeHref(t("contact.cards.phone.tel", { defaultValue: "tel:+34972776278" }), "tel:+34972776278");
  const mapIframeSrc = safeHref(t("contact.map.iframeSrc", { defaultValue: "" }), "");

  return (
    <>
      {/* =========================================================
          SEO
      ========================================================= */}

      <SEO
        title={t("contact.seo.title", { defaultValue: "Contacto | Taverna de la Sal" })}
        description={t("contact.seo.description", {
          defaultValue:
            "Contacta con Taverna de la Sal en L'Escala. Santa Maxima, 7 17130 L'Escala (Girona), 972776278, info@tavernadelasal.com",
        })}
        image={heroContact}
      />

      <main className="contactPage">
        {/* =========================================================
            HERO
        ========================================================= */}

        <section
          className="hero heroContact"
          style={heroVars}
          aria-label={t("contact.hero.aria", { defaultValue: "Contacto" })}
        >
          <div className="hero__overlay" />
          <div className="container hero__content">
            <h1 className="hero__title">{t("contact.hero.title", { defaultValue: "Contacto" })}</h1>

            <div className="hero__panel">
              <p className="hero__subtitle">{t("contact.hero.subtitle", { defaultValue: "" })}</p>
            </div>
          </div>
        </section>

        {/* =========================================================
            CONTACT CARDS
        ========================================================= */}

        <section
          className="section section--white contact__section"
          aria-label={t("contact.cards.aria", { defaultValue: "Contacto" })}
        >
          <div className="section__inner contact__inner">
            <div className="contact__cardsGrid">
              {/* ADDRESS */}
              <article className="card contact__card">
                <div className="contact__cardIcon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 21s7-4.35 7-11A7 7 0 1 0 5 10c0 6.65 7 11 7 11Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>

                <h3 className="card__title">{t("contact.cards.address.title")}</h3>

                <p className="card__text">
                  {t("contact.cards.address.line1")}
                  <br />
                  {t("contact.cards.address.line2")}
                </p>

                <div className="section__cta section__cta--left contact__cardCta">
                  <a
                    className="btn btn--outline contact__cardBtn"
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("contact.cards.address.mapsAria", { defaultValue: "Abrir mapa en una nueva pestaña" })}
                  >
                    {t("contact.cards.address.mapsCta")}
                  </a>
                </div>
              </article>

              {/* EMAIL */}
              <article className="card contact__card">
                <div className="contact__cardIcon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.8" />
                    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>

                <h3 className="card__title">{t("contact.cards.email.title")}</h3>

                <a className="link contact__cardLink" href={mailtoUrl}>
                  {t("contact.cards.email.value")}
                </a>

                <p className="text text--muted contact__cardHint">{t("contact.cards.email.hint")}</p>
              </article>

              {/* PHONE */}
              <article className="card contact__card">
                <div className="contact__cardIcon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 4h3l1 5-2 1c1 3 3 5 6 6l1-2 5 1v3c0 1-1 2-2 2-9 0-16-7-16-16 0-1 1-2 2-2Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                  </svg>
                </div>

                <h3 className="card__title">{t("contact.cards.phone.title")}</h3>

                <a className="link contact__cardLink" href={telUrl}>
                  {t("contact.cards.phone.value")}
                </a>

                <p className="text text--muted contact__cardHint">{t("contact.cards.phone.hint")}</p>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================================
            FORM
        ========================================================= */}

        <section
          className="section section--beige contact__section"
          aria-label={t("contact.form.aria", { defaultValue: "Formulario de contacto" })}
        >
          <div className="section__inner contact__inner">
            <header className="contactForm__head">
              <h2 className="contactForm__title">{t("contact.form.title")}</h2>
              <p className="contactForm__subtitle">{t("contact.form.subtitle")}</p>
            </header>

            <form
              className="contactForm__box"
              action="mailto:info@tavernadelasal.com?subject=Mensaje desde la web Taverna de la Sal"
            >
              <div className="contactForm__grid">
                <div className="contactForm__field">
                  <label className="contactForm__label" htmlFor="name">
                    {t("contact.form.fields.name.label")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="contactForm__input"
                    placeholder={t("contact.form.fields.name.placeholder")}
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="contactForm__field">
                  <label className="contactForm__label" htmlFor="email">
                    {t("contact.form.fields.email.label")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="contactForm__input"
                    type="email"
                    placeholder={t("contact.form.fields.email.placeholder")}
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="contactForm__field contactForm__field--full">
                  <label className="contactForm__label" htmlFor="subject">
                    {t("contact.form.fields.subject.label")}
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    className="contactForm__input"
                    placeholder={t("contact.form.fields.subject.placeholder")}
                    required
                  />
                </div>

                <div className="contactForm__field contactForm__field--full">
                  <label className="contactForm__label" htmlFor="message">
                    {t("contact.form.fields.message.label")}{" "}
                    <span className="contactForm__labelMuted">{t("contact.form.fields.message.optional")}</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="contactForm__textarea"
                    placeholder={t("contact.form.fields.message.placeholder")}
                    rows={6}
                  />
                </div>
              </div>

              <div className="contactForm__actions">
                <button className="contactForm__submit" type="submit">
                  <span className="contactForm__submitIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 11.5 21 3l-8.5 18-2.5-7-7-2.5Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      <path d="M21 3 10 14" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {t("contact.form.submit")}
                </button>
              </div>
            </form>

            <p className="contactForm__note">{t("contact.form.note", { defaultValue: "" })}</p>
          </div>
        </section>

        {/* =========================================================
            MAP
        ========================================================= */}

        <section className="section section--white contact__section" aria-label={t("contact.map.aria", { defaultValue: "Mapa" })}>
          <div className="section__inner contact__inner">
            <header className="section__head">
              <h2 className="title">{t("contact.map.title")}</h2>
              <p className="text">{t("contact.map.subtitle")}</p>
            </header>

            <div className="contact__mapFrame">
              <iframe
                title={t("contact.map.iframeTitle", { defaultValue: "Mapa de ubicación" })}
                src={mapIframeSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA
        ========================================================= */}

        <section
          className="contact__cta"
          style={{ backgroundImage: `url(${ctaImg})` }}
          aria-label={t("contact.cta.aria", { defaultValue: "Reservar" })}
        >
          <div className="contact__ctaOverlay" />

          <div className="contact__ctaContent">
            <h2 className="g-title">
              {t("contact.cta.title.line1")}
              <br />
              {t("contact.cta.title.line2")}
              <br />
              {t("contact.cta.title.line3")}
            </h2>

            <a className="btn btn--primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              {t("contact.cta.button")}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}