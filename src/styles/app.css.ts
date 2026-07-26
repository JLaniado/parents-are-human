import { style } from "@vanilla-extract/css";

import { vars } from "./theme.css";

export const appStyles = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100%",
  padding: "24px 16px 40px",
  gap: 20,
});

export const headerStyles = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: 440,
});

export const titleStyles = style({
  fontFamily: vars.font.display,
  fontWeight: 700,
  fontSize: 22,
  color: vars.color.ink,
});

export const headerButtonsStyles = style({
  display: "flex",
  gap: 8,
});

export const iconButtonStyles = style({
  border: `1.5px solid ${vars.color.ink}`,
  background: "none",
  borderRadius: 999,
  width: 36,
  height: 36,
  fontFamily: vars.font.body,
  fontWeight: 700,
  cursor: "pointer",
  color: vars.color.ink,
});

export const nextButtonStyles = style({
  fontFamily: vars.font.body,
  fontWeight: 700,
  fontSize: 16,
  padding: "12px 32px",
  borderRadius: 999,
  border: "none",
  cursor: "pointer",
  backgroundColor: vars.color.ink,
  color: vars.color.white,
});

export const shuffleButtonStyles = style({
  fontFamily: vars.font.body,
  fontWeight: 700,
  fontSize: 15,
  padding: "10px 20px",
  borderRadius: 999,
  border: `1.5px solid ${vars.color.ink}`,
  cursor: "pointer",
  backgroundColor: "transparent",
  color: vars.color.ink,
});

export const actionRow = style({
  display: "flex",
  gap: 12,
  alignItems: "center",
  justifyContent: "center",
});
