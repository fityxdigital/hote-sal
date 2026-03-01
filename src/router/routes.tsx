// ROUTER CORE
import { Navigate, Outlet, Route, Routes, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// ROUTER CONFIG
import { ROUTE_SEGMENTS, SUPPORTED_LANGS, type SupportedLang } from "./paths";

// GLOBAL LAYOUT
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import CookieBanner from "../components/CookieBanner/CookieBanner";
import ScrollToTop from "../components/scrolltotop/ScrollToTop";

// PAGES
import Home from "../pages/home/Home";
import Servicios from "../pages/servicios/Servicios";
import Restaurante from "../pages/restaurante/Restaurante";
import Room from "../pages/rooms/Room";
import History from "../pages/historia/History";
import Area from "../pages/area/Area";
import Contacto from "../pages/contacto/Contacto";

// LEGAL
import Cookies from "../pages/legal/Cookies";
import Privacy from "../pages/legal/Privacy";
import LegalNotice from "../pages/legal/LegalNotice";

// ERRORS
import Unauthorized from "../pages/errors/Unauthorized";
import Forbidden from "../pages/errors/Forbidden";
import ServerError from "../pages/errors/ServerError";
import NotFound from "../pages/notfound/NotFound";

// LANGUAGE GUARD + SYNC
function LangLayout() {
  const { i18n } = useTranslation();
  const { lang } = useParams();
  const location = useLocation();

  const raw = (lang ?? "").toLowerCase();
  const isSupported = (SUPPORTED_LANGS as readonly string[]).includes(raw);
  const next = (isSupported ? raw : "es") as SupportedLang;

  useEffect(() => {
    if (i18n.language !== next) i18n.changeLanguage(next);
    document.documentElement.lang = next;
  }, [i18n, next]);

  if (!isSupported) {
    const rest = location.pathname.replace(/^\/[^/]+/, "");
    return <Navigate to={`/es${rest}${location.search}${location.hash}`} replace />;
  }

  return <Outlet />;
}

// ROOT LAYOUT
function RootLayout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
      <CookieBanner />
    </>
  );
}

// APP ROUTES
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/es" replace />} />

      <Route path="/:lang" element={<LangLayout />}>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />

          <Route path={ROUTE_SEGMENTS.servicios} element={<Servicios />} />
          <Route path={ROUTE_SEGMENTS.restaurante} element={<Restaurante />} />
          <Route path={ROUTE_SEGMENTS.habitaciones} element={<Room />} />
          <Route path={ROUTE_SEGMENTS.historia} element={<History />} />
          <Route path={ROUTE_SEGMENTS.entorno} element={<Area />} />
          <Route path={ROUTE_SEGMENTS.contacto} element={<Contacto />} />

          <Route path={ROUTE_SEGMENTS.cookies} element={<Cookies />} />
          <Route path={ROUTE_SEGMENTS.privacidad} element={<Privacy />} />
          <Route path={ROUTE_SEGMENTS.avisoLegal} element={<LegalNotice />} />

          <Route path={ROUTE_SEGMENTS.unauthorized} element={<Unauthorized />} />
          <Route path={ROUTE_SEGMENTS.forbidden} element={<Forbidden />} />
          <Route path={ROUTE_SEGMENTS.serverError} element={<ServerError />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/es" replace />} />
    </Routes>
  );
}