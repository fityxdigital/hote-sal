import "./Footer.css";
import { Link, useLocation } from "react-router-dom";

import instagramIcon from "../../assets/images/logos/instagram.svg";
import whatsappIcon from "../../assets/images/logos/was.svg";
import creatorLogo from "../../assets/images/logos/LETRAS.svg";

/* idiomas soportados */
const SUPPORTED = ["es", "en", "fr", "ca"] as const;
type SupportedLang = (typeof SUPPORTED)[number];

function getLangFromPath(pathname: string): SupportedLang {
  const first = pathname.split("/")[1];
  return (SUPPORTED as readonly string[]).includes(first) ? (first as SupportedLang) : "es";
}

export default function Footer() {
  const year = new Date().getFullYear();
  const { pathname } = useLocation();
  const lang = getLangFromPath(pathname);

  /* helper rutas internas con prefijo idioma */
  const p = (to: string) => `/${lang}${to.startsWith("/") ? to : `/${to}`}`;

  return (
    <footer className="footer" aria-label="Pie de página">
      <div className="footer__container">
        <div className="footer__grid">

          {/* BRAND */}
          <div className="footer__brand">
            <h3 className="footer__title">Taverna de la Sal</h3>

            <p className="footer__desc">
              Hotel boutique solo adultos en L&apos;Escala, Costa Brava.
              Seis habitaciones íntimas en un edificio del siglo XIX.
            </p>

            <div className="socials">
              <a
                href="https://www.instagram.com/tavernadelasal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="socials__link"
              >
                <img src={instagramIcon} alt="Instagram" className="socials__icon" />
              </a>

              <a
                href="https://wa.me/34621238619"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="socials__link"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="socials__icon" />
              </a>
            </div>
          </div>

          {/* CONTACTO */}
          <div className="footer__col">
            <p className="footer__heading">CONTACTO</p>

            <ul className="footer__list">
              <li>L&apos;Escala, Girona</li>
              <li>
                <a className="footer__contactLink" href="tel:+34972776278">
                  +34 972 776 278
                </a>
              </li>
              <li>
                <a className="footer__contactLink" href="mailto:info@tavernadelasal.com">
                  info@tavernadelasal.com
                </a>
              </li>
            </ul>
          </div>

          {/* ENLACES */}
          <div className="footer__col">
            <p className="footer__heading">ENLACES</p>

            <ul className="footer__links">
              <li><Link to={p("/habitaciones")}>Habitaciones</Link></li>
              <li><Link to={p("/servicios")}>Servicios</Link></li>
              <li><Link to={p("/historia")}>Nuestra Historia</Link></li>
              <li><Link to={p("/entorno")}>Entorno</Link></li>
              <li><Link to={p("/contacto")}>Contacto</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__divider" />

        {/* BOTTOM */}
        <div className="footer__bottom">
          <p>© {year} Taverna de la Sal. Todos los derechos reservados.</p>

          <nav className="footer__legal" aria-label="Enlaces legales">
            <Link to={p("/privacidad")}>Privacidad</Link>
            <Link to={p("/aviso-legal")}>Aviso legal</Link>
            <Link to={p("/cookies")}>Cookies</Link>
          </nav>
        </div>

        {/* FIRMA */}
        <div className="footer__creator">
          <a
            href="https://fityxdigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="creator__link"
            aria-label="Web creada por"
          >
            <span className="creator__text">Diseño web·Fotografía·Marketing</span>
            <img src={creatorLogo} alt="Nombre del creador" className="creator__logo" />
          </a>
        </div>

      </div>
    </footer>
  );
}