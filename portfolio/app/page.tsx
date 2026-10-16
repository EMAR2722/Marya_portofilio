import { profile, skills, projects, experience, certificates, voices } from "@/lib/data";
import { ThemeToggle, Track, ContactForm } from "./client";

const H = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2 id={id} className="font-display text-3xl font-bold sm:text-4xl">{children}</h2>
);
const Sec = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section aria-labelledby={id} className="mx-auto max-w-5xl px-5 py-16 sm:py-20"><H id={id}>{title}</H><div className="mt-8">{children}</div></section>
);

export default function Home() {
  const links = [["About", "#about"], ["Projects", "#projects"], ["Experience", "#exp"], ["Voice", "#voice"], ["Certificates", "#certs"], ["Contact", "#contact"]];
  return (
    <main>
      <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 text-sm">
          <a href="#top" className="font-display text-lg font-bold">Marya Getu</a>
          <div className="flex items-center gap-5">
            <div className="hidden gap-5 sm:flex">{links.map(([l, h]) => <a key={h} href={h} className="text-muted hover:text-ink">{l}</a>)}</div>
            <a href="#contact" className="hidden sm:block rounded-full bg-accent px-4 py-2 font-semibold text-white hover:bg-amber-600">Resume & Inquire</a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <section id="top" className="mx-auto max-w-5xl px-5 py-14 sm:py-24">
        <div className="hero-in">
          {profile.available && <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200">Available for work</span>}
          <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] sm:text-7xl">{profile.name}</h1>
          <p className="mt-4 text-xl font-semibold text-accent">{profile.headline}</p>
          <p className="mt-5 max-w-md text-lg text-muted">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/docs/Marya_Getu_Resume.pdf" download className="rounded-full bg-accent px-6 py-3 font-semibold text-white hover:bg-amber-600">Download resume</a>
            <a href="#certs" className="rounded-full border border-line px-6 py-3 font-semibold hover:border-accent">View certificates</a>
            <a href="#contact" className="rounded-full border border-line px-6 py-3 font-semibold hover:border-accent">Contact me</a>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {profile.stats.map((stat, i) => (
            <div key={i} className="hero-in rounded-2xl border border-line bg-card p-5" style={{ animationDelay: `${i * 0.1}s` }}>
              <p className="font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div className="hero-in" style={{ animationDelay: "0.3s" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/marya.jpg" alt="Marya Getu" className="aspect-[4/5] w-full rounded-t-[999px] rounded-b-3xl border-4 border-accent object-cover object-top" />
          </div>
          <div className="hero-in flex items-end" style={{ animationDelay: "0.4s" }}>
            <div className="rounded-2xl border border-line bg-card p-5 shadow-lg">
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
          {skills.map((s) => (
            <div key={s.group} className="rounded-2xl border border-line bg-card p-5">
              <h3 className="font-semibold">{s.group}</h3>
              <p className="mt-2 flex flex-wrap gap-2">{s.items.map((i) => <span key={i} className="rounded-full bg-bg px-3 py-1 text-sm text-muted ring-1 ring-line">{i}</span>)}</p>
            </div>
          ))}
        </div>
      </Sec>

      <Sec id="projects" title="Featured Projects">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-card">
              <div className="h-48 bg-neutral-100 dark:bg-neutral-800">
                {/* Placeholder for project screenshot */}
                <div className="flex h-full items-center justify-center text-muted">
                  <span className="text-sm">Project screenshot</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-accent">{p.tag}</p>
                <h3 className="mt-1 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-3 flex-1 text-muted">{p.text}</p>
                <p className="mt-4 flex flex-wrap gap-2">{p.stack.map((t) => <span key={t} className="rounded-md bg-bg px-2 py-0.5 text-xs ring-1 ring-line">{t}</span>)}</p>
                {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="mt-4 inline-block font-semibold text-accent hover:underline">View code on GitHub →</a>}
              </div>
            </article>
          ))}
        </div>
      </Sec>

      <Sec id="exp" title="Experience">
        <ol className="space-y-6 border-l-2 border-line pl-6">
          {experience.map((e) => (
            <li key={e.title} className="relative">
              <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-accent" />
              <p className="text-sm font-semibold text-accent">{e.when}</p>
              <h3 className="text-lg font-semibold">{e.title}</h3>
              <p className="text-muted">{e.org}</p>
              <p className="mt-1 max-w-2xl">{e.text}</p>
            </li>
          ))}
        </ol>
      </Sec>

      <section id="voice" aria-labelledby="voice" className="bg-dark-section py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 id="voice" className="font-display text-3xl font-bold text-dark-section-text sm:text-4xl">Amharic Voice Narration</h2>
          <p className="mt-4 max-w-2xl text-dark-section-muted">I narrate Amharic poems and book-style pieces. Press play to listen.</p>
          <div className="mt-8 space-y-4">{voices.map((v) => <Track key={v.src} {...v} dark />)}</div>
        </div>
      </section>

      <Sec id="certs" title="Certificates">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c) => (
            c.img ? (
              <a key={c.title} href={c.file || "#"} target={c.file ? "_blank" : undefined} rel="noreferrer" className="group overflow-hidden rounded-2xl border border-line bg-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={`${c.title} certificate`} className="h-44 w-full object-cover object-top" loading="lazy" />
                <div className="p-4">
                  <h3 className="font-semibold group-hover:text-accent">{c.title}</h3>
                  <p className="text-sm text-muted">{c.org} · {c.date}</p>
                  {c.note && <p className="text-sm text-muted">{c.note}</p>}
                </div>
              </a>
            ) : (
              <div key={c.title} className="rounded-2xl border border-dashed border-line bg-card p-5">
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
              <li><a className="hover:text-accent" href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><a className="hover:text-accent" href={`tel:${profile.phone}`}>{profile.phone}</a></li>
              <li><a className="hover:text-accent" href={profile.telegram} target="_blank" rel="noreferrer">Telegram</a></li>
              <li><a className="hover:text-accent" href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a className="hover:text-accent" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </Sec>

      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        <p className="font-display font-semibold">Marya Getu</p>
        <p className="mt-1">Frontend & Full-Stack Developer · Amharic Voice Narrator</p>
        <div className="mt-3 flex justify-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">LinkedIn</a>
          <a href={profile.telegram} target="_blank" rel="noreferrer" className="hover:text-accent">Telegram</a>
        </div>
        <p className="mt-4">© 2026 Marya Getu</p>
      </footer>
    </main>
  );
}
