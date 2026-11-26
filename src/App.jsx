import { useState, useEffect, useRef } from "react";
import "./App.css";

import belleRoseImage from "./assets/belle-rose-project.png";
import belleRosePrestigeImage from "./assets/belle-rose-prestige-project.jpg";
import sereniteImage from "./assets/serenite-project.jpg";
import mielluneImage from "./assets/miellune-project.jpg";
import orivaneImage from "./assets/orivane-project.jpg";
import belleRoseVideo from "./assets/belle-rose-mobile.mp4";
import belleRosePoster from "./assets/belle-rose-mobile-poster.jpg";

/* ================= LANGUE (FR par défaut, EN sur /en) ================= */

const LANG =
  typeof window !== "undefined" && window.location.pathname.startsWith("/en")
    ? "en"
    : "fr";

const T = (fr, en) => (LANG === "en" ? en : fr);

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
          aria-label={T("Aperçu sur mobile du site Belle Rose, un salon de coiffure", "Mobile preview of the Belle Rose hair salon website")}
        />
      </div>
      </div>

      <figcaption className="hx-caption">
        {T("Belle Rose, site pour un salon de coiffure (projet concept)", "Belle Rose, website for a hair salon (concept project)")}
      </figcaption>
    </figure>
  );
};

/* ================= SERVICES — liste dépliable ================= */

