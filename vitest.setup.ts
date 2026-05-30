import "@testing-library/jest-dom/vitest";
import { beforeAll, vi } from "vitest";
import { setProjectAnnotations } from "@storybook/react";
import * as previewAnnotations from "./.storybook/preview";

// jsdom doesn't implement these browser APIs that Mantine relies on (color
// scheme detection, popover/scroll positioning, responsive hooks).
window.HTMLElement.prototype.scrollIntoView = () => {};

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.ResizeObserver = ResizeObserver;

// Apply the Storybook preview (MantineProvider + USWDS theme decorator) to every
// story composed via composeStory, so portable-story tests render like Storybook.
const annotations = setProjectAnnotations([previewAnnotations]);

beforeAll(annotations.beforeAll);
