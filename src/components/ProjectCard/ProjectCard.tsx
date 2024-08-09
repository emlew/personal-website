import { ReactNode } from "react";
import {
  StyledCard,
  StyledContent,
  StyledDetails,
  StyledTitle,
} from "./ProjectCard.styles";
import { Typography } from "@mui/material";

export const ProjectCard: React.FC<{
  title: string;
  icon: ReactNode;
  link: string;
  children: ReactNode;
}> = ({ title, icon, link, children }) => {
  return (
    <StyledCard onClick={() => window.open(link, "_blank")}>
      <StyledContent>
        {icon}
        <StyledDetails>
          <StyledTitle variant={"h4"}>{title}</StyledTitle>
          <Typography>{children}</Typography>
        </StyledDetails>
      </StyledContent>
    </StyledCard>
  );
};
