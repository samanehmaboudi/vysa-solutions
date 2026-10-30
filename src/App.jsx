import { useState, useEffect, useRef } from "react";
import "./App.css";

import belleRoseImage from "./assets/belle-rose-project.png";
import sereniteImage from "./assets/serenite-project.jpg";
import belleRoseVideo from "./assets/belle-rose-mobile.mp4";
import belleRosePoster from "./assets/belle-rose-mobile-poster.jpg";

/* ================= LOGO VYSARA (ترنج — médaillon de tapis persan) ================= */

const LogoMark = ({ className = "", onDark = false }) => (
  <svg
    className={className}
    viewBox="0 0 50 50"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="25" cy="25" r="24" fill="#16284B" />
    {onDark && (
      <circle
        cx="25"
        cy="25"
        r="24"
        fill="none"
        stroke="#F7F3EC"
        strokeOpacity="0.25"
        strokeWidth="1"
      />
    )}
    <path
      d="M25 9 C28.5 15 34 20 40 25 C34 30 28.5 35 25 41 C21.5 35 16 30 10 25 C16 20 21.5 15 25 9 Z"
      fill="none"
      stroke="#F7F3EC"
      strokeWidth="1.6"
    />
    <path
      d="M25 16 C27 19.5 30.5 22 33.5 25 C30.5 28 27 30.5 25 34 C23 30.5 19.5 28 16.5 25 C19.5 22 23 19.5 25 16 Z"
      fill="#8C2745"
    />
    <circle cx="25" cy="25" r="3" fill="#E7B3C2" />
    <circle cx="25" cy="6.5" r="1.3" fill="#7FA89C" />
    <circle cx="25" cy="43.5" r="1.3" fill="#7FA89C" />
  </svg>
);

/* ================= HERO — MÉDAILLON (ترنج) + VRAI PROJET ================= */

const HeroMedallion = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches && videoRef.current) videoRef.current.pause();
  }, []);

  return (
    <figure className="hx-visual">
      <div className="hx-stage">
      <svg
        className="hx-medallion"
        viewBox="0 0 640 640"
        aria-hidden="true"
        focusable="false"
      >
        <circle className="hx-draw hx-ring" cx="320" cy="320" r="306" pathLength="1" />
        <circle className="hx-dots" cx="320" cy="320" r="288" />
        <path
          className="hx-draw hx-toranj-outer"
          pathLength="1"
          d="M320 16 C386.5 130 491 225 605 320 C491 415 386.5 510 320 624 C253.5 510 149 415 35 320 C149 225 253.5 130 320 16 Z"
        />
        <path
          className="hx-draw hx-toranj-inner"
          pathLength="1"
          d="M320 88 C370.8 175 450.5 247.5 537.5 320 C450.5 392.5 370.8 465 320 552 C269.2 465 189.5 392.5 102.5 320 C189.5 247.5 269.2 175 320 88 Z"
        />
        <circle className="hx-pin" cx="320" cy="6" r="5" />
        <circle className="hx-pin" cx="320" cy="634" r="5" />
        <circle className="hx-pin" cx="14" cy="320" r="5" />
        <circle className="hx-pin" cx="626" cy="320" r="5" />
      </svg>

      <div className="hx-phone">
        <video
          ref={videoRef}
          className="hx-screen"
          src={belleRoseVideo}
          poster={belleRosePoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Aperçu sur mobile du site Belle Rose, un salon de coiffure"
        />
      </div>
      </div>

      <figcaption className="hx-caption">
        Belle Rose, site pour un salon de coiffure (projet concept)
      </figcaption>
    </figure>
  );
};

/* ================= SERVICES — liste dépliable ================= */

