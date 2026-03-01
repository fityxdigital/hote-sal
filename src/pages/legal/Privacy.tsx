import "./legal.css";
import { useTranslation } from "react-i18next";
import SEO from "../../components/seo/SEO";

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t("privacy.seo.title")}
        description={t("privacy.seo.description")}
      />

      <main className="legalPage">
        <div className="container">

          <h1>{t("privacy.title")}</h1>

          <p>{t("privacy.intro")}</p>

          <h2>{t("privacy.sections.controller.title")}</h2>
          <p>{t("privacy.sections.controller.content")}</p>

          <h2>{t("privacy.sections.purpose.title")}</h2>
          <p>{t("privacy.sections.purpose.intro")}</p>
          <ul>
            <li>{t("privacy.sections.purpose.items.0")}</li>
            <li>{t("privacy.sections.purpose.items.1")}</li>
            <li>{t("privacy.sections.purpose.items.2")}</li>
            <li>{t("privacy.sections.purpose.items.3")}</li>
          </ul>

          <h2>{t("privacy.sections.legalBasis.title")}</h2>
          <p>{t("privacy.sections.legalBasis.intro")}</p>
          <ul>
            <li>{t("privacy.sections.legalBasis.items.0")}</li>
            <li>{t("privacy.sections.legalBasis.items.1")}</li>
            <li>{t("privacy.sections.legalBasis.items.2")}</li>
          </ul>

          <h2>{t("privacy.sections.retention.title")}</h2>
          <p>{t("privacy.sections.retention.content")}</p>

          <h2>{t("privacy.sections.recipients.title")}</h2>
          <p>{t("privacy.sections.recipients.content")}</p>

          <h2>{t("privacy.sections.rights.title")}</h2>
          <p>{t("privacy.sections.rights.intro")}</p>
          <ul>
            <li>{t("privacy.sections.rights.items.0")}</li>
            <li>{t("privacy.sections.rights.items.1")}</li>
            <li>{t("privacy.sections.rights.items.2")}</li>
            <li>{t("privacy.sections.rights.items.3")}</li>
            <li>{t("privacy.sections.rights.items.4")}</li>
          </ul>

          <p>{t("privacy.sections.rights.contact")}</p>

          <h2>{t("privacy.sections.security.title")}</h2>
          <p>{t("privacy.sections.security.content")}</p>

          <h2>{t("privacy.sections.changes.title")}</h2>
          <p>{t("privacy.sections.changes.content")}</p>

          <p>{t("privacy.updated")}</p>

        </div>
      </main>
    </>
  );
}