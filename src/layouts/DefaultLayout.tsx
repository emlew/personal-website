import { NavBar } from "@/components";
import { Outlet } from "react-router-dom";
import { MainContent } from "./DefaultLayout.styles";

export const DefaultLayout: React.FC = () => {
  return (
    <>
      <NavBar />
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  );
};
