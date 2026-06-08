"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { experiences, profile, projects, skillGroups } from "../data/portfolio";

const confidenceLabels = {
  git: "Git verified",
  "code-and-notion": "Strong evidence",
  limited: "Limited evidence"
} as const;

const coreStrengths = [
  "Android 시스템 앱과 하드웨어 연동",
  "NFC/단말 프로토콜 기반 현장 앱",
  "Kotlin/Compose 구조 개선과 앱+BFF 구현"
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const featuredProjects = projects.slice(0, 3);

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

          <p className="profile-summary">{profile.summary}</p>
          <p className="profile-subsummary">{profile.subSummary}</p>

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
            <p className="shortcuts-title">Featured Projects</p>
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
            Android 모바일 앱에서 화면 구현, 데이터 흐름, 로컬 저장소, 백엔드 연동, 결제와 알림까지 사용자가 실제로 쓰는 기능을 설계하고 구현해왔습니다.
          </p>
          <p className="lead-subdescription">
            Kotlin/Compose 기반 앱 구조 개선 경험에 더해 NFC, 단말 프로토콜, AIDL 같은 하드웨어·시스템 연동 경험도 함께 갖고 있어 앱 내부 로직과 외부 연동 문제가 맞물린 상황을 안정적으로 정리할 수 있습니다.
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
              <article key={project.id} id={project.id} className="project-card">
                <header className="project-card-header">
                  <div className="project-meta-top">
                    <span className="project-period">{project.period}</span>
                    <span className="project-type-tag">{project.type}</span>
                    <span className={`confidence-badge confidence-${project.confidence}`}>
                      {confidenceLabels[project.confidence]}
                    </span>
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

                <p className="project-result-preview">{project.outcomes[0]}</p>

                <footer className="project-card-footer">
                  {project.evidence && project.evidence.length > 0 && (
                    <span className="evidence-tags-wrapper">
                      <span className="evidence-label-text">증적 자료:</span>
                      {project.evidence.map((item, idx) => (
                        <span key={idx} className="evidence-tag-item">
                          {item}
                        </span>
                      ))}
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
