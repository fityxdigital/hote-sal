import { Link, useLocation } from "react-router-dom";
import "./NotFound.css";
import { BOOKING_URL } from "../../config/links";

const SUPPORTED = ["es", "en", "fr", "ca"] as const;
type SupportedLang = (typeof SUPPORTED)[number];

function getLangFromPath(pathname: string): SupportedLang {
  const first = pathname.split("/")[1];
  return (SUPPORTED as readonly string[]).includes(first)
    ? (first as SupportedLang)
    : "es";
}

export default function NotFound() {
  const { pathname } = useLocation();
  const lang = getLangFromPath(pathname);

  return (
    <main className="notFound page">
      <section className="notFound__wrap">
        <p className="notFound__kicker">404</p>
        <h1 className="notFound__title">Página no encontrada</h1>
        <p className="notFound__text">
          La dirección a la que has entrado no existe o se ha movido.
        </p>

        <div className="notFound__actions">
          <Link className="btn btn--primary" to={`/${lang}`}>
            Volver al inicio
          </Link>

          <a
            className="btn btn--outline"
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservar
          </a>
        </div>
      </section>
    </main>
  );
}