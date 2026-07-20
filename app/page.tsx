"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const services = [
  {
    id: "social-media",
    title: "Social Media Marketing",
    short: "Complete Instagram and Facebook management with planning, posting, captions, hashtags, engagement, and reporting.",
    details: [
      "Content planning and calendar management",
      "Captions, hashtag strategy, and community engagement",
      "Trend research and monthly performance reporting",
    ],
    category: "Growth",
  },
  {
    id: "video-production",
    title: "Video & Creative Production",
    short: "Cinematic food, product, ambience, and brand reels optimized for social media.",
    details: [
      "Professional shooting and editing",
      "Motion graphics and color grading",
      "Trending audio and content built for reach",
    ],
    category: "Flagship",
  },
  {
    id: "influencer",
    title: "Influencer Marketing",
    short: "Trusted local creator discovery, coordination, and campaign tracking.",
    details: [
      "Influencer shortlisting and planning",
      "Collaboration coordination",
      "Performance tracking and reporting",
    ],
    category: "Reach",
  },
  {
    id: "paid-ads",
    title: "Paid Advertising",
    short: "Meta and Google campaigns designed to reach the right audience and generate leads.",
    details: [
      "Campaign creation and optimization",
      "Audience targeting and scaling",
      "Ongoing monitoring and reporting",
    ],
    category: "Performance",
  },
  {
    id: "seo-local",
    title: "SEO & Local Marketing",
    short: "Google Search and Maps visibility, local SEO, keyword research, and profile optimization.",
    details: [
      "Google Business Profile optimization",
      "Local SEO and keyword research",
      "Review management and website optimization",
    ],
    category: "Discovery",
  },
  {
    id: "branding",
    title: "Branding & Graphic Design",
    short: "Social posts, stories, menus, posters, banners, and campaign creatives that strengthen your identity.",
    details: [
      "Promo creatives and festival campaigns",
      "Packaging and visual assets",
      "Consistent branding across channels",
    ],
    category: "Identity",
  },
  {
    id: "websites",
    title: "Website & Landing Pages",
    short: "Modern responsive websites with WhatsApp integration and contact forms.",
    details: [
      "Landing pages for offers and services",
      "Contact forms and WhatsApp integration",
      "Clear conversion flow and mobile-first design",
    ],
    category: "Conversion",
  },
];

const proofItems = [
  {
    category: "Reels",
    title: "Reserved for your real work",
    tag: "Reel slot",
    description: "Drop in a featured reel, campaign clip, or client edit here. The card is set up for proof-of-work assets from Instagram, YouTube, or direct video files.",
  },
  {
    category: "Before / After",
    title: "Reserved for your real work",
    tag: "Before / after",
    description: "Use this tile for a transformation story, campaign before-and-after, or a social media growth screenshot.",
  },
  {
    category: "Case Study",
    title: "Reserved for your real work",
    tag: "Case study",
    description: "Swap in a client result, testimonial, or campaign breakdown once you share the source files.",
  },
];

const packages = [
  {
    name: "Starter",
    price: " 20,000 / month",
    bestFor: "Businesses building their initial presence",
    reels: "7 reels / month",
    summary: ["Social media management", "Paid ads", "Entry-level growth support"],
    excluded: ["SEO & local marketing", "Dedicated account manager", "Priority support"],
  },
  {
    name: "Growth",
    price: " 30,000 / month",
    bestFor: "Businesses ready to scale visibility locally",
    reels: "12 reels / month",
    summary: ["Social media management", "Paid ads", "SEO & local marketing", "Priority support"],
    excluded: ["Dedicated account manager", "Marketing roadmap"],
  },
  {
    name: "Premium",
    price: " 40,000 / month",
    bestFor: "Hands-off growth with a free website included",
    reels: "20 reels / month",
    summary: ["Everything in Growth", "Dedicated account manager", "Competitor analysis", "Free website / landing page"],
    excluded: [],
  },
];

