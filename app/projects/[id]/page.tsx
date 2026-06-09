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

        <div className="detail-media-placeholder media-placeholder">
          <div className="device-mockup">
            <div className="device-screen">
              <div className="device-statusBar">
                <span className="statusBar-time">09:41</span>
                <span className="statusBar-icons">🔋 📶</span>
              </div>
              <div className="device-appBar">
                <span className="appBar-title">{project.name}</span>
              </div>
              <div className="device-content">
                <div className="mock-chart-container">
                  <div className="mock-chart-bar" style={{ height: "60%" }}></div>
                  <div className="mock-chart-bar" style={{ height: "85%" }}></div>
                  <div className="mock-chart-bar" style={{ height: "45%" }}></div>
                  <div className="mock-chart-bar" style={{ height: "95%" }}></div>
                  <div className="mock-chart-bar" style={{ height: "70%" }}></div>
                </div>
                <div className="mock-list-item"></div>
                <div className="mock-list-item"></div>
              </div>
            </div>
            <div className="device-home-button"></div>
          </div>
          <p className="placeholder-text">{project.type} UI & System Showcase</p>
        </div>

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

        {project.features && project.features.length > 0 ? (
          <>
            <section className="detail-section" aria-labelledby="background-heading">
              <h2 id="background-heading" className="detail-section-title">Project Background</h2>
              <div className="background-block-standalone">
                <p>{project.background}</p>
              </div>
            </section>

            <section className="detail-section" aria-labelledby="features-heading">
              <h2 id="features-heading" className="detail-section-title">Key Developed Features</h2>
              <div className="features-container">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="feature-card">
                    <h3 className="feature-card-title">{feature.title}</h3>
                    <p className="feature-card-description">{feature.description}</p>
                    
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
                            <span className="step-badge badge-solution">Solution & Logic</span>
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
            
            <section className="detail-section" aria-labelledby="learning-heading">
              <h2 id="learning-heading" className="detail-section-title">Learning & Insights</h2>
              <div className="learning-block-standalone">
                <p>{project.learning}</p>
              </div>
            </section>
          </>
        ) : (
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
        )}

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
          <h2 id="evidence-heading" className="detail-section-title">Evidence & Verification</h2>
          <div className="evidence-public-notice">
            <p className="notice-main">✓ 본 프로젝트의 기여도 및 수행 이력은 사내 Git 저장소 기록 및 작업 로그를 바탕으로 상호 검증되었습니다.</p>
            <p className="notice-sub">※ 보안 및 대외비(NDA) 준수를 위해 상세 코드 구조 및 개인 로컬 경로 정보는 공개 화면에 직접 노출하지 않습니다.</p>
          </div>
          <p className="public-disclosure">{project.publicDisclosure}</p>
        </section>
      </div>
    </main>
  );
}
