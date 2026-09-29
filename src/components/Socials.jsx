import { socials, profile } from '../data/content.js'
import { GithubIcon, LinkedinIcon, FacebookIcon, MailIcon } from './icons.jsx'

const ITEMS = [
  { key: 'github', label: 'GitHub', Icon: GithubIcon },
  { key: 'linkedin', label: 'LinkedIn', Icon: LinkedinIcon },
  { key: 'facebook', label: 'Facebook', Icon: FacebookIcon },
]

export default function Socials({ size = 18 }) {
  const links = ITEMS.filter((i) => socials[i.key])

  return (
    <div className="socials">
      {links.map(({ key, label, Icon }) => (
        <a
          key={key}
          href={socials[key]}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={label}
          title={label}
        >
          <Icon size={size} />
        </a>
      ))}
      <a href={`mailto:${profile.email}`} aria-label="Email" title="Email">
        <MailIcon size={size} />
      </a>
    </div>
  )
}
