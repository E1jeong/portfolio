"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { coreStrengths, experiences, profile, projects, skillGroups } from "../data/portfolio";

export default function Home() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("about");
  const featuredProjects = projects;

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".content-section");
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;
        const sectionId = element.getAttribute("id");

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="layout-container">
      {/* Left fixed sidebar */}
      <aside className="sidebar">
        <div className="sidebar-sticky">
          <div className="profile-header">
            <p className="profile-title">{profile.title}</p>
            <h1 className="profile-name">{profile.name}</h1>
          </div>

          {profile.currentCompany ? (
            <p className="profile-company-info">
              • {profile.currentCompany}
            </p>
          ) : null}

          {profile.email ? (
            <p className="profile-email-direct">
              • <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
          ) : null}

          <p className="profile-summary">{profile.summary}</p>
          {profile.subSummary ? (
            <p className="profile-subsummary">{profile.subSummary}</p>
          ) : null}

          <nav className="nav-menu" aria-label="섹션 이동 네비게이션">
            <ul>
              <li>
                <a
                  href="#about"
                  className={`nav-link ${activeSection === "about" ? "active" : ""}`}
                >
                  <span className="nav-indicator"></span>
                  <span className="nav-text">ABOUT</span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
                >
                  <span className="nav-indicator"></span>
                  <span className="nav-text">PROJECTS</span>
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
                >
                  <span className="nav-indicator"></span>
                  <span className="nav-text">SKILLS</span>
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className={`nav-link ${activeSection === "experience" ? "active" : ""}`}
                >
                  <span className="nav-indicator"></span>
                  <span className="nav-text">EXPERIENCE</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Quick shortcuts for top projects */}
          <div className="shortcuts-wrapper" aria-label="대표 프로젝트 바로가기">
            <p className="shortcuts-title">Projects</p>
            <ul className="shortcuts-list">
              {featuredProjects.map((project) => (
                <li key={project.id}>
                  <a href={`#${project.id}`} className="shortcut-link">{project.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="contacts-wrapper" aria-label="연락처 정보">
            {profile.contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className={`contact-link ${contact.href === "#" ? "disabled-link" : ""}`}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-disabled={contact.href === "#" ? "true" : undefined}
                tabIndex={contact.href === "#" ? -1 : undefined}
              >
                {contact.label}
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* Right scrollable content */}
      <main className="content-scroll">
        <nav className="mobile-quick-nav" aria-label="모바일 빠른 이동">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          {featuredProjects.map((project) => (
            <a key={project.id} href={`#${project.id}`}>{project.name}</a>
          ))}
        </nav>

        <section id="about" className="content-section" aria-labelledby="about-heading">
          <h2 id="about-heading" className="section-title">ABOUT</h2>
          <p className="lead-description">
            AI 모델을 직접 설계하여 임베디드 NPU 하드웨어에 배포하고, 그 위의 Android 시스템 앱과 견고한 아키텍처까지 일관되게 책임지는 AI-Native Android 개발자입니다.
          </p>
          <p className="lead-subdescription">
            온디바이스 딥러닝(Edge ML) 파이프라인 수립과 INT8 양자화, NPU 실기기 추론 최적화 경험을 보유하고 있으며, AIDL IPC·NFC·단말 프로토콜 등의 시스템 연동 및 Kotlin/Compose 기반 Clean Architecture 전환 경험을 바탕으로 하드웨어와 소프트웨어의 경계를 안정적으로 연결합니다.
          </p>
          <ul className="strength-list about-strength-list" aria-label="핵심 강점">
            {coreStrengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </section>

        <section id="projects" className="content-section" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="section-title">PROJECTS</h2>
          <div className="project-list">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                id={project.id}
                className="project-card clickable-card"
              >
                <header className="project-card-header">
                  <div className="project-meta-top">
                    <span className="project-period">{project.period}</span>
                    <span className="project-type-tag">{project.type}</span>
                  </div>
                  <h3 className="project-card-title">{project.name}</h3>
                  <p className="project-card-summary">{project.summary}</p>
                </header>

                {project.metrics && project.metrics.length > 0 ? (
                  <div className="card-metrics-preview">
                    {project.metrics.slice(0, 3).map((m) => (
                      <div key={m.label} className="card-metric-badge">
                        <span className="metric-badge-value">{m.value}</span>
                        <span className="metric-badge-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                ) : null}

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

                <p className="project-result-preview">{project.outcomes[0]}</p>

                <footer className="project-card-footer">
                  <span className="project-detail-link">
                    View Detail <span className="detail-arrow">↗</span>
                  </span>
                </footer>
              </Link>
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
