import { profile, socials } from '../data/content.js'
import { GithubIcon, LinkedinIcon, FacebookIcon, MailIcon, ChevronUpIcon } from './icons.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <p className="footer-cta">
            Let's build something <span className="grad-text">amazing</span> together.
          </p>
          <a href={`mailto:${profile.email}`} className="footer-mail">
            {profile.email}
          </a>
        </div>

        <div className="footer-bottom">
          <div className="footer-left">
            <span className="footer-logo">
              {profile.firstName}
              <span className="logo-dot">.</span>
            </span>
            <div className="footer-socials">
              {socials.github && (
                <a href={socials.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub"><GithubIcon size={17} /></a>
              )}
              {socials.linkedin && (
                <a href={socials.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn"><LinkedinIcon size={17} /></a>
              )}
              {socials.facebook && (
                <a href={socials.facebook} target="_blank" rel="noreferrer noopener" aria-label="Facebook"><FacebookIcon size={17} /></a>
              )}
              <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon size={17} /></a>
            </div>
          </div>

          <p className="footer-copy">
            Designed & built with 💜 by {profile.name} · © {year}
          </p>

          <button
            className="back-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <ChevronUpIcon size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
