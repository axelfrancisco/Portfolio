import {
  ArrowRight,
  Atom,
  ChatCircleText,
  Code,
  Cube,
  Database,
  DeviceMobile,
  FileTs,
  GithubLogo,
  Globe,
  Lightning,
  ShieldCheck,
  Sparkle,
  Stack,
} from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const projects = [
  {
    title: "DailyFrame",
    eyebrow: "Mobile productivity",
    tagline: "Turn your class schedule into your lock screen.",
    description: "A mobile app for students and teachers that turns a weekly schedule into a live home screen and wallpaper generator, with a dark UI and a bold magenta accent.",
    tools: ["React Native", "Expo", "Supabase"],
    icon: DeviceMobile,
  },
  {
    title: "Sulasko Cal",
    eyebrow: "Team coordination",
    tagline: "Calendar and tasks, built for how Team Alud works.",
    description: "A calendar and task management app with Google sign-in and a glass-panel navigation bar, packaged as a downloadable Android build.",
    tools: ["Expo", "Supabase", "Google OAuth"],
    icon: Stack,
  },
  {
    title: "HopeHRS",
    eyebrow: "Human resources",
    tagline: "An HR system that just works — sign-in included.",
    description: "A web-based HR Management System with Google sign-in wired into Supabase, deployed and debugged for real-world use.",
    tools: ["React", "Vite", "Supabase", "Netlify"],
    icon: Globe,
  },
  {
    title: "APK Build Service",
    eyebrow: "Developer platform",
    tagline: "Upload your app. Get back a working APK.",
    description: "A web platform where a developer uploads a React Native or Expo project and gets back a compiled Android build, with live build-status updates.",
    tools: ["Expo", "EAS Build", "Supabase Realtime"],
    icon: Code,
  },
] as const;

export const services = [
  { title: "Web App Development", description: "Fast, responsive web applications built for real users and practical workflows.", icon: Globe },
  { title: "Mobile App Development", description: "Cross-platform mobile experiences built with React Native and Expo.", icon: DeviceMobile },
  { title: "Backend & Database", description: "Reliable data models, real-time features, storage, and server-side foundations.", icon: Stack },
  { title: "Authentication & Integrations", description: "Secure sign-in and thoughtful connections between the tools your product relies on.", icon: ShieldCheck },
] as const;

const tools = [
  { name: "Claude", icon: Sparkle },
  { name: "Supabase", icon: Database },
  { name: "ChatGPT", icon: ChatCircleText },
  { name: "React", icon: Atom },
  { name: "Expo", icon: Cube },
  { name: "Vite", icon: Lightning },
  { name: "GitHub", icon: GithubLogo },
  { name: "TypeScript", icon: FileTs },
];

export function ToolsMarquee() {
  return (
    <section className="marquee-shell" aria-label="Tools I work with">
      <div className="marquee-title">
        <span>Daily drivers</span>
        <strong>Tools I work with</strong>
      </div>

      <div className="marquee-window">
        <div className="marquee-track">
          {[...tools, ...tools].map(({ name, icon: Icon }, index) => (
            <span
              className="tool-pill"
              key={`${name}-${index}`}
              aria-hidden={index >= tools.length}
            >
              <Icon size={21} weight="duotone" aria-hidden="true" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PageIntro({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: ReactNode }) {
  return (
    <header className="page-intro">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-description">{description}</p>
      </div>
      {action}
    </header>
  );
}

export function ProjectCard({ project, featured = false }: { project: (typeof projects)[number]; featured?: boolean }) {
  const Icon = project.icon;
  return (
    <article className={`content-card project-card ${featured ? "project-featured" : ""}`}>
      <div className="icon-tile"><Icon size={25} weight="duotone" /></div>
      <p className="card-eyebrow">{project.eyebrow}</p>
      <h2>{project.title}</h2>
      <p className="project-tagline">{project.tagline}</p>
      <p className="card-copy">{project.description}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {project.tools.map((tool) => <span key={tool} className="tech-tag">{tool}</span>)}
      </div>
    </article>
  );
}

export function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon;
  return (
    <article className="content-card service-card">
      <div className="icon-tile"><Icon size={26} weight="duotone" /></div>
      <div>
        <h2>{service.title}</h2>
        <p className="card-copy mt-2">{service.description}</p>
      </div>
    </article>
  );
}

export function TextLink({ to, children }: { to: "/projects" | "/services" | "/credentials" | "/contact"; children: ReactNode }) {
  return <Link to={to} className="text-link">{children}<ArrowRight size={20} aria-hidden="true" /></Link>;
}
