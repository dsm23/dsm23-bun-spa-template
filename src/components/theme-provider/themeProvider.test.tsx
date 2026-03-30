import { describe, expect, it, mock } from "bun:test";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider, useTheme } from ".";

const noop = () => void {};

globalThis.matchMedia = (query: string) =>
  ({
    matches: false,
    media: query,
    onchange: null,
    addListener: mock(noop),
    removeListener: mock(noop),
    addEventListener: mock(noop),
    removeEventListener: mock(noop),
    dispatchEvent: mock(() => true),
  }) as MediaQueryList;

const MockComponent = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (newTheme: typeof theme) => () => {
    setTheme(newTheme);
  };

  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button data-testid="dark-button" onClick={toggleTheme("dark")}>
        Set Dark Mode
      </button>
      <button data-testid="light-button" onClick={toggleTheme("light")}>
        Set Light Mode
      </button>
      <button data-testid="system-button" onClick={toggleTheme("system")}>
        Set System
      </button>
    </div>
  );
};

const renderComponent = () => {
  render(
    <ThemeProvider>
      <MockComponent />
    </ThemeProvider>,
  );
};

describe("ThemeProvider", () => {
  it("should provide the default theme", () => {
    renderComponent();

    const theme = screen.getByTestId("theme");

    expect(theme).toHaveTextContent("system");
    expect(document.documentElement).toHaveClass("light");
  });

  it("should toggle the theme between light and dark", async () => {
    renderComponent();

    const theme = screen.getByTestId("theme");
    const darkButton = screen.getByTestId("dark-button");
    const lightButton = screen.getByTestId("light-button");
    const systemButton = screen.getByTestId("system-button");

    expect(theme).toHaveTextContent("system");

    await userEvent.click(darkButton);
    expect(theme).toHaveTextContent("dark");

    await userEvent.click(lightButton);
    expect(theme).toHaveTextContent("light");

    await userEvent.click(systemButton);
    expect(theme).toHaveTextContent("system");
  });

  it("system prefers dark", () => {
    globalThis.matchMedia = mock(
      (query: string) =>
        ({
          matches: true,
          media: query,
        }) as MediaQueryList,
    );

    renderComponent();

    expect(document.documentElement).toHaveClass("dark");
  });
});
