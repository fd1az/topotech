import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: ComingSoon })

function ComingSoon() {
  return (
    <main className="tt-page">
      <div className="tt-ambience" aria-hidden="true" />
      <div className="tt-noise" aria-hidden="true" />

      <section className="tt-hero" aria-label="TopoTech próximamente">
        <div className="tt-composition">
          <div className="tt-logo-wrap">
            <div className="tt-logo-glow" aria-hidden="true" />
            <img
              className="tt-logo"
              src="/topotech-logo.png"
              alt="TopoTech"
              width={1024}
              height={1024}
              decoding="async"
              fetchPriority="high"
            />
          </div>

          <div className="tt-copy">
            <h1 className="tt-headline">Pronto salimos a la superficie</h1>
            <p className="tt-support">
              TopoTech está gestando algo nuevo bajo tierra. Dejanos tu interés
              y te avisamos cuando asome.
            </p>
          </div>

          <div className="tt-cta">
            <a className="tt-btn tt-btn-primary" href="mailto:hola@topotech.site?subject=Avisame%20cuando%20TopoTech%20salga">
              Avisame
            </a>
            <a className="tt-btn tt-btn-ghost" href="mailto:hola@topotech.site">
              Escribinos
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
