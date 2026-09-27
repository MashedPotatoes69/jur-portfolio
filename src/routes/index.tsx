import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Maximize2,
  Phone,
  Sparkles,
  Star,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import itgwo2025 from "@/assets/itgwo-2025.jpg";
import dijkpopOne from "@/assets/dijkpop-2025-1.jpg";
import dijkpopTwo from "@/assets/dijkpop-2025-2.jpg";
import dijkpopThree from "@/assets/dijkpop-2025-3.jpg";
import drumEmbraceOne from "@/assets/drum-embrace-2026-1.jpg";
import drumEmbraceTwo from "@/assets/drum-embrace-2026-2.jpg";
import drumEmbraceThree from "@/assets/drum-embrace-2026-3.jpg";
import drumEmbraceVideoOne from "@/assets/drum-embrace-preview-1.webm";
import drumEmbraceVideoTwo from "@/assets/drum-embrace-preview-2.webm";
import drumEmbraceVideoThree from "@/assets/drum-embrace-preview-3.webm";
import jazzFestival from "@/assets/jazz-festival.jpg";
import kermisAndijk from "@/assets/kermis-andijk.jpg";
import meganExperience from "@/assets/megan-experience.jpg";
import profilePhoto from "@/assets/profile.png";
import upperClub from "@/assets/upper-club.jpg";
import wijdewormerCover from "@/assets/wijdewormer-cover.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jur Ruiter | Lighting Designer & Operator" },
      {
        name: "description",
        content:
          "Portfolio of Jur Ruiter, a Dutch lighting designer and operator working across venues, festivals and live productions.",
      },
      { property: "og:title", content: "Jur Ruiter | Lighting Designer & Operator" },
      {
        property: "og:description",
        content:
          "Selected live productions, lighting skills and contact details for Jur Ruiter.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const shows = [
  {
    title: "Jazz Festival Enkhuizen",
    year: "2026",
    category: "Festival",
    image: jazzFestival,
    position: "center",
  },
  {
    title: "Kermis Andijk",
    year: "2026",
    category: "Live production",
    image: kermisAndijk,
    position: "center",
  },
  {
    title: "Megan Experience",
    year: "2026",
    category: "Live show",
    image: meganExperience,
    position: "center 35%",
  },
  {
    title: "The Upper Club Jazz Night",
    year: "2026",
    category: "De Drommedaris",
    image: upperClub,
    position: "center",
  },
];

const highlights = [
  {
    title: "Dijkpop",
    year: "2025",
    category: "Festival",
    images: [dijkpopTwo, dijkpopOne, dijkpopThree],
    featured: true,
  },
  {
    title: "Drum Embrace",
    year: "2026",
    category: "De Drommedaris",
    images: [drumEmbraceThree, drumEmbraceTwo, drumEmbraceOne],
    videos: [drumEmbraceVideoThree, drumEmbraceVideoTwo, drumEmbraceVideoOne],
  },
  {
    title: "Wijdewormer Feestweek",
    year: "2026",
    category: "Festival",
    images: [wijdewormerCover],
  },
  { title: "The Upper Club Jazz Night", year: "2026", category: "De Drommedaris", images: [upperClub] },
  { title: "ITGWO", year: "2025", category: "Festival", images: [itgwo2025], position: "center bottom" },
];

type ViewerMedia = {
  src: string;
  alt: string;
  type: "image" | "video";
};

const archive = [
  {
    year: "2026",
    names: [
      "Depeche Mood Coverband",
      "Drum Embrace",
      "DJ Sweve",
      "Wijdewormer Feestweek",
      "Bob and the Blueband",
      "Kinderkoor Landje van Top",
    ],
  },
  {
    year: "2025",
    names: ["Dijkpop", "ITGWO", "Gallowfield", "Cayen", "De Drommedaris"],
  },
  {
    year: "2024",
    names: ["Cayen", "De Drommedaris", "RSG"],
  },
];

