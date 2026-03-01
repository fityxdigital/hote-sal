import { Link } from "react-router-dom";
import "./Errors.css";

export default function Forbidden() {
  return (
    <main className="errorPage page">
      <section className="errorBox">
        <p className="errorCode">403</p>
        <h1 className="errorTitle">Acceso prohibido</h1>
        <p className="errorText">
          No tienes permisos suficientes para acceder a este recurso.
        </p>

        <div className="errorActions">
          <Link className="btn btn--primary" to="/">
            Volver al inicio
          </Link>
        </div>
      </section>
    </main>
  );
}