import { style } from "@vanilla-extract/css";

import { vars } from "../../styles/theme.css";

export const creditsStyles = style({
  fontFamily: vars.font.body,
  fontSize: 12,
  color: vars.color.ink,
  opacity: 0.5,
  textAlign: "center",
});

export const link = style({
  color: "inherit",
});
