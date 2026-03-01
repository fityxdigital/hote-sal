import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./CookieBanner.css";

type CookiePrefs = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "cookie_consent_v1";

const SUPPORTED = ["es", "en", "fr", "ca"] as const;
type SupportedLang = (typeof SUPPORTED)[number];

function getLangFromPath(pathname: string): SupportedLang {
  const first = pathname.split("/")[1]?.toLowerCase() ?? "";
  return (SUPPORTED as readonly string[]).includes(first) ? (first as SupportedLang) : "es";
}

function readPrefs(): CookiePrefs | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookiePrefs;
  } catch {
    return null;
  }
}

function savePrefs(prefs: CookiePrefs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
}

export default function CookieBanner() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const lang = getLangFromPath(pathname);

  // Leemos prefs UNA VEZ
  const [initialPrefs] = useState<CookiePrefs | null>(() => readPrefs());

  // Visible si NO hay prefs
  const [visible, setVisible] = useState(() => !initialPrefs);

  // Pantalla configuración
  const [showSettings, setShowSettings] = useState(false);

  // Toggles iniciales desde prefs
  const [analytics, setAnalytics] = useState<boolean>(() => initialPrefs?.analytics ?? false);
  const [marketing, setMarketing] = useState<boolean>(() => initialPrefs?.marketing ?? false);

  // Si ya existían prefs, notificamos (sin tocar state aquí)
  useEffect(() => {
    if (!initialPrefs) return;
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: initialPrefs }));
  }, [initialPrefs]);

  const acceptAll = () => {
    const prefs: CookiePrefs = { necessary: true, analytics: true, marketing: true };
    savePrefs(prefs);
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: prefs }));
    setVisible(false);
  };

  const rejectAll = () => {
    const prefs: CookiePrefs = { necessary: true, analytics: false, marketing: false };
    savePrefs(prefs);
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: prefs }));
    setVisible(false);
  };

  const saveSelection = () => {
    const prefs: CookiePrefs = { necessary: true, analytics, marketing };
    savePrefs(prefs);
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: prefs }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="cookieBanner"
      role="dialog"
      aria-modal="true"
      aria-live="polite"
      aria-labelledby="cookieBannerTitle"
      aria-describedby="cookieBannerDesc"
    >
      <div className="cookieBanner__box">
        <div className="cookieBanner__text">
          <p id="cookieBannerTitle" className="cookieBanner__title">
            {t("cookiesBanner.title", { defaultValue: "Cookies" })}
          </p>

          <p id="cookieBannerDesc" className="cookieBanner__desc">
            {t("cookiesBanner.description", {
              defaultValue:
                "Usamos cookies necesarias para que la web funcione y, con tu permiso, cookies de análisis y marketing. Puedes aceptar, rechazar o configurar.",
            })}
          </p>

          <p className="cookieBanner__links">
            <Link to={`/${lang}/cookies`}>
              {t("cookiesBanner.links.cookies", { defaultValue: "Política de Cookies" })}
            </Link>
            <span> · </span>
            <Link to={`/${lang}/privacidad`}>
              {t("cookiesBanner.links.privacy", { defaultValue: "Privacidad" })}
            </Link>
          </p>
        </div>

        {!showSettings ? (
          <div className="cookieBanner__actions">
            <button className="cookieBtn cookieBtn--ghost" type="button" onClick={rejectAll}>
              {t("cookiesBanner.actions.reject", { defaultValue: "Rechazar" })}
            </button>

            <button
              className="cookieBtn cookieBtn--ghost"
              type="button"
              onClick={() => setShowSettings(true)}
            >
              {t("cookiesBanner.actions.settings", { defaultValue: "Configurar" })}
            </button>

            <button className="cookieBtn cookieBtn--primary" type="button" onClick={acceptAll}>
              {t("cookiesBanner.actions.accept", { defaultValue: "Aceptar" })}
            </button>
          </div>
        ) : (
          <div className="cookieBanner__settings">
            <div className="cookieRow">
              <div>
                <p className="cookieRow__name">
                  {t("cookiesBanner.categories.necessary.name", { defaultValue: "Necesarias" })}
                </p>
                <p className="cookieRow__hint">
                  {t("cookiesBanner.categories.necessary.hint", {
                    defaultValue: "Siempre activas para el funcionamiento básico.",
                  })}
                </p>
              </div>
              <input type="checkbox" checked disabled aria-label="Cookies necesarias (siempre activas)" />
            </div>

            <div className="cookieRow">
              <div>
                <p className="cookieRow__name">
                  {t("cookiesBanner.categories.analytics.name", { defaultValue: "Analítica" })}
                </p>
                <p className="cookieRow__hint">
                  {t("cookiesBanner.categories.analytics.hint", {
                    defaultValue: "Medir tráfico y uso (ej. Analytics).",
                  })}
                </p>
              </div>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                aria-label="Cookies de analítica"
              />
            </div>

            <div className="cookieRow">
              <div>
                <p className="cookieRow__name">
                  {t("cookiesBanner.categories.marketing.name", { defaultValue: "Marketing" })}
                </p>
                <p className="cookieRow__hint">
                  {t("cookiesBanner.categories.marketing.hint", {
                    defaultValue: "Publicidad y remarketing.",
                  })}
                </p>
              </div>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                aria-label="Cookies de marketing"
              />
            </div>

            <div className="cookieBanner__actions">
              <button
                className="cookieBtn cookieBtn--ghost"
                type="button"
                onClick={() => setShowSettings(false)}
              >
                {t("cookiesBanner.actions.back", { defaultValue: "Volver" })}
              </button>

              <button className="cookieBtn cookieBtn--ghost" type="button" onClick={rejectAll}>
                {t("cookiesBanner.actions.rejectAll", { defaultValue: "Rechazar todo" })}
              </button>

              <button className="cookieBtn cookieBtn--primary" type="button" onClick={saveSelection}>
                {t("cookiesBanner.actions.save", { defaultValue: "Guardar" })}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}