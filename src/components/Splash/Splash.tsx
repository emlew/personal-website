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
      <StyledQuickInfo
        sx={{
          top: "40%",
          left: "75%",
        }}
      >
        I'm a software developer from the Midwest.
      </StyledQuickInfo>
      <StyledQuickInfo
        sx={{
          top: "70%",
          left: "25%",
        }}
      >
        I like to design and build great products.
      </StyledQuickInfo>
    </StyledWrapper>
  );
};
