import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const MainContent = styled(Box)({
  alignItems: "center",
  position: "fixed",
  height: "calc(100vh - 72px)",
  flexGrow: 1,
  top: "72px",
  width: "100vw",
  overflowX: "hidden",
});
