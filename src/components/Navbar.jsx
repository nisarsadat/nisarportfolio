import { useState, useEffect } from 'react'
import { profile } from '../data/content.js'
import { MenuIcon, CloseIcon } from './icons.jsx'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#home" className="nav-logo" onClick={close}>
            {profile.firstName}
            <span className="logo-dot">.</span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {NAV_ITEMS.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className={`nav-link ${active === id ? 'active' : ''}`}>
                <span className="nav-num">0{NAV_ITEMS.findIndex((n) => n.id === id) + 1}.</span>
                {label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn btn-primary btn-sm nav-cta">
            Hire Me
          </a>

          <button
            className="nav-burger"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <nav className="mobile-links" aria-label="Mobile">
          {NAV_ITEMS.map(({ id, label }, i) => (
            <a key={id} href={`#${id}`} onClick={close}>
              <span className="nav-num">0{i + 1}.</span>
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-primary mobile-cta" onClick={close}>
          Hire Me
        </a>
      </div>
    </>
  )
}
