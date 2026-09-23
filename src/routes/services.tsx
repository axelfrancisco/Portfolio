import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, ServiceCard, services } from "@/components/portfolio-ui";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services — Axel Francisco" }, { name: "description", content: "Web app, mobile app, backend, database, authentication, and integration services by Axel Francisco." },
    { property: "og:title", content: "Services — Axel Francisco" }, { property: "og:description", content: "Web, mobile, backend, database, authentication, and integration development services." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/services" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/services" }] }), component: ServicesPage,
});

function ServicesPage() {
  return <><PageIntro eyebrow="Services" title="One builder, end to end." description="From interface to infrastructure, I build complete products with fewer handoffs and clearer decisions." /><section className="services-grid">{services.map((service) => <ServiceCard key={service.title} service={service} />)}</section></>;
}
