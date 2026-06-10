import { Icons } from "@/components/icons";
import { Experience, NavLink, Project, Skill } from "./types";

export const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const projectsData: Project[] = [
  {
    video: "assets/videos/green-agri.mp4",
    title: "Green Agri Corp",
    description:
      "It is rice import/export website, a company specializing in rice product.  Designed and implemented clean UI components to showcase product varieties,  global trade information, and contact options. Ensured mobile responsiveness  and cross-browser compatibility using HTML, Tailwind CSS, and JavaScript,  React etc to enhance user experience.",
    technologies: ["React.js", "Tailwind", "Prisma", "Nextjs", "Shadcn"],
    links: {
      preview: "https://greenagricorp.com",
      github: "#",
      githubApi: "#",
    },
  },
  {
    video: "assets/videos/akdk.mp4",
    title: "AKDK Digital Agency",
    description:
      "Created the official website for AKDK Digital, a modern web developmen agency. Designed and developed a clean, responsive landing page and project showcase using React, Tailwind CSS, and modern UI libraries. Integrated present agency offerings and attract potential clients",
    technologies: [
      "React.js",
      "Tailwind",
      "Prisma",
      "Nextjs",
      "Shadcn",
      "Components",
    ],
    links: {
      preview: "https://akdkdigital.com",
      github: "#",
      githubApi: "#",
    },
  },
] as const;

export const experiencesData: Experience[] = [
  {
    title: "Figma & Web Developer",
    company: "AKDK Digital ,Hybrid",
    description:
      "Built and maintained scalable, responsive web applications using React.js,Javascript, Next.js, and modern frontend technologies, emphasizing performance optimization, clean architecture, and reusable component-based development.",
    period: "2024 october - April 2026",
    technologies: [
      "React",
      "JavaScript",
      "Prisma",
      "Nextjs",
      "Tailwind",
      "ShadCn",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "SofStack, remote",
    description:
      "Contributed to building responsive web pages and UI components. Worked in an agile environment and learned best practices from senior developers.",
    period: "2023 sept - 2024 April",
    technologies: ["HTML", "React", "Tailwind/Css", "ShadCN"],
  },
];

export const skillsData: Skill[] = [
  // { name: "Sass", icon: <Icons.sass className="size-12" /> },
  { name: "HTML", icon: <Icons.html5 className="size-12" /> },
  { name: "Tailwind", icon: <Icons.tailwind className="size-12" /> },
  { name: "JavaScript", icon: <Icons.javascript className="size-12" /> },
  // { name: "TypeScript", icon: <Icons.typescript className="size-12" /> },
  { name: "React", icon: <Icons.react className="size-12" /> },
  { name: "NextJS", icon: <Icons.nextjs className="size-12" /> },
  // { name: "NestJS", icon: <Icons.nestjs className="size-12" /> },
  { name: "Prisma", icon: <Icons.prisma className="size-12" /> },
  // { name: "Docker", icon: <Icons.docker className="size-12" /> },
  { name: "Nodejs", icon: <Icons.nodejs className="size-12" /> },
  // { name: "Expressjs", icon: <Icons.expressjs className="size-12" /> },
];
