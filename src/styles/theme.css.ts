import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    question: "#1e3a5f",
    action: "#a33a2e",
    info: "#f2a900",
    ink: "#1a1a1a",
    paper: "#f4f1ea",
    white: "#ffffff",
  },
  font: {
    display: "'Zilla Slab', serif",
    body: "'Nunito', sans-serif",
  },
});
