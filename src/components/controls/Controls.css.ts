import { style } from "@vanilla-extract/css";

import { vars } from "../../styles/theme.css";

export const controlsWrap = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 14,
  width: "100%",
  maxWidth: 440,
});

export const segmentedGroup = style({
  display: "inline-flex",
  border: `1.5px solid ${vars.color.ink}`,
  borderRadius: 999,
  overflow: "hidden",
});

export const segmentButton = style({
  fontFamily: vars.font.body,
  fontWeight: 700,
  fontSize: 14,
  padding: "8px 18px",
  border: "none",
  background: "none",
  cursor: "pointer",
  color: vars.color.ink,
});

export const segmentButtonActive = style({
  backgroundColor: vars.color.ink,
  color: vars.color.white,
});

export const toggleRow = style({
  display: "flex",
  alignItems: "center",
  gap: 10,
  fontFamily: vars.font.body,
  fontWeight: 600,
  fontSize: 14,
  color: vars.color.ink,
});

export const switchTrack = style({
  position: "relative",
  width: 44,
  height: 24,
  borderRadius: 999,
  border: `1.5px solid ${vars.color.ink}`,
  background: "none",
  cursor: "pointer",
  padding: 0,
});

export const switchThumb = style({
  position: "absolute",
  top: 1,
  left: 1,
  width: 18,
  height: 18,
  borderRadius: "50%",
  backgroundColor: vars.color.ink,
  transition: "transform 0.15s ease-in-out",
});

export const switchThumbOn = style({
  transform: "translateX(20px)",
});
