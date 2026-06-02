import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data/portfolio";

type ProjectDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

function findProject(id: string) {
  return projects.find((project) => project.id === id);
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id
  }));
}

export async function generateMetadata({
  params
}: ProjectDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = findProject(id);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: `${project.name} | Project Detail`,
    description: project.summary,
    openGraph: {
      title: `${project.name} | Project Detail`,
      description: project.summary,
      type: "article"
    }
  };
}

function MediaPlaceholder() {
  return (
    <div className="media-placeholder detail-media-placeholder" aria-label="프로젝트 데모 미디어 준비 중">
      <div className="placeholder-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      </div>
      <span className="placeholder-text">Project Demo Video & Screenshots (TBD)</span>
    </div>
  );
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = findProject(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="detail-page">
      <div className="detail-container">
        <Link href="/#projects" className="detail-back-link">
          <span className="back-arrow">←</span> Back to Projects
        </Link>

        <header className="detail-hero">
          <div className="project-meta-top">
            <span className="project-period">{project.period}</span>
            <span className="project-type-tag">{project.type}</span>
          </div>
          <h1 className="detail-title">{project.name}</h1>
          <p className="detail-summary">{project.summary}</p>
        </header>

        {/* Media Placeholder in detail page */}
        <MediaPlaceholder />

        <section className="detail-section" aria-labelledby="role-heading">
          <h2 id="role-heading" className="detail-section-title">Role</h2>
          <div className="project-meta-grid detail-meta-grid">
            <div className="meta-col">
              <span className="meta-label">Role</span>
              <span className="meta-value">{project.role}</span>
            </div>
            {project.contribution ? (
              <div className="meta-col">
                <span className="meta-label">Contribution</span>
                <span className="meta-value">{project.contribution}</span>
              </div>
            ) : null}
          </div>
        </section>

        <section className="detail-section" aria-labelledby="stack-heading">
          <h2 id="stack-heading" className="detail-section-title">Stack</h2>
          <div className="project-tech-tags detail-tech-tags">
            {project.stack.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="detail-section detail-two-column">
          <div className="details-block">
            <h2 className="detail-section-title">Highlights</h2>
            <ul className="details-list">
              {project.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="details-block">
            <h2 className="detail-section-title">Outcomes</h2>
            <ul className="details-list text-highlight">
              {project.outcomes.map((outcome, idx) => (
                <li key={idx}>{outcome}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="detail-section" aria-labelledby="evidence-heading">
          <h2 id="evidence-heading" className="detail-section-title">Evidence</h2>
          <ul className="detail-evidence-list">
            {project.evidence.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
