import { Components, Theme } from "@mui/material";

export const MuiCard: Components<Theme>["MuiCard"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.common.white,
      background: `linear-gradient(${theme.palette.secondary[600]}, ${theme.palette.secondary[700]})`,
      borderRadius: "48px",
      padding: "24px 64px",
    }),
  },
  variants: [
    {
      props: { variant: "outlined" },
      style: ({ theme }) => ({
        color: theme.palette.secondary[700],
        background: "none",
        backgroundColor: theme.palette.common.white,
        border: `transparent solid 2px`,
        boxShadow:
          "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
      }),
    },
  ],
};
