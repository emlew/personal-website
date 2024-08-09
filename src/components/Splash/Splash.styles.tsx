import { theme } from "@/styles";
import styled from "@emotion/styled";
import { Box, Card, Typography } from "@mui/material";

export const StyledWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "calc(100vh - 72px)",
  color: theme.palette.secondary[700],
  fontWeight: 600,
  padding: "0px 80px",
  gap: "5vh",
});

export const StyledImage = styled("img")({
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "25vw",
  flexShrink: 0,
  borderRadius: "200px",
});

export const StyledTitle = styled(Typography)({
  position: "absolute",
  top: "15%",
  left: "50%",
  transform: "translate(-50%, 0%)",
});

export const StyledQuickInfo = styled(Card)({
  position: "absolute",
  transform: "translate(-50%, -50%)",
  whiteSpace: "nowrap",
});
