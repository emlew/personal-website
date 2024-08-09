import { theme } from "@/styles";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "calc(100vh - 72px)",
  color: theme.palette.secondary[700],
  fontWeight: 600,
  padding: "0px 80px",
  gap: "5vh",
});

export const StyledDetails = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "20vw",
  gap: "16px",
});

export const StyledDivider = styled(Box)({
  width: "100%",
  height: "1px",
  backgroundColor: theme.palette.secondary[700],
});
