/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import { StrictMode } from "react";
import type { Root } from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "./app";

import "~/styles/globals.css";

const elem = document.querySelector("#root") as HTMLElement;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// oxlint-disable-next-line typescript/no-unnecessary-condition
if (import.meta.hot) {
  // oxlint-disable-next-line typescript/no-unsafe-member-access, typescript/no-unsafe-assignment
  const root: Root = (import.meta.hot.data.root ??= createRoot(elem));

  root.render(app);
} else {
  // The hot module reloading API is not available in production.
  createRoot(elem).render(app);
}
