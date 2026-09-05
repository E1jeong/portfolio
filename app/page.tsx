"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { coreStrengths, experiences, profile, projects, skillGroups } from "../data/portfolio";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "android-device", label: "Android Device" },
  { id: "android-mobile", label: "Android Mobile" },
  { id: "on-device-ai", label: "On-Device AI" }
] as const;

type CategoryId = typeof CATEGORIES[number]["id"];

export default function Home() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("about");
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("all");
  const featuredProjects = projects;

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "android-device") return project.id === "ubio-n-face-pro";
    if (selectedCategory === "android-mobile") {
      return project.id === "fisherlotto" || project.id === "renew-smartset" || project.id === "smartset";
    }
    if (selectedCategory === "on-device-ai") return project.id === "anti-spoofing-ai";
    return true;
  });

  const getCategoryCount = (id: CategoryId) => {
    if (id === "all") return projects.length;
    if (id === "android-device") return projects.filter((p) => p.id === "ubio-n-face-pro").length;
    if (id === "android-mobile") {
      return projects.filter(
        (p) => p.id === "fisherlotto" || p.id === "renew-smartset" || p.id === "smartset"
      ).length;
    }
    if (id === "on-device-ai") return projects.filter((p) => p.id === "anti-spoofing-ai").length;
    return 0;
  };

  useEffect(() => {
    const handleScroll = () => {
      const triggerY = window.innerHeight * 0.35;

      // 1. 메인 4개 섹션 감지
      const sections = document.querySelectorAll<HTMLElement>(".content-section");
      let currentSection = "about";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= triggerY && rect.bottom > triggerY) {
          const id = section.getAttribute("id");
          if (id) currentSection = id;
        }
      });
      setActiveSection(currentSection);

      // 2. 프로젝트 섹션 내부의 개별 프로젝트 카드 감지
      if (currentSection === "projects") {
        const cards = document.querySelectorAll<HTMLElement>(".project-card");
        let currentProject: string | null = null;
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          if (rect.top <= triggerY && rect.bottom > triggerY) {
            const id = card.getAttribute("id");
            if (id) currentProject = id;
          }
        });

        // 경계 보정: 아직 첫 카드 위쪽 영역이면 첫 번째 카드 활성화
        if (!currentProject && cards.length > 0) {
          const firstRect = cards[0].getBoundingClientRect();
          if (firstRect.top > triggerY) {
            currentProject = cards[0].getAttribute("id");
          } else {
            currentProject = cards[cards.length - 1].getAttribute("id");
          }
        }
        setActiveProjectId(currentProject);
      } else {
        setActiveProjectId(null);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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

          <p className="profile-summary">{profile.tagline}</p>
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
                  <span className="nav-text">About</span>
                </a>
              </li>
              <li className="nav-item-projects">
                <a
                  href="#projects"
                  className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
                >
                  <span className="nav-indicator"></span>
                  <span className="nav-text">Projects</span>
                </a>
                <ul className="nav-sub-list" aria-label="대표 프로젝트 바로가기">
                  {featuredProjects.map((project) => {
                    const isSubActive = activeSection === "projects" && activeProjectId === project.id;
                    return (
                      <li key={project.id}>
                        <a
                          href={`#${project.id}`}
                          className={`nav-sub-link ${isSubActive ? "active" : ""}`}
                        >
                          <span className="nav-sub-indicator"></span>
                          <span className="nav-sub-text">{project.name}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li>
                <a
                  href="#experience"
                  className={`nav-link ${activeSection === "experience" ? "active" : ""}`}
                >
                  <span className="nav-indicator"></span>
                  <span className="nav-text">Experience</span>
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
                >
                  <span className="nav-indicator"></span>
                  <span className="nav-text">Skills</span>
                </a>
              </li>
            </ul>
          </nav>

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
          <h2 id="about-heading" className="section-title">About</h2>
          <p className="lead-description">
            {profile.summary}
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
          <h2 id="projects-heading" className="section-title">Projects</h2>
          <div className="project-category-tabs" role="tablist" aria-label="프로젝트 카테고리 필터">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.id}
                className={`category-tab-btn ${selectedCategory === cat.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
                <span className="category-tab-count">
                  {getCategoryCount(cat.id)}
                </span>
              </button>
            ))}
          </div>

          <div className="project-list">
            {filteredProjects.map((project) => (
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

        <section id="experience" className="content-section" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="section-title">Experience</h2>
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

        <section id="skills" className="content-section" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="section-title">Skills</h2>
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

        <footer className="main-footer">
          <p>© {new Date().getFullYear()} 이원정. All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
}
