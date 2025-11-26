/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import { StrictMode } from "react";
import type { Root } from "react-dom/client";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const elem = document.getElementById("root") as HTMLElement;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
if (import.meta.hot) {
  /* eslint-disable @typescript-eslint/no-unsafe-member-access */

  // With hot module reloading, `import.meta.hot.data` is persisted.
  if (import.meta.hot.data.root == null) {
    import.meta.hot.data.root = createRoot(elem);
  }

  const root = import.meta.hot.data.root as Root;
  root.render(app);

  /* eslint-enable @typescript-eslint/no-unsafe-member-access */
} else {
  // The hot module reloading API is not available in production.
  createRoot(elem).render(app);
}
