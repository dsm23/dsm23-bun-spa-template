import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: [
    "eslint",
    "jsx-a11y",
    "oxc",
    "promise",
    "react",
    "typescript",
    "unicorn",
  ],
  jsPlugins: ["eslint-plugin-better-tailwindcss"],
  categories: {
    correctness: "warn",
    suspicious: "warn",
    pedantic: "warn",
    perf: "warn",
    restriction: "warn",
    nursery: "warn",
  },
  env: {
    browser: true,
    node: true,
    serviceworker: true,
    worker: true,
  },
  ignorePatterns: [
    "coverage/",
    "dist/",
    "playwright-report/",
    "storybook-static/",
    "test-results/",
    // TODO: remove build.ts from ignorePatterns
    "build.ts",
  ],
  options: {
    typeAware: true,
  },
  rules: {
    "max-lines": "off",
    "max-lines-per-function": [
      "warn",
      {
        max: 200,
        skipComments: true,
        skipBlankLines: true,
      },
    ],
    "no-warning-comments": "off",
    "no-inline-comments": "off",
    "no-undefined": "off",
    "no-void": [
      "warn",
      {
        allowAsStatement: true,
      },
    ],
    "no-console": [
      "warn",
      {
        allow: ["debug", "warn", "info", "trace", "warn"],
      },
    ],
    "no-empty-function": ["warn", { allow: ["arrowFunctions"] }],
    "no-negated-condition": "off",
    "no-optional-chaining": "off",
    "no-restricted-imports": [
      "warn",
      {
        paths: [
          {
            name: "react",
            importNames: ["default"],
            message:
              "Named * React import is not allowed. Please import what you need from React with Named Imports",
          },
        ],
      },
    ],
    "better-tailwindcss/enforce-canonical-classes": "warn",
    "better-tailwindcss/enforce-consistent-class-order": "warn",
    "better-tailwindcss/enforce-consistent-important-position": "warn",
    "better-tailwindcss/enforce-consistent-variable-syntax": "warn",
    "better-tailwindcss/enforce-shorthand-classes": "warn",
    "better-tailwindcss/no-conflicting-classes": "warn",
    "better-tailwindcss/no-deprecated-classes": "warn",
    "better-tailwindcss/no-duplicate-classes": "warn",
    "better-tailwindcss/no-unnecessary-whitespace": "warn",
    "better-tailwindcss/no-unknown-classes": "warn",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/anchor-has-content": "off",
    "oxc/no-async-await": "off",
    "oxc/no-optional-chaining": "off",
    "oxc/no-rest-spread-properties": "off",
    "react/button-has-type": "off",
    "react/forbid-component-props": "off",
    // TODO: remove when it supports tsx
    "react/jsx-filename-extension": "off",
    "react/no-multi-comp": "off",
    "react/only-export-components": "off",
    "react/react-in-jsx-scope": "off",
    "typescript/consistent-type-imports": [
      "warn",
      {
        disallowTypeAnnotations: false,
        fixStyle: "separate-type-imports",
        prefer: "type-imports",
      },
    ],
    "typescript/explicit-function-return-type": "off",
    "typescript/explicit-module-boundary-types": "off",
    "typescript/no-confusing-void-expression": "off",
    "typescript/no-unsafe-type-assertion": "off",
    "typescript/prefer-readonly-parameter-types": "off",
    "typescript/strict-boolean-expressions": "off",
    "unicorn/filename-case": [
      "warn",
      {
        case: "camelCase",
        ignore: "bun-env.d.ts",
      },
    ],
  },
  settings: {
    "better-tailwindcss": {
      entryPoint: "./src/styles/globals.css",
    },
  },
});
