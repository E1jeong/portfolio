import Link from "next/link";
import { experiences, profile, projects, skillGroups } from "../data/portfolio";

const confidenceLabels = {
  git: "Git Verified",
  "code-and-notion": "Code & Notion Based",
  limited: "Limited Analysis"
} as const;

export default function Home() {
  return (
    <div className="layout-container">
      {/* Left fixed sidebar */}
      <aside className="sidebar">
        <div className="sidebar-sticky">
          <div className="profile-header">
            <p className="profile-title">{profile.title}</p>
            <h1 className="profile-name">{profile.name}</h1>
          </div>

          <p className="profile-summary">{profile.summary}</p>
          <p className="profile-subsummary">{profile.subSummary}</p>

          <nav className="nav-menu" aria-label="섹션 이동 네비게이션">
            <ul>
              <li>
                <a href="#about" className="nav-link">
                  <span className="nav-indicator"></span>
                  <span className="nav-text">ABOUT</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="nav-link">
                  <span className="nav-indicator"></span>
                  <span className="nav-text">PROJECTS</span>
                </a>
              </li>
              <li>
                <a href="#skills" className="nav-link">
                  <span className="nav-indicator"></span>
                  <span className="nav-text">SKILLS</span>
                </a>
              </li>
              <li>
                <a href="#experience" className="nav-link">
                  <span className="nav-indicator"></span>
                  <span className="nav-text">EXPERIENCE</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Quick shortcuts for top projects */}
          <div className="shortcuts-wrapper" aria-label="대표 프로젝트 바로가기">
            <p className="shortcuts-title">Featured Projects</p>
            <ul className="shortcuts-list">
              <li>
                <a href="#ubio-n-face-pro" className="shortcut-link">UBio-N Face Pro</a>
              </li>
              <li>
                <a href="#fisherlotto" className="shortcut-link">Fisher Lotto</a>
              </li>
              <li>
                <a href="#renew-smartset" className="shortcut-link">SmartSet Renewal</a>
              </li>
            </ul>
          </div>

          <div className="contacts-wrapper" aria-label="연락처 정보">
            {profile.contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="contact-link"
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {contact.label}
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* Right scrollable content */}
      <main className="content-scroll">
        <section id="about" className="content-section" aria-labelledby="about-heading">
          <h2 id="about-heading" className="sr-only">소개</h2>
          <p className="lead-description">
            Android 시스템 레벨 앱 개발부터 하드웨어 연동, NFC/단말 프로토콜 분석 및 대응, 그리고 Google Play 결제 및 구독 기반 비즈니스 모델이 포함된 앱 개발을 엔드투엔드로 설계하고 개선해왔습니다.
          </p>
          <p className="lead-subdescription">
            Java 레거시 프로젝트의 안정적인 장기 운영과 Kotlin/Jetpack Compose 기반의 최신 아키텍처 재설계 경험을 균형 있게 활용하여 비즈니스의 성장과 개발 생산성을 돕습니다.
          </p>
        </section>

        <section id="projects" className="content-section" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="section-title">PROJECTS</h2>
          <div className="project-list">
            {projects.map((project) => (
              <article key={project.id} id={project.id} className="project-card">
                <header className="project-card-header">
                  <div className="project-meta-top">
                    <span className="project-period">{project.period}</span>
                    <span className="project-type-tag">{project.type}</span>
                  </div>
                  <h3 className="project-card-title">{project.name}</h3>
                  <p className="project-card-summary">{project.summary}</p>
                </header>

                <div className="project-tech-tags">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-meta-grid">
                  <div className="meta-col">
                    <span className="meta-label">역할</span>
                    <span className="meta-value">{project.role}</span>
                  </div>
                  {project.contribution ? (
                    <div className="meta-col">
                      <span className="meta-label">기여</span>
                      <span className="meta-value">{project.contribution}</span>
                    </div>
                  ) : null}
                </div>

                <div className="project-details">
                  <div className="details-block">
                    <h4 className="details-title">주요 업무 및 해결 내용</h4>
                    <ul className="details-list">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="details-block">
                    <h4 className="details-title">결과 및 성과</h4>
                    <ul className="details-list text-highlight">
                      {project.outcomes.map((outcome, idx) => (
                        <li key={idx}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <footer className="project-card-footer">
                  <span className="evidence-badge">
                    {confidenceLabels[project.confidence]}
                  </span>
                  {project.evidence && project.evidence.length > 0 && (
                    <span className="evidence-details">
                      ({project.evidence.join(" · ")})
                    </span>
                  )}
                  <Link
                    href={`/projects/${project.id}`}
                    className="project-detail-link"
                    aria-label={`${project.name} detail 보기`}
                  >
                    View Detail
                  </Link>
                </footer>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="section-title">SKILLS</h2>
          <div className="skills-typography-list">
            {skillGroups.map((group) => (
              <div key={group.title} className="skills-row">
                <h3 className="skills-row-title">{group.title}</h3>
                <div className="skills-row-items">
                  {group.items.map((item, idx) => (
                    <span key={item} className="skills-item">
                      <span className="skills-item-text">{item}</span>
                      {idx < group.items.length - 1 && <span className="skills-separator">/</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="section-title">EXPERIENCE</h2>
          <div className="experience-timeline">
            {experiences.map((exp) => (
              <article key={exp.company} className="experience-row">
                <div className="experience-meta">
                  <span className="experience-period">{exp.period}</span>
                </div>
                <div className="experience-content">
                  <header className="experience-header">
                    <h3 className="experience-company">{exp.company}</h3>
                    <span className="experience-role">{exp.role}</span>
                  </header>
                  <p className="experience-domain">{exp.domain}</p>
                  <ul className="experience-points">
                    {exp.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="main-footer">
          <p>© {new Date().getFullYear()} 이원정. All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
}
