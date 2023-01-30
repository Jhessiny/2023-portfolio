import { ProjectModel } from "@/app/models/project-model";

export const projectsList: ProjectModel[] = [
  {
    title: "Online Shopping Cart",
    description:
      "E-commerce website with products list and item pages, infinite scroll, interactive shopping cart, checkout, login with Google.",
    technologies: "Next.js, Typescript, Tailwindcss, Zustand, Axios, Next-Auth",
    img: "/assets/ecommerce2.png",
    githubRepo: "https://github.com/Jhessiny/next-eccomerce",
    deployLink: "https://next-eccomerce-gules.vercel.app/products",
  },
  {
    title: "Quiz Dash",
    description:
      "Dashboard to manage quizzes and contacts. The admin can create quizzes to gather leads and send it to platforms like Active Campaign.",
    technologies: "React.js, Typescript, TSS, Axios",
    img: "/assets/ecommerce2.png",
    githubRepo: "/",
    deployLink: "/",
  },
  {
    title: "Fernandes Coutinho Advogados",
    description:
      "Landing page to present lawyer services and receive contacts.",
    technologies: "Html, Sass, Javascript",
    img: "/assets/ecommerce2.png",
    githubRepo: "/",
    deployLink: "/",
  },
  {
    title: "project4",
    description:
      "Ecommerce project with products list and item pages, infinite scroll, cart, checkout",
    technologies: "Next.js, Typescript, Tailwindcss, Zustand, Axios",
    img: "/assets/ecommerce2.png",
    githubRepo: "/",
    deployLink: "/",
  },
];

export const translateList: Record<number, string> = {
  0: "-translate-x-[0px]",
  1: "-translate-x-[452px]",
  2: "-translate-x-[904px]",
  3: "-translate-x-[1356px]",
};
