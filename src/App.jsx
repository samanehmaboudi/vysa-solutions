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
  {
    title: "Assistant IA et visibilité IA",
    text: "Un assistant qui répond à vos clients jour et nuit, et un site préparé pour être bien compris par ChatGPT, Google et les autres outils d’IA.",
    items: [
      "Assistant de questions fréquentes sur votre site",
      "Données structurées et FAQ pour les recherches IA",
      "Textes et traductions préparés avec l’IA",
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

/* ================= IA — démonstration d'assistant ================= */

const AI_QA = [
  {
    q: "Êtes-vous ouverts le samedi ?",
    a: "Oui ! Le salon est ouvert le samedi de 9 h à 16 h. Voulez-vous que je vous montre les plages libres ?",
  },
  {
    q: "Combien coûte une coloration ?",
    a: "Une coloration commence à 80 $, selon la longueur des cheveux. Le prix exact est confirmé avec votre coiffeuse avant de commencer.",
  },
  {
    q: "Comment prendre rendez-vous ?",
    a: "C’est simple : touchez « Prendre rendez-vous », choisissez le service, puis l’heure qui vous convient. Vous recevez une confirmation par courriel.",
  },
];

const AiDemo = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Bonjour ! Je suis l’assistant de Belle Rose. Comment puis-je vous aider ?" },
  ]);
  const [typing, setTyping] = useState(false);

  const ask = (item) => {
    if (typing) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMessages((m) => [...m, { from: "user", text: item.q }]);
    if (reduce) {
      setMessages((m) => [...m, { from: "bot", text: item.a }]);
      return;
    }
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text: item.a }]);
    }, 1100);
  };

  return (
    <div className="ai-demo">
      <div className="ai-demo-head">
        <LogoMark className="ai-demo-logo" onDark />
        <div>
          <strong>Assistant Belle Rose</strong>
          <span>Démonstration</span>
        </div>
      </div>

      <div className="ai-demo-body" aria-live="polite">
        {messages.slice(-5).map((m, i) => (
          <p key={`${i}-${m.text}`} className={`ai-msg ai-msg--${m.from}`}>
            {m.text}
          </p>
        ))}
        {typing && (
          <p className="ai-msg ai-msg--bot ai-typing" aria-label="L’assistant écrit">
            <i />
            <i />
            <i />
          </p>
        )}
      </div>

      <div className="ai-demo-ask">
        <span>Essayez une question :</span>
        <div className="ai-chips">
          {AI_QA.map((item) => (
            <button key={item.q} type="button" onClick={() => ask(item)} disabled={typing}>
              {item.q}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

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
            <a href="#ia">IA</a>
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
            <a href="#ia" onClick={closeMenu}>
              IA
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

        {/* ================= IA ================= */}
        <section id="ia" className="ai-section">
          <div className="container ai-inner">
            <div className="ai-content">
              <h2>Vos clients posent leurs questions à l’IA. Votre site doit avoir la réponse.</h2>
              <p className="ai-lead">
                De plus en plus de gens demandent à ChatGPT ou à Google où
                réserver, quoi choisir et qui appeler. Chaque site Vysara est
                préparé pour cette nouvelle façon de chercher.
              </p>

              <div className="ai-points">
                <div>
                  <h3>Compris par les assistants IA</h3>
                  <p>Données structurées, questions fréquentes et fiche Google cohérente, pour que l’IA sache qui vous êtes, où vous êtes et ce que vous offrez.</p>
                </div>
                <div>
                  <h3>Un assistant qui répond à toute heure</h3>
                  <p>Sur votre site, il répond aux questions fréquentes et guide vers la réservation, même à 23 h un dimanche.</p>
                </div>
                <div>
                  <h3>Du contenu prêt plus vite</h3>
                  <p>Textes, traductions français-anglais et publications Google préparés avec l’IA, puis relus avec soin.</p>
                </div>
              </div>
            </div>

            <AiDemo />
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

        {/* ================= À PROPOS ================= */}
        <section id="about" className="ab-section">
          <div className="container">
            <div className="ab-inner">
              <figure className="ab-visual">
                <svg viewBox="0 0 400 400" aria-hidden="true" focusable="false">
                  <circle cx="200" cy="200" r="196" fill="#16284B" />
                  <circle cx="200" cy="200" r="178" fill="none" stroke="#F7F3EC" strokeOpacity="0.18" strokeWidth="1.5" strokeDasharray="0 10" strokeLinecap="round" />
                  <path d="M200 40 C228 88 272 128 320 200 C272 272 228 312 200 360 C172 312 128 272 80 200 C128 128 172 88 200 40 Z" fill="none" stroke="#F7F3EC" strokeWidth="3" />
                  <path d="M200 96 C218 128 248 156 280 200 C248 244 218 272 200 304 C182 272 152 244 120 200 C152 156 182 128 200 96 Z" fill="#8C2745" />
                  <circle cx="200" cy="200" r="22" fill="#E7B3C2" />
                  <circle cx="200" cy="18" r="6" fill="#7FA89C" />
                  <circle cx="200" cy="382" r="6" fill="#7FA89C" />
                </svg>
                <figcaption className="ab-logo-story">
                  <h3>Pourquoi un toranj ?</h3>
                  <p>
                    Le logo de Vysara s’inspire du toranj, le grand médaillon
                    au centre des tapis persans. Dans un tapis, tout part de
                    lui : les motifs s’organisent autour de ce cœur avec
                    équilibre et précision.
                  </p>
                  <p>
                    C’est notre façon de travailler : votre entreprise au
                    centre, et chaque détail de votre site pensé autour d’elle.
                  </p>
                </figcaption>
              </figure>

              <div className="ab-content">
                <h2>Un site fait avec soin, par la personne qui vous répond.</h2>

                <p className="ab-lead">
                  Vysara est une agence web à taille humaine, basée à
                  Repentigny. Du premier appel à la mise en ligne, vous parlez
                  à la même personne : celle qui dessine, code et entretient
                  votre site.
                </p>

                <ul className="ab-promises">
                  <li>Un site pensé d’abord pour le téléphone, là où vos clients vous cherchent.</li>
                  <li>Votre site et votre nom de domaine vous appartiennent.</li>
                  <li>Des réponses en français, sans jargon technique.</li>
                </ul>

                <blockquote className="ab-quote">
                  <p>
                    Un bon site ne se remarque pas pour sa technique. On le
                    remarque parce que le téléphone sonne davantage.
                  </p>
                  <cite>Samaneh Mahboudi, fondatrice de Vysara</cite>
                </blockquote>
              </div>
            </div>

            <ol className="ab-steps" aria-label="Comment se déroule un projet">
              <li>
                <h3>On se parle</h3>
                <p>Un appel de 20 minutes pour comprendre votre entreprise, vos clients et ce que vous attendez du site.</p>
              </li>
              <li>
                <h3>Vous voyez avant qu’on construise</h3>
                <p>Une maquette de votre page d’accueil, à valider avant d’écrire la moindre ligne de code.</p>
              </li>
              <li>
                <h3>On construit et on teste</h3>
                <p>Votre site est développé puis vérifié sur téléphone, tablette et ordinateur.</p>
              </li>
              <li>
                <h3>On reste là après</h3>
                <p>Mise en ligne, fiche Google, petites modifications : vous n’êtes pas seul une fois le site publié.</p>
              </li>
            </ol>
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
            <a href="#ia">IA</a>
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
