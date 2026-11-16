
"use client";

import { useState } from "react";
import Image from "next/image";

const WHATSAPP_NUMBER = "917735133257";
const INSTAGRAM_URL = "https://instagram.com/zoommax_films_studio";
const EMAIL_ADDRESS = "zoommaxfilmstudio@gmail.com";

const images = {
  hero: "/images/zmx-hero-bride.webp",
  bride: "/images/portfolio/bridal/bridal-01.jpg",
  couple: "/images/portfolio/wedding/wedding-couple-01.jpg",
  haldi: "/images/portfolio/mehndi/mehndi-01.jpg",
};

const portfolioPhotos = [
  { src: "/images/portfolio/bridal/bridal-01.jpg", title: "Bridal Portrait", category: "Bridal" },
  { src: "/images/portfolio/bridal/bridal-02.jpg", title: "The Bridal Story", category: "Bridal" },
  { src: "/images/portfolio/bridal/bridal-03.jpg", title: "Wedding Details", category: "Bridal" },
  { src: "/images/portfolio/bridal/bridal-04.jpg", title: "A Beautiful Moment", category: "Bridal" },
  { src: "/images/portfolio/bridal/bridal-05.jpg", title: "Timeless Elegance", category: "Bridal" },

  { src: "/images/portfolio/groom/groom-01.jpg", title: "Groom Portrait", category: "Groom" },
  { src: "/images/portfolio/groom/groom-02.jpg", title: "The Groom Story", category: "Groom" },
  { src: "/images/portfolio/groom/groom-silhouette.jpg", title: "A Quiet Moment", category: "Groom" },

  { src: "/images/portfolio/mehndi/mehndi-01.jpg", title: "Mehndi Celebration", category: "Celebrations" },
  { src: "/images/portfolio/mehndi/mehndi-02.jpg", title: "Colors of Celebration", category: "Celebrations" },
  { src: "/images/portfolio/mehndi/mehndi-03.jpg", title: "The Festivities", category: "Celebrations" },

  { src: "/images/portfolio/pre-wedding/prewedding-01.jpg", title: "Together", category: "Pre-Wedding" },
  { src: "/images/portfolio/pre-wedding/prewedding-02.jpg", title: "A Couple Story", category: "Pre-Wedding" },

  { src: "/images/portfolio/wedding/wedding-couple-01.jpg", title: "Wedding Together", category: "Wedding" },
  { src: "/images/portfolio/wedding/wedding-couple-02.jpg", title: "The Celebration", category: "Wedding" },
  { src: "/images/portfolio/wedding/wedding-couple-03.jpg", title: "Forever Begins", category: "Wedding" },
  { src: "/images/portfolio/wedding/wedding-couple-04.jpg", title: "A Timeless Story", category: "Wedding" },
];

const portfolioVideos = [
  {
    src: "/videos/car-delivery-f1.mp4",
    title: "Car Delivery Film",
    category: "Automobile",
  },
  {
    src: "/videos/car-delivery-jiban.mp4",
    title: "Car Delivery Celebration",
    category: "Automobile",
  },
  {
    src: "/videos/wedding-cinematic-c0754.mp4",
    title: "Wedding Cinematic",
    category: "Wedding Film",
  },
];

const weddingServices = [
  "Wedding photography & films",
  "Pre-wedding stories",
  "Engagement celebrations",
  "Haldi & Mehndi",
  "Bridal portraits",
  "Post-wedding films",
];

const commercialServices = [
  {
    number: "01",
    title: "Automobile Films",
    description:
      "Vehicle launches, delivery celebrations, dealership films and promotional content.",
    visualLabel: "VEHICLE STORIES",
  },
  {
    number: "02",
    title: "Real Estate Films",
    description:
      "Property walkthroughs, architecture, interiors and premium project presentations.",
    visualLabel: "SPACES & ARCHITECTURE",
  },
  {
    number: "03",
    title: "Hospitality & Lifestyle",
    description:
      "Hotel, resort, restaurant and experience-led visual storytelling.",
    visualLabel: "HOSPITALITY",
  },
  {
    number: "04",
    title: "Corporate & Brand Films",
    description:
      "Company profiles, product stories, industrial shoots and brand campaigns.",
    visualLabel: "BRAND FILMS",
  },
];

