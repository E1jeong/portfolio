import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data/portfolio";

const confidenceLabels = {
  git: "Git verified",
  "code-and-notion": "Strong evidence",
  limited: "Limited evidence"
} as const;

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
            <span className={`confidence-badge confidence-${project.confidence}`}>
              {confidenceLabels[project.confidence]}
            </span>
          </div>
          <h1 className="detail-title">{project.name}</h1>
          <p className="detail-summary">{project.summary}</p>
        </header>

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

        <section className="detail-section case-study-grid" aria-label="프로젝트 상세 흐름">
          <div className="case-study-block">
            <h2 className="detail-section-title">Background</h2>
            <p>{project.background}</p>
          </div>
          <div className="case-study-block">
            <h2 className="detail-section-title">Problem</h2>
            <p>{project.problem}</p>
          </div>
          <div className="case-study-block case-study-wide">
            <h2 className="detail-section-title">Actions</h2>
            <ul className="details-list">
              {project.actions.map((action, idx) => (
                <li key={idx}>{action}</li>
              ))}
            </ul>
          </div>
          <div className="case-study-block">
            <h2 className="detail-section-title">Result</h2>
            <p>{project.result}</p>
          </div>
          <div className="case-study-block">
            <h2 className="detail-section-title">Learning</h2>
            <p>{project.learning}</p>
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

        <section className="detail-section" aria-labelledby="evidence-heading">
          <h2 id="evidence-heading" className="detail-section-title">Evidence</h2>
          <ul className="detail-evidence-list">
            {project.evidence.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="public-disclosure">{project.publicDisclosure}</p>
        </section>
      </div>
    </main>
  );
}
