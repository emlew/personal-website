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
};
