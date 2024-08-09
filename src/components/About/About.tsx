import { Typography } from "@mui/material";
import { StyledAboutInfo, StyledWrapper } from "./About.styles";

export const About: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledAboutInfo>
        <Typography variant="h1">About me.</Typography>
        <Typography variant="h4">
          I'm a software developer with an interest in UI/UX. I'm a Computer
          Science and Mathematics major at DePauw University. I love playing
          piano, watching soccer, reading books, biking, and volunteering in the
          community.
        </Typography>
      </StyledAboutInfo>
    </StyledWrapper>
  );
};
