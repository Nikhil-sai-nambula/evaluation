import React from "react";
import Typography from "@mui/material/Typography";

interface props {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit"
    | undefined;
  sx: object;
  value: string;
}
export const Custom_Typography = (Props: props) => {
  return (
    <Typography variant={Props.variant} sx={Props.sx}>
      {Props.value}
    </Typography>
  );
};
