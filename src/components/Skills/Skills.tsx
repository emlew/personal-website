import { Typography, Card } from "@mui/material";
import { StyledSkills, StyledWrapper } from "./Skills.styles";

const skills = ["React", "TypeScript", "Figma", "Vue", "R", "Node.js"];

export const Skills: React.FC = () => {
  return (
    <StyledWrapper>
      <Typography variant="h4">Skills</Typography>
      <StyledSkills>
        {skills.map((skill) => (
          <Card variant="outlined">{skill}</Card>
        ))}
      </StyledSkills>
    </StyledWrapper>
  );
};
