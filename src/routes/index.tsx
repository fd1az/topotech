import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: ComingSoon })

function ComingSoon() {
  return (
    <main className="tt-page">
      <div className="tt-ambience" aria-hidden="true" />
      <div className="tt-noise" aria-hidden="true" />
      <div className="tt-scanlines" aria-hidden="true" />
      <div className="tt-scan-beam" aria-hidden="true" />

      <section className="tt-hero" aria-label="TopoTech próximamente">
        <div className="tt-composition">
          <div className="tt-brand">
            <img
              className="tt-mark"
              src="/topo-mark.png"
              alt=""
              width={960}
              height={510}
              decoding="async"
              fetchPriority="high"
            />
            <p className="tt-word">TopoTech</p>
          </div>

          <div className="tt-copy">
            <h1 className="tt-headline">
              Pronto salimos a la superficie
              <span className="tt-cursor" aria-hidden="true" />
            </h1>
            <p className="tt-support">&gt; algo nuevo, bajo tierra.</p>
          </div>

          <div className="tt-cta">
            <a
              className="tt-btn tt-btn-primary"
              href="mailto:hola@topotech.site?subject=Avisame%20cuando%20TopoTech%20salga"
            >
              Avisame
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
