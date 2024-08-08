import { Typography } from "@mui/material";
import picture from "@/assets/IMG_4018.png";

export const StartPage: React.FC = () => {
  return (
    <>
      <Typography>Start Page</Typography>
      <img src={picture} style={{ maxWidth: "10vw" }} />
    </>
  );
};
