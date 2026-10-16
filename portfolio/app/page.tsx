import { profile, skills, projects, experience, certificates, voices } from "@/lib/data";
import { ThemeToggle, Track, ContactForm } from "./client";

const H = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2 id={id} className="font-display text-3xl font-bold sm:text-4xl">{children}</h2>
);
const Sec = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section aria-labelledby={id} className="mx-auto max-w-5xl px-5 py-16 sm:py-20"><H id={id}>{title}</H><div className="mt-8">{children}</div></section>
);

export default function Home() {
  const links = [["About", "#about"], ["Projects", "#projects"], ["Voice", "#voice"], ["Certificates", "#certs"], ["Contact", "#contact"]];
  return (
    <main>
      <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 text-sm">
          <a href="#top" className="font-display text-lg font-bold">Marya Getu</a>
          <div className="flex items-center gap-5">
            <div className="hidden gap-5 sm:flex">{links.map(([l, h]) => <a key={h} href={h} className="text-muted hover:text-ink">{l}</a>)}</div>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <section id="top" className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-14 sm:py-24 md:grid-cols-[1.2fr_1fr]">
        <div className="hero-in">
          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-7xl">{profile.name}</h1>
          <p className="mt-4 text-xl font-semibold text-accent">{profile.headline}</p>
          <p className="mt-5 max-w-md text-lg text-muted">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/docs/Marya_Getu_Resume.pdf" download className="rounded-full bg-accent px-6 py-3 font-semibold text-white">Download resume</a>
            <a href="/docs/Marya_Getu_Resume.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-line px-6 py-3 font-semibold hover:border-accent">View resume</a>
            <a href="#contact" className="rounded-full border border-line px-6 py-3 font-semibold hover:border-accent">Contact me</a>
          </div>
        </div>
        <div className="hero-in mx-auto w-64 sm:w-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/marya.jpg" alt="Marya Getu" className="aspect-[4/5] w-full rounded-t-[999px] rounded-b-3xl border-4 border-accent object-cover object-top" />
        </div>
      </section>

      <Sec id="about" title="About me">
        <p className="max-w-2xl text-lg">{profile.about}</p>
        <blockquote className="mt-8 max-w-2xl border-l-4 border-accent pl-5 font-display text-xl italic">“{profile.quote}” ❤️🙏</blockquote>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group} className="rounded-2xl border border-line bg-card p-5">
              <h3 className="font-semibold">{s.group}</h3>
              <p className="mt-2 flex flex-wrap gap-2">{s.items.map((i) => <span key={i} className="rounded-full bg-bg px-3 py-1 text-sm text-muted ring-1 ring-line">{i}</span>)}</p>
            </div>
          ))}
        </div>
      </Sec>

      <Sec id="projects" title="Projects">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="flex flex-col rounded-2xl border border-line bg-card p-6">
              <p className="text-sm font-semibold text-accent">{p.tag}</p>
              <h3 className="mt-1 font-display text-xl font-bold">{p.title}</h3>
              <p className="mt-3 flex-1 text-muted">{p.text}</p>
              <p className="mt-4 flex flex-wrap gap-2">{p.stack.map((t) => <span key={t} className="rounded-md bg-bg px-2 py-0.5 text-xs ring-1 ring-line">{t}</span>)}</p>
              {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="mt-4 font-semibold text-accent hover:underline">View code on GitHub</a>}
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

      <Sec id="voice" title="Amharic voice narration">
        <p className="mb-6 max-w-2xl text-muted">I narrate Amharic poems and book-style pieces. Press play to listen.</p>
        <div className="space-y-4">{voices.map((v) => <Track key={v.src} {...v} />)}</div>
      </Sec>

      <Sec id="certs" title="Certificates">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c) => (
            <a key={c.title} href={c.file} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-2xl border border-line bg-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt={`${c.title} certificate`} className="h-44 w-full object-cover object-top" loading="lazy" />
              <div className="p-4">
                <h3 className="font-semibold group-hover:text-accent">{c.title}</h3>
                <p className="text-sm text-muted">{c.org} · {c.date}</p>
                {c.note && <p className="text-sm text-muted">{c.note}</p>}
              </div>
            </a>
          ))}
          <div className="rounded-2xl border border-dashed border-line p-5 text-muted">
            <h3 className="font-semibold text-ink">Data Analytics, ALX</h3><p className="text-sm">In progress</p>
          </div>
        </div>
      </Sec>

      <Sec id="contact" title="Let's work together">
        <div className="grid gap-10 md:grid-cols-2">
          <ContactForm />
          <ul className="space-y-3 text-lg">
            <li><a className="hover:text-accent" href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a className="hover:text-accent" href={`tel:${profile.phone}`}>{profile.phone}</a></li>
            <li><a className="hover:text-accent" href={profile.telegram} target="_blank" rel="noreferrer">Telegram</a></li>
            <li><a className="hover:text-accent" href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a className="hover:text-accent" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </Sec>
      <footer className="border-t border-line py-8 text-center text-sm text-muted">© 2026 Marya Getu</footer>
    </main>
  );
}
