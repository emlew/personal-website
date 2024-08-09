import { Button, Link } from "@mui/material";
import {
  StyledImage,
  StyledImgWrapper,
  StyledLinks,
  StyledName,
  StyledNameAndLogo,
  StyledNavBar,
} from "./NavBar.styles";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import bike from "../../../public/bike.svg";

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
        <Button variant="contained">Let's Talk</Button>
      </StyledLinks>
    </StyledNavBar>
  );
};
