import { ContactInfo, Splash, About, Projects, Skills } from "@/components";

export const StartPage: React.FC = () => {
  return (
    <>
      <Splash />
      <ContactInfo />
      <About />
      <Projects />
      <Skills />
    </>
  );
};