function WhatsAppLink({
  children,
  className = "",
  message = "Hello ZMX Films, I would like to discuss a project.",
}) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className={className}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const closeMenu = () => setMenuOpen(false);

  function handleInquirySubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const enquiryType = String(formData.get("enquiryType") || "");
    const eventDate = String(formData.get("eventDate") || "Not decided");
    const location = String(formData.get("location") || "Not specified").trim();
    const budget = String(formData.get("budget") || "Not specified").trim();
    const details = String(formData.get("details") || "Not provided").trim();

    const message = [
      "Hello ZMX Films & Studio, I would like to enquire about a project.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Enquiry: ${enquiryType}`,
      `Date: ${eventDate}`,
      `Location: ${location}`,
      `Estimated budget: ${budget}`,
      `Details: ${details}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    const messageWindow = window.open(url, "_blank");

    if (messageWindow) {
      messageWindow.opener = null;

      setFormStatus(
        "Your enquiry is ready in WhatsApp. Please review and send the message to complete it."
      );

      event.currentTarget.reset();
    } else {
      setFormStatus(
        "Your browser blocked the new tab. Please use the direct WhatsApp link on this page."
      );
    }
  }

  return (
    <main>
      {/* NAVIGATION */}
      <header className="site-header">
        <nav className="nav-inner" aria-label="Main navigation">
          <a
            href="#home"
            className="brand-logo"
            onClick={closeMenu}
            aria-label="ZMX Films home"
          >
            <Image
              src="/images/zmx-logo.png"
              alt="ZMX Films logo"
              width={70}
              height={70}
            />
          </a>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
          </button>

          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#weddings" onClick={closeMenu}>Weddings</a>
            <a href="#commercial" onClick={closeMenu}>Commercial</a>
            <a href="#packages" onClick={closeMenu}>Packages</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>

          <WhatsAppLink
            className="nav-cta"
            message="Hello ZMX Films, I would like to book a shoot. Please share the next steps."
          >
            <span className="whatsapp-mark" aria-hidden="true">◉</span>
            Book a Shoot
          </WhatsAppLink>
        </nav>
      </header>

      {/* CINEMATIC HERO */}
      <section
        className="hero hero-fullbleed"
        id="home"
        aria-labelledby="hero-title"
      >
        <Image
          className="hero-bg-image"
          src={images.hero}
          alt=""
          aria-hidden="true"
          fill
          preload
          unoptimized
          sizes="100vw"
        />

        <div className="hero-bg-shade"></div>
        <div className="hero-grain"></div>

        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Films · Photography · Stories</p>

            <h1 id="hero-title">
              Every Frame.
              <br />
              <em>Feels Forever.</em>
            </h1>

            <p className="hero-description">
              We craft cinematic wedding stories and powerful brand films
              that capture emotions, people and purpose.
            </p>

            <div className="hero-actions">
              <a className="button button-gold" href="#showcase">
                Explore Our Work <span>↗</span>
              </a>

              <WhatsAppLink
                className="button button-outline"
                message="Hello ZMX Films, I would like to discuss a shoot and get a quotation."
              >
                Book a Shoot <span>↗</span>
              </WhatsAppLink>
            </div>

            <div className="hero-services" aria-label="Studio services">
              <div>
                <span className="service-index">227+</span>
                <span>Wedding Films</span>
              </div>
              <div>
                <span className="service-index">04</span>
                <span>Commercial Productions</span>
              </div>
              <div>
                <span className="service-index">200+</span>
                <span>Happy Couple</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-footerline">
          <span>Weddings · Films · Commercials</span>
          <a href="#showcase">
            Scroll to explore <span>↓</span>
          </a>
        </div>
      </section>

      {/* BRAND INTRO */}
      <section className="intro-section section-shell" id="about">
        <div className="intro-kicker">
          <span className="eyebrow">A CREATIVE HOUSE FOR STORIES</span>
          <span className="intro-rule"></span>
        </div>

        <div className="intro-grid">
          <h2>
            More than a frame.
            <br />
            <em>A feeling that stays.</em>
          </h2>

          <div className="intro-copy">
            <p>
              ZMX Films & Studio brings together photography, filmmaking and
              visual storytelling to create meaningful experiences for people and brands.
            </p>

            <p>
              From the emotion of a wedding celebration to the character of a
              business, we approach every project with care, creativity and attention to detail.
            </p>

            <a href="#contact" className="text-link">
              Tell us your story <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* OUR WORK — ORIGINAL PHOTOS AND VIDEOS */}
      <section className="our-work-section section-shell" id="our-work">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">SELECTED STORIES</p>
            <h2>
              Our <em>Work</em>
            </h2>
          </div>

          <p className="section-lead">
            Real moments, original frames and cinematic stories captured by
            ZMX Films & Studio.
          </p>
        </div>

        <div className="work-gallery">
          {portfolioPhotos.map((photo) => (
            <figure className="work-photo-card" key={photo.src}>
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                unoptimized
                sizes="(max-width: 760px) 50vw, 25vw"
              />

              <figcaption className="work-photo-caption">
                <span>{photo.category}</span>
                <strong>{photo.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="work-video-section">
          <div className="work-video-heading">
            <p className="eyebrow">MOTION & MEMORIES</p>
            <h3>
              Films in <em>Motion</em>
            </h3>
          </div>

          <div className="work-video-grid">
            {portfolioVideos.map((video) => (
              <article className="work-video-card" key={video.src}>
                <video controls preload="metadata" playsInline>
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support video playback.
                </video>

                <div className="work-video-copy">
                  <span>{video.category}</span>
                  <h4>{video.title}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="instagram-follow-strip">
          <div>
            <p className="eyebrow">MORE STORIES · MORE REELS</p>
            <strong>
              Follow ZMX on <em>Instagram</em>
            </strong>
          </div>

          <a
            className="button button-outline"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore More on Instagram ↗
          </a>
        </div>
      </section>

      {/* TWO CREATIVE DIVISIONS */}
      <section className="division-section section-shell" id="showcase">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT WE CREATE</p>
            <h2>
              Two worlds.
              <br />
              <em>One visual language.</em>
            </h2>
          </div>

          <p className="section-lead">
            Emotion-led wedding films and considered commercial productions,
            brought together by a cinematic approach.
          </p>
        </div>

        <div className="division-grid">
          <a href="#weddings" className="division-card division-weddings">
            <Image
              src={images.couple}
              alt="Wedding couple in traditional attire"
              fill
              unoptimized
              sizes="(max-width: 760px) 100vw, 50vw"
            />

            <div className="division-overlay"></div>

            <div className="division-card-content">
              <span className="card-index">01 / FOR YOUR MOST IMPORTANT DAYS</span>
              <h3>
                Wedding
                <br />
                <em>Stories</em>
              </h3>
              <p>Weddings · Pre-weddings · Engagements · Celebrations</p>
              <span className="card-link">
                Explore Weddings <b>↗</b>
              </span>
            </div>
          </a>

          <a href="#commercial" className="division-card division-commercial">
            <video
              className="division-card-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Automobile delivery film preview"
            >
              <source src="/videos/car-delivery-f1.mp4" type="video/mp4" />
            </video>

            <div className="division-overlay"></div>

            <div className="division-card-content">
              <span className="card-index">02 / FOR BRANDS WITH A STORY</span>
              <h3>
                Commercial
                <br />
                <em>Productions</em>
              </h3>
              <p>Automobile · Real Estate · Hospitality · Corporate</p>
              <span className="card-link">
                Explore Commercials <b>↗</b>
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* WEDDING PORTFOLIO */}
      <section className="wedding-section section-shell" id="weddings">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">CELEBRATE YOUR STORY</p>
            <h2>
              Wedding <em>Stories</em>
            </h2>
          </div>

          <p className="section-lead">
            Every celebration has its own rhythm. We preserve the people,
            details and moments that make it yours.
          </p>
        </div>

        <div className="wedding-grid">
          <a href="#contact" className="wedding-card wedding-card-tall">
            <Image
              src={images.bride}
              alt="Bridal portrait"
              fill
              unoptimized
              sizes="(max-width: 760px) 100vw, 33vw"
            />

            <div className="card-overlay">
              <span>01 / THE BRIDAL STORY</span>
              <h3>Bridal Portraits</h3>
              <p>Explore the experience ↗</p>
            </div>
          </a>

          <a href="#contact" className="wedding-card">
            <Image
              src={images.couple}
              alt="Wedding couple portrait"
              fill
              unoptimized
              sizes="(max-width: 760px) 100vw, 33vw"
            />

            <div className="card-overlay">
              <span>02 / TWO STORIES, ONE</span>
              <h3>Wedding Films</h3>
              <p>Explore the experience ↗</p>
            </div>
          </a>

          <a href="#contact" className="wedding-card">
            <Image
              src={images.haldi}
              alt="Wedding celebration and mehndi portrait"
              fill
              unoptimized
              sizes="(max-width: 760px) 100vw, 33vw"
            />

            <div className="card-overlay">
              <span>03 / THE CELEBRATIONS</span>
              <h3>Haldi & Mehndi</h3>
              <p>Explore the experience ↗</p>
            </div>
          </a>
        </div>

        <div className="wedding-tags">
          {weddingServices.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
      </section>

      {/* COMMERCIAL PORTFOLIO */}
      <section className="commercial-section section-shell" id="commercial">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">FOR BRANDS & BUSINESSES</p>
            <h2>
              Commercial <em>Productions</em>
            </h2>
          </div>

          <p className="section-lead">
            Visual content that gives a business, product or place a clear
            identity and a compelling way to be seen.
          </p>
        </div>

        <div className="commercial-grid">
          {commercialServices.map((service) => (
            <article className="commercial-card" key={service.number}>
              <div className="commercial-image-wrap commercial-visual">
                <span className="commercial-index">{service.number}</span>
                <span className="commercial-visual-label">
                  {service.visualLabel}
                </span>
              </div>

              <div className="commercial-card-copy">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="text-link">
                  Discuss a project <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* APPROACH / BEHIND THE SCENES */}
      <section className="approach-section section-shell">
        <div className="approach-image">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Wedding cinematic preview"
          >
            <source
              src="/videos/wedding-cinematic-c0754.mp4"
              type="video/mp4"
            />
          </video>

          <div className="approach-image-label">
            THE CRAFT BEHIND THE FRAME
          </div>
        </div>

        <div className="approach-content">
          <p className="eyebrow">OUR APPROACH</p>

          <h2>
            Thoughtful planning.
            <br />
            <em>Honest storytelling.</em>
          </h2>

          <p>
            We start by understanding what matters to you. Then we plan the
            shoot, create with intention and shape the final visuals around
            the story you want to tell.
          </p>

          <div className="process-list">
            <div>
              <span>01</span>
              <div>
                <strong>Understand</strong>
                <small>Your people, purpose and priorities.</small>
              </div>
            </div>

            <div>
              <span>02</span>
              <div>
                <strong>Create</strong>
                <small>A considered plan for the shoot and production.</small>
              </div>
            </div>

            <div>
              <span>03</span>
              <div>
                <strong>Deliver</strong>
                <small>
                  Visuals prepared for the platforms and moments that matter.
                </small>
              </div>
            </div>
          </div>

          <a href="#contact" className="text-link">
            Start a conversation <span>↗</span>
          </a>
        </div>
      </section>

      {/* PACKAGES / QUOTATION */}
      <section className="packages-section section-shell" id="packages">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">PLANNED A SHOOT?</p>
            <h2>
              Let&apos;s shape the <em>right package.</em>
            </h2>
          </div>

          <p className="section-lead">
            Each project is different. Tell us what you have in mind and
            we&apos;ll discuss a suitable scope and quotation.
          </p>
        </div>

        <div className="package-grid">
          <article className="package-card">
            <span className="package-number">01</span>
            <h3>Wedding Coverage</h3>
            <p>
              For couples and families planning one celebration or multiple
              wedding functions.
            </p>
            <a href="#inquiry" className="text-link">
              Plan wedding coverage <span>↗</span>
            </a>
          </article>

          <article className="package-card package-card-featured">
            <span className="package-number">02</span>
            <h3>Pre-Wedding & Events</h3>
            <p>
              For couple stories, engagement shoots, bridal portraits and
              special occasions.
            </p>
            <a href="#inquiry" className="text-link">
              Plan a photography shoot <span>↗</span>
            </a>
          </article>

          <article className="package-card">
            <span className="package-number">03</span>
            <h3>Commercial Projects</h3>
            <p>
              For businesses looking for promotional films, brand content or
              property visuals.
            </p>
            <a href="#inquiry" className="text-link">
              Discuss a production <span>↗</span>
            </a>
          </article>
        </div>

        <p className="pricing-note">
          No fixed rates are displayed yet. Quotations will be prepared
          according to project scope, location, crew and deliverables.
        </p>
      </section>

      {/* INQUIRY FORM */}
      <section className="inquiry-section section-shell" id="inquiry">
        <div className="inquiry-intro">
          <p className="eyebrow">LET&apos;S MAKE SOMETHING MEANINGFUL</p>

          <h2>
            Tell us about
            <br />
            <em>your plans.</em>
          </h2>

          <p>
            Share a few details. Your enquiry will open in WhatsApp so you can
            review and send it to our team.
          </p>

          <div className="contact-direct">
            <span>Prefer a direct message?</span>
            <WhatsAppLink
              className="text-link"
              message="Hello ZMX Films & Studio. I would like to discuss a shoot."
            >
              Chat with ZMX on WhatsApp ↗
            </WhatsAppLink>
          </div>
        </div>

        <form className="inquiry-form" onSubmit={handleInquirySubmit}>
          <div className="form-row">
            <label>
              YOUR NAME
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </label>

            <label>
              PHONE NUMBER
              <input
                name="phone"
                type="tel"
                placeholder="Your contact number"
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              WHAT ARE YOU PLANNING?
              <select name="enquiryType" required defaultValue="">
                <option value="" disabled>
                  Select an enquiry type
                </option>
                <option>Wedding photography & films</option>
                <option>Pre-wedding / Engagement</option>
                <option>Haldi / Mehndi / Wedding function</option>
                <option>Automobile production</option>
                <option>Real estate / Hospitality</option>
                <option>Corporate / Brand film</option>
                <option>Other project</option>
              </select>
            </label>

            <label>
              EXPECTED DATE
              <input name="eventDate" type="date" />
            </label>
          </div>

          <div className="form-row">
            <label>
              LOCATION
              <input
                name="location"
                type="text"
                placeholder="City or shoot location"
              />
            </label>

            <label>
              ESTIMATED BUDGET (OPTIONAL)
              <input
                name="budget"
                type="text"
                placeholder="Your approximate budget in ₹"
              />
            </label>
          </div>

          <label>
            PROJECT DETAILS
            <textarea
              name="details"
              rows="4"
              placeholder="Tell us about the event, shoot, functions or deliverables you have in mind."
            />
          </label>

          <button type="submit" className="button button-gold form-submit">
            Prepare WhatsApp Enquiry <span>↗</span>
          </button>

          {formStatus ? (
            <p className="form-status" role="status">
              {formStatus}
            </p>
          ) : null}

          <p className="form-privacy">
            Your details are used to prepare this enquiry message. Nothing is
            submitted to a website database.
          </p>
        </form>
      </section>

      {/* CONTACT STRIP */}
      <section className="contact-strip" id="contact">
        <div>
          <p className="eyebrow">ZMX FILMS & STUDIO</p>
          <h2>
            Your story starts <em>with a conversation.</em>
          </h2>
        </div>

        <div className="contact-strip-actions">
          <WhatsAppLink
            className="button button-gold"
            message="Hello ZMX Films & Studio, I would like to discuss a project."
          >
            Let&apos;s Talk on WhatsApp ↗
          </WhatsAppLink>

          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="button button-outline"
          >
            Email Us ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <Image
                src="/images/zmx-logo.png"
                alt="ZMX Films logo"
                width={82}
                height={82}
              />
            </a>

            <p>Every Frame. Feels Forever.</p>
            <span>
              Wedding films · Photography · Commercial productions
            </span>
          </div>

          <div className="footer-column">
            <strong>Explore</strong>
            <a href="#weddings">Wedding stories</a>
            <a href="#commercial">Commercial films</a>
            <a href="#packages">Packages</a>
            <a href="#about">About ZMX</a>
          </div>

          <div className="footer-column">
            <strong>Connect</strong>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>

            <WhatsAppLink message="Hello ZMX Films, I found your website and would like to enquire.">
              WhatsApp ↗
            </WhatsAppLink>

            <a href={`mailto:${EMAIL_ADDRESS}`}>
              {EMAIL_ADDRESS}
            </a>

            <a href="#inquiry">Send an enquiry</a>
          </div>

          <div className="footer-column footer-location">
            <strong>Location</strong>
            <span>Bhubaneswar</span>
            <span>Odisha, India</span>
            <span>Available for projects beyond Odisha.</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} ZMX Films & Studio. All rights reserved.
          </span>

          <span>
            Wedding films · Photography · Commercial productions
          </span>

          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
