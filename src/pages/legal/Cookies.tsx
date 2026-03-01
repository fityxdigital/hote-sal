import "./legal.css";
import { useTranslation } from "react-i18next";

export default function Cookies() {
  const { t } = useTranslation();

  return (
    <main className="legalPage">
      <div className="container">
        <h1>{t("legal.cookies.title")}</h1>

        <p>{t("legal.cookies.intro")}</p>

        <h2>{t("legal.cookies.s1.title")}</h2>
        <p>{t("legal.cookies.s1.p1")}</p>

        <h2>{t("legal.cookies.s2.title")}</h2>

        <h3>{t("legal.cookies.s2.tech.title")}</h3>
        <p>{t("legal.cookies.s2.tech.p1")}</p>

        <h3>{t("legal.cookies.s2.analytics.title")}</h3>
        <p>{t("legal.cookies.s2.analytics.p1")}</p>

        <h3>{t("legal.cookies.s2.third.title")}</h3>
        <p>{t("legal.cookies.s2.third.p1")}</p>

        <h2>{t("legal.cookies.s3.title")}</h2>
        <p>{t("legal.cookies.s3.p1")}</p>

        <h2>{t("legal.cookies.s4.title")}</h2>
        <p>{t("legal.cookies.s4.p1")}</p>

        <ul>
          <li>{t("legal.cookies.s4.list.0")}</li>
          <li>{t("legal.cookies.s4.list.1")}</li>
          <li>{t("legal.cookies.s4.list.2")}</li>
          <li>{t("legal.cookies.s4.list.3")}</li>
        </ul>

        <p>{t("legal.cookies.s4.p2")}</p>

        <h2>{t("legal.cookies.s5.title")}</h2>
        <p>{t("legal.cookies.s5.p1")}</p>

        <h2>{t("legal.cookies.s6.title")}</h2>
        <p>{t("legal.cookies.s6.p1")}</p>

        <p className="legalUpdate">{t("legal.cookies.updated")}</p>
      </div>
    </main>
  );
}