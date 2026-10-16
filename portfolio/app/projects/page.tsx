import { profile, projects } from "@/lib/data";
import { ThemeToggle } from "../client";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Marya Getu",
  description: "All projects by Marya Getu, a Frontend & Full-Stack Developer. Web applications built with React, Next.js, TypeScript, and more.",
};

const H = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2 id={id} className="font-display text-3xl font-bold sm:text-4xl">{children}</h2>
);
const Sec = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section aria-labelledby={id} className="mx-auto max-w-[1200px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 fade-in-up"><H id={id}>{title}</H><div className="mt-8">{children}</div></section>
);

export default function ProjectsPage() {
  const links = [["About", "/#about"], ["Projects", "/#projects"], ["Experience", "/#exp"], ["Voice", "/#voice"], ["Certificates", "/#certs"], ["Contact", "/#contact"]];
  return (
    <main>
      <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur transition-all duration-300">
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3 text-sm sm:px-6 lg:px-8">
          <Link href="/" className="font-display text-lg font-bold hover:scale-105 transition-transform">Marya Getu</Link>
          <div className="flex items-center gap-5">
            <div className="hidden gap-5 sm:flex">{links.map(([l, h]) => <Link key={h} href={h} className="text-muted hover:text-ink transition-colors duration-200">{l}</Link>)}</div>
            <Link href="/#contact" className="hidden sm:block rounded-full bg-accent px-4 py-2 font-semibold text-white hover:bg-amber-600 hover:scale-105 transition-all duration-200">Resume & Inquire</Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-[1200px] px-5 py-14 sm:px-6 sm:py-20 lg:px-8 fade-in-up">
        <Link href="/" className="inline-flex items-center text-sm font-semibold text-accent hover:underline mb-8 transition-colors duration-200">
          ← Back to home
        </Link>
        <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-7xl">All Projects</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">A collection of web applications and projects I've built, from hackathon winners to company projects.</p>
      </section>

      <Sec id="projects" title="">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
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
