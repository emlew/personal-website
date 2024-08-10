import {
  Atom,
  DeviceMobile,
  MathOperations,
  PawPrint,
  SoccerBall,
} from "@phosphor-icons/react";
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
        "React application that consumes a public superhero API. Users combine heroes to battle each other!",
      icon: <Atom size={36} />,
      link: "https://github.com/emlew/hero-mixer",
    },
    {
      title: "Pet Quiz",
      description:
        "React application that uses state and MUI components. Users take a quiz to see which pet is right for them!",
      icon: <PawPrint size={36} />,
      link: "https://github.com/emlew/my-first-pet",
    },
    {
      title: "SweetStuff",
      description:
        "Interactive Figma design prototype for a mobile social media platform.",
      icon: <DeviceMobile size={36} />,
      link: "https://www.figma.com/proto/hBDUs88IMz3dNZ6Y6K20jb/MySocial?type=design&node-id=1-2&t=fnN6tjOQ0RdVt47E-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design",
    },
    {
      title: "World Cup",
      description:
        "Comparative analysis of data from the 2022 FIFA World Cup centered on Argentina. Created using RStudio.",
      icon: <SoccerBall size={36} />,
      link: "https://drive.google.com/file/d/1T7NCZhMaKBlXCGuYXKg4WhxHGlwhM60E/view?usp=sharing",
    },
    {
      title: "Arithmetic",
      description:
        "Python program that formats input strings as vertical arithmetic calculations.",
      icon: <MathOperations size={36} />,
      link: "https://github.com/emlew/ArithmeticCalculator",
    },
  ]);

  return { projects };
};
