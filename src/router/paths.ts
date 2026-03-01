// SUPPORTED LANGS
export const SUPPORTED_LANGS = ["es", "en", "fr", "ca"] as const;
export type SupportedLang = (typeof SUPPORTED_LANGS)[number];

// ROUTE SEGMENTS
export const ROUTE_SEGMENTS = {
  servicios: "servicios",
  restaurante: "restaurante",
  habitaciones: "habitaciones",
  historia: "historia",
  entorno: "entorno",
  contacto: "contacto",
  cookies: "cookies",
  privacidad: "privacidad",
  avisoLegal: "aviso-legal",
  unauthorized: "401",
  forbidden: "403",
  serverError: "500",
} as const;