import { Link } from "react-router-dom";
import "./Errors.css";

export default function Unauthorized() {
  return (
    <main className="errorPage page">
      <section className="errorBox">
        <p className="errorCode">401</p>
        <h1 className="errorTitle">No autorizado</h1>
        <p className="errorText">
          Necesitas iniciar sesión o tener permisos para acceder a esta página.
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