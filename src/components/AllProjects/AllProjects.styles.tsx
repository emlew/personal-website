import { theme } from "@/styles";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const StyledWrapper = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  color: theme.palette.secondary[700],
  fontWeight: 600,
  padding: "10vh 80px",
  gap: "5vh",
});

export const StyledTitle = styled(Typography)({
  display: "flex",
  flexDirection: "column",
  width: "25vw",
  gap: "16px",
});
