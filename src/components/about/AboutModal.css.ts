import { style } from "@vanilla-extract/css";

import { vars } from "../../styles/theme.css";

export const dialogStyles = style({
  border: "none",
  borderRadius: 24,
  padding: 0,
  width: "min(560px, 92vw)",
  maxHeight: "85vh",
  backgroundColor: vars.color.info,
  color: vars.color.ink,
  selectors: {
    "&::backdrop": {
      backgroundColor: "rgba(0, 0, 0, 0.45)",
    },
  },
});

export const dialogInner = style({
  padding: "28px 30px",
  overflowY: "auto",
  maxHeight: "85vh",
});

export const closeButton = style({
  position: "sticky",
  top: 0,
  float: "right",
  border: "none",
  background: "none",
  fontFamily: vars.font.body,
  fontWeight: 700,
  fontSize: 18,
  cursor: "pointer",
  color: vars.color.ink,
});

export const sectionHeading = style({
  fontFamily: vars.font.display,
  fontWeight: 700,
  fontSize: 20,
  marginTop: 24,
  marginBottom: 8,
  borderBottom: `1.5px solid ${vars.color.ink}`,
  paddingBottom: 6,
  selectors: {
    "&:first-child": {
      marginTop: 0,
    },
  },
});

export const sectionBody = style({
  fontFamily: vars.font.body,
  fontSize: 15,
  lineHeight: 1.6,
  whiteSpace: "pre-line",
  margin: 0,
});