const SERVICES = [
  {
    title: "Sites web sur mesure",
    text: "Un site vitrine clair, rapide et pensé pour le mobile, qui présente vos services et donne envie de vous contacter.",
    items: [
      "Design adapté à votre image",
      "Pages services, à propos et contact",
      "Bases du référencement local sur Google",
    ],
  },
  {
    title: "Réservation et formulaires",
    text: "Vos clients prennent rendez-vous ou vous écrivent directement depuis votre site, même le soir et la fin de semaine.",
    items: [
      "Prise de rendez-vous en ligne",
      "Formulaires de contact et de soumission",
      "Carte Google Maps et itinéraire",
    ],
  },
  {
    title: "WordPress et applications web",
    text: "Un site que vous modifiez vous-même avec WordPress, ou une application sur mesure en React et Laravel quand vos besoins vont plus loin.",
    items: [
      "Formation pour modifier vos textes et photos",
      "Espace client ou outils internes",
      "Connexion avec les outils que vous utilisez déjà",
    ],
  },
  {
    title: "Entretien et soutien",
    text: "Mises à jour, sauvegardes et petites modifications, pour que votre site reste fiable sans que vous ayez à y penser.",
    items: [
      "Mises à jour et sauvegardes",
      "Petites modifications de contenu",
      "Une personne qui vous répond, en français",
    ],
  },
];

const ToranjGlyph = () => (
  <svg className="sv-glyph" viewBox="0 0 50 50" aria-hidden="true" focusable="false">
    <path d="M25 4 C29 12 35 18.5 46 25 C35 31.5 29 38 25 46 C21 38 15 31.5 4 25 C15 18.5 21 12 25 4 Z" />
  </svg>
);

