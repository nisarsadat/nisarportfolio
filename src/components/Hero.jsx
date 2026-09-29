import { profile } from '../data/content.js'
import useTypewriter from '../hooks/useTypewriter.js'
import Reveal from './Reveal.jsx'
import Socials from './Socials.jsx'
import { ArrowDownIcon, DownloadIcon, MapPinIcon } from './icons.jsx'

const CHIPS = [
  { text: 'Clean Code', className: 'chip-a', pos: 'float-1' },
  { text: 'Modern UI', className: 'chip-b', pos: 'float-2' },
  { text: 'Problem Solving', className: 'chip-c', pos: 'float-3' },
]

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          {profile.openToWork && (
            <Reveal>
              <span className="badge-available">
                <span className="pulse-dot" />
                Available for work
              </span>
            </Reveal>
          )}

          <Reveal delay={80}>
            <p className="hero-hello">Hi, my name is</p>
          </Reveal>

          <Reveal delay={160}>
            <h1 className="hero-name">
              {profile.name.split(' ').slice(0, 2).join(' ')}{' '}
              <span className="grad-text">{profile.name.split(' ').slice(2).join(' ')}</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <h2 className="hero-role">
              I build{' '}
              <span className="grad-text">{typed}</span>
              <span className="type-cursor" aria-hidden="true">|</span>
            </h2>
          </Reveal>

          <Reveal delay={320}>
            <p className="hero-tagline">{profile.tagline}</p>
          </Reveal>

          <Reveal delay={400} className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            {profile.resumeUrl ? (
              <a href={profile.resumeUrl} className="btn btn-ghost" download>
                <DownloadIcon size={17} /> Download CV
              </a>
            ) : (
              <a href="#contact" className="btn btn-ghost">
                Get In Touch
              </a>
            )}
          </Reveal>

          <Reveal delay={480}>
            <Socials size={19} />
          </Reveal>
        </div>

        <div className="hero-visual">
          <div className="avatar-wrap">
            <div className="avatar-ring">
              <div className="avatar-inner">
                {profile.photo ? (
                  <img src={profile.photo} alt={profile.name} />
                ) : (
                  <span className="avatar-initials">{profile.initials}</span>
                )}
              </div>
            </div>
            {CHIPS.map(({ text, className, pos }) => (
              <span key={text} className={`float-chip ${className} ${pos}`}>
                <span className="chip-dot" />
                {text}
              </span>
            ))}
          </div>
          <span className="hero-location">
            <MapPinIcon size={14} /> {profile.location}
          </span>
        </div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll to about section">
        <ArrowDownIcon size={20} />
      </a>
    </section>
  )
}
