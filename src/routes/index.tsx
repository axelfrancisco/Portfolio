import { ArrowUpRight, EnvelopeSimple } from "@phosphor-icons/react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { ProjectCard, ServiceCard, TextLink, ToolsMarquee, projects, services } from "@/components/portfolio-ui";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Van Axel Francisco — Web & Mobile App Developer" },
      { name: "description", content: "Portfolio of Van Axel Francisco, a developer building thoughtful web apps, mobile products, backends, and secure integrations." },
      { property: "og:title", content: "Van Axel Francisco — Web & Mobile App Developer" },
      { property: "og:description", content: "Explore Van Axel Francisco's selected web, mobile, backend, and integration work." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <>
      <section className="home-hero">
        <div>
          <p className="eyebrow">Designing & Building Digital Experiences · Philippines</p>
          <h1>Ideas into products.<br /><span>Built to last.</span></h1>
          <p className="page-description max-w-3xl">I’m Van Axel Francisco, a web and mobile app developer focused on useful products, reliable systems, and clear experiences.</p>
        </div>
        <Button asChild size="lg" className="min-h-12 px-6 text-base">
          <a href="mailto:rinuagold@gmail.com">Email me <EnvelopeSimple size={21} /></a>
        </Button>
      </section>

      <ToolsMarquee />

      <section className="home-grid" aria-label="Portfolio overview">
        <div className="content-card home-projects">
          <div className="section-heading"><div><p className="card-eyebrow">Selected work</p><h2>Projects</h2></div><TextLink to="/projects">View all</TextLink></div>
          <div className="mini-projects">
            {projects.slice(0, 2).map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </div>
        <div className="content-card about-card">
          <p className="card-eyebrow">About</p>
          <h2>Practical builds, thoughtful details.</h2>
          <p className="card-copy">I work across web, mobile, data, and authentication to turn an idea into something people can actually use.</p>
          <a className="text-link mt-auto" href="https://github.com/axelfrancisco" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={20} /></a>
        </div>
        <div className="content-card home-services">
          <div className="section-heading"><div><p className="card-eyebrow">What I do</p><h2>Services</h2></div><TextLink to="/services">View all</TextLink></div>
          <div className="service-list">{services.map((service) => <ServiceCard key={service.title} service={service} />)}</div>
        </div>
        <div className="content-card contact-card">
          <p className="card-eyebrow">Have a project?</p>
          <h2>Let’s build something that works.</h2>
          <p className="card-copy">Tell me what you’re creating and where you need help.</p>
          <Button asChild className="mt-auto min-h-12 text-base"><Link to="/contact">Get in touch <ArrowUpRight size={20} /></Link></Button>
        </div>
      </section>
    </>
  );
}
