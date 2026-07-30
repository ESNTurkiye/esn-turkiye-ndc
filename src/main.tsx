import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactGA from "react-ga4";
import { setupIonicReact } from "@ionic/react";

import "@ionic/react/css/core.css";

import "@ionic/react/css/normalize.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/flex-utils.css";

import "./index.css";
import App from "./App.tsx";
import { ANALYTICS } from "./config";

setupIonicReact({
    mode: "md",
});

ReactGA.initialize(ANALYTICS.measurementId);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
