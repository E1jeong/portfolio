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
    title: `${project.name} | Case Study - 이원정 포트폴리오`,
    description: project.summary,
    openGraph: {
      title: `${project.name} | Case Study - 이원정 포트폴리오`,
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

  const currentIndex = projects.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main className="detail-page-wrapper">
      <div className="detail-content-container">
        {/* Top Breadcrumb Navigation */}
        <nav className="detail-top-nav" aria-label="프로젝트 상단 이동">
          <Link href="/#projects" className="detail-back-button">
            <span className="back-arrow-icon" aria-hidden="true">←</span>
            <span>전체 프로젝트 목록으로</span>
          </Link>
          <div className="detail-project-index">
            <span className="index-current">{String(currentIndex + 1).padStart(2, "0")}</span>
            <span className="index-divider">/</span>
            <span className="index-total">{String(projects.length).padStart(2, "0")}</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="detail-header-hero">
          <div className="detail-hero-tag-row">
            <span className="detail-badge-type">{project.type}</span>
            <span className="detail-badge-period">{project.period}</span>
          </div>
          <h1 className="detail-main-title">{project.name}</h1>
          <p className="detail-main-summary">{project.summary}</p>

          {/* Executive Role & Ownership Bar */}
          <div className="detail-ownership-bar">
            <div className="ownership-item">
              <span className="ownership-label">담당 역할</span>
              <span className="ownership-value">{project.role}</span>
            </div>
            {project.contribution && (
              <div className="ownership-item">
                <span className="ownership-label">기여도 &amp; 담당 범위</span>
                <span className="ownership-value highlight-accent">{project.contribution}</span>
              </div>
            )}
          </div>
        </header>

        {/* 1. Verified Key Performance Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="detail-block-section" aria-labelledby="metrics-title">
            <div className="section-title-wrap">
              <span className="section-label-num">01</span>
              <h2 id="metrics-title" className="section-main-heading">핵심 검증 성과 (Key Verified Metrics)</h2>
            </div>
            <div className="metrics-cards-grid">
              {project.metrics.map((m) => (
                <div key={m.label} className="metric-stat-card">
                  <div className="metric-stat-value">{m.value}</div>
                  <div className="metric-stat-label">{m.label}</div>
                  {m.description && <div className="metric-stat-desc">{m.description}</div>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 2. End-to-End Pipeline Architecture (For AI / System Projects) */}
        {project.pipelineSteps && project.pipelineSteps.length > 0 && (
          <section className="detail-block-section" aria-labelledby="pipeline-title">
            <div className="section-title-wrap">
              <span className="section-label-num">02</span>
              <h2 id="pipeline-title" className="section-main-heading">엔드투엔드 파이프라인 구조 (Pipeline Architecture)</h2>
            </div>
            <div className="pipeline-flow-timeline">
              {project.pipelineSteps.map((step, idx) => (
                <div key={step.step} className="pipeline-flow-step">
                  <div className="pipeline-step-indicator">
                    <span className="step-circle">{step.step}</span>
                    {idx < project.pipelineSteps!.length - 1 && <span className="step-line" aria-hidden="true" />}
                  </div>
                  <div className="pipeline-step-body">
                    <h3 className="pipeline-step-title">{step.title}</h3>
                    <p className="pipeline-step-text">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 3. Dual-Repository / Multi-Module Disclosure Scope */}
        {project.repositories && project.repositories.length > 0 && (
          <section className="detail-block-section" aria-labelledby="repos-title">
            <div className="section-title-wrap">
              <span className="section-label-num">03</span>
              <h2 id="repos-title" className="section-main-heading">저장소 구성 및 공개 범위 (Repository &amp; Disclosure)</h2>
            </div>
            <div className="repos-structure-grid">
              {project.repositories.map((repo) => (
                <div key={repo.name} className="repo-scope-card">
                  <div className="repo-scope-head">
                    <span className="repo-tag-icon" aria-hidden="true">⌥</span>
                    <h3 className="repo-name-text">{repo.name}</h3>
                  </div>
                  <p className="repo-role-text">{repo.role}</p>
                  <div className="repo-disclosure-pill">
                    <span className="disclosure-pill-label">공개 범위</span>
                    <span className="disclosure-pill-value">{repo.disclosure}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. Context & Core Problem Definition (2-Column Comparative Layout) */}
        <section className="detail-block-section" aria-labelledby="context-title">
          <div className="section-title-wrap">
            <span className="section-label-num">04</span>
            <h2 id="context-title" className="section-main-heading">프로젝트 맥락 및 핵심 과제 (Context &amp; Challenges)</h2>
          </div>
          <div className="context-comparison-grid">
            <div className="context-card bg-context">
              <div className="context-card-header">
                <span className="context-card-tag tag-bg">배경 및 환경</span>
                <h3 className="context-card-title">Project Background</h3>
              </div>
              <p className="context-card-content">{project.background}</p>
            </div>

            <div className="context-card bg-problem">
              <div className="context-card-header">
                <span className="context-card-tag tag-problem">해결해야 했던 핵심 문제</span>
                <h3 className="context-card-title">Core Technical Problems</h3>
              </div>
              <p className="context-card-content">{project.problem}</p>
            </div>
          </div>
        </section>

        {/* 5. Problem-Solving Deep Dive: Cause & Effect Storyboard */}
        {project.features && project.features.length > 0 && (
          <section className="detail-block-section" aria-labelledby="features-deepdive-title">
            <div className="section-title-wrap">
              <span className="section-label-num">05</span>
              <div>
                <h2 id="features-deepdive-title" className="section-main-heading">
                  엔지니어링 딥다이브: 문제 해결과 인과관계
                </h2>
                <p className="section-sub-desc">
                  각 과제별 <strong>문제 현상 및 원인</strong> → <strong>기술적 판단과 해결 로직</strong> → <strong>검증된 성과</strong>의 인과관계
                </p>
              </div>
            </div>

            <div className="storyboard-container">
              {project.features.map((feature, idx) => (
                <article key={idx} className="storyboard-item-card">
                  {/* Task Header */}
                  <header className="storyboard-header">
                    <span className="storyboard-index">TASK {String(idx + 1).padStart(2, "0")}</span>
                    <div className="storyboard-title-group">
                      <h3 className="storyboard-title">{feature.title}</h3>
                      <p className="storyboard-subtitle">{feature.description}</p>
                    </div>
                  </header>

                  {/* 3-Step Cause-and-Effect Flow */}
                  <div className="storyboard-flow-grid">
                    {/* 1. Problem & Challenge */}
                    <div className="flow-column flow-challenge">
                      <div className="flow-badge badge-challenge">
                        <span className="flow-badge-dot" />
                        <span>01. 문제 및 원인 (Problem &amp; Cause)</span>
                      </div>
                      <div className="flow-content-box">
                        <p>{feature.challenge}</p>
                      </div>
                    </div>

                    {/* 2. Engineering Solution & Logic */}
                    <div className="flow-column flow-solution">
                      <div className="flow-badge badge-solution">
                        <span className="flow-badge-dot" />
                        <span>02. 기술적 판단과 해결 (Engineering Solution)</span>
                      </div>
                      <div className="flow-content-box">
                        <p>{feature.solution}</p>
                      </div>
                    </div>

                    {/* 3. Measurable Outcome & Impact */}
                    <div className="flow-column flow-outcome">
                      <div className="flow-badge badge-outcome">
                        <span className="flow-badge-dot" />
                        <span>03. 해결 결과 및 성과 (Outcome &amp; Impact)</span>
                      </div>
                      <div className="flow-content-box">
                        <p>{feature.outcome}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* 6. Overall Result & Engineering Retrospective */}
        <section className="detail-block-section" aria-labelledby="retrospective-title">
          <div className="section-title-wrap">
            <span className="section-label-num">06</span>
            <h2 id="retrospective-title" className="section-main-heading">종합 결과 및 엔지니어링 회고 (Result &amp; Insights)</h2>
          </div>

          <div className="retrospective-cards-stack">
            {project.result && (
              <div className="result-impact-box">
                <h3 className="retro-box-title">🏆 프로젝트 최종 성과 (Impact)</h3>
                <p className="retro-box-text">{project.result}</p>
              </div>
            )}

            {project.learning && (
              <div className="learning-insight-box">
                <h3 className="retro-box-title">💡 기술적 통찰과 배운 점 (Engineering Insights)</h3>
                <p className="retro-box-text">{project.learning}</p>
              </div>
            )}
          </div>
        </section>

        {/* 7. Tech Stack Chips */}
        <section className="detail-block-section" aria-labelledby="tech-stack-title">
          <div className="section-title-wrap">
            <span className="section-label-num">07</span>
            <h2 id="tech-stack-title" className="section-main-heading">사용 기술 및 도구 (Tech Stack)</h2>
          </div>
          <div className="tech-chips-flex">
            {project.stack.map((tech) => (
              <span key={tech} className="tech-chip-item">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* 8. Evidence & Public Disclosure Notice */}
        <section className="detail-block-section" aria-labelledby="evidence-verif-title">
          <div className="section-title-wrap">
            <span className="section-label-num">08</span>
            <h2 id="evidence-verif-title" className="section-main-heading">신뢰성 검증 및 증빙 (Evidence &amp; Verification)</h2>
          </div>

          <div className="evidence-summary-container">
            <div className="disclosure-boundary-note">
              <span className="boundary-note-title">공개 범위 안내</span>
              <p className="boundary-note-desc">{project.publicDisclosure}</p>
            </div>

            <div className="evidence-items-list">
              {project.evidence.map((ev, idx) => (
                <div key={idx} className="evidence-list-row">
                  <span className="evidence-row-badge">VERIFIED</span>
                  <span className="evidence-row-text">{ev}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Project-to-Project Pagination */}
        <footer className="detail-pagination-footer">
          {prevProject ? (
            <Link href={`/projects/${prevProject.id}`} className="pagination-card prev-card">
              <span className="pagination-direction">← 이전 프로젝트</span>
              <span className="pagination-name">{prevProject.name}</span>
            </Link>
          ) : (
            <div className="pagination-card disabled" />
          )}

          {nextProject ? (
            <Link href={`/projects/${nextProject.id}`} className="pagination-card next-card">
              <span className="pagination-direction">다음 프로젝트 →</span>
              <span className="pagination-name">{nextProject.name}</span>
            </Link>
          ) : (
            <Link href="/#projects" className="pagination-card next-card">
              <span className="pagination-direction">목록으로 이동</span>
              <span className="pagination-name">메인 포트폴리오 홈</span>
            </Link>
          )}
        </footer>
      </div>
    </main>
  );
}
