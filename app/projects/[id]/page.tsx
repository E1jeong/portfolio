import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data/portfolio";

import ShareButton from "./ShareButton";

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
    title: `${project.name} | Project Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.name} | Project Case Study`,
      description: project.summary,
      type: "article"
    }
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const currentIndex = projects.findIndex((project) => project.id === id);
  const project = currentIndex !== -1 ? projects[currentIndex] : null;

  if (!project) {
    notFound();
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main className="detail-page">
      <div className="detail-container">
        <div className="detail-top-nav">
          <Link href="/#projects" className="detail-back-link">
            <span className="back-arrow">←</span> Back to Projects
          </Link>
          <ShareButton />
        </div>

        <header className="detail-hero">
          <div className="project-meta-top">
            <span className="project-period">{project.period}</span>
            <span className="project-type-tag">{project.type}</span>
          </div>
          <h1 className="detail-title">{project.name}</h1>
          <p className="detail-summary">{project.summary}</p>
        </header>

        <div className="detail-banner" role="img" aria-label={`${project.name} — ${project.type}`}>
          <span className="detail-banner-type">{project.type}</span>
          <span className="detail-banner-name">{project.name}</span>
          <span className="detail-banner-period">{project.period}</span>
        </div>

        {/* 1. Quantitative Performance Metrics Grid */}
        {project.metrics && project.metrics.length > 0 ? (
          <section className="detail-section" aria-labelledby="metrics-heading">
            <h2 id="metrics-heading" className="detail-section-title">Verified Quantitative Metrics</h2>
            <div className="detail-metrics-grid">
              {project.metrics.map((m) => (
                <div key={m.label} className="detail-metric-card">
                  <div className="detail-metric-val">{m.value}</div>
                  <div className="detail-metric-lbl">{m.label}</div>
                  {m.description && <div className="detail-metric-sub">{m.description}</div>}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* 2. Pipeline Flow for Complex AI / Systems */}
        {project.pipelineSteps && project.pipelineSteps.length > 0 ? (
          <section className="detail-section" aria-labelledby="pipeline-heading">
            <h2 id="pipeline-heading" className="detail-section-title">End-to-End Pipeline Architecture</h2>
            <div className="detail-pipeline-flow">
              {project.pipelineSteps.map((step) => (
                <div key={step.step} className="pipeline-step-card">
                  <div className="pipeline-step-header">
                    <span className="pipeline-step-num">{step.step}</span>
                    <h3 className="pipeline-step-title">{step.title}</h3>
                  </div>
                  <p className="pipeline-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* 3. Dual-Repository / Multi-Module Boundaries */}
        {project.repositories && project.repositories.length > 0 ? (
          <section className="detail-section" aria-labelledby="repos-heading">
            <h2 id="repos-heading" className="detail-section-title">Repository Structure & Disclosure Scope</h2>
            <div className="detail-repos-grid">
              {project.repositories.map((repo) => (
                <div key={repo.name} className="detail-repo-card">
                  <div className="repo-card-header">
                    <span className="repo-code-icon">⌥</span>
                    <h3 className="repo-card-name">{repo.name}</h3>
                  </div>
                  <p className="repo-card-role">{repo.role}</p>
                  <div className="repo-card-disclosure">
                    <span className="disclosure-tag">공개 범위</span>
                    <span className="disclosure-text">{repo.disclosure}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* 4. Role & Contribution */}
        <section className="detail-section" aria-labelledby="role-heading">
          <h2 id="role-heading" className="detail-section-title">Role & Contribution</h2>
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

        {/* 5. Project Background */}
        {project.background ? (
          <section className="detail-section" aria-labelledby="background-heading">
            <h2 id="background-heading" className="detail-section-title">Project Background</h2>
            <div className="background-block-standalone">
              <p>{project.background}</p>
            </div>
          </section>
        ) : null}

        {/* 6. Problem Definition */}
        {project.problem ? (
          <section className="detail-section" aria-labelledby="problem-heading">
            <h2 id="problem-heading" className="detail-section-title">Core Problem & Constraints</h2>
            <div className="background-block-standalone problem-block-highlight">
              <p>{project.problem}</p>
            </div>
          </section>
        ) : null}

        {/* 7. Key Developed Features (Challenge / Solution / Outcome) */}
        {project.features && project.features.length > 0 ? (
          <section className="detail-section" aria-labelledby="features-heading">
            <h2 id="features-heading" className="detail-section-title">Key Developed Features & Technical Solutions</h2>
            <div className="features-container">
              {project.features.map((feature, idx) => (
                <div key={idx} className="feature-card">
                  <div className="feature-card-head">
                    <span className="feature-card-index">{String(idx + 1).padStart(2, "0")}</span>
                    <div className="feature-card-headings">
                      <h3 className="feature-card-title">{feature.title}</h3>
                      <p className="feature-card-description">{feature.description}</p>
                    </div>
                  </div>

                  <div className="feature-card-body">
                    <div className="feature-challenge-section">
                      <div className="step-badge-wrapper">
                        <span className="step-badge badge-challenge">Challenge</span>
                      </div>
                      <div className="step-content text-challenge">{feature.challenge}</div>
                    </div>

                    <div className="feature-solution-section">
                      <div className="solution-group">
                        <div className="step-badge-wrapper">
                          <span className="step-badge badge-solution">Solution &amp; Logic</span>
                        </div>
                        <div className="step-content text-solution">{feature.solution}</div>
                      </div>

                      <div className="outcome-group">
                        <div className="step-badge-wrapper">
                          <span className="step-badge badge-outcome">Outcome</span>
                        </div>
                        <div className="step-content text-outcome">{feature.outcome}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* 8. Result */}
        {project.result ? (
          <section className="detail-section" aria-labelledby="result-heading">
            <h2 id="result-heading" className="detail-section-title">Project Result & Impact</h2>
            <div className="background-block-standalone">
              <p>{project.result}</p>
            </div>
          </section>
        ) : null}

        {/* 9. Learning & Engineering Retrospective */}
        {project.learning ? (
          <section className="detail-section" aria-labelledby="learning-heading">
            <h2 id="learning-heading" className="detail-section-title">Learning & Insights</h2>
            <div className="learning-block-standalone">
              <p>{project.learning}</p>
            </div>
          </section>
        ) : null}

        {/* 10. Tech Stack Tags */}
        <section className="detail-section" aria-labelledby="stack-heading">
          <h2 id="stack-heading" className="detail-section-title">Tech Stack</h2>
          <div className="project-tech-tags detail-tech-tags">
            {project.stack.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* 11. Evidence & Disclosure */}
        <section className="detail-section" aria-labelledby="evidence-heading">
          <h2 id="evidence-heading" className="detail-section-title">Evidence & Public Disclosure</h2>
          <div className="evidence-public-notice">
            <p className="notice-main">Public Disclosure Boundary</p>
            <p className="notice-sub">{project.publicDisclosure}</p>
          </div>
          <div className="evidence-card-list">
            {project.evidence.map((ev, idx) => (
              <div key={idx} className="evidence-card-item evidence-git-type">
                <span className="evidence-badge-indicator">Evidence</span>
                <span className="evidence-text-content">{ev}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 12. Project Pagination (Prev / Next Project) */}
        <nav className="detail-pagination" aria-label="프로젝트 이동 네비게이션">
          {prevProject ? (
            <Link href={`/projects/${prevProject.id}`} className="pagination-card pagination-prev">
              <span className="pagination-dir">← Previous Project</span>
              <span className="pagination-title">{prevProject.name}</span>
            </Link>
          ) : (
            <div className="pagination-card pagination-placeholder" aria-hidden="true" />
          )}

          {nextProject ? (
            <Link href={`/projects/${nextProject.id}`} className="pagination-card pagination-next">
              <span className="pagination-dir">Next Project →</span>
              <span className="pagination-title">{nextProject.name}</span>
            </Link>
          ) : (
            <div className="pagination-card pagination-placeholder" aria-hidden="true" />
          )}
        </nav>
      </div>
    </main>
  );
}