const ServicesList = () => {
  const [open, setOpen] = useState(0);

  return (
    <ul className="sv-list">
      {SERVICES.map((s, i) => {
        const isOpen = open === i;
        const panelId = `sv-panel-${i}`;
        return (
          <li key={s.title} className={`sv-item${isOpen ? " is-open" : ""}`}>
            <h3 className="sv-heading">
              <button
                type="button"
                className="sv-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{s.title}</span>
                <ToranjGlyph />
              </button>
            </h3>
            <div id={panelId} className="sv-panel" role="region" aria-label={s.title}>
              <div className="sv-panel-inner">
                <p>{s.text}</p>
                <ul className="sv-included" aria-label="Inclus">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

/* ================= RÉALISATIONS — études de cas ================= */

const PROJECTS = [
  {
    name: "Belle Rose",
    kind: "Salon de coiffure à Repentigny (projet concept)",
    url: "https://belle-rose-salon.vercel.app",
    image: belleRoseImage,
    alt: "Page d’accueil du site Belle Rose, un salon de coiffure",
    need: "Un salon qui reçoit surtout ses rendez-vous par téléphone et veut montrer ses prix et son ambiance avant la première visite.",
    solution: "Un site doux et élégant avec les services et les prix, une galerie de styles et un bouton de rendez-vous toujours visible sur mobile.",
    tech: "React, design responsive",
  },
  {
    name: "Sérénité",
    kind: "Massothérapeute à Repentigny (projet concept)",
    url: "https://serenite-massage.vercel.app",
    image: sereniteImage,
    alt: "Page d’accueil du site Sérénité, massothérapie et bien-être",
    need: "Une massothérapeute qui veut rassurer ses nouveaux clients et les aider à choisir le bon soin.",
    solution: "Une ambiance calme, une présentation claire de chaque soin, un accès rapide à la prise de rendez-vous et une carte Google Maps.",
    tech: "React, Google Maps",
    browserBar: true,
  },
];

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

  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSubmitting(true);
    setFormStatus("");

    try {
      const response = await fetch("https://formspree.io/f/moevldpd", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      form.reset();
      setFormStatus("success");
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand" onClick={closeMenu}>
            <LogoMark className="brand-mark" />
            <span className="brand-text">
              <span className="brand-main">VYSARA</span>
              <span className="brand-sub">Sites web &amp; applications</span>
            </span>
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
        <section id="home" className="hero-v2">
          <div className="container hx-inner">
            <div className="hx-content">
              <h1 className="hx-title">
                <span className="hx-line">Des sites web</span>
                <span className="hx-line">qui font venir</span>
                <span className="hx-line">vos clients.</span>
              </h1>

              <p className="hx-text">
                Vysara conçoit des sites rapides et soignés pour les salons,
                cliniques et commerces de Repentigny, de Lanaudière et du
                Grand Montréal : réservation en ligne, formulaires, Google Maps
                et suivi après la mise en ligne.
              </p>

              <div className="hx-buttons">
                <a href="#contact" className="hx-btn hx-btn-primary">
                  Démarrer mon projet
                </a>
                <a href="#work" className="hx-btn hx-btn-ghost">
                  Voir nos réalisations
                </a>
              </div>

              <p className="hx-note">
                Basée à Repentigny. Accompagnement en français, du premier
                appel à la mise en ligne.
              </p>
            </div>

            <HeroMedallion />
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="sv-section">
          <div className="container sv-inner">
            <div className="sv-intro">
              <h2>Un site, et tout ce qui le fait travailler pour vous.</h2>
              <p>
                On commence par ce dont votre entreprise a vraiment besoin.
                Le reste s’ajoute quand vous êtes prêt.
              </p>
              <a href="#contact" className="sv-link">
                Parlons de votre projet
              </a>
              <p className="sv-mail">
                Ou écrivez-nous :{" "}
                <a href="mailto:contact@vysara.ca">contact@vysara.ca</a>
              </p>
            </div>

            <ServicesList />
          </div>
        </section>

        {/* ================= PROJECT ================= */}
        <section id="work" className="wk-section">
          <div className="container">
            <div className="wk-head">
              <h2>Des sites pensés pour des commerces d’ici.</h2>
              <p>
                Deux projets concepts qui montrent ce que nous pouvons faire
                pour un salon, une clinique ou un commerce de quartier. Le
                prochain pourrait être le vôtre.
              </p>
            </div>

            <div className="wk-list">
              {PROJECTS.map((p, i) => (
                <article
                  key={p.name}
                  className={`wk-case${i % 2 ? " wk-case--flip" : ""}`}
                >
                  <a
                    href={p.url}
                    className="wk-shot"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visiter le site ${p.name} (nouvel onglet)`}
                  >
                    {p.browserBar && (
                      <span className="wk-bar" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                      </span>
                    )}
                    <img src={p.image} alt={p.alt} loading="lazy" />
                  </a>

                  <div className="wk-body">
                    <h3>{p.name}</h3>
                    <p className="wk-kind">{p.kind}</p>

                    <dl className="wk-facts">
                      <div>
                        <dt>Le besoin</dt>
                        <dd>{p.need}</dd>
                      </div>
                      <div>
                        <dt>Notre réponse</dt>
                        <dd>{p.solution}</dd>
                      </div>
                      <div>
                        <dt>Réalisé avec</dt>
                        <dd>{p.tech}</dd>
                      </div>
                    </dl>

                    <a
                      href={p.url}
                      className="wk-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visiter le site
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHY VYSARA ================= */}
        <section id="about" className="why-section">
          <div className="container">
            <div className="why-heading">
              <p className="section-eyebrow">POURQUOI VYSARA</p>
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

              <a className="contact-email" href="mailto:contact@vysara.ca">
                contact@vysara.ca
              </a>
            </div>

            <form className="contact-form" onSubmit={handleContactSubmit}>
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

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande →"}
              </button>

              {formStatus === "success" && (
                <p className="form-success">
                  ✓ Merci ! Votre demande a bien été envoyée. Nous vous
                  répondrons dans les plus brefs délais.
                </p>
              )}

              {formStatus === "error" && (
                <p className="form-error">
                  Une erreur est survenue. Veuillez réessayer dans quelques
                  instants.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="site-footer">
        <div className="container footer-top">
          <div>
            <div className="footer-brand">
              <LogoMark className="footer-brand-mark" onDark />
              <span>
                <strong>VYSARA</strong>
                <span className="footer-brand-sub">
                  Sites web &amp; applications
                </span>
              </span>
            </div>
            <p>
              Des solutions numériques simples pour des entreprises solides.
            </p>
            <a className="footer-email" href="mailto:contact@vysara.ca">
              contact@vysara.ca
            </a>
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
            <p>© 2026 Vysara Solutions numériques. Tous droits réservés.</p>
            <p>NEQ 2282688573</p>
            <p>Québec, Canada</p>
          </div>

          <div className="footer-social">
            <a href="https://www.linkedin.com/company/146886487/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <IconLinkedin />
            </a>
            <a href="https://www.instagram.com/vysara.ca/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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
