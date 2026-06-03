"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { experiences, profile, projects, skillGroups } from "../data/portfolio";

function MediaPlaceholder() {
  return (
    <div className="media-placeholder" aria-label="프로젝트 데모 미디어 준비 중">
      <div className="placeholder-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      </div>
      <span className="placeholder-text">Demo Media Pending</span>
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

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

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string, href: string) => {
    if (href === "#") {
      e.preventDefault();
      alert(`${label} 링크는 현재 준비 중입니다.`);
    }
  };

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
                className={`contact-link ${contact.href === "#" ? "disabled-link" : ""}`}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={(e) => handleContactClick(e, contact.label, contact.href)}
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
        <section id="about" className="content-section" aria-labelledby="about-heading">
          <h2 id="about-heading" className="section-title">ABOUT</h2>
          <p className="lead-description">
            현장 운영 앱, 출입통제 단말, 개인 Android 서비스처럼 하드웨어와 비즈니스 로직이 함께 맞물리는 제품을 다뤄왔습니다.
          </p>
          <p className="lead-subdescription">
            NFC/단말 프로토콜, AIDL 기반 시스템 연동, Google Play Billing과 FCM 백엔드처럼 장애 지점이 여러 계층에 걸친 문제를 분석하고, 운영 가능한 구조로 정리하는 작업에 강점이 있습니다.
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

                {/* Media Placeholder for each project card */}
                <MediaPlaceholder />

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
