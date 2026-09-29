import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { projects } from '../data/content.js'
import { GithubIcon, ExternalIcon, FolderIcon } from './icons.jsx'

export default function Projects() {
  return (
    <Section id="projects" index="03" title="Featured Projects">
      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 100} className="project-card">
            <div className="project-top">
              <span className="project-folder">
                <FolderIcon size={34} strokeWidth={1.4} />
              </span>
              <div className="project-links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer noopener" aria-label={`${p.title} source code`} title="Source code">
                    <GithubIcon size={19} />
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer noopener" aria-label={`${p.title} live demo`} title="Live demo">
                    <ExternalIcon size={19} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.description}</p>

            <ul className="project-tech">
              {p.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
