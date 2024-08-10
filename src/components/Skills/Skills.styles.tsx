import { theme } from "@/styles";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import waves from "@/assets/waves.svg";

export const StyledWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "288px",
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary[900],
  backgroundRepeat: "repeat-x",
  backgroundImage: `url(${waves})`,
  backgroundSize: "cover",
  gap: "16px",
});

export const StyledSkills = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "80vw",
  gap: "16px",
});
