import { useState } from "react";
import "./App.css";

import heroImage from "./assets/vysa-hero.png";
import belleRoseImage from "./assets/belle-rose-project.png";

/* ================= ICONES (SVG inline, aucune dépendance) ================= */

const IconMonitor = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M8 21h8M12 17v4" strokeLinecap="round" />
  </svg>
);

const IconWordpress = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="9" />
    <path
      d="M4.5 10h1.8l2.6 7.3L10.6 12 9 7.7H7.4M13.2 7.7h4.9M15.4 10l2 6-1 3M12 7.7l3.2 9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
  </svg>
);

const IconSettings = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="3" />
    <path
      d="M19.4 13a7.9 7.9 0 0 0 0-2l2-1.5-2-3.4-2.3.9a8 8 0 0 0-1.7-1L15 3h-4l-.4 2.5a8 8 0 0 0-1.7 1l-2.3-.9-2 3.4L6.6 11a7.9 7.9 0 0 0 0 2l-2 1.5 2 3.4 2.3-.9a8 8 0 0 0 1.7 1L11 21h4l.4-2.5a8 8 0 0 0 1.7-1l2.3.9 2-3.4-2-1.5Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconDiamond = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M6 3h12l4 6-10 12L2 9Z" strokeLinejoin="round" />
    <path d="M2 9h20M9 3l-2 6 5 12 5-12-2-6" strokeLinejoin="round" />
  </svg>
);

const IconTarget = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M15.5 14.2c2.5.3 4.5 2.5 4.5 5.3" strokeLinecap="round" />
  </svg>
);

const IconChart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 20V10M11 20V4M18 20v-7" strokeLinecap="round" />
  </svg>
);

const IconQuote = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 7c-2.5 0-4.5 2-4.5 4.5S4.5 16 7 16c.3 0 .6 0 .8-.1C7 18 5.2 19.4 3 19.8v2.1c4.3-.5 7.5-3.5 7.5-8.4V11c0-2.5-1.5-4-3.5-4Zm10 0c-2.5 0-4.5 2-4.5 4.5S14.5 16 17 16c.3 0 .6 0 .8-.1-.8 2.1-2.6 3.5-4.8 3.9v2.1c4.3-.5 7.5-3.5 7.5-8.4V11c0-2.5-1.5-4-3.5-4Z" />
  </svg>
);

