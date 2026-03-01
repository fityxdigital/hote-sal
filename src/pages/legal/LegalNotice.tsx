import "./legal.css";
import { useTranslation } from "react-i18next";
import SEO from "../../components/seo/SEO";

export default function LegalNotice() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t("legalNotice.seo.title")}
        description={t("legalNotice.seo.description")}
      />

      <main className="legalPage">
        <div className="container">

          <h1>{t("legalNotice.title")}</h1>

          <p>{t("legalNotice.intro")}</p>

          <h2>{t("legalNotice.sections.identification.title")}</h2>
          <p>
            {t("legalNotice.sections.identification.content")}
          </p>

          <h2>{t("legalNotice.sections.object.title")}</h2>
          <p>{t("legalNotice.sections.object.content")}</p>

          <h2>{t("legalNotice.sections.conditions.title")}</h2>
          <p>{t("legalNotice.sections.conditions.content")}</p>

          <h2>{t("legalNotice.sections.intellectual.title")}</h2>
          <p>{t("legalNotice.sections.intellectual.content")}</p>

          <h2>{t("legalNotice.sections.liability.title")}</h2>
          <p>{t("legalNotice.sections.liability.content")}</p>

          <h2>{t("legalNotice.sections.externalLinks.title")}</h2>
          <p>{t("legalNotice.sections.externalLinks.content")}</p>

          <h2>{t("legalNotice.sections.dataProtection.title")}</h2>
          <p>{t("legalNotice.sections.dataProtection.content")}</p>

          <h2>{t("legalNotice.sections.law.title")}</h2>
          <p>{t("legalNotice.sections.law.content")}</p>

          <p>{t("legalNotice.updated")}</p>

        </div>
      </main>
    </>
  );
}