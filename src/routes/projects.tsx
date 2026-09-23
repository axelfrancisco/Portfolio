import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, ProjectCard, projects } from "@/components/portfolio-ui";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Projects — Axel Francisco" },
    { name: "description", content: "Selected web and mobile app projects by Axel Francisco, including DailyFrame, Sulasko Cal, HopeHRS, and APK Build Service." },
    { property: "og:title", content: "Projects — Axel Francisco" },
    { property: "og:description", content: "Explore selected web, mobile, HR, calendar, and developer platform projects." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/projects" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/projects" }] }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return <><PageIntro eyebrow="Selected work" title="Products made for real workflows." description="A collection of mobile apps, web platforms, and systems designed around the people who use them." /><section className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} featured={index === 0} />)}</section></>;
}
