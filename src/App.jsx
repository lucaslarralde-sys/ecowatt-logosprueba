import QuickLinks from './components/QuickLinks.jsx'

export default function App() {
  return (
    <>
      {/* HEADER (mantiene altura/estética actuales) */}
      <header className="site-header zfix">
        <div className="container header-inner">
          <img src="/img/logo-ecowatt.png" alt="Ecowatt" className="logo" />
          <nav className="nav">
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO con degradado fuerte y quick links como en la versión anterior */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline poster="/video/poster.jpg">
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="overlay strong">
          <div className="container hero-copy">
            <h1>Mejora del desempeño ambiental</h1>
            <p>Soluciones integrales que mejoran tu productividad y reducen emisiones.</p>
            <div className="cta">
              <a className="btn primary" href="#servicios">Conocer más</a>
              <a className="btn ghost" href="#proyectos">Ver proyectos</a>
            </div>
            <QuickLinks />
          </div>
        </div>
      </section>

      {/* Banda blanca fina de descanso */}
      <section className="band white" />

      {/* Sección Servicios (estructura simple, se puede expandir luego) */}
      <section id="servicios" className="band white">
        <div className="container">
          <h2>Servicios</h2>
          <ul className="bullets">
            <li>Aguas y efluentes</li>
            <li>Gestión ambiental</li>
            <li>Industria y productividad</li>
            <li>Energías renovables</li>
          </ul>
        </div>
      </section>

      {/* Banda azul ancha */}
      <section id="proyectos" className="band blue">
        <div className="container">
          <h2>Casos destacados</h2>
          <p>Publicá 3–6 casos con resultados medibles.</p>
        </div>
      </section>

      {/* Banda verde CTA (opcional; dejarla comentada si no se usa)
      <section id="contacto" className="band green">
        <div className="container">
          <h2>¿Listo para mejorar tu desempeño ambiental?</h2>
        </div>
      </section>
      */}

      <footer className="site-footer">
        <div className="container">
          <small>© {new Date().getFullYear()} Ecowatt — Ingeniería Ambiental</small>
        </div>
      </footer>
    </>
  )
}
