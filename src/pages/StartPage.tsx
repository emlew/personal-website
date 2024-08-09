import { ContactInfo, Splash, About, Projects } from "@/components";

export const StartPage: React.FC = () => {
  return (
    <>
      <Splash />
      <ContactInfo />
      <About />
      <Projects />
    </>
  );
};
