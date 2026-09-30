import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { skills } from '../data/content.js'
import {
  CodeIcon,
  ServerIcon,
  DatabaseIcon,
  WrenchIcon,
  PaletteIcon,
  CloudIcon,
  ChartIcon,
} from './icons.jsx'

const ICONS = {
  code: CodeIcon,
  server: ServerIcon,
  database: DatabaseIcon,
  tools: WrenchIcon,
  design: PaletteIcon,
  cloud: CloudIcon,
  chart: ChartIcon,
}

export default function Skills() {
  return (
    <Section id="skills" index="02" title="Skills & Technologies">
      <div className="skills-grid">
        {skills.map((cat, i) => {
          const CatIcon = ICONS[cat.icon] || CodeIcon
          return (
            <Reveal key={cat.name} delay={i * 90} className="skill-card">
              <div className="skill-card-head">
                <span className="skill-icon">
                  <CatIcon size={22} />
                </span>
                <h3>{cat.name}</h3>
              </div>
              <p className="skill-blurb">{cat.blurb}</p>
              <ul className="skill-chips">
                {cat.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
