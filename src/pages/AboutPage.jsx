import {
  ArrowUpRight,
  Atom,
  Braces,
  Code2,
  CreditCard,
  Database,
  GitBranch,
  Layers,
  Mail,
  MapPin,
  Palette,
  Phone,
  Quote,
  Server,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHeading from "../components/PageHeading.jsx";
import {
  profile,
  portrait,
  skillGroups,
  technicalSkills,
  testimonials,
} from "../data.js";

const skillIcons = {
  code: Code2,
  palette: Palette,
  braces: Braces,
  atom: Atom,
  server: Server,
  layers: Layers,
  database: Database,
  git: GitBranch,
  "credit-card": CreditCard,
};

const contactPills = [
  { label: "Portfolio", value: "Explore my work", icon: ArrowUpRight, href: "/portfolio" },
  { label: "Phone", value: profile.phone, icon: Phone, href: `tel:${profile.phoneHref}` },
  { label: "Email", value: profile.email, icon: Mail, href: `mailto:${profile.email}` },
  {
    label: "Location",
    value: profile.location,
    icon: MapPin,
    href: "https://maps.google.com/?q=Langata+Nairobi+Kenya",
    external: true,
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <PageHeading
        title="A bit about me"
        description="I bring together practical web skills, multilingual communication, and a people-first approach to digital work."
      />

      <section id="about" className="scroll-mt-24 grid items-center gap-9 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
        <div className="glass-card mx-auto w-full max-w-md rounded-3xl p-3">
          <img
            src={portrait}
            alt="Hassan Byekwaso Onyango"
            className="aspect-[4/5] w-full rounded-[1.25rem] object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            Web · Language · Digital support
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Web Developer &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-200 to-indigo-300 bg-clip-text text-transparent">
              French-English Language Professional
            </span>
          </h2>
          <p className="mt-5 leading-7 text-slate-400">
            I&apos;m a Nairobi-based graduate of Maseno University, where I earned
            a B.A. in French with Information Technology. I also completed web
            design and development training through Finn Church Aid (FCA). My
            experience includes building responsive websites, French-English
            translation and proofreading, and helping customers complete
            everyday digital tasks.
          </p>
          <p className="mt-4 leading-7 text-slate-400">
            I enjoy making digital experiences clear, useful, and accessible —
            whether that means a well-structured website, careful language
            support, or patient ICT assistance.
          </p>
          <p className="mt-4 leading-7 text-slate-400">
            My engineering stack centers on the MERN stack: JavaScript and
            React on the frontend, Node.js and Express on the backend, MongoDB
            for data, and M-Pesa API integration for payment workflows.
          </p>
          <div className="mt-5 rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.05] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Career objective
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              To contribute to useful web products and digital services by
              applying my full-stack engineering skills, practical ICT
              experience, and multilingual communication background.
            </p>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {contactPills.map(({ label, value, icon: Icon, href, external }) => {
              const isInternal = href.startsWith("/");
              const content = (
                <>
                  <Icon size={16} className="shrink-0 text-cyan-200" />
                  <span className="min-w-0">
                    <span className="block text-[11px] text-slate-500">{label}</span>
                    <span className="block truncate text-sm text-slate-200">{value}</span>
                  </span>
                </>
              );

              return isInternal ? (
                <Link
                  key={label}
                  to={href}
                  className="inline-flex min-w-0 items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 transition hover:border-cyan-200/30 hover:bg-white/[0.05]"
                >
                  {content}
                </Link>
              ) : (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="inline-flex min-w-0 items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 transition hover:border-cyan-200/30 hover:bg-white/[0.05]"
                >
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="skills" className="mt-20 scroll-mt-24">
        <div className="mb-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            What I work with
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Skills &amp; interests</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {technicalSkills.map((skill) => {
            const Icon = skillIcons[skill.icon];
            return (
              <article
                key={skill.name}
                className="glass-card rounded-2xl p-5 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-cyan-200/15 bg-cyan-200/[0.07] text-cyan-200">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-slate-400">
                    {skill.category}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-white">{skill.name}</h3>
              </article>
            );
          })}
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="glass-card rounded-2xl p-5">
              <h3 className="font-semibold text-white">{group.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {group.skills.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            Check my testimonials
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            Kind words from people I&apos;ve worked with
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="glass-card flex flex-col rounded-2xl p-6 backdrop-blur-md"
            >
              <Quote size={25} className="text-cyan-200/80" aria-hidden="true" />
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                “{testimonial.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/[0.08] pt-5">
                <img
                  src={testimonial.avatar}
                  alt=""
                  className="size-11 rounded-full border border-white/10 object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-sm font-semibold text-white">{testimonial.name}</h3>
                  <p className="mt-0.5 text-xs text-slate-400">{testimonial.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
