import { theme } from "@/styles";
import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

export const StyledNavBar = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100vw",
  height: "72px",
  background: `linear-gradient(${theme.palette.secondary[600]}, ${theme.palette.secondary[700]})`,
  color: theme.palette.common.white,
  padding: "0px 80px",
});

export const StyledImage = styled("img")({
  height: "48px",
});

export const StyledNameAndLogo = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",
});

export const StyledImgWrapper = styled(Box)({
  borderRadius: 24,
  border: `${theme.palette.common.white} solid 2px`,
  backgroundColor: theme.palette.common.white,
  padding: "10px",
  height: 48,
});

export const StyledName = styled(Typography)({
  borderRadius: 24,
  letterSpacing: 0.2,
  fontWeight: 600,
  margin: 0,
  whiteSpace: "nowrap",
  boxShadow: "none",
});

export const StyledLinks = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "40px",
  alignItems: "center",
});

export const StyledButton = styled(Button)({
  gap: "8px",
});
