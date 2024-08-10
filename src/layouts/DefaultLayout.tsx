import { NavBar } from "@/components";
import { Outlet } from "react-router-dom";
import { MainContent, StyledWrapper } from "./DefaultLayout.styles";

export const DefaultLayout: React.FC = () => {
  return (
    <StyledWrapper>
      <NavBar />
      <MainContent>
        <Outlet />
      </MainContent>
    </StyledWrapper>
  );
};
