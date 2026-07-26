import { style } from "@vanilla-extract/css";

import { vars } from "../../styles/theme.css";

export const historyStyles = style({
  width: "100%",
  maxWidth: 700,
});

export const historyTitleStyles = style({
  fontFamily: vars.font.body,
  fontWeight: 700,
  fontSize: 14,
  textTransform: "uppercase",
  letterSpacing: 0.4,
  color: vars.color.ink,
  opacity: 0.6,
  textAlign: "center",
  marginBottom: 10,
});

export const scrollRow = style({
  display: "flex",
  gap: 12,
  overflowX: "auto",
  padding: "4px 8px 12px",
});
