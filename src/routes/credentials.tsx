import { ArrowSquareOut, Medal, Plus } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/portfolio-ui";

export const Route = createFileRoute("/credentials")({
  head: () => ({ meta: [
    { title: "Credentials — Van Axel Francisco" }, { name: "description", content: "Credentials, certifications, and professional achievements of developer Van Axel Francisco." },
    { property: "og:title", content: "Credentials — Van Axel Francisco" }, { property: "og:description", content: "Credentials, certifications, and achievements from Van Axel Francisco." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/credentials" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/credentials" }] }), component: CredentialsPage,
});

function CredentialsPage() {
  const credentials = [
    {
      title: "SQL and Relational Databases 101",
      issuer: "Cognitive Class",
      category: "Database",
      url: "https://courses.cognitiveclass.ai/certificates/c418b3bc81bc452e8163b3e5670cd18a",
    },
    {
      title: "Oracle Cloud Infrastructure Foundations Associate",
      issuer: "Oracle",
      category: "Cloud",
      url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=CB9790ECC897742EF4F399E7A8B7A0030A042BC67CB937F80D56FD6A29FACAAF",
    },
    {
      title: "Oracle Data Platform Foundations Associate",
      issuer: "Oracle",
      category: "Data Platform",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=56FCA9B7121A08BA5B3C127180B7F265A36113813CC286A6661F33153878C1B5",
    },
    {
      title: "NoSQL and DBaaS 101",
      issuer: "Cognitive Class",
      category: "Database",
      url: "https://courses.cognitiveclass.ai/certificates/3d133dc5f9b54d34b236d1e313c91290",
    },
    {
      title: "Oracle Cloud Infrastructure AI Foundations",
      issuer: "Oracle",
      category: "AI / Cloud",
      url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=650DE68FAC624C1807E86D44646B2172E63AC25565577A1A66F0AD1B7EFD3E75",
    },
    {
      title: "Google Gemini University Certification",
      issuer: "Google",
      category: "AI",
      url: "https://edu.google.accredible.com/8cc2c5cd-31a2-4076-92bb-c75924c2efb2#acc.TbOgoqkh",
    },
  ];

  return (
    <>
      <PageIntro
        eyebrow="Credentials"
        title="Learning, verified."
        description="Certifications and courses I've completed along my learning journey."
      />

      <section className="credentials-grid">
        {credentials.map((credential) => (
          <article key={credential.title} className="content-card credential-card">
            <div className="credential-card-icon">
              <Medal size={28} weight="duotone" />
            </div>

            <div className="credential-card-content">
              <p className="card-eyebrow">{credential.category}</p>
              <h2>{credential.title}</h2>
              <p className="card-copy">{credential.issuer}</p>
            </div>

            <a
              href={credential.url}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              View Credential
              <ArrowSquareOut size={18} />
            </a>
          </article>
        ))}
      </section>
    </>
  );
}
