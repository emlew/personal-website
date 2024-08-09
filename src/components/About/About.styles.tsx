import { theme } from "@/styles";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "calc(100vh - 72px)",
  color: theme.palette.common.white,
  fontWeight: 600,
  padding: "0px 80px",
  gap: "10vh",
  background: `linear-gradient(${theme.palette.secondary[600]}, ${theme.palette.secondary[700]})`,
});

export const StyledAboutInfo = styled(Box)({
  width: "80vw",
  display: "flex",
  flexDirection: "row",
  gap: "10vw",
});
