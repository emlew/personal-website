import { StyledLogo, StyledWrapper } from "./ContactInfo.styles";
import GitHub from "@/assets/github.svg";
import LinkedIn from "@/assets/linkedin.svg";
import Spotify from "@/assets/spotify.svg";
import { Link } from "@mui/material";

type Contact = {
  image: string;
  alt: string;
  link: string;
};

const contacts: Contact[] = [
  {
    image: GitHub,
    alt: "Link to GitHub",
    link: "https://github.com/emlew",
  },
  {
    image: LinkedIn,
    alt: "Link to LinkedIn",
    link: "https://www.linkedin.com/in/emily-lewis-390a51228/",
  },
  {
    image: Spotify,
    alt: "Link to Spotify",
    link: "https://open.spotify.com/user/em.lewi?si=b7cd18867b654a65",
  },
];

export const ContactInfo: React.FC = () => {
  return (
    <StyledWrapper>
      {contacts.map((contact) => (
        <Link
          key={contact.alt}
          href={contact.link}
          target="_blank"
          rel="noopener"
        >
          <StyledLogo src={contact.image} alt={contact.alt} />
        </Link>
      ))}
    </StyledWrapper>
  );
};
