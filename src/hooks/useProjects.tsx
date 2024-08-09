import { Atom, PawPrint } from "@phosphor-icons/react";
import { ReactNode, useState } from "react";

type Project = {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
};

export const useProjects = () => {
  const [projects] = useState<Project[]>([
    {
      title: "Hero Mixer",
      description:
        "Application that consumes a public superhero API. Users combine heroes to battle each other!",
      icon: <Atom size={36} />,
      link: "https://github.com/emlew/hero-mixer",
    },
    {
      title: "Pet Quiz",
      description:
        "Application that uses state and MUI components. Users take a quiz to see which pet is right for them!",
      icon: <PawPrint size={36} />,
      link: "https://github.com/emlew/my-first-pet",
    },
  ]);

  return { projects };
};