const SERVICES = [
  {
    title: T("Créer", "Build"),
    promise: T("Un site qui donne envie de vous appeler.", "A website that makes people want to call you."),
    tags: [T("Sites web", "Websites"), T("Boutique en ligne", "Online store"), T("Applications", "Applications"), T("Réservation", "Booking")],
    text: T("Un site, une boutique ou une application, conçus sur mesure, rapides et pensés d’abord pour le mobile.", "A website, an online store or an application, custom-built, fast and mobile-first."),
    items: [
      T("Sites web sur mesure ou WordPress, que vous modifiez vous-même", "Custom or WordPress websites you can update yourself"),
      T("Boutique en ligne (Shopify, WooCommerce)", "Online store (Shopify, WooCommerce)"),
      T("Applications web et portails clients (React, Laravel)", "Web applications and client portals (React, Laravel)"),
      T("Réservation en ligne et formulaires", "Online booking and forms"),
      T("Refonte de votre site actuel", "Redesign of your current website"),
      T("Identité visuelle : logo, couleurs et typographie", "Visual identity: logo, colours and typography"),
    ],
  },
  {
    title: T("Automatiser avec l’IA", "Automate with AI"),
    promise: T("Vos clients ont une réponse jour et nuit, même le dimanche.", "Your clients get an answer day and night, even on Sundays."),
    tags: [T("Assistant 24/7", "24/7 assistant"), T("Agents IA", "AI agents"), T("Automatisations", "Automations")],
    text: T("Moins de tâches répétitives, plus de temps pour vos clients.", "Fewer repetitive tasks, more time for your clients."),
    items: [
      T("Assistant IA 24 h sur 24 : réponses, rendez-vous et coordonnées", "24/7 AI assistant: answers, bookings and contact details"),
      T("Agent IA qui connaît vos services, vos prix et vos procédures", "AI agent that knows your services, prices and procedures"),
      T("Automatisation des formulaires, courriels, factures et suivis", "Automated forms, emails, invoices and follow-ups"),
      T("Texto après un appel manqué et demande d’avis Google", "Text after a missed call and Google review requests"),
    ],
  },
  {
    title: T("Faire grandir", "Grow"),
    promise: T("Soyez trouvé sur Google… et dans ChatGPT.", "Get found on Google… and in ChatGPT."),
    tags: [T("SEO et GEO", "SEO & GEO"), T("Fiche Google", "Google profile"), T("Vidéos courtes", "Short videos")],
    text: T("Être trouvé, choisi et recommandé, sur Google comme dans les réponses de ChatGPT.", "Get found, chosen and recommended, on Google and in ChatGPT’s answers."),
    items: [
      T("Référencement local (SEO) et visibilité IA (GEO)", "Local SEO and AI visibility (GEO)"),
      T("Fiche Google optimisée et suivie", "Optimized and managed Google Business Profile"),
      T("Vidéos courtes pour Reels, TikTok et Shorts", "Short videos for Reels, TikTok and Shorts"),
      T("Landing page pour une promotion ou un événement", "Landing page for a promotion or an event"),
      T("Textes et traductions français-anglais", "French-English copy and translations"),
    ],
  },
  {
    title: T("Entretenir et protéger", "Maintain and protect"),
    promise: T("Un site toujours à jour, sécuritaire et conforme.", "A website that stays up to date, secure and compliant."),
    tags: [T("Mises à jour", "Updates"), T("Sécurité", "Security"), T("Loi 25", "Law 25")],
    text: T("Un site fiable, à jour et conforme, sans que vous ayez à y penser.", "A reliable, up-to-date and compliant website, without you having to think about it."),
    items: [
      T("Mises à jour, sauvegardes et sécurité", "Updates, backups and security"),
      T("Petites modifications de contenu", "Small content changes"),
      T("Accompagnement à la conformité Loi 25 (confidentialité) et Loi 96 (français)", "Support for Quebec Law 25 (privacy) and Law 96 (French language) compliance"),
      T("Une personne qui vous répond, en français", "A real person who answers you, in English or French"),
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
                <span className="sv-head">
                  <span className="sv-title">{s.title}</span>
                  <span className="sv-promise">{s.promise}</span>
                  <span className="sv-tags">
                    {s.tags.map((t) => (
                      <span key={t} className="sv-tag">{t}</span>
                    ))}
                  </span>
                </span>
                <ToranjGlyph />
              </button>
            </h3>
            <div id={panelId} className="sv-panel" role="region" aria-label={s.title}>
              <div className="sv-panel-inner">
                <p>{s.text}</p>
                <ul className="sv-included" aria-label={T("Inclus", "Included")}>
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
    name: "Orivane",
    kind: T("Clinique de médecine esthétique (projet concept)", "Medical aesthetics clinic (concept project)"),
    url: "https://orivane-alpha.vercel.app",
    image: orivaneImage,
    alt: T("Site Orivane : une orchidée blanche éclose parmi des sphères dorées, sur un fond noir", "Orivane website: a white orchid in bloom among golden spheres, on a black background"),
    need: T("Une clinique de médecine esthétique qui veut inspirer confiance, présenter ses soins avec élégance et retenue, et inviter à une première consultation.", "A medical aesthetics clinic that wants to inspire trust, present its treatments with elegance and restraint, and invite a first consultation."),
    solution: T("Une expérience cinématique en quatre tableaux : au fil du défilement, chaque soin est évoqué par un objet symbolique (la soie qui se lisse, le marbre sculpté par la lumière, l’orchidée qui éclot, le sablier dont le sable devient perles), jusqu’à la demande de consultation. Le site reste très rapide (100/100 sur mobile selon PageSpeed Insights).", "A cinematic experience in four scenes: as you scroll, each treatment is evoked by a symbolic object (silk smoothing out, marble sculpted by light, an orchid in bloom, an hourglass whose sand turns into pearls), leading to the consultation request. The site stays very fast (100/100 on mobile in PageSpeed Insights)."),
    tech: T("React, GSAP, animations au défilement, vidéos IA", "React, GSAP, scroll animations, AI videos"),
    browserBar: true,
  },
  {
    name: "Belle Rose Prestige",
    kind: T("Salon de beauté, version premium animée (projet concept)", "Beauty salon, premium animated version (concept project)"),
    url: "https://belle-rose-prestige.vercel.app",
    image: belleRosePrestigeImage,
    alt: T("Site Belle Rose Prestige : une rose rose poudré dont les pétales deviennent des cheveux soyeux, sur un fond vert olive", "Belle Rose Prestige website: a powder-pink rose whose petals turn into silky hair, on an olive-green background"),
    need: T("Un salon déjà bien établi qui veut une présence en ligne à la hauteur de son savoir-faire et se distinguer des sites de salon classiques.", "An established salon that wants an online presence that matches its craft and stands out from typical salon websites."),
    solution: T("Une expérience cinématique : au fil du défilement, chaque service prend vie par son geste (la rose qui devient chevelure, les ciseaux, le pinceau de couleur, le vernis, la goutte de sérum), avec une demande de rendez-vous à la fin. Le site reste rapide (92/100 sur mobile selon PageSpeed Insights).", "A cinematic experience: as you scroll, each service comes to life through its gesture (the rose turning into hair, the scissors, the colour brush, the polish, the drop of serum), with an appointment request at the end. The site stays fast (92/100 on mobile in PageSpeed Insights)."),
    tech: T("React, GSAP, animations au défilement, vidéos IA", "React, GSAP, scroll animations, AI videos"),
    browserBar: true,
  },
  {
    name: "Belle Rose",
    kind: T("Salon de coiffure, version essentielle (projet concept)", "Hair salon, essential version (concept project)"),
    url: "https://belle-rose-salon.vercel.app",
    image: belleRoseImage,
    alt: T("Page d’accueil du site Belle Rose, un salon de coiffure", "Home page of the Belle Rose hair salon website"),
    need: T("Un salon qui reçoit surtout ses rendez-vous par téléphone et veut montrer ses prix et son ambiance avant la première visite.", "A salon that gets most of its bookings by phone and wants to show its prices and atmosphere before the first visit."),
    solution: T("Un site doux et élégant avec les services et les prix, une galerie de styles et un bouton de rendez-vous toujours visible sur mobile.", "A soft, elegant website with services and prices, a style gallery and a booking button that stays visible on mobile."),
    tech: T("React, design responsive", "React, responsive design"),
  },
  {
    name: "Sérénité",
    kind: T("Massothérapeute à Repentigny (projet concept)", "Massage therapist in Repentigny (concept project)"),
    url: "https://serenite-massage.vercel.app",
    image: sereniteImage,
    alt: T("Page d’accueil du site Sérénité, massothérapie et bien-être", "Home page of the Sérénité massage and wellness website"),
    need: T("Une massothérapeute qui veut rassurer ses nouveaux clients et les aider à choisir le bon soin.", "A massage therapist who wants to reassure new clients and help them choose the right treatment."),
    solution: T("Une ambiance calme, une présentation claire de chaque soin, un accès rapide à la prise de rendez-vous et une carte Google Maps.", "A calm atmosphere, a clear presentation of each treatment, quick access to booking and a Google Map."),
    tech: "React, Google Maps",
    browserBar: true,
  },
  {
    name: "Miellune",
    kind: T("Café de quartier (projet concept)", "Neighbourhood café (concept project)"),
    url: "https://miellune.vercel.app",
    image: mielluneImage,
    alt: T("Site Miellune : du miel coule sur un latte, sur un fond sombre", "Miellune website: honey pouring onto a latte on a dark background"),
    need: T("Un café qui veut se démarquer et donner envie de venir goûter sa boisson signature, dès la première visite en ligne.", "A café that wants to stand out and make people want to taste its signature drink from their very first online visit."),
    solution: T("Une expérience immersive : au fil du défilement, le miel coule sur le latte et dessine une lune. Le tout reste rapide (97/100 sur mobile selon PageSpeed Insights).", "An immersive experience: as you scroll, honey pours onto the latte and draws a moon. It all stays fast (97/100 on mobile in PageSpeed Insights)."),
    tech: T("React, GSAP, animation au défilement", "React, GSAP, scroll animation"),
    browserBar: true,
  },
];

/* ================= IA — démonstration d'assistant ================= */

const AI_QA = [
  {
    q: T("Êtes-vous ouverts le samedi ?", "Are you open on Saturdays?"),
    a: T("Oui ! Le salon est ouvert le samedi de 9 h à 16 h. Voulez-vous que je vous montre les plages libres ?", "Yes! The salon is open on Saturdays from 9 a.m. to 4 p.m. Would you like me to show you the available times?"),
  },
  {
    q: T("Combien coûte une coloration ?", "How much is a colour?"),
    a: T("Une coloration commence à 80 $, selon la longueur des cheveux. Le prix exact est confirmé avec votre coiffeuse avant de commencer.", "Colour starts at $80, depending on hair length. The exact price is confirmed with your stylist before starting."),
  },
  {
    q: T("Comment prendre rendez-vous ?", "How do I book an appointment?"),
    a: T("C’est simple : touchez « Prendre rendez-vous », choisissez le service, puis l’heure qui vous convient. Vous recevez une confirmation par courriel.", "It’s easy: tap “Book an appointment”, choose the service, then the time that suits you. You’ll get a confirmation by email."),
  },
];

const AiDemo = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: T("Bonjour ! Je suis l’assistant de Belle Rose. Comment puis-je vous aider ?", "Hi! I’m the Belle Rose assistant. How can I help you?") },
    { from: "user", text: AI_QA[2].q },
    { from: "bot", text: AI_QA[2].a },
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
          <span>{T("Démonstration", "Demo")}</span>
        </div>
      </div>

      <div className="ai-demo-body" aria-live="polite">
        {messages.slice(-5).map((m, i) => (
          <p key={`${i}-${m.text}`} className={`ai-msg ai-msg--${m.from}`}>
            {m.text}
          </p>
        ))}
        {typing && (
          <p className="ai-msg ai-msg--bot ai-typing" aria-label={T("L’assistant écrit", "The assistant is typing")}>
            <i />
            <i />
            <i />
          </p>
        )}
      </div>

      <div className="ai-demo-ask">
        <span>{T("Essayez une question :", "Try a question:")}</span>
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

