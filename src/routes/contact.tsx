import { ArrowUpRight, EnvelopeSimple, GithubLogo } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/portfolio-ui";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — Axel Francisco" }, { name: "description", content: "Contact Axel Francisco for web app, mobile app, backend, database, authentication, and integration projects." },
    { property: "og:title", content: "Contact — Axel Francisco" }, { property: "og:description", content: "Start a conversation with developer Axel Francisco." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/contact" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/contact" }] }), component: ContactPage,
});

function ContactPage() {
  return <><PageIntro eyebrow="Contact" title="Let’s make your idea useful." description="Have a product in mind, a workflow to improve, or an app that needs a steady hand? Send me a message." /><section className="contact-layout"><article className="contact-primary"><p className="card-eyebrow">Best way to reach me</p><h2>Start with an email.</h2><p>I’m open to web, mobile, backend, and integration projects. Share your goal, timeline, and what you already have.</p><Button asChild size="lg" className="mt-8 min-h-14 px-7 text-base"><a href="mailto:rinuagold@gmail.com"><EnvelopeSimple size={22} /> rinuagold@gmail.com</a></Button></article><div className="contact-links"><a href="https://github.com/axelfrancisco" target="_blank" rel="noreferrer" className="contact-link"><GithubLogo size={30} /><span><strong>GitHub</strong><small>View code and repositories</small></span><ArrowUpRight size={22} /></a><a href="https://www.upwork.com/freelancers/~0128acb463b46d4e26?mp_source=share" target="_blank" rel="noreferrer" className="contact-link"><ArrowUpRight size={30} /><span><strong>Upwork</strong><small>View my freelance profile</small></span><ArrowUpRight size={22} /></a></div></section></>;
}