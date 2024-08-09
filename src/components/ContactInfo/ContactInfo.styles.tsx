import { theme } from "@/styles";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "72px",
  color: theme.palette.secondary[700],
  backgroundColor: theme.palette.primary[900],
  fontWeight: 600,
  padding: "0px 80px",
  gap: "8vw",
});

export const StyledLogo = styled("img")({
  height: "44px",
});
