import { hash } from "crypto";
import bookstack from "../../public/bookstack.png";
import pharmcare from "../../public/pharmcare.png";
import feedback from "../../public/feedback.jpg"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Certificates",
    hash: "#certificates",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "bookStack App",
    description:
      "A responsive web-based bookstore built using the React-Vite. It has features like user authentication, checkout, storing books and users in database.",
    tags: ["React", "MongoDB", "Tailwind", "NodeJS", "ExpressJS "],
    imageUrl: bookstack,
  },
  {
    title: "Pharmcare",
    description:
      "Designed & built high-fidelity user interface for a healthcare app using Figma & flutter, incorporating visual elements, typography, and color schemes that aligned with the app's purpose and target audience. ",
    tags: ["Figma", "Flutter", "Machine Learning"],
    imageUrl: pharmcare,
  },
  {
    title: "Student Feedback Analysis",
    description:
      "A smart platform that collects student feedback, visualizes it on a dashboard for teachers, and uses AI to generate actionable suggestions based on negative responses",
    tags: ["React", "Python(Flask)", "OLLAMA", "TailwindCSS"],
    imageUrl: feedback,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "MongoDB",
  "MySQL",
  "Framer Motion",
  "Figma",
  "Python",
  "Java",
] as const;
