import { profile, skills, projects, experience, certificates, voices } from "@/lib/data";
import { ThemeToggle, Track, ContactForm } from "./client";
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
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c, i) => (
            c.img ? (
              <a key={c.title} href={c.file || "#"} target={c.file ? "_blank" : undefined} rel="noreferrer" className="group overflow-hidden rounded-2xl border border-line bg-card hover-lift" style={{ animationDelay: `${i * 0.1}s` }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={`${c.title} certificate`} className="h-44 w-full object-cover object-top group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="p-4">
                  <h3 className="font-semibold group-hover:text-accent transition-colors duration-200">{c.title}</h3>
                  <p className="text-sm text-muted">{c.org} · {c.date}</p>
                  {c.note && <p className="text-sm text-muted">{c.note}</p>}
                </div>
              </a>
            ) : (
              <div key={c.title} className="rounded-2xl border border-dashed border-line bg-card p-5 hover-lift" style={{ animationDelay: `${i * 0.1}s` }}>
                <h3 className="font-semibold">{c.title}</h3>
                <p className="text-sm text-muted">{c.org} · {c.date}</p>
              </div>
            )
          ))}
        </div>
      </Sec>

      <Sec id="contact" title="Contact">
        <div className="grid gap-10 md:grid-cols-2">
          <ContactForm />
          <div>
            <h3 className="font-display text-xl font-semibold">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-lg">
              <li><a className="hover:text-accent hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded transition-all duration-200" href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><a className="hover:text-accent hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded transition-all duration-200" href={`tel:${profile.phone}`}>{profile.phone}</a></li>
              <li><a className="hover:text-accent hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded transition-all duration-200" href={profile.telegram} target="_blank" rel="noreferrer">Telegram</a></li>
              <li><a className="hover:text-accent hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded transition-all duration-200" href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a className="hover:text-accent hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded transition-all duration-200" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
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
