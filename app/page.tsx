import { experiences, profile, projects, skillGroups } from "../data/portfolio";

const confidenceLabels = {
  git: "Git 이력 확인",
  "code-and-notion": "Git 이력 없음 · 코드/Notion 기준",
  limited: "Git 이력 없음 · 제한 분석"
} as const;

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <main>
      <section className="intro-section" aria-labelledby="intro-title">
        <div className="section-inner intro-grid">
          <div className="intro-copy">
            <p className="eyebrow">{profile.title}</p>
            <h1 id="intro-title">{profile.name}</h1>
            <p className="lead">{profile.summary}</p>
            <p className="sublead">{profile.subSummary}</p>
            <div className="contact-row" aria-label="연락처 링크">
              {profile.contacts.map((contact) => (
                <a key={contact.label} href={contact.href}>
                  {contact.label}
                </a>
              ))}
            </div>
          </div>

          <nav className="quick-panel" aria-label="대표 프로젝트 바로가기">
            <p className="panel-title">대표 프로젝트</p>
            {featuredProjects.map((project) => (
              <a key={project.id} href={`#${project.id}`}>
                <span>{project.name}</span>
                <small>{project.type}</small>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="section muted-section" aria-labelledby="projects-title">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2 id="projects-title">프로젝트</h2>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article key={project.id} id={project.id} className="project-card">
                <div className="project-header">
                  <div>
                    <p className="project-meta">{project.period} · {project.type}</p>
                    <h3>{project.name}</h3>
                    <p>{project.summary}</p>
                  </div>
                  <span className="evidence-badge">{confidenceLabels[project.confidence]}</span>
                </div>

                <dl className="project-facts">
                  <div>
                    <dt>역할</dt>
                    <dd>{project.role}</dd>
                  </div>
                  {project.contribution ? (
                    <div>
                      <dt>기여도</dt>
                      <dd>{project.contribution}</dd>
                    </div>
                  ) : null}
                </dl>

                <div className="tag-row">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="outcome-box">
                  <h4>결과 또는 변화</h4>
                  <ul>
                    {project.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-columns">
                  <div>
                    <h4>담당한 작업</h4>
                    <ul>
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>근거</h4>
                    <ul>
                      {project.evidence.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="skills-title">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2 id="skills-title">문제 영역 기준 기술 스택</h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article key={group.title} className="skill-block">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="experience-title">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title">경력</h2>
          </div>
          <div className="experience-list">
            {experiences.map((experience) => (
              <article key={experience.company} className="experience-item">
                <div>
                  <p className="project-meta">{experience.period}</p>
                  <h3>{experience.company}</h3>
                  <p>{experience.domain}</p>
                </div>
                <div>
                  <strong>{experience.role}</strong>
                  <ul>
                    {experience.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" aria-labelledby="contact-title">
        <div className="section-inner contact-inner">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">연락처</h2>
          </div>
          <div className="contact-row">
            {profile.contacts.map((contact) => (
              <a key={contact.label} href={contact.href}>
                {contact.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
