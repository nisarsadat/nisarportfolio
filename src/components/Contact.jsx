import { useState } from 'react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Socials from './Socials.jsx'
import { profile } from '../data/content.js'
import { MailIcon, MapPinIcon, PhoneIcon, SendIcon } from './icons.jsx'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get('name')}`)
    const body = encodeURIComponent(`${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const info = [
    { icon: MailIcon, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    ...(profile.phones
      ? profile.phones.map((num) => ({
          icon: PhoneIcon,
          label: 'Phone',
          value: num,
          href: `tel:${num.replace(/\s/g, '')}`,
        }))
      : []),
    { icon: MapPinIcon, label: 'Location', value: profile.location },
  ]

  return (
    <Section id="contact" index="05" title="Get In Touch">
      <div className="contact-grid">
        <Reveal className="contact-info">
          <p className="contact-lead">
            I'm currently open to new opportunities and interesting projects.
            Whether you have a question, an idea, or just want to say hi — my inbox is always open.
          </p>
          <ul className="contact-list">
            {info.map(({ icon: InfoIcon, label, value, href }) => (
              <li key={`${label}-${value}`}>
                <span className="contact-icon">
                  <InfoIcon size={18} />
                </span>
                <div>
                  <span className="contact-label">{label}</span>
                  {href ? (
                    <a href={href} className="contact-value">{value}</a>
                  ) : (
                    <span className="contact-value">{value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <p className="contact-socials-label">Find me on</p>
          <Socials size={19} />
        </Reveal>

        <Reveal delay={120} className="contact-form-wrap">
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-row">
              <div className="form-field">
                <input name="name" type="text" placeholder="Your name" required minLength={2} />
              </div>
              <div className="form-field">
                <input name="email" type="email" placeholder="Your email" required />
              </div>
            </div>
            <textarea name="message" rows="5" placeholder="Your message..." required minLength={10} />
            <button type="submit" className="btn btn-primary btn-lg">
              <SendIcon size={17} /> {sent ? 'Opening your mail app…' : 'Send Message'}
            </button>
            <p className="form-note">This opens your email app with the message pre-filled — no server needed.</p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
