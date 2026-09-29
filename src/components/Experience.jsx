import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { experience, education } from '../data/content.js'
import { BriefcaseIcon, GradCapIcon } from './icons.jsx'

function Timeline({ items, Icon }) {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <Reveal key={`${item.period}-${item.role}`} delay={i * 100} className="timeline-item">
          <span className="timeline-marker">
            <Icon size={15} />
          </span>
          <span className="timeline-period">{item.period}</span>
          <h3 className="timeline-role">{item.role}</h3>
          <span className="timeline-company">{item.company}</span>
          <p className="timeline-summary">{item.summary}</p>
        </Reveal>
      ))}
    </div>
  )
}

export default function Experience() {
  return (
    <Section id="experience" index="04" title="Experience & Education">
      <div className="xp-grid">
        <div className="xp-col">
          <Reveal>
            <h3 className="xp-heading">
              <BriefcaseIcon size={17} /> Experience
            </h3>
          </Reveal>
          <Timeline items={experience} Icon={BriefcaseIcon} />
        </div>
        <div className="xp-col">
          <Reveal>
            <h3 className="xp-heading">
              <GradCapIcon size={17} /> Education
            </h3>
          </Reveal>
          <Timeline items={education} Icon={GradCapIcon} />
        </div>
      </div>
    </Section>
  )
}
