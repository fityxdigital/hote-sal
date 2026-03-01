import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  robots?: string;
  twitterSite?: string;
}

const SUPPORTED = ["es", "en", "fr", "ca"] as const;
type SupportedLang = (typeof SUPPORTED)[number];

function getLangFromPath(pathname: string): SupportedLang {
  const first = (pathname.split("/")[1] ?? "").toLowerCase();
  return (SUPPORTED as readonly string[]).includes(first) ? (first as SupportedLang) : "es";
}

function stripLangFromPath(pathname: string) {
  const parts = pathname.split("/");
  const first = (parts[1] ?? "").toLowerCase();

  if ((SUPPORTED as readonly string[]).includes(first)) {
    const rest = `/${parts.slice(2).join("/")}`.replace(/\/$/, "");
    return rest === "" ? "/" : rest;
  }

  return pathname || "/";
}

function getBaseUrl() {
  const envUrl = import.meta.env.VITE_SITE_URL as string | undefined;
  const origin = window.location.origin;

  if (envUrl && /^https?:\/\//i.test(envUrl)) {
    return envUrl.replace(/\/$/, "");
  }

  return origin.replace(/\/$/, "");
}

function ogLocaleFromLang(lang: SupportedLang) {
  switch (lang) {
    case "es":
      return "es_ES";
    case "en":
      return "en_US";
    case "fr":
      return "fr_FR";
    case "ca":
      return "ca_ES";
    default:
      return "es_ES";
  }
}

function hreflangFromLang(lang: SupportedLang) {
  switch (lang) {
    case "es":
      return "es-ES";
    case "en":
      return "en";
    case "fr":
      return "fr-FR";
    case "ca":
      return "ca-ES";
    default:
      return "es-ES";
  }
}

function setMetaTag(key: string, content: string) {
  const isOG = key.startsWith("og:");
  const attr = isOG ? "property" : "name";

  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;

  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }

  el.setAttribute("content", content);
}

function ensureLink(rel: string, id: string) {
  let link = document.getElementById(id) as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement("link");
    link.rel = rel;
    link.id = id;
    document.head.appendChild(link);
  }

  return link;
}

function clearHreflangLinks() {
  document.querySelectorAll("link[data-seo-hreflang='1']").forEach((n) => n.remove());
}

function normalizeImageUrl(url?: string) {
  if (!url) return undefined;
  if (/^https?:\/\//i.test(url)) return url;
  if (url.includes("/src/")) return undefined;
  if (url.startsWith("/assets/")) return url;
  if (url.startsWith("/images/")) return url;
  return url.startsWith("/") ? url : `/${url}`;
}

function toAbsoluteUrl(baseUrl: string, url?: string) {
  const normalized = normalizeImageUrl(url);
  if (!normalized) return undefined;
  if (/^https?:\/\//i.test(normalized)) return normalized;
  return baseUrl + normalized;
}

function buildUrl(baseUrl: string, lang: SupportedLang, pathWithoutLang: string) {
  if (pathWithoutLang === "/") return `${baseUrl}/${lang}`;
  return `${baseUrl}/${lang}${pathWithoutLang}`;
}

export default function SEO({
  title,
  description,
  image,
  robots = "index, follow",
  twitterSite,
}: SEOProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    const lang = getLangFromPath(pathname);
    const pathWithoutLang = stripLangFromPath(pathname);
    const baseUrl = getBaseUrl();

    const currentUrl = buildUrl(baseUrl, lang, pathWithoutLang);
    const absoluteImage = toAbsoluteUrl(baseUrl, image);

    // TITLE
    document.title = title;

    // BASIC
    setMetaTag("robots", robots);
    setMetaTag("description", description);

    // OPEN GRAPH
    setMetaTag("og:title", title);
    setMetaTag("og:description", description);
    setMetaTag("og:type", "website");
    setMetaTag("og:url", currentUrl);
    setMetaTag("og:locale", ogLocaleFromLang(lang));

    document.querySelectorAll("meta[property='og:locale:alternate']").forEach((el) => el.remove());
    SUPPORTED.filter((l) => l !== lang).forEach((l) => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:locale:alternate");
      meta.setAttribute("content", ogLocaleFromLang(l));
      document.head.appendChild(meta);
    });

    if (absoluteImage) {
      setMetaTag("og:image", absoluteImage);
      setMetaTag("og:image:alt", title);
    }

    // TWITTER
    setMetaTag("twitter:card", absoluteImage ? "summary_large_image" : "summary");
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    if (twitterSite) setMetaTag("twitter:site", twitterSite);
    if (absoluteImage) setMetaTag("twitter:image", absoluteImage);

    // CANONICAL
    const canonical = ensureLink("canonical", "seo-canonical");
    canonical.href = currentUrl;

    // HREFLANG
    clearHreflangLinks();

    SUPPORTED.forEach((l) => {
      const href = buildUrl(baseUrl, l, pathWithoutLang);

      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = hreflangFromLang(l);
      link.href = href;
      link.setAttribute("data-seo-hreflang", "1");
      document.head.appendChild(link);
    });

    const xDefault = document.createElement("link");
    xDefault.rel = "alternate";
    xDefault.hreflang = "x-default";
    xDefault.href = buildUrl(baseUrl, "es", pathWithoutLang);
    xDefault.setAttribute("data-seo-hreflang", "1");
    document.head.appendChild(xDefault);

    // SCHEMA
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url: currentUrl,
      inLanguage: hreflangFromLang(lang),
      primaryImageOfPage: absoluteImage
        ? {
            "@type": "ImageObject",
            url: absoluteImage,
          }
        : undefined,
      isPartOf: {
        "@type": "WebSite",
        name: "Hotel Taverna de la Sal",
        url: buildUrl(baseUrl, lang, "/"),
      },
      about: {
        "@type": "Hotel",
        name: "Hotel Taverna de la Sal",
        url: buildUrl(baseUrl, lang, "/"),
      },
    };

    const id = "seo-schema";
    let script = document.getElementById(id) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }, [title, description, image, robots, twitterSite, pathname]);

  return null;
}