/* ================= BANDEAU OFFRE D’OUVERTURE (disparaît après le 20 déc. 2026) ================= */

const PROMO_END = new Date("2026-12-21T00:00:00-05:00");

const PromoBar = () => {
  const [visible, setVisible] = useState(() => {
    if (new Date() >= PROMO_END) return false;
    try {
      return localStorage.getItem("vysara-promo-closed") !== "1";
    } catch {
      return true;
    }
  });

  if (!visible) return null;

  const close = () => {
    setVisible(false);
    try {
      localStorage.setItem("vysara-promo-closed", "1");
    } catch {
      /* stockage indisponible */
    }
  };

  return (
    <div className="promo-bar" role="region" aria-label={T("Offre d’ouverture", "Opening offer")}>
      <p className="promo-text">
        <span className="promo-star" aria-hidden="true">✦</span>
        <strong>{T("Offre d’ouverture", "Opening offer")}</strong>
        <span>{T(" : votre site à partir de 750 $ jusqu’au 20 décembre.", ": your website from $750 until December 20.")}</span>
        <a href="#contact" className="promo-link">{T("Découvrir →", "Learn more →")}</a>
      </p>
      <button type="button" className="promo-close" onClick={close} aria-label={T("Fermer l’offre", "Close the offer")}>
        ✕
      </button>
    </div>
  );
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.documentElement.lang = LANG === "en" ? "en-CA" : "fr-CA";
    document.title = T("Vysara – Sites web & applications", "Vysara – Websites & applications");
    const desc = T(
      "Vysara crée des sites web modernes et des applications pour les petites entreprises de Repentigny, Montréal, Laval et Lanaudière.",
      "Vysara builds modern websites and web applications for small businesses in Repentigny, Montréal, Laval and Lanaudière."
    );
    const url = LANG === "en" ? "https://www.vysara.ca/en" : "https://www.vysara.ca/";
    const set = (sel, attr, val) => {
      const el = document.querySelector(sel);
      if (el) el.setAttribute(attr, val);
    };
    set('meta[name="description"]', "content", desc);
    set('meta[property="og:description"]', "content", desc);
    set('meta[property="og:title"]', "content", document.title);
    set('meta[property="og:url"]', "content", url);
    set('meta[property="og:locale"]', "content", LANG === "en" ? "en_CA" : "fr_CA");
    set('link[rel="canonical"]', "href", url);
  }, []);


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
      <PromoBar />

      {/* ================= HEADER ================= */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand" onClick={closeMenu}>
            <LogoMark className="brand-mark" />
            <span className="brand-text">
              <span className="brand-main">VYSARA</span>
              <span className="brand-sub">{T("Sites web & applications", "Websites & applications")}</span>
            </span>
          </a>

          <nav className="main-nav desktop-nav">
            <a href="#home">{T("Accueil", "Home")}</a>
            <a href="#services">Services</a>
            <a href="#ia">{T("IA", "AI")}</a>
            <a href="#work">{T("Réalisations", "Work")}</a>
            <a href="#about">{T("À propos", "About")}</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-actions">
            <div className="lang-switch" aria-label={T("Langue", "Language")}>
              <a href="/" lang="fr" aria-current={LANG === "fr" ? "page" : undefined}>FR</a>
              <a href="/en" lang="en" aria-current={LANG === "en" ? "page" : undefined}>EN</a>
            </div>

            <a href="#contact" className="header-btn desktop-cta">
              {T("Parlons-en →", "Let’s talk →")}
            </a>

            <button
              className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
              type="button"
              aria-label={T("Ouvrir le menu", "Open menu")}
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
              {T("Accueil", "Home")}
            </a>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
            <a href="#ia" onClick={closeMenu}>
              {T("IA", "AI")}
            </a>
            <a href="#work" onClick={closeMenu}>
              {T("Réalisations", "Work")}
            </a>
            <a href="#about" onClick={closeMenu}>
              {T("À propos", "About")}
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
            {T("Parlons-en →", "Let’s talk →")}
          </a>
        </div>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section id="home" className="hero-v2">
          <div className="container hx-inner">
            <div className="hx-content">
              <h1 className="hx-title">
                <span className="hx-line">{T("Des sites web", "Websites that")}</span>
                <span className="hx-line">{T("qui font venir", "bring clients")}</span>
                <span className="hx-line">{T("vos clients.", "to your door.")}</span>
              </h1>

              <p className="hx-text">
                {T("Vysara conçoit des sites rapides et soignés pour les salons, cliniques et commerces de Repentigny, de Lanaudière et du Grand Montréal : réservation en ligne, formulaires, Google Maps et suivi après la mise en ligne.", "Vysara builds fast, carefully crafted websites for salons, clinics and shops in Repentigny, Lanaudière and Greater Montréal: online booking, forms, Google Maps and support after launch.")}
              </p>

              <div className="hx-buttons">
                <a href="#contact" className="hx-btn hx-btn-primary">
                  {T("Démarrer mon projet", "Start my project")}
                </a>
                <a href="#work" className="hx-btn hx-btn-ghost">
                  {T("Voir nos réalisations", "See our work")}
                </a>
              </div>

              <p className="hx-note">
                {T("Basée à Repentigny. Accompagnement en français, du premier appel à la mise en ligne.", "Based in Repentigny. Support in English and French, from the first call to launch.")}
              </p>
            </div>

            <HeroMedallion />
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="sv-section">
          <div className="container sv-inner">
            <div className="sv-intro">
              <h2>{T("Un site, et tout ce qui le fait travailler pour vous.", "A website, and everything that makes it work for you.")}</h2>
              <p>
                {T("On commence par ce dont votre entreprise a vraiment besoin. Le reste s’ajoute quand vous êtes prêt.", "We start with what your business really needs. The rest can come when you’re ready.")}
              </p>
              <a href="#contact" className="sv-link">
                {T("Parlons de votre projet", "Tell us about your project")}
              </a>
              <p className="sv-mail">
                {T("Ou écrivez-nous :", "Or email us:")}{" "}
                <a href="mailto:contact@vysara.ca">contact@vysara.ca</a>
              </p>
            </div>

            <div className="sv-list-wrap">
              <ServicesList />
              <p className="sv-note">
                {T("Chaque projet est sur mesure. Recevez une proposition claire en 48 h.", "Every project is tailor-made. Get a clear proposal within 48 hours.")}
              </p>
            </div>
          </div>
        </section>

        {/* ================= IA ================= */}
        <section id="ia" className="ai-section">
          <div className="container ai-inner">
            <div className="ai-content">
              <h2>{T("Vos clients posent leurs questions à l’IA. Votre site doit avoir la réponse.", "Your clients ask AI their questions. Your website should have the answer.")}</h2>
              <p className="ai-lead">
                {T("De plus en plus de gens demandent à ChatGPT ou à Google où réserver, quoi choisir et qui appeler. Chaque site Vysara est préparé pour cette nouvelle façon de chercher.", "More and more people ask ChatGPT or Google where to book, what to choose and who to call. Every Vysara website is built for this new way of searching.")}
              </p>

              <div className="ai-points">
                <div>
                  <h3>{T("Compris par les assistants IA", "Understood by AI assistants")}</h3>
                  <p>{T("Données structurées, questions fréquentes et fiche Google cohérente, pour que l’IA sache qui vous êtes, où vous êtes et ce que vous offrez.", "Structured data, FAQs and a consistent Google profile, so AI knows who you are, where you are and what you offer.")}</p>
                </div>
                <div>
                  <h3>{T("Un assistant qui répond à toute heure", "An assistant that answers any time")}</h3>
                  <p>{T("Sur votre site, il répond aux questions fréquentes et guide vers la réservation, même à 23 h un dimanche.", "On your website, it answers common questions and guides people to booking, even at 11 p.m. on a Sunday.")}</p>
                </div>
                <div>
                  <h3>{T("Du contenu prêt plus vite", "Content ready faster")}</h3>
                  <p>{T("Textes, traductions français-anglais et publications Google préparés avec l’IA, puis relus avec soin.", "Copy, French-English translations and Google posts prepared with AI, then carefully reviewed.")}</p>
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
              <h2>{T("Des sites pensés pour des commerces d’ici.", "Websites designed for local businesses.")}</h2>
              <p>
                {T("Quatre projets concepts qui montrent ce que nous pouvons faire pour un salon, une clinique, un café ou un commerce de quartier. Le prochain pourrait être le vôtre.", "Four concept projects that show what we can do for a salon, a clinic, a café or a neighbourhood shop. The next one could be yours.")}
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
                    aria-label={T(`Visiter le site ${p.name} (nouvel onglet)`, `Visit the ${p.name} website (opens in a new tab)`)}
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
                        <dt>{T("Le besoin", "The need")}</dt>
                        <dd>{p.need}</dd>
                      </div>
                      <div>
                        <dt>{T("Notre réponse", "Our solution")}</dt>
                        <dd>{p.solution}</dd>
                      </div>
                      <div>
                        <dt>{T("Réalisé avec", "Built with")}</dt>
                        <dd>{p.tech}</dd>
                      </div>
                    </dl>

                    <a
                      href={p.url}
                      className="wk-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {T("Visiter le site", "Visit the site")}
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
                  <h3>{T("Pourquoi un toranj ?", "Why a toranj?")}</h3>
                  <p>
                    {T("Le logo de Vysara s’inspire du toranj, le grand médaillon au centre des tapis persans. Dans un tapis, tout part de lui : les motifs s’organisent autour de ce cœur avec équilibre et précision.", "The Vysara logo is inspired by the toranj, the large medallion at the centre of Persian rugs. In a rug, everything starts from it: the patterns are arranged around this heart with balance and precision.")}
                  </p>
                  <p>
                    {T("C’est notre façon de travailler : votre entreprise au centre, et chaque détail de votre site pensé autour d’elle.", "That’s how we work: your business at the centre, and every detail of your website designed around it.")}
                  </p>
                </figcaption>
              </figure>

              <div className="ab-content">
                <h2>{T("Un site fait avec soin, par la personne qui vous répond.", "A website made with care, by the person who answers you.")}</h2>

                <p className="ab-lead">
                  {T("Vysara est une agence web à taille humaine, basée à Repentigny. Du premier appel à la mise en ligne, vous parlez à la même personne : celle qui dessine, code et entretient votre site.", "Vysara is a small, people-first web agency based in Repentigny. From the first call to launch, you talk to the same person: the one who designs, codes and maintains your website.")}
                </p>

                <ul className="ab-promises">
                  <li>{T("Un site pensé d’abord pour le téléphone, là où vos clients vous cherchent.", "A website designed for phones first, where your clients are looking for you.")}</li>
                  <li>{T("Votre site et votre nom de domaine vous appartiennent.", "Your website and domain name belong to you.")}</li>
                  <li>{T("Des réponses en français, sans jargon technique.", "Clear answers in English or French, without technical jargon.")}</li>
                </ul>

                <blockquote className="ab-quote">
                  <p>
                    {T("Un bon site ne se remarque pas pour sa technique. On le remarque parce que le téléphone sonne davantage.", "A good website isn’t noticed for its technology. It’s noticed because the phone rings more often.")}
                  </p>
                  <cite>{T("Samaneh Mahboudi, fondatrice de Vysara", "Samaneh Mahboudi, founder of Vysara")}</cite>
                </blockquote>
              </div>
            </div>

            <ol className="ab-steps" aria-label={T("Comment se déroule un projet", "How a project works")}>
              <li>
                <h3>{T("On se parle", "We talk")}</h3>
                <p>{T("Un appel de 20 minutes pour comprendre votre entreprise, vos clients et ce que vous attendez du site.", "A 20-minute call to understand your business, your clients and what you expect from your website.")}</p>
              </li>
              <li>
                <h3>{T("Vous voyez avant qu’on construise", "You see it before we build it")}</h3>
                <p>{T("Une maquette de votre page d’accueil, à valider avant d’écrire la moindre ligne de code.", "A mockup of your home page to approve before a single line of code is written.")}</p>
              </li>
              <li>
                <h3>{T("On construit et on teste", "We build and test")}</h3>
                <p>{T("Votre site est développé puis vérifié sur téléphone, tablette et ordinateur.", "Your website is developed, then checked on phone, tablet and computer.")}</p>
              </li>
              <li>
                <h3>{T("On reste là après", "We stay with you")}</h3>
                <p>{T("Mise en ligne, fiche Google, petites modifications : vous n’êtes pas seul une fois le site publié.", "Launch, Google profile, small changes: you’re not on your own once your website is live.")}</p>
              </li>
            </ol>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="ct-section">
          <div className="container ct-inner">
            <div className="ct-intro">
              <h2>{T("Parlons de votre entreprise.", "Let’s talk about your business.")}</h2>
              <p>
                {T("Dites-nous en deux minutes ce dont vous avez besoin. Vous recevez une réponse personnalisée, sans engagement.", "Tell us in two minutes what you need. You’ll get a personal reply, with no commitment.")}
              </p>

              <dl className="ct-direct">
                <div>
                  <dt>{T("Courriel", "Email")}</dt>
                  <dd>
                    <a href="mailto:contact@vysara.ca">contact@vysara.ca</a>
                  </dd>
                </div>
                <div>
                  <dt>{T("Région", "Area")}</dt>
                  <dd>{T("Repentigny, Lanaudière, Laval et Grand Montréal", "Repentigny, Lanaudière, Laval and Greater Montréal")}</dd>
                </div>
              </dl>
            </div>

            <form className="ct-form" onSubmit={handleContactSubmit}>
              <input type="hidden" name="langue" value={LANG} />
              <fieldset className="ct-group">
                <legend>{T("Votre entreprise", "Your business")}</legend>
                <div className="ct-chips">
                  {T(["Salon ou beauté", "Santé et bien-être", "Restaurant", "Commerce", "Autre"], ["Salon or beauty", "Health and wellness", "Restaurant", "Retail", "Other"]).map((t) => (
                    <label key={t} className="ct-chip">
                      <input type="radio" name="type_entreprise" value={t} />
                      <span>{t}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="ct-group">
                <legend>{T("Ce qui vous intéresse", "What you’re interested in")}</legend>
                <div className="ct-chips">
                  {T(["Un nouveau site", "Refaire mon site", "Réservation en ligne", "Assistant IA", "Je ne sais pas encore"], ["A new website", "Redo my website", "Online booking", "AI assistant", "Not sure yet"]).map((t) => (
                    <label key={t} className="ct-chip">
                      <input type="checkbox" name="besoins" value={t} />
                      <span>{t}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="ct-row">
                <div className="ct-field">
                  <label htmlFor="name">{T("Nom", "Name")}</label>
                  <input id="name" name="name" type="text" autoComplete="name" maxLength="100" required />
                </div>
                <div className="ct-field">
                  <label htmlFor="email">{T("Courriel", "Email")}</label>
                  <input id="email" name="email" type="email" autoComplete="email" maxLength="150" required />
                </div>
              </div>

              <div className="ct-row">
                <div className="ct-field">
                  <label htmlFor="business">
                    {T("Nom de l’entreprise", "Business name")} <span>{T("(facultatif)", "(optional)")}</span>
                  </label>
                  <input id="business" name="business" type="text" autoComplete="organization" maxLength="150" />
                </div>
                <div className="ct-field">
                  <label htmlFor="phone">
                    {T("Téléphone", "Phone")} <span>{T("(facultatif)", "(optional)")}</span>
                  </label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength="30" />
                </div>
              </div>

              <div className="ct-field">
                <label htmlFor="message">
                  {T("Un mot sur votre projet", "A few words about your project")} <span>{T("(facultatif)", "(optional)")}</span>
                </label>
                <textarea id="message" name="message" rows="4" maxLength="2000"></textarea>
              </div>

              <button type="submit" className="ct-submit" disabled={isSubmitting}>
                {isSubmitting ? T("Envoi en cours…", "Sending…") : T("Envoyer ma demande", "Send my request")}
              </button>

              <p
                className={`ct-status${formStatus === "error" ? " is-error" : ""}`}
                role="status"
                aria-live="polite"
              >
                {formStatus === "success" &&
                  T("Demande envoyée. Merci ! Nous vous répondons personnellement par courriel.", "Request sent. Thank you! We’ll reply to you personally by email.")}
                {formStatus === "error" &&
                  T("La demande n’a pas pu être envoyée. Vérifiez votre connexion, puis réessayez, ou écrivez à contact@vysara.ca.", "Your request couldn’t be sent. Check your connection and try again, or email contact@vysara.ca.")}
              </p>
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
                  {T("Sites web & applications", "Websites & applications")}
                </span>
              </span>
            </div>
            <p>
              {T("Des solutions numériques simples pour des entreprises solides.", "Simple digital solutions for strong businesses.")}
            </p>
            <a className="footer-email" href="mailto:contact@vysara.ca">
              contact@vysara.ca
            </a>
          </div>

          <div className="footer-links">
            <a href="#home">{T("Accueil", "Home")}</a>
            <a href="#services">Services</a>
            <a href="#ia">{T("IA", "AI")}</a>
            <a href="#work">{T("Réalisations", "Work")}</a>
            <a href="#about">{T("À propos", "About")}</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <div className="footer-bottom-left">
            <p>{T("© 2026 Vysara Solutions numériques. Tous droits réservés.", "© 2026 Vysara Digital Solutions. All rights reserved.")}</p>
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
            {T("Fait au Québec", "Made in Québec")} <IconHeart /> {T("Pour les entrepreneurs d’ici", "For local entrepreneurs")}
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
