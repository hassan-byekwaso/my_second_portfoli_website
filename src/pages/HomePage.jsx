import {
  ArrowDown,
  ArrowRight,
  Code2,
  Languages,
  Laptop,
  MapPin,
  Palette,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { profile, projects, services, portrait } from "../data.js";
import ProjectCard from "../components/ProjectCard.jsx";

const serviceIcons = [Code2, Languages, Palette];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:pb-28">
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-cyan-300/[0.08] blur-3xl" />
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-3">
            <img
              src={portrait}
              alt="Hassan Byekwaso Onyango"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center"
              fetchpriority="high"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-950/75 p-4 backdrop-blur-lg">
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <MapPin size={15} className="text-cyan-200" />
                Nairobi, Kenya
              </div>
              <p className="mt-1 text-xs text-slate-400">Available for meaningful projects</p>
            </div>
          </div>
          <div className="absolute -right-3 -top-4 flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/90 px-4 py-2 text-xs font-medium text-slate-200 shadow-xl sm:-right-6">
            <Sparkles size={14} className="text-cyan-200" />
            Web · Design · Languages
          </div>
        </div>

        <div>
          <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            <span className="size-2 rounded-full bg-cyan-300" />
            Digital craft with a human touch
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hassan Byekwaso Onyango
            <span className="mt-3 block bg-gradient-to-r from-cyan-200 via-sky-300 to-indigo-300 bg-clip-text text-3xl leading-tight text-transparent sm:text-4xl lg:text-[2.65rem]">
              Full-Stack Developer, Digital Designer &amp; Language Professional
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            I build responsive digital experiences and help people communicate
            across French and English. My work brings together web development,
            thoughtful design, and practical digital support.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Explore projects <ArrowRight size={17} />
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-200/50 hover:bg-white/[0.04]"
            >
              Get in touch
            </Link>
          </div>
          <a
            href="#overview"
            className="mt-10 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-200"
          >
            A little more about me <ArrowDown size={15} />
          </a>
        </div>
      </section>

      <section id="overview" className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-20 sm:px-8">
        <div className="glass-card grid gap-8 rounded-3xl p-6 sm:p-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              A multidisciplinary foundation
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Technology, language, and everyday digital problem-solving.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              I hold a B.A. in French with Information Technology from Maseno
              University and completed web design and development training
              through Finn Church Aid (FCA). Alongside my web projects and
              language experience, I bring approximately four years of cyber
              café and digital services experience.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
              <p className="text-xs text-slate-500">Education</p>
              <p className="mt-2 font-medium text-slate-100">B.A. French with IT</p>
              <p className="mt-1 text-sm text-slate-400">Maseno University · 2020–2024</p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
              <p className="text-xs text-slate-500">Professional training</p>
              <p className="mt-2 font-medium text-slate-100">Web Design &amp; Development</p>
              <p className="mt-1 text-sm text-slate-400">Finn Church Aid · 2025</p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 sm:col-span-2">
              <p className="text-xs text-slate-500">Language placement</p>
              <p className="mt-2 font-medium text-slate-100">Language Connections Centre</p>
              <p className="mt-1 text-sm text-slate-400">
                French-English translation and language support · May–July 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
              How I can help
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Featured services</h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-cyan-200"
          >
            View all services <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {services.slice(0, 3).map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <article key={service.title} className="glass-card rounded-2xl p-6">
                <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl border border-cyan-200/15 bg-cyan-200/[0.07] text-cyan-200">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{service.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
              Selected work
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">A few recent projects</h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-cyan-200"
          >
            Browse portfolio <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-200/15 bg-gradient-to-br from-cyan-300/[0.12] via-slate-900/80 to-indigo-400/[0.08] p-7 sm:p-10 lg:p-12">
          <div className="absolute -right-16 -top-24 size-72 rounded-full bg-cyan-300/[0.08] blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                Have something in mind?
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Let&apos;s make your next idea useful and real.
              </h2>
              <p className="mt-3 max-w-2xl text-slate-400">
                Tell me about your web, translation, design, or digital support needs.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Start a conversation <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
