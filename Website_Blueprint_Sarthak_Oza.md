# WEBSITE BLUEPRINT — sarthak oza (sarthak-oza.vercel.app)

A single-page, scroll-driven site with a sticky top bar (logo + nav + **Download Brochure** button always visible). Dark, cinematic, gold-accented — same visual language as the brochure and logo. Built for interactivity: motion on scroll, hover states, a real reel/video showcase, and every detail a business owner needs before they message you.

---

## Sticky Top Bar (visible on every scroll position)
- Left: logo (small, from your uploaded asset)
- Center/Right: nav links → Services · Work · Packages · Pricing · Contact
- Far right: **[ Download Brochure ]** button, gold-filled, always visible — links directly to the PDF/PPTX of the brochure we built
- Bar turns from transparent (on hero) to solid black with a subtle bottom shadow once the user scrolls past the hero — gives it depth without using a banned accent stripe

---

## SECTION 1 — Hero
- Full-bleed dark background, subtle animated film-grain or slow-drifting particle/light texture (very subtle, premium — not distracting)
- Logo centered or left-aligned large
- Headline: **"Let's Grow Your Business Together"**
- Sub-line: "We Shoot Brands. We Build Impact." *(pulled from your logo tagline)*
- Two CTA buttons: **[ See Our Work ]** (scrolls to portfolio) and **[ Book a Free Consultation ]** (scrolls to contact/form)
- Small scroll-down indicator (animated arrow or mouse icon) at the bottom

---

## SECTION 2 — About
- Short firm intro (same copy as brochure About page)
- Founder line: Sarthak Ozha
- The "Shoot · Strategize · Grow" three-step motif, animated so each circle/number fades or draws in as the user scrolls to it (scroll-triggered reveal — this is the interactive touch)

---

## SECTION 3 — Services Overview
- Grid of the 7 service categories as interactive cards (Social Media, Video & Creative Production ⭐, Influencer Marketing, Paid Advertising, SEO & Local Marketing, Branding & Design, Website & Landing Pages)
- Each card: icon, title, one-line description, starting price
- On hover: card lifts slightly, gold border glows — no page reload, pure CSS/JS interaction
- Clicking a card expands it inline (accordion) to show the full bullet list from your services page, instead of navigating away — keeps the experience on one page

---

## SECTION 4 — Portfolio / Reel & Video Showcase ⭐ (core interactive section)
This is your proof-of-work section — the most important part of the site since it's your flagship service.
- **Video grid/carousel** — embedded reels (vertical 9:16 format, autoplay muted on hover or on scroll into view, click to unmute/expand into a lightbox player)
- Filter tabs above the grid: All / Food & Product / Behind-the-Scenes / Promotional / Client Work — lets visitors filter by the type of reel they want to see
- Each video tile has a small caption (client/category + what it showcases)
- Below the grid: a horizontal scrolling strip of before/after or campaign result stat cards (e.g. "+40% engagement," "12 reels/month," "20+ campaigns delivered") — numbers can be swapped for real ones once you have them
- Direct links out to the Instagram profile (@sarthak.ozha) for the full library

*Note: actual videos need to be hosted somewhere (YouTube unlisted, Instagram embed, or direct file) — once you send the reel files or links, I'll wire them in.*

---

## SECTION 5 — Packages (Starter / Growth / Premium)
- Three interactive pricing cards side by side
- Growth card visually emphasized (⭐ badge, slightly raised/larger, gold border) — matches brochure's "most popular" treatment
- Each card: price, "best for" line, included features list, reel-mix count
- Toggle at the top: **Monthly / See Full Comparison** — toggling reveals a full feature-comparison table (the one from the brochure) in place, without leaving the section
- **[ Choose This Plan ]** button on each card scrolls to the contact form with the plan pre-selected (so the enquiry form auto-fills "Interested in: Growth Package")

---

## SECTION 6 — Add-On Services
- Simple, clean pricing table/list (Sample Reel, Extra Reels, Additional Platform, Photography Session, Website — marked "free with Premium")

---

## SECTION 7 — Why Choose Us
- Reuse your brochure's "Why Choose Us" points as a horizontal icon-row or a subtle auto-scrolling marquee strip (specialized team, fast turnaround, one firm for every sector, dedicated reporting, etc.)

---

## SECTION 8 — Contact / Enquiry Form (interactive)
- Left: contact details — phone (both numbers), email, Instagram, website
- Right: a real working enquiry form — Name, Business Name, Phone, Email, Interested Package (dropdown, pre-fills if they clicked a package button), Message
- Form submits to your email (sarthak.ozha@gmail.com) or a WhatsApp click-to-chat link as a faster alternative
- **[ Download Brochure ]** button repeated here too, as a secondary CTA for people not ready to fill the form yet

---

## Footer
- Logo (small)
- Quick nav links repeated
- Phone / Email / Instagram / Website
- Copyright line

---

## Interactivity & Motion Summary
- Sticky nav bar with scroll-based background transition
- Scroll-triggered fade/slide-in animations per section (About motif, service cards, portfolio grid)
- Hover states on all cards (lift + gold glow border)
- Filterable video/reel gallery with lightbox playback
- Expandable/accordion service cards (no page reloads)
- Toggle-based package comparison table
- Auto-filled contact form based on which package button was clicked
- Brochure download button fixed in the top bar at all times, plus a repeat button near contact

---

## What I still need from you
1. **Reel/video files or links** to embed in the Portfolio section (Instagram post links, YouTube links, or raw video files)
2. **Real stats/numbers** for the result callouts (engagement %, reels delivered, clients served) — or confirm you want to leave placeholders for now
3. **Brochure file format for the download button** — I'll use the .pptx we built, or I can convert it to PDF for a cleaner one-click download experience (recommended)
4. Confirmation this single-page scroll structure works for you, or if you'd rather split some sections (like Portfolio) into their own separate page

Once confirmed, I'll build this out as the actual live website.
