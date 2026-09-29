import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { about, stats, profile } from '../data/content.js'
import { MapPinIcon, MailIcon, PhoneIcon, GlobeIcon } from './icons.jsx'

export default function About() {
  const facts = [
    { icon: MapPinIcon, text: profile.location },
    { icon: MailIcon, text: profile.email },
    ...(profile.phones ? profile.phones.map((num) => ({ icon: PhoneIcon, text: num })) : []),
    ...(profile.languages ? [{ icon: GlobeIcon, text: profile.languages }] : []),
  ]

  return (
    <Section id="about" index="01" title="About Me">
      <div className="about-grid">
        <Reveal className="about-text">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <ul className="about-facts">
            {facts.map(({ icon: FactIcon, text }, i) => (
              <li key={i}>
                <FactIcon size={15} />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="stat-card">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
