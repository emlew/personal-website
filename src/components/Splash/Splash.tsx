import picture from "@/assets/IMG_4018.png";
import {
  StyledImage,
  StyledQuickInfo,
  StyledTitle,
  StyledWrapper,
} from "./Splash.styles";

export const Splash: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledTitle variant="h3">Hello, I'm Emily Lewis.</StyledTitle>
      <StyledImage src={picture} />
      <StyledQuickInfo>Info</StyledQuickInfo>
    </StyledWrapper>
  );
};