const IconLinkedin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path
      d="M7.5 10.5v6M7.5 7.5v.01M12 16.5v-3.7c0-1.5 1-2.3 2.2-2.3 1.2 0 1.8.9 1.8 2.3v3.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const IconHeart = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 20.5 4.6 13c-2-2-2-5 0-6.9 1.9-1.9 5-1.9 6.9 0l.5.5.5-.5c1.9-1.9 5-1.9 6.9 0 2 1.9 2 5 0 6.9L12 20.5Z" />
  </svg>
);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-main">VYSA</span>
            <span className="brand-sub">Solutions</span>
          </a>

          <nav className="main-nav desktop-nav">
            <a href="#home">Accueil</a>
            <a href="#services">Services</a>
            <a href="#work">Réalisations</a>
            <a href="#about">À propos</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-actions">
            <a href="#contact" className="header-btn desktop-cta">
              Parlons-en →
            </a>

            <button
              className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
              type="button"
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
          <nav className="mobile-nav">
            <a href="#home" onClick={closeMenu}>
              Accueil
            </a>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
            <a href="#work" onClick={closeMenu}>
              Réalisations
            </a>
            <a href="#about" onClick={closeMenu}>
              À propos
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="header-btn mobile-cta"
            onClick={closeMenu}
          >
            Parlons-en →
          </a>
        </div>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section id="home" className="hero">
          <span className="hero-side-note">
            Des idées d’aujourd’hui pour un meilleur demain.
          </span>

          <div className="container hero-inner">
            <div className="hero-content">
              <p className="eyebrow">
                SOLUTIONS NUMÉRIQUES POUR PETITES ENTREPRISES
              </p>

              <h1>
                Renforcez votre
                <br />
                présence en ligne.
                <br />
                <span>Faites grandir votre entreprise</span>
                <br />
                avec confiance.
              </h1>

              <p className="hero-text">
                Nous créons des sites web modernes et des solutions numériques
                intelligentes pour aider les petites entreprises à renforcer
                leur crédibilité, attirer plus de clients et simplifier leur
                quotidien.
              </p>

              <div className="hero-buttons">
                <a href="#contact" className="primary-btn">
                  Démarrer mon projet →
                </a>
                <a href="#work" className="secondary-btn">
                  Voir nos réalisations
                </a>
              </div>

              <div className="hero-benefits">
                <span>✓ Petites entreprises</span>
                <span>✓ Moderne &amp; évolutif</span>
                <span>✓ Accompagnement humain</span>
              </div>
            </div>

            <div className="hero-visual">
              <span className="hero-decorative">
                Sites web
                <br />
                Réservations
                <br />
                Croissance
                <br />
                Ensemble
              </span>

              <img
                src={heroImage}
                alt="Illustration VYSA Solutions"
                className="hero-image"
              />

              <div className="hero-floating-card">
                <span className="hero-floating-icon">
                  <IconChart />
                </span>
                <p>Des solutions pour faire grandir votre entreprise.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="services-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow">NOS SERVICES</p>
                <h2>
                  Tout ce dont votre entreprise a besoin pour grandir en ligne.
                </h2>
              </div>

              <p className="section-intro">
                Des sites professionnels aux intégrations pratiques, nous créons
                des solutions simples, modernes et adaptées aux besoins réels
                des petites entreprises.
              </p>
            </div>

            <div className="services-grid">
              <article className="service-card">
                <div className="service-icon">
                  <IconMonitor />
                </div>
                <h3>Création de sites web</h3>
                <p>
                  Des sites modernes, rapides, professionnels et parfaitement
                  adaptés aux mobiles.
                </p>
                <a href="#contact">En savoir plus →</a>
              </article>

              <article className="service-card">
                <div className="service-icon">
                  <IconWordpress />
                </div>
                <h3>WordPress &amp; développement</h3>
                <p>
                  WordPress, React et solutions adaptées aux besoins de votre
                  entreprise.
                </p>
                <a href="#contact">En savoir plus →</a>
              </article>

              <article className="service-card">
                <div className="service-icon">
                  <IconCalendar />
                </div>
                <h3>Réservation &amp; formulaires</h3>
                <p>
                  Rendez-vous, formulaires, Google Maps et intégrations pour
                  simplifier l’expérience de vos clients.
                </p>
                <a href="#contact">En savoir plus →</a>
              </article>

              <article className="service-card">
                <div className="service-icon">
                  <IconSettings />
                </div>
                <h3>Maintenance &amp; soutien</h3>
                <p>
                  Mises à jour, entretien et accompagnement pour garder votre
                  présence numérique performante.
                </p>
                <a href="#contact">En savoir plus →</a>
              </article>
            </div>
          </div>
        </section>

        {/* ================= PROJECT ================= */}
        <section id="work" className="project-section">
          <div className="container project-grid">
            <div className="project-content">
              <p className="section-eyebrow">PROJET EN VEDETTE</p>
              <h2>Belle Rose Salon</h2>

              <p className="project-lead">
                Un site moderne et élégant pensé pour présenter un salon de
                beauté de façon professionnelle.
              </p>

              <p className="project-text">
                Une expérience claire et responsive qui met en valeur les
                services, facilite la prise de rendez-vous et renforce la
                crédibilité du salon en ligne.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>Responsive</span>
                <span>Design moderne</span>
              </div>

              <a href="#contact" className="primary-btn project-btn">
                Voir le projet →
              </a>
            </div>

            <div className="project-image-wrapper">
              <img
                src={belleRoseImage}
                alt="Projet Belle Rose Salon"
                className="project-image"
              />

              <aside className="testimonial-card">
                <span className="testimonial-quote">
                  <IconQuote />
                </span>
                <p>
                  Un site magnifique qui reflète parfaitement notre image.
                  Professionnel, à l’écoute et très efficace. Merci VYSA !
                </p>
                <span className="testimonial-author">— Belle Rose Salon</span>
              </aside>
            </div>
          </div>
        </section>

        {/* ================= WHY VYSA ================= */}
        <section id="about" className="why-section">
          <div className="container">
            <div className="why-heading">
              <p className="section-eyebrow">POURQUOI VYSA</p>
              <h2>Un partenaire numérique orienté vers vos résultats.</h2>
              <p>
                Nous ne voulons pas simplement créer un joli site. Chaque
                solution doit avoir un objectif concret pour votre entreprise.
              </p>
            </div>

            <div className="why-grid">
              <article>
                <div className="why-icon">
                  <IconDiamond />
                </div>
                <h3>Design professionnel</h3>
                <p>
                  Une présence moderne qui inspire confiance dès la première
                  visite.
                </p>
              </article>

              <article>
                <div className="why-icon">
                  <IconTarget />
                </div>
                <h3>Solutions adaptées</h3>
                <p>
                  Nous choisissons la bonne technologie selon vos besoins, sans
                  complexité inutile.
                </p>
              </article>

              <article>
                <div className="why-icon">
                  <IconUsers />
                </div>
                <h3>Accompagnement humain</h3>
                <p>
                  Une communication claire et un accompagnement avant, pendant
                  et après le projet.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="contact-section">
          <span className="contact-decorative">
            De belles entreprises locales,
            <br />
            des histoires inspirantes.
          </span>

          <div className="container contact-wrapper">
            <div className="contact-content">
              <p className="section-eyebrow light-eyebrow">
                PARLONS DE VOTRE PROJET
              </p>

              <h2>Prêt à faire grandir votre entreprise ?</h2>

              <p>
                Discutons de vos besoins et voyons comment nous pouvons vous
                aider à atteindre vos objectifs en ligne.
              </p>
            </div>

            <form
              className="contact-form"
              action="https://formspree.io/f/moevldpd"
              method="POST"
            >
              <div className="form-row">
                <div>
                  <label htmlFor="name">Nom complet *</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Votre nom"
                    maxLength="100"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Courriel *</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@courriel.com"
                    maxLength="150"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="business">Entreprise</label>

                <input
                  id="business"
                  name="business"
                  type="text"
                  placeholder="Nom de votre entreprise"
                  maxLength="150"
                />
              </div>

              <div>
                <label htmlFor="message">Votre message *</label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Parlez-nous brièvement de votre projet..."
                  maxLength="2000"
                  required
                ></textarea>
              </div>

              <button type="submit">Envoyer ma demande →</button>
            </form>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="site-footer">
        <div className="container footer-top">
          <div>
            <div className="footer-brand">
              <strong>VYSA</strong> Solutions
            </div>
            <p>
              Des solutions numériques simples pour des entreprises solides.
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Accueil</a>
            <a href="#services">Services</a>
            <a href="#work">Réalisations</a>
            <a href="#about">À propos</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <div className="footer-bottom-left">
            <p>© 2026 VYSA Solutions. Tous droits réservés.</p>
            <p>Québec, Canada</p>
          </div>

          <div className="footer-social">
            <a href="#" aria-label="LinkedIn">
              <IconLinkedin />
            </a>
            <a href="#" aria-label="Instagram">
              <IconInstagram />
            </a>
          </div>

          <p className="footer-badge">
            Fait au Québec <IconHeart /> Pour les entrepreneurs d’ici
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
