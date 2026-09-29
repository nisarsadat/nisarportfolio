import Reveal from './Reveal.jsx'

export default function Section({ id, index, title, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">{index} / {title}</span>
          <h2 className="section-title">
            {title}
            <span className="title-dot">.</span>
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
