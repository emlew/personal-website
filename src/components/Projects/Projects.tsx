import { Button, Typography } from "@mui/material";
import { ProjectCard } from "..";
import { StyledDetails, StyledDivider, StyledWrapper } from "./Projects.styles";
import { useProjects } from "@/hooks";
import { ArrowCircleRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const Projects: React.FC = () => {
  const { projects } = useProjects();

  return (
    <StyledWrapper>
      {projects.map((p) => (
        <ProjectCard key={p.title} title={p.title} icon={p.icon} link={p.link}>
          {p.description}
        </ProjectCard>
      ))}
      <StyledDetails>
        <Typography variant="h3">My Projects.</Typography>
        <Typography>
          I like to apply my learning through projects. Check out my two most
          recent here, or head to the projects page to view them all.
        </Typography>
        <StyledDivider />
        <Button component={Link} to="/projects" variant="contained">
          All Projects
          <ArrowCircleRight size={24} />
        </Button>
      </StyledDetails>
    </StyledWrapper>
  );
};
