import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export const DefaultLayout: React.FC = () => {
  return (
    <>
      <Typography>Default layout</Typography>
      <Outlet />
    </>
  );
};
