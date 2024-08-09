import { Components, Theme } from "@mui/material";

export const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableFocusRipple: true,
    disableTouchRipple: true,
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      textTransform: "none",
      borderRadius: 24,
      border: `${theme.palette.primary[100]} solid 2px`,
      color: theme.palette.common.white,
      letterSpacing: 0.2,
      fontWeight: 600,
      padding: "10px 22px",
      height: 48,
      margin: 0,
      gap: 2,
      whiteSpace: "nowrap",
      boxShadow: "none",
      "&:focus-visible": {
        textDecoration: "underline",
        textUnderlineOffset: 1,
        textDecorationThickness: 2,
        boxShadow: `${theme.palette.primary[500]} 0px 0px 0px 2px`,
        border: `${theme.palette.common.white} solid 2px`,
      },
      "&:active": {
        textDecoration: "none",
      },
      "&:disabled": {
        opacity: 0.38,
      },
    }),
  },
  variants: [
    {
      props: { variant: "contained" },
      style: ({ theme }) => ({
        color: theme.palette.secondary[700],
        backgroundColor: theme.palette.common.white,
        border: `transparent solid 2px`,
        "&:hover": {
          backgroundColor: theme.palette.secondary[200],
        },
        "&:focus-visible": {
          color: theme.palette.primary[500],
          boxShadow: `${theme.palette.primary[500]} 0px 0px 0px 2px`,
          border: `${theme.palette.common.white} solid 2px`,
        },
        "&:active": {
          backgroundColor: theme.palette.primary[100],
          textDecoration: "underline",
          textDecorationThickness: 2,
          color: theme.palette.primary[700],
          boxShadow: "none",
          border: `${theme.palette.primary[100]} solid 2px`,
        },
        "&:disabled": {
          border: `${theme.palette.common.white} solid 2px`,
          backgroundColor: theme.palette.common.white,
          color: theme.palette.primary[500],
        },
      }),
    },
    {
      props: { variant: "text" },
      style: ({ theme }) => ({
        color: theme.palette.primary[500],
        backgroundColor: "transparent",
        border: `transparent solid 2px`,
        "&:hover": {
          textDecoration: "underline",
          textDecorationThickness: 2,
          backgroundColor: "transparent",
        },
        "&:focus-visible": {
          color: theme.palette.primary[500],
          boxShadow: `${theme.palette.primary[500]} 0px 0px 0px 2px`,
          border: `${theme.palette.common.white} solid 2px`,
        },
        "&:active": {
          backgroundColor: theme.palette.primary[100],
          textDecoration: "underline",
          textDecorationThickness: 2,
          color: theme.palette.primary[700],
          boxShadow: "none",
          border: `${theme.palette.primary[100]} solid 2px`,
        },
        "&:disabled": {
          border: `${theme.palette.common.white} solid 2px`,
          backgroundColor: theme.palette.common.white,
          color: theme.palette.primary[500],
        },
      }),
    },
  ],
};
