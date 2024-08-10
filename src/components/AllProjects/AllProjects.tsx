import { ProjectCard } from "..";
import { StyledTitle, StyledWrapper } from "./AllProjects.styles";
import { useProjects } from "@/hooks";

export const AllProjects: React.FC = () => {
  const { projects } = useProjects();

  return (
    <StyledWrapper>
      <StyledTitle variant="h2">My Projects.</StyledTitle>
      {projects.map((p) => (
        <ProjectCard key={p.title} title={p.title} icon={p.icon} link={p.link}>
          {p.description}
        </ProjectCard>
      ))}
    </StyledWrapper>
  );
};
