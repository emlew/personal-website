import { theme } from "@/styles";
import styled from "@emotion/styled";
import { Box, Card, CardContent, Typography } from "@mui/material";

export const StyledCard = styled(Card)({
  width: "25vw",
  height: "70vh",
  padding: "15vh 16px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.secondary[200],
    boxShadow: `${theme.palette.secondary[500]} 0px 0px 0px 2px`,
    border: `${theme.palette.common.white} solid 1px`,
  },
});

export const StyledContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "15vh",
  height: "100%",
});

export const StyledDetails = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
  textAlign: "center",
});

export const StyledTitle = styled(Typography)({
  whiteSpace: "nowrap",
});
