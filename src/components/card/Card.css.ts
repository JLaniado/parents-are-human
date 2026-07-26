import { style } from "@vanilla-extract/css";

import { vars } from "../../styles/theme.css";

export const cardStyles = style({
  display: "flex",
  flexDirection: "column",
  width: "92vw",
  maxWidth: 440,
  minHeight: 420,
  margin: "0 auto",
  padding: "28px 32px",
  borderRadius: 32,
  color: vars.color.white,
  boxShadow: `
    0px 0.7px 2.1px rgba(0, 0, 0, 0.02),
    0px 1.6px 4.8px rgba(0, 0, 0, 0.028),
    0px 2.9px 8.7px rgba(0, 0, 0, 0.035),
    0px 4.8px 14.5px rgba(0, 0, 0, 0.042),
    0px 7.9px 23.8px rgba(0, 0, 0, 0.048),
    0px 13.9px 41.6px rgba(0, 0, 0, 0.058),
    0px 30px 90px rgba(0, 0, 0, 0.07)
  `,
  transition: "transform 0.15s ease-in-out",
});

export const questionVariant = style({ backgroundColor: vars.color.question });
export const actionVariant = style({ backgroundColor: vars.color.action });
export const infoVariant = style({ backgroundColor: vars.color.info, color: vars.color.ink });

export const headerRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 12,
});

export const categoryLabel = style({
  fontFamily: vars.font.body,
  fontWeight: 700,
  fontSize: 14,
  letterSpacing: 0.4,
  textTransform: "uppercase",
});

export const rule = style({
  border: "none",
  borderTop: "1.5px solid currentColor",
  opacity: 0.35,
  margin: "12px 0 0",
});

export const bodyWrap = style({
  flex: 1,
  display: "flex",
  alignItems: "center",
  padding: "24px 0",
});

export const cardText = style({
  fontFamily: vars.font.display,
  fontWeight: 700,
  fontSize: "clamp(24px, 5vw, 32px)",
  lineHeight: 1.28,
  whiteSpace: "pre-line",
  margin: 0,
});

export const footer = style({
  fontFamily: vars.font.display,
  fontWeight: 700,
  fontSize: 15,
  textAlign: "center",
  opacity: 0.85,
});

export const finishedText = style({
  fontFamily: vars.font.display,
  fontWeight: 700,
  fontSize: "clamp(20px, 4.5vw, 26px)",
  lineHeight: 1.3,
  textAlign: "center",
  margin: "0 auto",
});

export const smallCardStyles = style({
  minHeight: 160,
  width: 220,
  flexShrink: 0,
  padding: "16px 18px",
  borderRadius: 20,
});

export const smallCardText = style({
  fontFamily: vars.font.display,
  fontWeight: 700,
  fontSize: 15,
  lineHeight: 1.25,
  whiteSpace: "pre-line",
  margin: 0,
});
