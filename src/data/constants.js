import {
  FileHtml,
  FileCss,
  FileJs,
  GitBranch,
  Devices,
  Atom,
  BookOpen,
  Globe,
  GraduationCap,
} from "@phosphor-icons/react";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS = [
  { icon: FileHtml, name: "HTML5", width: "90%" },
  { icon: FileCss, name: "CSS3", width: "85%" },
  { icon: FileJs, name: "JavaScript", width: "75%" },
  { icon: GitBranch, name: "Git", width: "70%" },
  { icon: Devices, name: "Responsive Design", width: "85%" },
  { icon: Atom, name: "React", width: "55%" },
];

export const PROJECTS = [
  {
    title: "LibraNova",
    description:
      "A full-stack online library management system with book tracking, member management, and transactions. Deployed live on Railway via Docker.",
    tags: ["PHP", "MySQL", "Docker", "Railway"],
    icon: BookOpen,
    liveUrl: "https://libranova-production.up.railway.app/index.php",
    githubUrl: "https://github.com/mhdiyaaan/LibraNova",
  },
  {
    title: "DigiKerala",
    description:
      "A web platform built to serve digital needs for Kerala. Features a clean, responsive interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: Globe,
    liveUrl: "https://digikerala.vercel.app/",
    githubUrl: "https://github.com/mhdiyaaan/DigiKerala",
  },
  {
    title: "K-Smart Guidance Website",
    description:
      "A guidance and information website for K-Smart, designed to help users navigate services with a clean UI.",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: GraduationCap,
    liveUrl: "https://v0-guidance-website-for-k-smart.vercel.app/",
    githubUrl: "https://github.com/mhdiyaaan/v0-guidance-website-for-k-smart",
  },
];
