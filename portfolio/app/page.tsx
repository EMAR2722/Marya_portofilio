import { profile, skills, projects, experience, certificates, voices } from "@/lib/data";
import { ThemeToggle, Track, CertificateGrid } from "./client";
import Link from "next/link";

const H = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2 id={id} className="font-display text-3xl font-bold sm:text-4xl">{children}</h2>
);
const Sec = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section aria-labelledby={id} className="mx-auto max-w-[1200px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 fade-in-up"><H id={id}>{title}</H><div className="mt-8">{children}</div></section>
);

const featuredProjects = projects.filter(p => p.featured);

export default function Home() {
  const links = [["About", "#about"], ["Projects", "#projects"], ["Experience", "#exp"], ["Voice", "#voice"], ["Certificates", "#certs"], ["Contact", "#contact"]];
  return (
    <main>
      <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur transition-all duration-300">
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3 text-sm sm:px-6 lg:px-8">
          <a href="#top" className="font-display text-lg font-bold hover:scale-105 transition-transform">Marya Getu</a>
          <div className="flex items-center gap-5">
            <div className="hidden gap-5 sm:flex">{links.map(([l, h]) => <a key={h} href={h} className="text-muted hover:text-ink transition-colors duration-200">{l}</a>)}</div>
            <a href="#contact" className="hidden sm:block rounded-full bg-accent px-4 py-2 font-semibold text-white hover:bg-amber-600 hover:scale-105 transition-all duration-200">Resume & Inquire</a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <section id="top" className="mx-auto max-w-[1200px] px-5 py-14 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="hero-in">
            {profile.available && <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200 animate-pulse-subtle">Available for work</span>}
            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] sm:text-7xl">{profile.name}</h1>
            <p className="mt-4 text-xl font-semibold text-accent">{profile.headline}</p>
            <p className="mt-5 max-w-md text-lg text-muted">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/docs/Marya_Getu_Resume.pdf" download className="rounded-full bg-accent px-6 py-3 font-semibold text-white hover:bg-amber-600 hover:scale-105 transition-all duration-200">Download resume</a>
              <a href="#certs" className="rounded-full border border-line px-6 py-3 font-semibold hover:border-accent hover:scale-105 transition-all duration-200">View certificates</a>
              <a href="#contact" className="rounded-full border border-line px-6 py-3 font-semibold hover:border-accent hover:scale-105 transition-all duration-200">Contact me</a>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {profile.stats.map((stat, i) => (
                <div key={i} className="hero-in rounded-2xl border border-line bg-card p-5 hover-lift" style={{ animationDelay: `${i * 0.1}s` }}>
                  <p className="font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-in flex flex-col items-center lg:items-end" style={{ animationDelay: "0.3s" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/marya.jpg" alt="Marya Getu" className="aspect-[4/5] w-full max-w-sm rounded-t-[999px] rounded-b-3xl border-4 border-accent object-cover object-top float hover-lift" />
            <div className="mt-4 rounded-2xl border border-line bg-card p-5 shadow-lg hover-lift">
              <p className="font-display text-lg font-semibold">Marya Getu</p>
              <p className="text-sm text-muted">Frontend & Full-Stack Developer</p>
            </div>
          </div>
        </div>
      </section>

      <Sec id="about" title="About">
        <p className="max-w-2xl text-lg">{profile.about}</p>
        <blockquote className="mt-8 max-w-2xl border-l-4 border-accent pl-5 font-display text-xl italic">"{profile.quote}" ❤️🙏</blockquote>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {skills.map((s, i) => (
            <div key={s.group} className="rounded-2xl border border-line bg-card p-5 hover-lift" style={{ animationDelay: `${i * 0.1}s` }}>
              <h3 className="font-semibold">{s.group}</h3>
              <p className="mt-2 flex flex-wrap gap-2">{s.items.map((i) => <span key={i} className="rounded-full bg-bg px-3 py-1 text-sm text-muted ring-1 ring-line hover:bg-accent hover:text-white transition-colors duration-200 cursor-default">{i}</span>)}</p>
            </div>
          ))}
        </div>
      </Sec>

      <Sec id="projects" title="Featured Projects">
        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <article key={p.title} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-card h-full hover-lift" style={{ animationDelay: `${i * 0.1}s` }}>
              {p.img && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.img} alt={`${p.title} screenshot`} className="h-48 w-full object-cover object-top shrink-0 hover-scale" loading="lazy" />
              )}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm font-semibold text-accent">{p.tag}</p>
                <h3 className="mt-1 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-3 flex-1 text-muted">{p.text}</p>
                <p className="mt-4 flex flex-wrap gap-2">{p.stack.map((t) => <span key={t} className="rounded-md bg-bg px-2 py-0.5 text-xs ring-1 ring-line">{t}</span>)}</p>
                {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="mt-4 inline-block font-semibold text-accent hover:underline hover:glow transition-all duration-200">View code on GitHub →</a>}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/projects" className="inline-flex items-center rounded-full border-2 border-accent px-6 py-3 font-semibold text-accent hover:bg-accent hover:text-white hover:scale-105 transition-all duration-200">
            View all projects ({projects.length})
          </Link>
        </div>
      </Sec>

      <Sec id="exp" title="Experience">
        <ol className="space-y-6 border-l-2 border-line pl-6">
          {experience.map((e, i) => (
            <li key={e.title} className="relative fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="absolute -left-[29px] top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent hover:scale-125 transition-transform duration-200" />
              <p className="text-sm font-semibold text-accent">{e.when}</p>
              <h3 className="text-lg font-semibold">{e.title}</h3>
              <p className="text-muted">{e.org}</p>
              <p className="mt-1 max-w-2xl">{e.text}</p>
            </li>
          ))}
        </ol>
      </Sec>

      <section id="voice" aria-labelledby="voice" className="bg-dark-section py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <h2 id="voice" className="font-display text-3xl font-bold text-dark-section-text sm:text-4xl">Amharic Voice Narration</h2>
          <p className="mt-4 max-w-2xl text-dark-section-muted">I narrate Amharic poems and book-style pieces. Press play to listen.</p>
          <div className="mt-8 space-y-4">{voices.map((v, i) => <Track key={v.src} {...v} dark style={{ animationDelay: `${i * 0.1}s` }} />)}</div>
        </div>
      </section>

      <Sec id="certs" title="Certificates">
        <CertificateGrid certificates={certificates} />
      </Sec>

      <Sec id="contact" title="Contact">
        <div className="max-w-2xl">
          <h3 className="font-display text-xl font-semibold">Get in touch</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <a className="flex items-center gap-3 text-lg hover:text-accent transition-colors duration-200" href={`mailto:${profile.email}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{profile.email}</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 text-lg hover:text-accent transition-colors duration-200" href={`tel:${profile.phone}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{profile.phone}</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 text-lg hover:text-accent transition-colors duration-200" href={profile.telegram} target="_blank" rel="noreferrer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
                <span>Telegram</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 text-lg hover:text-accent transition-colors duration-200" href={profile.github} target="_blank" rel="noreferrer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 text-lg hover:text-accent transition-colors duration-200" href={profile.linkedin} target="_blank" rel="noreferrer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </Sec>

      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        <p className="font-display font-semibold">Marya Getu</p>
        <p className="mt-1">Frontend & Full-Stack Developer · Amharic Voice Narrator</p>
        <div className="mt-3 flex justify-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent hover:scale-110 transition-all duration-200">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent hover:scale-110 transition-all duration-200">LinkedIn</a>
          <a href={profile.telegram} target="_blank" rel="noreferrer" className="hover:text-accent hover:scale-110 transition-all duration-200">Telegram</a>
        </div>
        <p className="mt-4">© 2026 Marya Getu</p>
      </footer>
    </main>
  );
}
