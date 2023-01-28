import { ProjectModel } from "@/app/models/project-model";

export const projectsList: ProjectModel[] = [
  {
    title: "project1",
    description:
      "Ecommerce project with products list and item pages, infinite scroll, cart, checkout, login with Google",
    technologies: "Next.js, Typescript, Tailwindcss, Zustand, Axios",
    img: "/assets/ecommerce2.png",
  },
  {
    title: "project2",
    description:
      "Ecommerce project with products list and item pages, infinite scroll, cart, checkout",
    technologies: "Next.js, Typescript, Tailwindcss, Zustand, Axios",
    img: "/assets/ecommerce2.png",
  },
  {
    title: "project3",
    description:
      "Ecommerce project with products list and item pages, infinite scroll, cart, checkout",
    technologies: "Next.js, Typescript, Tailwindcss, Zustand, Axios",
    img: "/assets/ecommerce2.png",
  },
  {
    title: "project4",
    description:
      "Ecommerce project with products list and item pages, infinite scroll, cart, checkout",
    technologies: "Next.js, Typescript, Tailwindcss, Zustand, Axios",
    img: "/assets/ecommerce2.png",
  },
];

export const translateList: Record<number, string> = {
  0: "-translate-x-[0px]",
  1: "-translate-x-[452px]",
  2: "-translate-x-[904px]",
  3: "-translate-x-[1356px]",
};
