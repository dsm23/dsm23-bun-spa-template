import type { KnipConfig } from "knip";

const config: KnipConfig = {
  tags: ["-lintignore"],
  entry: ["src/**/*.d.ts"],
  bun: {
    config: ["bunfig.toml"],
    entry: ["src/frontend.tsx"],
  },
  playwright: {
    config: ["playwright.config.ts", "playwright.prod.config.ts"],
    entry: ["**/playwright-tests/*.@(spec|test).?(c|m)[jt]s?(x)"],
  },
};

export default config;
