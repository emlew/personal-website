import { NavBar } from "@/components";
import { Outlet } from "react-router-dom";

export const DefaultLayout: React.FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
