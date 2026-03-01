// ROUTER CORE
import { BrowserRouter } from "react-router-dom";

// ROUTES
import AppRoutes from "./router/routes";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}