const addOns = [
  ["Custom Addons", " 4,000"],
  ["Sample Reel", " 4,000"],
  ["1 Extra Reel", " 2,000"],
  ["10 Extra Reels", " 18,000"],
  ["Additional Social Media Platform", " 5,000 / month"],
  ["Professional Photography Session", " 10,000"],
  ["Website / Landing Page", " 15,000"],
];

const keywords = [
  "digital marketing",
  "creative production",
  "food reels",
  "influencer marketing",
  "paid ads",
  "SEO",
  "local marketing",
  "branding",
  "website design",
  "lead generation",
];

const heroSignals = [
  { value: "7", label: "service pillars" },
  { value: "3", label: "growth packages" },
  { value: "1", label: "clear growth system" },
];

const heroHighlights = ["Social media", "Creative production", "Paid ads", "SEO"];

export default function Home() {
  const [openServices, setOpenServices] = useState<string[]>(() => services.map((service) => service.id));
  const [selectedPackage, setSelectedPackage] = useState("Growth");
  const [proofFilter, setProofFilter] = useState("All");

  const toggleService = (serviceId: string) => {
    setOpenServices((previous) =>
      previous.includes(serviceId) ? previous.filter((id) => id !== serviceId) : [...previous, serviceId]
    );
  };

  const filteredProof = useMemo(() => {
    if (proofFilter === "All") return proofItems;
    return proofItems.filter((item) => item.category === proofFilter);
  }, [proofFilter]);

  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Sarthak Ozha home">
          <span className="brand-mark">
            <Image src="/sarthakoza.png" alt="Sarthak Ozha logo" fill sizes="44px" priority />
          </span>
          <span>
            <strong>Sarthak Ozha</strong>
            <small>Digital Marketing • Creative Production • Growth</small>
          </span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#proof">Work</a>
          <a href="#packages">Packages</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-solid" href="/Sarthak_Ozha_Brochure.pdf" target="_blank" rel="noreferrer">
          Download Brochure
        </a>
      </header>

      <section className="hero section" id="home">
        <div className="hero-layout">
          <div className="hero-copy">
            {/* <p className="eyebrow">Brochure-inspired digital marketing website</p> */}
            <h1>Let&apos;s Grow Your Business Together</h1>
            <p className="lede">
              We shoot brands. We build impact. Sarthak Ozha helps businesses grow through cinematic creative
              production, social media marketing, influencer campaigns, paid ads, SEO, branding, and conversion-ready
              websites.
            </p>
            <div className="keywords" aria-label="SEO keywords">
              {keywords.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
            <div className="actions">
              <a className="button button-solid" href="#proof">
                See Our Work
              </a>
              <a className="button button-ghost" href="#contact">
                Book a Free Consultation
              </a>
            </div>
            <div className="hero-stats" aria-label="Service highlights">
              {heroSignals.map((signal) => (
                <div key={signal.label}>
                  <strong>{signal.value}</strong>
                  <span>{signal.label}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="hero-visual" aria-label="Growth snapshot">
            <div className="hero-panel">
              {/* <div className="hero-panel-top">
                <span className="hero-panel-eyebrow">Sarthak Ozha</span>
                <span className="hero-panel-badge">Open for projects</span>
              </div> */}

              <div className="hero-profile">
                <span className="hero-avatar">
                  <Image src="/favicon.png" alt="Sarthak Ozha logo" fill sizes="56px" />
                </span>
                <div>
                  <strong>Growth systems that look premium</strong>
                  <p>
                    Strategy, content, and conversion design presented like a polished campaign board instead of an
                    empty gap.
                  </p>
                </div>
              </div>

              <div className="hero-panel-grid" aria-label="Hero highlights">
                {heroHighlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="hero-panel-stats">
                <div>
                  <strong>10+</strong>
                  <span>deliverables shaped for growth</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>campaign-ready presentation</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" id="proof">
        <div className="section-heading">
          <p className="section-label">Proof of Work</p>
          <h2>Your proof-of-work area is ready for reels, campaigns, and case studies.</h2>
          <div className="filter-row" role="tablist" aria-label="Proof filters">
            {['All', 'Reels', 'Before / After', 'Case Study'].map((item) => (
              <button
                key={item}
                type="button"
                className={proofFilter === item ? 'filter active' : 'filter'}
                onClick={() => setProofFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="proof-grid">
          {filteredProof.map((item) => (
            <article key={item.title + item.tag} className="proof-card">
              <span className="proof-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="https://instagram.com/sarthak.ozha" target="_blank" rel="noreferrer">
                View Instagram Library
              </a>
            </article>
          ))}
        </div>
        <div className="results-strip" aria-label="Brochure facts">
          <span><a href="https://sarthak-oza.vercel.app" target="_blank" rel="noreferrer">
            Website: sarthak-oza.vercel.app
          </a></span>
          <span><a href="https://instagram.com/sarthak.ozha" target="_blank" rel="noreferrer">
            Instagram: @sarthak.ozha
          </a></span>
          <span><a href="tel:8780080875">Phone: 8780080875 / 8780486871</a></span>
          <span><a href="mailto:sarthak.ozha@gmail.com">Mail: sarthak.ozha@gmail.com</a></span>
        </div>
      </section>

      <section className="section section-split" id="about">
        <div>
          <p className="section-label">About</p>
          <h2>Built on story, strategy, and growth.</h2>
        </div>
        <div className="glass-card">
          <p>
            Sarthak Ozha is a digital marketing firm founded by Sarthak Ozha, built to help businesses across every
            sector attract more customers, build a stronger online presence, and grow with purpose.
          </p>
          <p>
            We combine cinematic storytelling with data-driven strategy, shooting content that stops the scroll and
            backing it with the marketing systems that turn attention into revenue.
          </p>
          <div className="process">
            <span>1. Shoot</span>
            <span>2. Strategize</span>
            <span>3. Grow</span>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="section-label">Services</p>
          <h2>Seven brochure services, presented as expandable cards.</h2>
        </div>
        <div className="services-grid">
          {services.map((service) => {
            const isOpen = openServices.includes(service.id);
            return (
              <article key={service.id} className={`service-card ${isOpen ? 'open' : ''}`}>
                <button className="service-trigger" type="button" onClick={() => toggleService(service.id)}>
                  <span className="service-tag">{service.category}</span>
                  <strong>{service.title}</strong>
                  <p>{service.short}</p>
                </button>
                {isOpen && (
                  <ul>
                    {service.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="section" id="packages">
        <div className="section-heading">
          <p className="section-label">Packages</p>
          <h2>Starter, Growth, and Premium plans aligned with the brochure.</h2>
        </div>
        <div className="package-grid">
          {packages.map((pack) => {
            const isSelected = selectedPackage === pack.name;
            return (
              <article key={pack.name} className={`package-card ${isSelected ? 'featured' : ''}`}>
                <div className="package-head">
                  <p>{pack.name}</p>
                  {pack.name === 'Growth' && <span>Most popular</span>}
                </div>
                <h3>{pack.price}</h3>
                <p className="muted">{pack.bestFor}</p>
                <ul>
                  {pack.summary.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {pack.excluded.length > 0 && (
                  <p className="muted small">Not included: {pack.excluded.join(', ')}.</p>
                )}
                <p className="muted small">{pack.reels}</p>
                <a
                  className="button button-ghost full"
                  href={`https://wa.me/918780080875?text=${encodeURIComponent(`Hi, I am interested in the ${pack.name} package.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setSelectedPackage(pack.name)}
                >
                  Choose {pack.name}
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section section-split" id="addons">
        <div>
          <p className="section-label">Add-ons</p>
          <h2>Flexible extras you can add to any package.</h2>
        </div>
        <div className="glass-card add-on-list">
          {addOns.map(([label]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>Available</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-split" id="why">
        <div>
          <p className="section-label">Why Choose Us</p>
          <h2>One firm for every sector, backed by fast turnaround and clear reporting.</h2>
        </div>
        <div className="glass-card reasons">
          <span>Specialized team</span>
          <span>Fast turnaround</span>
          <span>One firm for every sector</span>
          <span>Dedicated reporting</span>
          <span>Growth-focused execution</span>
          <span>Website + marketing under one roof</span>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="section-heading">
          <p className="section-label">Contact</p>
          <h2>Send an enquiry or download the brochure again.</h2>
        </div>
        <div className="contact-grid">
          <div className="glass-card contact-details">
            <h3>Direct contact</h3>
            <a href="tel:+918780080875">8780080875</a>
            <a href="tel:+918780486871">8780486871</a>
            <a href="mailto:sarthak.ozha@gmail.com">sarthak.ozha@gmail.com</a>
            <a href="https://instagram.com/sarthak.ozha" target="_blank" rel="noreferrer">
              @sarthak.ozha
            </a>
            <a href="/Sarthak_Ozha_Brochure.pdf" target="_blank" rel="noreferrer" download="Sarthak_Ozha_Brochure.pdf" className="button button-solid full" style={{ marginTop: "1rem" }}>
              Download Brochure
            </a>
          </div>
          <form
            className="glass-card enquiry-form"
            onSubmit={(event) => {
              event.preventDefault();
              const form = event.currentTarget as HTMLFormElement;
              const data = new FormData(form);
              const name = String(data.get('name') || '');
              const business = String(data.get('business') || '');
              const phone = String(data.get('phone') || '');
              const email = String(data.get('email') || '');
              const packageName = String(data.get('package') || '');
              const message = String(data.get('message') || '');
              const subject = encodeURIComponent(`Website enquiry: ${business || name}`);
              const body = encodeURIComponent(
                [`Name: ${name}`, `Business: ${business}`, `Phone: ${phone}`, `Email: ${email}`, `Interested in: ${packageName}`, '', message].join('\n')
              );
              window.location.href = `mailto:sarthak.ozha@gmail.com?subject=${subject}&body=${body}`;
            }}
          >
            <div className="field-row">
              <label>
                Name
                <input name="name" type="text" placeholder="Your name" required />
              </label>
              <label>
                Business Name
                <input name="business" type="text" placeholder="Business name" />
              </label>
            </div>
            <div className="field-row">
              <label>
                Phone
                <input name="phone" type="tel" placeholder="Phone number" required />
              </label>
              <label>
                Email
                <input name="email" type="email" placeholder="Email address" required />
              </label>
            </div>
            <label>
              Interested Package
              <select name="package" value={selectedPackage} onChange={(event) => setSelectedPackage(event.target.value)}>
                {packages.map((pack) => (
                  <option key={pack.name} value={pack.name}>
                    {pack.name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Message
              <textarea name="message" rows={5} placeholder="Tell us about your goals, timelines, and what you need help with." />
            </label>
            <button type="submit" className="button button-solid full">
              Send Enquiry via Email
            </button>
            <a
              className="button button-ghost full"
              href={`https://wa.me/918780080875?text=${encodeURIComponent(`Hi, I am interested in the ${selectedPackage} package.`)}`}
              target="_blank"
              rel="noreferrer"
            >
              Open WhatsApp Chat
            </a>
          </form>
        </div>
      </section>

      <footer className="footer">
        <span className="footer-brand">
          <Image src="/sarthakoza.png" alt="Sarthak Ozha logo" width={24} height={24} />
          Sarthak Ozha
        </span>
        <span>Digital marketing • Creative production • Growth</span>
        <span>Copyright 2026</span>
      </footer>
    </main>
  );
}