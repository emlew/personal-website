import { Link } from "@mui/material";
import {
  StyledButton,
  StyledImage,
  StyledImgWrapper,
  StyledLinks,
  StyledName,
  StyledNameAndLogo,
  StyledNavBar,
} from "./NavBar.styles";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import bike from "@/assets/bike.svg";
import { Envelope } from "@phosphor-icons/react";

export const NavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <StyledNavBar>
      <StyledNameAndLogo
        onClick={() => {
          navigate("/");
        }}
      >
        <StyledImgWrapper>
          <StyledImage style={{ height: "24px" }} src={bike} />
        </StyledImgWrapper>
        <StyledName>Emily Lewis</StyledName>
      </StyledNameAndLogo>
      <StyledLinks>
        <Link component={RouterLink} to="/">
          Home
        </Link>
        <Link component={RouterLink} to="/about">
          About
        </Link>
        <Link component={RouterLink} to="/projects">
          Projects
        </Link>
        <StyledButton
          variant="contained"
          onClick={() =>
            window.open(
              "mailto:emilymlewis0@gmail.com?subject=From%20Your%20Website"
            )
          }
        >
          <Envelope />
          Let's Talk
        </StyledButton>
      </StyledLinks>
    </StyledNavBar>
  );
};