const skills = [
  { name: "ChamSys", level: "Professional", amount: "92%" },
  { name: "Avolites", level: "Intermediate", amount: "66%" },
  { name: "Resolume", level: "Intermediate", amount: "64%" },
  { name: "grandMA3", level: "Beginner / Intermediate", amount: "48%" },
  { name: "Rigging", level: "Practical experience", amount: "76%" },
  { name: "VJ'ing", level: "Beginner", amount: "34%" },
];

function BrandMark() {
  return (
    <a href="#top" className="flex items-center gap-2" aria-label="Jur Ruiter, home">
      <span className="size-9 overflow-hidden rounded-full border border-header-border bg-profile">
        <img src={profilePhoto} alt="" className="h-full w-full object-cover" />
      </span>
      <span className="hidden font-display text-sm font-bold text-header-foreground sm:block">
        JUR RUITER
      </span>
    </a>
  );
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewerMedia, setViewerMedia] = useState<ViewerMedia | null>(null);

  useEffect(() => {
    if (!viewerMedia) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setViewerMedia(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [viewerMedia]);

  const openImage = (src: string, alt: string) => setViewerMedia({ src, alt, type: "image" });
  const openVideo = (src: string, alt: string) => setViewerMedia({ src, alt, type: "video" });

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-header-border bg-header text-header-foreground">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <BrandMark />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#highlights">Highlights</a>
            <a className="nav-link" href="#experience">Experience</a>
            <a className="nav-link" href="#work">Work</a>
            <a className="nav-link" href="#skills">Skills</a>
          </nav>
          <div className="hidden items-center gap-4 md:flex">
            <a
              className="icon-link"
              href="mailto:jurruiter123@gmail.com"
              aria-label="Email Jur"
              title="Email Jur"
            >
              <Mail size={18} />
            </a>
            <a className="contact-button" href="#contact">
              Contact
            </a>
          </div>
          <button
            type="button"
            className="icon-link md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-header-border bg-header px-4 py-4 md:hidden" aria-label="Mobile navigation">
            <div className="mx-auto grid max-w-6xl gap-1">
              {[
                ["About", "#about"],
                ["Highlights", "#highlights"],
                ["Experience", "#experience"],
                ["Work", "#work"],
                ["Skills", "#skills"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={href} className="mobile-nav-link" href={href} onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="profile-shell" aria-labelledby="profile-heading">
          <div className="relative h-56 overflow-hidden bg-stage sm:h-72 lg:h-80">
            <img
              src={wijdewormerCover}
              alt="Feestweek Wijdewormer main stage lit in red and white beams"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-stage-overlay" />
            <p className="absolute right-5 top-5 font-mono text-[10px] uppercase text-stage-foreground sm:right-7 sm:top-7">
              Lighting the moment
            </p>
          </div>

          <div className="relative px-5 pb-6 sm:px-8 sm:pb-8">
            <div className="absolute -top-14 left-5 size-28 overflow-hidden rounded-full border-4 border-surface bg-profile shadow-profile sm:-top-16 sm:left-8 sm:size-32">
              <img
                src={profilePhoto}
                alt="Jur Ruiter behind a lighting console"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex min-h-20 items-start justify-end pt-5 sm:min-h-24">
              <a
                className="primary-action"
                href="https://linkedin.com/in/jur-ruiter-9525a3281/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <h1 id="profile-heading" className="font-display text-4xl font-black sm:text-5xl">
                  Jur Ruiter
                </h1>
                <span className="status-pill"><span className="size-1.5 rounded-full bg-status" />Available</span>
              </div>
              <p className="mt-2 text-xl font-semibold text-foreground">Lighting Designer &amp; Operator</p>
              <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
                17-year-old lighting professional working across venues, rentals and live productions.
                Building experience behind the desk and in the rig since 2023.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2"><MapPin size={15} /> Netherlands</span>
                <span className="inline-flex items-center gap-2"><CalendarDays size={15} /> In the industry since 2023</span>
                <a className="inline-flex items-center gap-2 font-semibold text-primary hover:underline" href="#contact">
                  Contact info
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="highlights" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-6 sm:px-6" aria-labelledby="highlights-heading">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="section-heading">
              <span className="section-icon"><Star size={18} /></span>
              <div>
                <p className="eyebrow">Standout shows</p>
                <h2 id="highlights-heading">Highlights</h2>
              </div>
            </div>
            <span className="text-sm text-muted-foreground">Five shows that say it best</span>
          </div>
          <div className="mt-5 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
                <article key={item.title} className={`project-card group ${item.featured ? "sm:col-span-2" : ""}`}>
                  <div className={`highlight-gallery ${item.images.length > 1 ? "highlight-gallery-multi" : "highlight-gallery-single"}`}>
                    {item.images.map((image, index) => (
                      <Button
                        key={image}
                        type="button"
                        variant="ghost"
                        className="gallery-trigger group/media !block !h-full !min-h-0 !w-full !min-w-0 !p-0"
                        onClick={() => item.videos?.[index]
                          ? openVideo(item.videos[index], `${item.title} video ${index + 1}`)
                          : openImage(image, index === 0 ? `${item.title} production lighting` : `${item.title} production detail ${index + 1}`)}
                        aria-label={`Open ${item.title} ${item.videos?.[index] ? "video" : "photo"} ${index + 1}`}
                        onMouseEnter={(event) => {
                          const video = event.currentTarget.querySelector("video");
                          if (video) void video.play();
                        }}
                        onMouseLeave={(event) => {
                          const video = event.currentTarget.querySelector("video");
                          if (video) {
                            video.pause();
                            video.currentTime = 0;
                          }
                        }}
                      >
                        {item.videos?.[index] ? (
                          <>
                            <video
                              src={item.videos[index]}
                              poster={image}
                              muted
                              loop
                              playsInline
                              preload="metadata"
                              className="gallery-media"
                              style={{ objectPosition: item.position }}
                            />
                          </>
                        ) : (
                          <img
                            src={image}
                            alt=""
                            className="gallery-media"
                            style={{ objectPosition: item.position }}
                          />
                        )}
                        <span className="gallery-expand" aria-hidden="true"><Maximize2 size={15} /></span>
                      </Button>
                    ))}
                  </div>
                  <div className={`flex items-end justify-between gap-3 ${item.videos ? "px-3 py-2" : "p-4"}`}>
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase text-muted-foreground">{item.category}</p>
                      <h3 className="mt-1 text-base font-bold">{item.title}</h3>
                    </div>
                    <span className="font-mono text-xs font-bold text-primary">{item.year}</span>
                  </div>
                </article>
              ))}
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-5 px-4 py-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">
          <div className="space-y-5">
            <section id="about" className="content-section scroll-mt-24">
              <div className="section-heading">
                <span className="section-icon"><Sparkles size={18} /></span>
                <div>
                  <p className="eyebrow">Profile</p>
                  <h2>About</h2>
                </div>
              </div>
              <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
                I design and operate lighting for live shows. I currently work at a venue, where I have
                been active for a year, and at a rental company, where I started six months ago. Alongside
                practical work, I am following a study focused on the live production industry and starting
                to develop my VJ skills.
              </p>
            </section>

            <section id="experience" className="content-section scroll-mt-24">
              <div className="section-heading">
                <span className="section-icon"><BriefcaseBusiness size={18} /></span>
                <div>
                  <p className="eyebrow">Career</p>
                  <h2>Experience &amp; education</h2>
                </div>
              </div>
              <div className="mt-6 divide-y divide-border">
                <article className="experience-row">
                  <div className="experience-mark">V</div>
                  <div>
                    <h3>Lighting operator · Venue</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Live venue · 1 year</p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      Operating and preparing lighting for a varied programme of concerts and events.
                    </p>
                  </div>
                </article>
                <article className="experience-row">
                  <div className="experience-mark">R</div>
                  <div>
                    <h3>Lighting technician · Rental company</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Event rental · 6 months</p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      Supporting event builds, rigging and technical production on location.
                    </p>
                  </div>
                </article>
                <article className="experience-row">
                  <div className="experience-mark"><GraduationCap size={23} /></div>
                  <div>
                    <h3>Live production study</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Currently studying</p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      Combining formal learning with hands-on experience in lighting and event production.
                    </p>
                  </div>
                </article>
              </div>
            </section>

            <section id="work" className="content-section scroll-mt-24">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="section-heading">
                  <span className="section-icon"><Wrench size={18} /></span>
                  <div>
                    <p className="eyebrow">Selected work</p>
                    <h2>Shows &amp; productions</h2>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">2024 — 2026</span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {shows.map((show) => (
                  <article key={show.title} className="project-card group">
                    <div className="aspect-[16/10] overflow-hidden bg-muted">
                      <Button
                        type="button"
                        variant="ghost"
                        className="gallery-trigger group/media !block !h-full !min-h-0 !w-full !min-w-0 !p-0"
                        onClick={() => openImage(show.image, `${show.title} production lighting`)}
                        aria-label={`Open ${show.title} photo`}
                      >
                        <img
                          src={show.image}
                          alt=""
                          className="gallery-media"
                          style={{ objectPosition: show.position }}
                        />
                        <span className="gallery-expand" aria-hidden="true"><Maximize2 size={15} /></span>
                      </Button>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
                        <span>{show.category}</span><span>{show.year}</span>
                      </div>
                      <h3 className="mt-2 text-base font-bold">{show.title}</h3>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <h3 className="font-display text-xl font-bold">Production archive</h3>
                <div className="mt-4 space-y-4">
                  {archive.map((group) => (
                    <div key={group.year} className="archive-row">
                      <span className="font-mono text-xs font-bold text-primary">{group.year}</span>
                      <div className="flex flex-wrap gap-2">
                        {group.names.map((name) => <span key={name} className="archive-tag">{name}</span>)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <aside id="skills" className="space-y-5 scroll-mt-24 lg:sticky lg:top-21">
            <section className="content-section">
              <p className="eyebrow">Technical profile</p>
              <h2 className="mt-1">Skills</h2>
              <div className="mt-6 space-y-5">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-sm font-bold">{skill.name}</span>
                      <span className="text-right text-xs text-muted-foreground">{skill.level}</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted" aria-hidden="true">
                      <div className="h-full rounded-full bg-primary" style={{ width: skill.amount }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="contact" className="contact-panel scroll-mt-24">
              <p className="eyebrow text-contact-muted">Let&apos;s work together</p>
              <h2 className="mt-1 text-2xl font-bold text-contact-foreground">Contact</h2>
              <p className="mt-3 text-sm leading-6 text-contact-muted">
                Available to talk about lighting, operating and production work.
              </p>
              <div className="mt-5 space-y-2">
                <a className="contact-link" href="tel:+31613952131">
                  <Phone size={17} /><span>+31 06 1395 2131</span>
                </a>
                <a className="contact-link" href="mailto:jurruiter123@gmail.com">
                  <Mail size={17} /><span className="break-all">jurruiter123@gmail.com</span>
                </a>
                <a className="contact-link" href="https://linkedin.com/in/jur-ruiter-9525a3281/" target="_blank" rel="noreferrer">
                  <ArrowUpRight size={17} /><span>LinkedIn profile</span>
                </a>
              </div>
            </section>
          </aside>
        </div>
      </main>

      <footer className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© 2026 Jur Ruiter · Lighting Designer &amp; Operator</span>
          <a className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary" href="#top">
            Back to top <ArrowDown className="rotate-180" size={15} />
          </a>
        </div>
      </footer>

      {viewerMedia && (
        <div
          className="media-viewer"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded production media"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setViewerMedia(null);
          }}
        >
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="media-viewer-close"
            onClick={() => setViewerMedia(null)}
            aria-label="Close expanded view"
            autoFocus
          >
            <X size={23} />
          </Button>
          <div className="media-viewer-frame">
            {viewerMedia.type === "video" ? (
              <video src={viewerMedia.src} aria-label={viewerMedia.alt} controls autoPlay loop playsInline />
            ) : (
              <img src={viewerMedia.src} alt={viewerMedia.alt} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}