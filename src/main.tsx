// REACT CORE
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// I18N INITIALIZATION
import "./i18n";

// GLOBAL STYLES - RESET & TOKENS
import "./styles/base/reset.css";
import "./styles/tokens.css";

// GLOBAL STYLES - BASE & TYPOGRAPHY
import "./styles/base/fonts.css";
import "./styles/base/base.css";
import "./styles/typography.css";

// GLOBAL STYLES - UTILITIES & COMPONENTS
import "./styles/utilities.css";
import "./styles/components/sections.css";
import "./styles/components/cards.css";

// APP ROOT
import App from "./App";

// RENDER APPLICATION
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);