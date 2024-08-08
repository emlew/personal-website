import { PaletteOptions } from "@mui/material";

const colors = {
  black: "#0A0F19",
  white: "#FEF7F0",

  primary100: "#E9EDF6",
  primary300: "#BAC7E3",
  primary500: "#8FA4D1",
  primary700: "#3D5994",
  primary900: "#151E33",

  secondary100: "#FEF7F0",
  secondary300: "#FDE3CE",
  secondary500: "#FCD0AB",
  secondary700: "#F67409",
  secondary900: "#542703",
};

export const palette: PaletteOptions = {
  common: {
    black: colors.black,
    white: colors.white,
  },
  background: { default: colors.white },
  primary: {
    main: colors.primary500,
    light: colors.primary300,
    dark: colors.primary700,
    "900": colors.primary900,
    "700": colors.primary700,
    "500": colors.primary500,
    "300": colors.primary300,
    "100": colors.primary100,
  },
  secondary: {
    main: colors.secondary500,
    light: colors.secondary300,
    dark: colors.secondary700,
    "900": colors.secondary900,
    "700": colors.secondary700,
    "500": colors.secondary500,
    "300": colors.secondary300,
    "100": colors.secondary100,
  },
};
